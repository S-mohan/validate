/*!
 * validator 0.1.2
 * (c) 2020 Smohan<https://smohan.net>
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Validator",[],t):"object"==typeof exports?exports.Validator=t():e.Validator=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){(void 0)(["./is","./utils","./rules","./locale/en"],(function(e,t){"use strict";var n,r,i,u,a,s,o,l,c,f,m;t&&t.id;return{setters:[function(e){n=e},function(e){r=e},function(e){i=e},function(e){u=e}],execute:function(){a=["objectId","email","alpha","alphaNum","alphaDash","chs","chsAlpha","chsAlphaNum","chsDash","url","date","array","string","number","integer","safeInteger","float","boolean","trueValue","falseValue","required","notEmpty","in","between","minimum","maximum","length","minLength","maxLength"],s={mode:"single"},o=(e,t,u)=>{const a=u;let s,o;switch(n.isPlainObject(a)&&a.format&&(s=n.isFunction(a.format)?a.format():a.format),e){case"array":return n.isArray(t);case"string":return n.isString(t);case"number":return n.isNumber(t);case"integer":return n.isInteger(t);case"safeInteger":return n.isSafeInteger(t);case"float":return n.isFloat(t);case"boolean":return n.isBoolean(t);case"trueValue":return n.isTrue(t);case"falseValue":return n.isFalse(t);case"in":if(n.isArray(s))return s.includes(t);break;case"between":if(s&&n.isNumber(t)&&!n.isUndefined(s.minimum)&&!n.isUndefined(s.maximum)){const e=+s.minimum,n=+s.maximum;return(t=+t)>=e&&t<=n}break;case"minimum":if(n.isNumber(t)&&n.isNumber(s))return+t>=+s;break;case"maximum":if(n.isNumber(t)&&n.isNumber(s))return+t<=+s;break;case"length":if(o=r.getLen(t),n.isNumber(o)&&n.isNumber(s))return o===+s;break;case"minLength":if(o=r.getLen(t),n.isNumber(o)&&n.isNumber(s))return o>=+s;break;case"maxLength":if(o=r.getLen(t),n.isNumber(o)&&n.isNumber(s))return o<=+s;break;default:return s=i.default[e],s.test(t)}return!0},l=/{\$(\w+)}/g,c=(e,t,r)=>(n.isPlainObject(r)||(r={}),r.field=e,t.replace(l,(e,t)=>void 0!==r[t]?r[t]:e)),f=(e,t,r)=>{let i=e;return n.isPlainObject(e)&&e.message&&(i=e.message),n.isString(i)?i:r[t]},e("validator",m=(e,t,i)=>{const l=Object.assign({},s,i),m=n.isPlainObject(l.locale)?l.locale:u.default;if(!(e&&t&&n.isPlainObject(e)&&n.isPlainObject(t)))return!1;const b=Object.create(null);for(let i in t){const u=t[i],s=r.getObjectValue(i,e);if(!n.isPlainObject(u))continue;if("step"===l.mode&&Object.keys(b).length)return b;const d=[];b[i]=d;const p=r.hasKey(i,e),g=n.isEmpty(s);if(p)if(r.hasOwn("notEmpty",u)&&g)d.push(c(i,f(u.notEmpty,"notEmpty",m)));else for(let e in u){if("required"===e||"notEmpty"===e)continue;let t=!0;if(a.includes(e))t=o(e,s,u[e]);else{const r=u[e];let i;n.isPlainObject(r)&&r.format&&(i=r.format),t=n.isRegexp(i)?i.test(s):n.isFunction(i)?i(s):i===s}if(!1===t){const t=Object.create(null);if(n.isPlainObject(u[e])){const n=u[e];t.min=n.minimum,t.max=n.maximum,t.rule=n.format}if(d.push(c(i,f(u[e],e,m),t)),"all"!==l.mode)continue}}else r.hasOwn("required",u)&&d.push(c(i,f(u.required,"required",m)))}return b}),m.version="0.1.2",e("default",m)}}}))}]).default}));