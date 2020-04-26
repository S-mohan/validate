// mongodb id
export const objectId:RegExp = /^[0-9a-fA-F]{24}$/

// email
export const email:RegExp = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/

// 字母
export const alpha:RegExp = /^[A-Za-z]+$/

// 字母数字
export const alphaNum:RegExp = /^[A-Za-z0-9]+$/

// 字母数字下划线中横线
export const alphaDash:RegExp = /^[A-Za-z0-9\-\_]+$/

// 中文
export const chs:RegExp = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/

// 中文字母
export const chsAlpha:RegExp = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z]+$/

// 中文字母数字
export const chsAlphaNum:RegExp = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]+$/

// 中文字母数字中横线
export const chsDash:RegExp = /^[\u4E00-\u9FA5\uF900-\uFA2DA-Za-z0-9\-\_]+$/

// url
export const url:RegExp = /^(http(?:|s)\:)*\/\/([^\/]+)/

// 日期
export const date:RegExp = /^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}$/


export default {
  objectId,
  email,
  alpha,
  alphaNum,
  alphaDash,
  chs,
  chsAlpha,
  chsAlphaNum,
  chsDash,
  url,
  date
}