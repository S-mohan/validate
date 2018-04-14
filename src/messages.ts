interface Property {
  [propName: string]: any
}

const messages: Property = {
  objectId: '{$field} is not a valid ObjectId',
  email: '{$field} is not a valid email address',
  alpha: '{$field} contains non-letter characters',
  alphaNum: '{$field} contains non alpha-numeric characters',
  alphaDash: '{$field} must be alpha-numeric, dash, underscore',
  chs: '{$field} must be chinese',
  chsAlpha: '{$field} must be chinese or alpha',
  chsAlphaNum: '{$field} must be chinese,alpha-numeric',
  chsDash: '{$field} must be chinese,alpha-numeric,underscore, dash',
  url: '{$field} is not a valid url',
  date: '{$field} is not a valid date',
  require: '{$field} is required',
  notEmpty: '{$field} is can not be empty',
  array: '{$field} must be a array',
  number: '{$field} must be numeric',
  integer: '{$field} must be integer',
  float: '{$field} must be float',
  boolean: '{$field} must be boolean',
  in: '{$field} must be in {$rule}',
  between: '{$field} must between {$min} - {$max}',
  length: 'size of {$field} must be {$rule}',
  max: 'max size of {$field} must be {$rule}',
  min: 'min size of {$field} must be {$rule}',
  minLength: 'length of {$field} must be greater than {$rule} characters',
  maxLength: 'length of {$field} must be less than {$rule} characters'
}

export default messages