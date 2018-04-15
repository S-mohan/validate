import _ from './utils'
import M from './messages'
import R from './rules'

//内置规则
const BUILT_IN_RULES = ['objectId', 'email', 'alpha', 'alphaNum', 'alphaDash', 'chs', 'chsAlpha', 'chsAlphaNum', 'chsDash', 'url', 'date', 'array', 'string', 'number', 'integer', 'float', 'boolean', 'true', 'false', 'require', 'empty', 'in', 'between', 'min', 'max', 'length', 'minLength', 'maxLength']

//缓存hasOwnProperty
const hasOwnProperty = Object.prototype.hasOwnProperty

interface Property {
  [propName: string]: any
}

interface Result {
  status: boolean,
  msg?: string,
  [propName: string]: any
}


/**
 * 属性检测
 * @param name 
 * @param obj 
 * @returns {Boolean}
 */
const hasOwn = (name: string, obj: Property): boolean => hasOwnProperty.call(obj, name)


/**
 * 获取长度
 * @param value
 * @returns {Number} 
 */
const getLen = (value: any): number => {
  if (_.isArray(value))
    return value.length

  return _.isString(value) ? (value.trim()).length : 0
}


/**
 * 根据path路径从object中取值
 * eg.
 * let obj = {
 *  a : {
 *    b : {
 *      c : 1
 *    }
 *  },
 *  d : [{c : 2}] 
 * }
 * getObjectValue('a.b.c', obj) => 1
 * getObjectValue('a.d.0.c', obj) => 2
 * getObjectValue('a.d.0', obj) => {c: 2}
 * 
 * @param name 
 * @param object 
 * @returns {Any}
 */
const getObjectValue = (name: string, object: Property): any => {
  if (_.isEmpty(name))
    return void 0

  let paths: any[] = name.split('.')

  while (paths.length) {
    let k: string = paths.shift()
    object = object[k]
    if (!_.isPlainObject(object) && !_.isArray(object)) {
      break
    }
  }

  return object
}


//消息模板
const MSG_TPL_REG: RegExp = /{\$(\w+)}/g

/**
 * 获取信息
 * @param {String} msg 
 * @param {String} rule 
 * @param {Any} replace
 * @returns {String} 
 */
const getMsg = (msg: string, rule: string, replace?: any): string => msg || (M[rule] ? M[rule].replace(MSG_TPL_REG, (a: string, f: string) => {
  if (replace && replace[f] !== void 0) {
    return replace[f]
  }
  return f
}) : '')


class Validator {

  static version: string = '__VERSION__'

  /**
   * 验证是否是预期规则的值
   * 
   * 内置方法
   * Validate.is('number', 0)
   * Validate.is('in', 1, [1,2,3])
   * Validate.is('between', 3, {min:1, max:4})
   * Validate.is('empty', [])
   * Validate.is('empty', 'smohan')
   * 
   * 内置正则规则
   * Validate.is('email', 'smohan@163.com')
   * Validate.is('objectId', '5aca29dfc62051368fc1d00a')
   * 
   * 自定义规则
   * 1.使用正则
   * Validate.is('nick', 'smohan', /^(\w){2,10}$/) 
   * 2.函数返回值
   * Validate.is('unique', 'smohan', function(value){ return true })
   * 
   * @param name 规则名称
   * @param value 值
   * @param rule [可选] 具体规则
   * @returns {Boolean}
   * 
   */
  static is(name: string, value: any, rule?: any): boolean {
    if (!_.isString(name) || _.isEmpty(name)) {
      throw TypeError('[VALIDATE ERROR]: The parameter name must be a string')
    }

    let result: boolean = false

    if (!!~BUILT_IN_RULES.indexOf(name)) {
      switch (name) {
        case 'empty':
          result = _.isEmpty(value)
          break
        case 'require':
          result = !_.isEmpty(value)
          break
        case 'string':
          result = _.isString(value)
          break
        case 'array':
          result = _.isArray(value)
          break
        case 'number':
          result = _.isNumber(value)
          break
        case 'integer':
          result = _.isInteger(value)
          break
        case 'float':
          result = _.isFloat(value)
          break
        case 'boolean':
          result = _.isBoolean(value)
          break
        case 'true':
          result = _.isTrue(value)
          break
        case 'false':
          result = _.isFalse(value)
          break
        case 'in':
          if (_.isPrimitive(rule))
            rule = [rule]
          if (_.isArray(rule)) {
            //如果是数字，将类似于 '1' in [1]匹配到
            let _value: number = Number(value)
            value = _.isNaN(_value) ? value : _value
            result = !!~rule.indexOf(value)
          }
          break
        case 'between':
          if (_.isPlainObject(rule) && _.isNumber(rule.min) && _.isNumber(rule.max))
            result = (value - rule.min) >= 0 && (value - rule.max) <= 0
          break
        case 'min':
          if (_.isNumber(rule))
            result = value - rule >= 0
          break
        case 'max':
          if (_.isNumber(rule))
            result = value - rule <= 0
          break
        case 'minLength':
          if (_.isNumber(rule))
            result = getLen(value) - rule >= 0
          break
        case 'maxLength':
          if (_.isNumber(rule))
            result = getLen(value) - rule <= 0
          break
        case 'length':
          if (_.isNumber(rule) && value !== null && value !== void 0)
            result = getLen(value) > rule
          break
        default:
          //使用预定义的正则表达式
          result = R[name] ? _.regex(R[name], value) : false
      }
    } else if (rule !== void 0) {
      result = _.isRegexp(rule) ?
        _.regex(rule, value)
        : (_.isFunction(rule) ? !!(rule(value)) : false)
    }

    return result
  }


