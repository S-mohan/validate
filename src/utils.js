import _ from './is'

//缓存hasOwnProperty
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 属性检测
 * @param name 
 * @param obj 
 * @returns {Boolean}
 */
const hasOwn = (name, obj) => hasOwnProperty.call(obj, name)


/**
 * 获取长度
 * @param value
 * @returns {Number} 
 */
const getLen = value => {
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
const getObjectValue = (name, object) => {
  if (_.isEmpty(name))
    return void 0

  let paths = name.split('.')

  while (paths.length) {
    let k = paths.shift()
    object = object[k]
    if (!_.isPlainObject(object) && !_.isArray(object)) {
      break
    }
  }

  return object
}


/**
 * 首字母大写
 * @param {String} value
 * @returns {String} 
 */
const ucfirst = value => value.charAt(0).toUpperCase() + value.slice(1)



export {
  hasOwn,
  getLen,
  getObjectValue,
  ucfirst
}