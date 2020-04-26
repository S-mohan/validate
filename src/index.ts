import { isPlainObject, isUndefined, isEmpty, isString, isNumber, isInteger, isSafeInteger, isFloat, isBoolean, isTrue, isFalse, isArray, isFunction, isRegexp } from './is'
import { getObjectValue, hasOwn, hasKey, getLen } from './utils'
import BuiltInRules from './rules'
import defaultLocales from './locale/en'

interface ValidatorObject {
  [propName: string]: any
}

interface ValidatorConstraints extends ValidatorObject {}

interface ValidatorOptions {
  // all: 校验全部字段的全部规则，返回所有规则错误
  // step: 每个字段逐条校验，只返回最近的错误的字段
  // single: 校验全部字段，但是只返回每个字段的第一条规则错误
  mode?: 'all' | 'step' | 'single'
  // 本地化内置语言包
  locale?: ValidatorObject
}

interface ValidatorErrorsResult {
  [propName: string]: Array<string>
}


type ValidatorResult = false | string | ValidatorErrorsResult

interface ValidatorRuleValueObject {
  format: any
  message?: string,
  replacer?: Function
}

type ValidatorRuleValue = string | ValidatorRuleValueObject

type ValidatorBuiltInRegexRules = 'objectId' | 'email' | 'alpha' | 'alphaNum' | 'alphaDash' | 'chs' | 'chsAlpha' | 'chsAlphaNum' | 'chsDash' | 'url' | 'date'

// 内置规则
type ValidatorBuiltInRules = ValidatorBuiltInRegexRules | 'array' | 'string' | 'number' | 'integer' | 'safeInteger' | 'float' | 'boolean' | 'trueValue' | 'falseValue' | 'required' | 'notEmpty' | 'in' | 'between' | 'minimum' | 'maximum' | 'length' | 'minLength' | 'maxLength'


// 内置规则
const builtInRules: Array<ValidatorBuiltInRules> = ['objectId', 'email', 'alpha', 'alphaNum', 'alphaDash', 'chs', 'chsAlpha', 'chsAlphaNum', 'chsDash', 'url', 'date', 'array', 'string', 'number', 'integer', 'safeInteger', 'float', 'boolean', 'trueValue', 'falseValue', 'required', 'notEmpty', 'in', 'between', 'minimum', 'maximum', 'length', 'minLength', 'maxLength']


// 默认配置
const defaults: ValidatorOptions = {
  mode: 'single'
}


const checkBuiltInRules = (ruleName: ValidatorBuiltInRules, value: any, ruleValue?: ValidatorRuleValue): boolean => {
  const ruleValueObject = ruleValue as ValidatorRuleValueObject
  let formatter
  if (isPlainObject(ruleValueObject) && ruleValueObject.format) {
    formatter = isFunction(ruleValueObject.format) ? ruleValueObject.format() : ruleValueObject.format
  }

  let length: number
  switch (ruleName) {
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
      if (isArray(formatter)) {
        return formatter.includes(value)
      }
      break
    case 'between':
      if (formatter && isNumber(value) && !isUndefined(formatter.minimum) && !isUndefined(formatter.maximum)) {
        const minimum = +formatter.minimum
        const maximum = +formatter.maximum
        value = +value
        return value >= minimum && value <= maximum
      }
      break
    case 'minimum':
      if (isNumber(value) && isNumber(formatter)) {
        return +value >= +formatter
      }
      break
    case 'maximum':
      if (isNumber(value) && isNumber(formatter)) {
        return +value <= +formatter
      }
      break
    case 'length':
      length = getLen(value)
      if (isNumber(length) && isNumber(formatter)) {
        return length === +formatter
      }
      break
    case 'minLength':
      length = getLen(value)
      if (isNumber(length) && isNumber(formatter)) {
        return length >= +formatter
      }
      break
    case 'maxLength':
      length = getLen(value)
      if (isNumber(length) && isNumber(formatter)) {
        return length <= +formatter
      }
      break
    default:
      formatter = BuiltInRules[ruleName as ValidatorBuiltInRegexRules]
      return formatter.test(value)
  }

  return true
}


//消息模板
const MSG_TPL_REG = /{\$(\w+)}/g

const formatMessage = (field:string, message?:string, replacer?:ValidatorObject):string => {
  if (!isPlainObject(replacer)) {
    replacer = {}
  }
  replacer.field = field
  return message.replace(MSG_TPL_REG, (a, f) => {
    if (replacer[f] !== void 0) {
      return replacer[f]
    }
    return a
  })
}

const getMessage = (ruleValue:ValidatorRuleValue, ruleName?:string, locale?: ValidatorObject):string => {
  
  let message = ruleValue
  if (isPlainObject(ruleValue) && (ruleValue as ValidatorRuleValueObject).message) {
    message = (ruleValue as ValidatorRuleValueObject).message
  }
  if (isString(message)) {
    return message as string
  }
  return locale[ruleName] as string
}

export const validator = (data: ValidatorObject, constraints: ValidatorConstraints, options?: ValidatorOptions): ValidatorResult => {
  const props: ValidatorOptions = (Object as any).assign({}, defaults, options)
  const locale = isPlainObject(props.locale) ? props.locale : defaultLocales

  if (!data || !constraints || !isPlainObject(data) || !isPlainObject(constraints)) {
    return false
  }


  const result: ValidatorErrorsResult = Object.create(null)

  for (let field in constraints) {
    const rules: ValidatorConstraints = constraints[field]
    const value: any = getObjectValue(field, data)
    if (!isPlainObject(rules)) {
      continue
    }
    
    // 步进模式下，一旦遇到错误就返回
    if (props.mode === 'step' && Object.keys(result).length) {
      return result
    }

    const fieldResult: Array<string> = []
    result[field] = fieldResult
    const fieldInData = hasKey(field, data)
    const fieldIsEmpty = isEmpty(value)
    
    // 1. 字段不存在
    if (!fieldInData) {
      if (hasOwn('required', rules)) {
        fieldResult.push(formatMessage(field, getMessage(rules.required, 'required', locale)))
      }
      continue
    }

    // 2. 空值校验
    if (hasOwn('notEmpty', rules) && fieldIsEmpty) {
      fieldResult.push(formatMessage(field, getMessage(rules.notEmpty, 'notEmpty', locale)))
      continue
    }

    for (let rule in rules) {
      if (rule === 'required' || rule === 'notEmpty') {
        continue
      }
      let res = true
      // 3. 内置规则校验
      if (builtInRules.includes(rule as ValidatorBuiltInRules)) {
        res = checkBuiltInRules(rule as ValidatorBuiltInRules, value, rules[rule])
      } else {
        // 4. 非内置规则
        const ruleValueObject = rules[rule]
        let formatter
        if (isPlainObject(ruleValueObject) && ruleValueObject.format) {
          formatter = ruleValueObject.format
        }
        if (isRegexp(formatter)) {
          res = formatter.test(value)
        } else if (isFunction(formatter)) {
          res = formatter(value)
        } else {
          res = formatter === value
        }
      }
      if (res === false) {
        const replacer = Object.create(null)
        if (isPlainObject(rules[rule])) {
          const ruleValueObject = rules[rule]
          replacer.min = ruleValueObject.minimum
          replacer.max = ruleValueObject.maximum
          replacer.rule = ruleValueObject.format
        }
        fieldResult.push(formatMessage(field, getMessage(rules[rule], rule, locale), replacer))
        if (props.mode !== 'all') {
          continue
        }
      }
    }
  }

  return result
}

// 版本标识
validator.version = '__VERSION__'

export default validator