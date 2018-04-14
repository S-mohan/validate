
//缓存 Object.prototype.toString
const TOSTRING = Object.prototype.toString

//true values
const TRUE_VALUES = [true, 1, '1', 'true']

//false values
const FALSE_VALIES = [false, 0, '0', 'false']

//boolean values
const BOOLEAN_VALUES = [...TRUE_VALUES, ...FALSE_VALIES]

//primitive values
const PRIMITIVE_VALUES: string[] = ['string', 'number', 'boolean', 'symbol']


/**
 * 正则对象
 * @param value 
 * @returns {Boolean}
 */
const isRegexp = (value: any): boolean => TOSTRING.call(value) === '[object RegExp]'


/**
 * 匹配正则表达式
 * @param reg 
 * @param value
 * @returns {Boolean} 
 */
const regex = (reg: RegExp, value: any): boolean => {
  if (!isRegexp(reg)) {
    throw TypeError('')
  }
  return !!reg.test(value)
}


/**
 * 字符串
 * @param value
 * @returns {Boolean} 
 */
const isString = (value: any): boolean => typeof value === 'string'


/**
 * 判断传入的值是否为空
 * 如果是数组，判断数组是否为空
 * @param value 
 * @returns {Boolean}
 */
const isEmpty = (value: any): boolean => {
  if (
    value === void 0 ||
    value === null ||
    (isString(value) && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  )
    return true
  return false
}


/**
 * NaN
 * @param value
 * @returns {Boolean} 
 */
const isNaN = (value: any): boolean => value !== value


/**
 * 数值
 * @param value
 * @returns {Boolean} 
 */
const isNumber = (value: any): boolean => {
  value = Number(value)
  return typeof value === 'number' && !isNaN(value)
}


/**
 * 整数值
 * @param value 
 * @returns {Boolean}
 */
const isInteger = (value: any): boolean => isNumber(value) && (Number(value) % 1 === 0)


/**
 * 浮点数值
 * @param value
 * @returns {Boolean} 
 */
const isFloat = (value: any): boolean => +value && value !== (value | 0)


/**
 * 布尔值
 * @param value 
 * @returns {Boolean}
 */
const isBoolean = (value: any): boolean => {
  if (isString(value)) {
    value = value.toLowerCase()
  }
  return !!~BOOLEAN_VALUES.indexOf(value)
}


/**
 * 真值
 * @param value 
 * @returns {Boolean}
 */
const isTrue = (value: any): boolean => {
  if (isString(value)) {
    value = value.toLowerCase()
  }
  return !!~TRUE_VALUES.indexOf(value)
}


/**
 * 假值
 * @param value 
 * @returns {Boolean}
 */
const isFalse = (value: any): boolean => {
  if (isString(value)) {
    value = value.toLowerCase()
  }
  return !!~FALSE_VALIES.indexOf(value)
}


/**
 * 对象
 * @param value
 * @returns {Boolean} 
 */
const isPlainObject = (value: any): boolean => value !== null && TOSTRING.call(value) === '[object Object]'


/**
 * 数组
 * @param value 
 * @returns {Boolean} 
 */
const isArray = (value: any): boolean => Array.isArray.call(value)


/**
 * 方法/函数
 * @param value
 * @returns {Boolean} 
 */
const isFunction = (value: any): boolean => typeof value === 'function'


/**
 * 基本类型
 * @param value 
 * @returns {Boolean}
 */
const isPrimitive = (value: any): boolean => !!~PRIMITIVE_VALUES.indexOf((typeof value))


export default {
  isRegexp,
  regex,
  isString,
  isEmpty,
  isNaN,
  isNumber,
  isInteger,
  isFloat,
  isBoolean,
  isTrue,
  isFalse,
  isPlainObject,
  isArray,
  isFunction,
  isPrimitive
}