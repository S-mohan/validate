interface Property {
  [propName: string]: any
}

const rules: Property = {
  //mongodb _id
  objectId: /^[0-9a-fA-F]{24}$/,

  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,

  alpha: /^[A-Za-z]+$/,

  alphaNum: /^[A-Za-z0-9]+$/,

  alphaDash: /^[A-Za-z0-9\-\_]+$/,

  chs: /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/,

  chsAlpha: /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z]+$/,

  chsAlphaNum: /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]+$/,

  chsDash: /^[\u4E00-\u9FA5\uF900-\uFA2DA-Za-z0-9\-\_]+$/,

  url: /^(http(?:|s)\:)*\/\/([^\/]+)/,

  date: /^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}$/
}

export default rules