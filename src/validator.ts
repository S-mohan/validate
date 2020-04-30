import { Validator, ValidatorOptions, ValidatorBuiltInRules, ValidatorRuleObject, ValidatorBuiltInRegexRules, ValidatorErrorResult, ValidatorObject } from '../validator'
import { isPlainObject, isEmpty, isString, isArray, isNumber, isInteger, isSafeInteger, isFloat, isBoolean, isTrue, isFalse, isFunction, isUndefined, isPrimitive, isRegexp, isNull, isObject } from './is'
import defaultLocales from './locale/en'
import { getObjectValue, hasKey, hasOwn, getLen, ucfirst } from './utils'
import BuiltInRules from './rules'

// 默认配置
const defaults: ValidatorOptions = {
  mode: 'single'
}

const REQUIRED_KEY = 'required'

const NOT_EMPTY_KEY = 'notEmpty'

// 内置规则
const BUILT_IN_RULES: Array<ValidatorBuiltInRules> = ['objectId', 'email', 'alpha', 'alphaNum', 'alphaDash', 'chs', 'chsAlpha', 'chsAlphaNum', 'chsDash', 'url', 'date', 'array', 'string', 'number', 'integer', 'safeInteger', 'float', 'boolean', 'trueValue', 'falseValue', 'required', 'notEmpty', 'in', 'between', 'minimum', 'maximum', 'length', 'minLength', 'maxLength']


/**
 * 格式化规则
 * @param ruleInfo 
 */
const formatRule = (ruleInfo: any): ValidatorRuleObject => {
  let message
  let format
  if (isString(ruleInfo)) {
    message = ruleInfo as string
    format = true
  } else if (isPlainObject(ruleInfo)) {
    message = ruleInfo.message
    format = ruleInfo.format
  } else {
    format = ruleInfo
  }

  format = isNull(format) || isUndefined(format) ? true : format

  return {
    format,
    message
  }
}


/**
 * 内置规则校验
 * @param ruleKey 
 * @param format 
 * @param value 
 */
const validatorForBuiltInRules = (ruleKey: ValidatorBuiltInRules, format: any, value: any): boolean => {
  format = isFunction(format) ? format.call(validator, value) : format
  let length: number
  switch (ruleKey) {
    case 'array':
      return isArray(value)
    case 'string':
      return isString(value)
    case 'number':
      return isNumber(value)
    case 'integer':
      return isInteger(value)
    case 'safeInteger':
      return isSafeInteger(value)
    case 'float':
      return isFloat(value)
    case 'boolean':
      return isBoolean(value)
    case 'trueValue':
      return isTrue(value)
    case 'falseValue':
      return isFalse(value)
    case 'in':
      if (isArray(format)) {
        return format.includes(value)
      }
      break
    case 'between':
      if (isNumber(value) && !isUndefined(format.minimum) && !isUndefined(format.maximum)) {
        const minimum = +format.minimum
        const maximum = +format.maximum
        value = +value
        return value >= minimum && value <= maximum
      }
      break
    case 'minimum':
      if (isNumber(value) && isNumber(format)) {
        return +value >= +format
      }
      break
    case 'maximum':
      if (isNumber(value) && isNumber(format)) {
        return +value <= +format
      }
      break
    case 'length':
      length = getLen(value)
      if (isNumber(length) && isNumber(format)) {
        return length === +format
      }
      break
    case 'minLength':
      length = getLen(value)
      if (isNumber(length) && isNumber(format)) {
        return length >= +format
      }
      break
    case 'maxLength':
      length = getLen(value)
      if (isNumber(length) && isNumber(format)) {
        return length <= +format
      }
      break
    default:
      format = BuiltInRules[ruleKey as ValidatorBuiltInRegexRules]
      return format.test(value)
  }

  return true
}


/**
 * 自定义规则校验
 * @param ruleKey 
 * @param format 
 * @param value 
 */
const validatorForCustomRules = (format: any, value: any): boolean => {

  if (isFunction(format)) {
    return !!format.call(null, value)
  }

  if (isPrimitive(format)) {
    return format === value
  }

  if (isArray(format)) {
    return format.includes(value)
  }

  if (isRegexp(format)) {
    return format.test(value)
  }

  return true
}

const MSG_TPL_REG = /{\$(\w+)}/gm


/**
 * 解析错误信息
 * @param message 
 * @param defaultMessage 
 * @param replacement 
 */