  /**
   * 
   * 检查插入对象是否和传入规则匹配
   * 
   * eg.
   * {
   *    email : {
   *      require : 'email is required',
   *      email : 'invalid email',
   *    },
   *    
   *    age: {
   *       require : 'age is required',
   *       integer : 'age must be an integer',
   *       between : {
   *         min : 20,
   *         max : 30,
   *         msg : 'age must be between 20-30 years old'
   *       }, 
   *    },
   * 
   *    gender : {
   *      in : {
   *        rule : ['male', 'female'],
   *        msg : 'gender can only be male or female'
   *      }
   *    },
   * 
   *     nick : {
   *       require : 'email is required',
   *       nick : {
   *         rule : /^(\w){2,20}$/,
   *         msg : 'nickname between 2-20 characters'
   *       }
   *     }
   * }
   * 
   * 
   * @param rules 规则
   * @param data 待验证数据包
   * @param exitImmediately 是否遇到错误就立即退出
   * 1. exitImmediately = true: 一旦遇到校验失败就立即返回失败信息
   * 2. exitImmediately = false: 待全部规则校验完毕才返回
   */
  static check(rules: Property, data: Property, exitImmediately?: boolean): Result {
    if (!_.isPlainObject(rules) || !_.isPlainObject(data)) {
      throw TypeError('[VALIDATE ERROR]: The parameter rules or data  must be an object')
    }

    let field: string,
      ruleMap: Property,
      value: any,
      res: Result = {
        status: true,
        fields: Object.create(null)
      }

    for (field in rules) {
      if (!hasOwnProperty.call(rules, field))
        continue
      ruleMap = rules[field]
      if (!_.isPlainObject(ruleMap))
        continue

      value = getObjectValue(field, data)

      let rule: any, ruleName: string, msg: string

      //优先处理 require
      if ( hasOwn('require', ruleMap) && _.isEmpty(value) ) {
        msg = getMsg(_.isString(ruleMap['require']) ? ruleMap['require'] : '', 'require', { field })
        res.status = false
        res.fields[field] = msg
        if (exitImmediately) {
          res.msg = msg
          break
        } else {
          continue
        }
      }

      if (_.isEmpty(value))
        continue

      for (ruleName in ruleMap) {
        //排除 require|array|notEmpty
        if (ruleName === 'require')
          continue

        rule = ruleMap[ruleName]
        //统一将rule处理为object
        if (!rule || !_.isPlainObject(rule)) {
          rule = {
            msg: _.isString(rule) ? rule : ''
          }
        }

        if (ruleName === 'between') {
          rule.rule = {
            min: rule.min,
            max: rule.max
          }
        }

        if (!Validator.is(ruleName, value, rule.rule)) {
          msg = getMsg(rule.msg, ruleName, {
            field,
            rule: rule.rule,
            min: rule.min,
            max: rule.max
          })

          res.status = false
          res.fields[field] = msg
          break
        }
      }

      //如果设置了遇错跳出，则仅返回当前msg
      if (exitImmediately && !res.status) {
        res.msg = msg
        break
      }
    }

    return res
  }
}

export default Validator