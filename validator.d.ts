declare namespace validator {
  export interface ValidatorObject {
    [propName: string]: any
  }

  export type ValidatorBuiltInRegexRules = 'objectId' | 'email' | 'alpha' | 'alphaNum' | 'alphaDash' | 'chs' | 'chsAlpha' | 'chsAlphaNum' | 'chsDash' | 'url' | 'date'


  export type ValidatorBuiltInRules = ValidatorBuiltInRegexRules | 'array' | 'string' | 'number' | 'integer' | 'safeInteger' | 'float' | 'boolean' | 'trueValue' | 'falseValue' | 'required' | 'notEmpty' | 'in' | 'between' | 'minimum' | 'maximum' | 'length' | 'minLength' | 'maxLength'


  export type ValidatorMode = 'all' | 'step' | 'single'


  export interface ValidatorErrorResult {
    [propName: string]: Array<string>
  }

  export type ValidatorResult = false | ValidatorErrorResult


  export interface ValidatorRuleObject {
    format?: any,
    message?: string
  }


  export interface ValidatorOptions {
    mode?: ValidatorMode,
    locale?: ValidatorObject
  }

  export interface Validator {
    (source: ValidatorObject, constraints: ValidatorObject, options?: ValidatorOptions): ValidatorResult
    version: string
    getObjectValue(key:string, source:any):any
    ucfirst(value:string):string
    isRegexp(value:any):boolean
    isString(value:any):boolean
    isNull(value:any):boolean
    isEmpty(value:any):boolean
    isObject(value:any):boolean
    isPlainObject(value:any):boolean
    isArray(value:any):boolean
    isPrimitive(value:any):boolean
    isFunction(value:any):boolean
    isNumber(value:any):boolean
    isInteger(value:any):boolean
    isFloat(value:any):boolean
    isSafeInteger(value:any):boolean
    isTrue(value:any):boolean
    isFalse(value:any):boolean
    isBoolean(value:any):boolean
    isNaN(value:any):boolean
    isEmail(value:any):boolean
    isObjectId(value:any):boolean
    isUrl(value:any):boolean
    isDate(value:any):boolean
  }
}

declare const validator: validator.Validator

export = validator