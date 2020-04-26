// 缓存 Object.prototype.toString
export const TOSTRING: Function = Object.prototype.toString

// primitive values
export const PRIMITIVE_VALUES: Array<string> = ['string', 'number', 'boolean', 'symbol']

// 最大安全数
export const MAX_SAFE_INTEGER: number = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1


/**
 * 正则对象检测
 * @param value 
 */
export const isRegexp = (value: any): boolean => TOSTRING.call(value) === '[object RegExp]'


/**
 * 是否匹配正则表达式
 * @param reg 
 * @param value 
 */
export const regex = (reg: RegExp, value: any): Error | boolean => {
  if (!isRegexp(reg))
    throw TypeError('[VALIDATE ERROR]: The parameter reg must be a RegExp object')
  return !!reg.test(value)
}


/**
 * String
 * @param value 
 */
export const isString = (value: any): boolean => typeof value === 'string'


/**
 * undefined
 * @param value 
 */
export const isUndefined = (value: any): boolean => value === void 0


/**
 * null
 * @param value 
 */
export const isNull = (value: any): boolean => value === null


/**
 * null | undefined | empty string
 * @param value 
 */
export const isEmpty = (value: any): boolean => !!(isUndefined(value) || isNull(value) || isString(value) && value.trim().length === 0)


/**
 * object
 * @param value 
 */
export const isObject = (value: any): boolean => !isNull(value) && (typeof value === 'object')


/**
 * plain object
 * @param value 
 */
export const isPlainObject = (value: any): boolean => TOSTRING.call(value) === '[object Object]'


/**
 * array
 * @param value 
 */
export const isArray = (value: any): boolean => Array.isArray.call(null, value)


/**
 * primitive types
 * @param value 
 */
export const isPrimitive = (value: any): boolean => PRIMITIVE_VALUES.includes((typeof value))


/**
 * function
 * @param value 
 */
export const isFunction = (value: any): boolean => typeof value === 'function'


/**
 * number
 * @param value 
 */
export const isNumber = (value: any): boolean => {
  const numValue = isEmpty(value) ? NaN : +value
  return typeof numValue === 'number' && isNaN(numValue)
}


/**
 * NaN
 * @param value 
 */
export const isNaN = (value: any): boolean => isNumber(value) && (value !== value)


/**
 * integer
 * @param value 
 */
export const isInteger = (value: any): boolean => isNumber(value) && (value % 1 === 0)


/**
 * float
 * @param value 
 */
export const isFloat = (value: any): boolean => +value && (value !== (value | 0))


/**
 * safe interger
 * -Math.pow(2, 53) - 1 <= value <= Math.pow(2, 53) - 1 
 * @param value 
 */
export const isSafeInteger = (value: any): boolean => isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER


/**
 * true
 * @param value 
 */
export const isTrue = (value: any): boolean => value === true


/**
 * false
 * @param value 
 */
export const isFalse = (value: any): boolean => value === false


/**
 * boolean
 * @param value 
 */
export const isBoolean = (value: any): boolean => typeof value === 'boolean'


export default {
  regex,
  isRegexp,
  isString,
  isUndefined,
  isNull,
  isEmpty,
  isObject,
  isPlainObject,
  isArray,
  isPrimitive,
  isFunction,
  isNumber,
  isInteger,
  isFloat,
  isSafeInteger,
  isTrue,
  isFalse,
  isBoolean,
  isNaN,
}
