import _, { isUndefined } from './is'

// 缓存hasOwnProperty
export const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 属性检测
 * @param name 
 * @param obj 
 */
export const hasOwn = (name: string, obj: Object): boolean => hasOwnProperty.call(obj, name)


/**
 * 获取长度
 * @param value 
 */
export const getLen = (value: Array<any> | string): number => {
  if (_.isArray(value))
    return value.length
  return _.isString(value) ? ((value as string).trim()).length : 0
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
 * @param key 
 * @param source 
 */
export const getObjectValue = (key: string, source: any): any => {
  if (_.isEmpty(key) || !source)
    return void 0

  const paths = key.split('.')

  while (paths.length) {
    let k = paths.shift()
    source = source[k]
    if (!_.isPlainObject(source) && !_.isArray(source)) {
      break
    }
  }

  return source
}


export const hasKey = (key: string, source: any): boolean => {
  if (_.isEmpty(key) || !source)
    return false

  const paths = key.split('.')

  const parentKey = paths.slice(0, paths.length - 1).join('.')
  const currentKey = paths[paths.length - 1]
  const obj = getObjectValue(parentKey, source)
  if (isUndefined(obj) || !_.isPlainObject(obj) && !_.isArray(obj)) {
    return false
  }

  return hasOwn(currentKey, obj)
}


/**
 * 首字母大写
 * @param value 
 */
const ucfirst = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1)


export default {
  hasOwn,
  getLen,
  getObjectValue,
  ucfirst
}