const parseMessage = (message: any, defaultMessage: string, replacement: ValidatorObject): string => {
  message = isString(message) ? message : defaultMessage
  if (!message) {
    message = `{$field} is not match {$format}`
  }
  message = message.replace(MSG_TPL_REG, (a: string, f: string) => {
    if (replacement[f] !== void 0) {
      return replacement[f]
    }
    return a
  })

  return message
}


/**
 * 校验器
 * @param source 
 * @param constraints 
 * @param options 
 */
export const validator: Validator = (source, constraints, options = {}) => {
  const props: ValidatorOptions = (Object as any).assign({}, defaults, options)
  const locale = isPlainObject(props.locale) ? props.locale : defaultLocales

  if (!source || !constraints || !isPlainObject(source) || !isPlainObject(constraints)) {
    return false
  }

  const errorResult: ValidatorErrorResult = Object.create(null)

  for (let field in constraints) {

    // 步进模式下，一旦遇到错误就返回
    if (props.mode === 'step' && Object.keys(errorResult).length) {
      break
    }

    const rules = constraints[field]
    const fieldInSource = hasKey(field, source)
    const value = fieldInSource ? getObjectValue(field, source) : void 0
    let hasRequiredKey = hasOwn(REQUIRED_KEY, rules)
    const hasNotEmptyKey = hasOwn(NOT_EMPTY_KEY, rules)


    if (hasNotEmptyKey && !hasRequiredKey) {
      hasRequiredKey = true
    }


    // 1. 存在性校验
    if (!fieldInSource) {
      if (hasRequiredKey) {
        const { format, message } = formatRule(rules[REQUIRED_KEY])
        errorResult[field] = [parseMessage(message, locale[REQUIRED_KEY], {
          field,
          format
        })]
      }
      // 字段不存在的话，其他判断可以忽略
      continue
    }

    const errors: Array<string> = errorResult[field] = []
    // 2. 空值校验
    if (isEmpty(value)) {
      if (hasNotEmptyKey) {
        const { format, message } = formatRule(rules[NOT_EMPTY_KEY])
        errors.push(parseMessage(message, locale[NOT_EMPTY_KEY], {
          field,
          format
        }))
        if (props.mode !== 'all') {
          continue
        }
      }
    }

    // 3. 其他规则校验
    // 保持定义时的顺序
    const ruleKeys = Object.keys(rules).filter(rule => rule !== REQUIRED_KEY && rule !== NOT_EMPTY_KEY)

    let result = true
    for (let i = 0, len = ruleKeys.length; i < len; i++) {
      const ruleKey = ruleKeys[i]
      const { format, message } = formatRule(rules[ruleKey])
      if (format === false) {
        continue
      }
      const isBuiltInRule = BUILT_IN_RULES.includes(ruleKey as ValidatorBuiltInRules)
      result = isBuiltInRule ? validatorForBuiltInRules(ruleKey as ValidatorBuiltInRules, format, value) : validatorForCustomRules(format, value)

      if (result === false) {
        let minimum
        let maximum
        if (isPlainObject(format)) {
          minimum = format.minimum
          maximum = format.minimum
        }
        errors.push(parseMessage(message, locale[ruleKey], {
          field,
          format,
          minimum,
          maximum
        }))
        if (props.mode !== 'all') {
          continue
        }
      }
    }

    if (errors.length === 0) {
      delete errorResult[field]
    }

  }

  return Object.keys(errorResult).length ? errorResult : false
}

validator.version = '__VERSION__'

validator.getObjectValue = getObjectValue
validator.ucfirst = ucfirst
validator.isRegexp = isRegexp
validator.isString = isString
validator.isNull = isNull
validator.isEmpty = isEmpty
validator.isObject = isObject
validator.isPlainObject = isPlainObject
validator.isArray = isArray
validator.isPrimitive = isPrimitive
validator.isFunction = isFunction
validator.isNumber = isNumber
validator.isInteger = isInteger
validator.isFloat = isFloat
validator.isSafeInteger = isSafeInteger
validator.isTrue = isTrue
validator.isFalse = isFalse
validator.isBoolean = isBoolean
validator.isNaN = isNaN
validator.isEmail = value => BuiltInRules.email.test(value)
validator.isObjectId = value => BuiltInRules.objectId.test(value)
validator.isUrl = value => BuiltInRules.url.test(value)
validator.isDate = value => BuiltInRules.date.test(value)


export default validator