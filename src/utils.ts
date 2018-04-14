
//缓存 Object.prototype.toString
const TOSTRING = Object.prototype.toString

//boolean values
const BOOLEAN_VALUES = [true, false, 'true', 'false', 0, 1, '0', '1']

//true values
const TRUE_VALUES = [true, 'true', 1, '1']

//false values
const FALSE_VALIES = [false, 0, '0', 'false']

//primitive values
const PRIMITIVE_VALUES: string[] = ['string', 'number', 'boolean']


/**
 * 是否是正则对象
 * @param value 
 * @returns {Boolean}
 */
const isRegexp = (value: RegExp): boolean => TOSTRING.call(value) === '[object RegExp]'


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
 * 判断传入的值是否为空
 * 如果是数组，判断数组是否为空
 * @param value 
 * @returns {Boolean}
 */
const isEmpty = (value: any): boolean => {
  if (
    value === void 0 ||
    value === null ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  )
    return true
  return false
}


/**
 * 是否是NaN
 * @param value
 * @returns {Boolean} 
 */
const isNaN = (value: any): boolean => value !== value


/**
 * 是否是数值型数据
 * @param value
 * @returns {Boolean} 
 */
const isNumber = (value: any): boolean => {
  value = Number(value)
  return typeof value === 'number' && !isNaN(value)
}


/**
 * 是否是整数
 * @param value 
 * @returns {Boolean}
 */
const isInteger = (value: any): boolean => isNumber(value) && (Number(value) % 1 === 0)


/**
 * 是否是浮点数
 * @param value
 * @returns {Boolean} 
 */
const isFloat = (value: any): boolean => +value && value !== (value | 0)


/**
 * 是否是布尔型
 * @param value 
 * @returns {Boolean}
 */
const isBoolean = (value: any): boolean => !!~BOOLEAN_VALUES.indexOf(value)


/**
 * 真值
 * @param value 
 * @returns {Boolean}
 */
const isTrue = (value: any): boolean => !!~TRUE_VALUES.indexOf(value)


/**
 * 假值
 * @param value 
 * @returns {Boolean}
 */
const isFalse = (value: any): boolean => !!~FALSE_VALIES.indexOf(value)


/**
 * 对象
 * @param value
 * @returns {Boolean} 
 */
const isPlainObject = (value: object): boolean => value !== null && TOSTRING.call(value) === 'object Object'


/**
 * 方法/函数
 * @param value
 * @returns {Boolean} 
 */
const isFunction = (value: Function): boolean => typeof value === 'function'


/**
 * 基本类型
 * @param value 
 * @returns {Boolean}
 */
const isPrimitive = (value: any): boolean => !!~PRIMITIVE_VALUES.indexOf((typeof value))



export default {
  isRegexp,
  regex,
  isEmpty,
  isNaN,
  isNumber,
  isInteger,
  isFloat,
  isBoolean,
  isTrue,
  isFalse,
  isPlainObject,
  isFunction,
  isPrimitive
}