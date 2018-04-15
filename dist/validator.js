/*!
 * validator 1.0.0
 * (c) 2018 Smohan<https://smohan.net>
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Validator=t():e.Validator=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=Object.prototype.toString,a=[!0,1,"1","true"],i=[!1,0,"0","false"],u=a.concat(i),o=["string","number","boolean","symbol"],l=function(e){return"[object RegExp]"===n.call(e)},s=function(e){return"string"==typeof e},c=function(e){return e!=e},f=function(e){return"number"==typeof(e=Number(e))&&!c(e)},m=l,d=function(e,t){if(!l(e))throw TypeError("[VALIDATE ERROR]: The parameter reg must be a RegExp object");return!!e.test(t)},b=s,h=function(e){return!!(void 0===e||null===e||s(e)&&0===e.trim().length||Array.isArray(e)&&0===e.length)},p=c,$=f,y=function(e){return f(e)&&Number(e)%1==0},g=function(e){return+e&&e!==(0|e)},x=function(e){return s(e)&&(e=e.toLowerCase()),!!~u.indexOf(e)},A=function(e){return s(e)&&(e=e.toLowerCase()),!!~a.indexOf(e)},v=function(e){return s(e)&&(e=e.toLowerCase()),!!~i.indexOf(e)},k=function(e){return null!==e&&"[object Object]"===n.call(e)},w=function(e){return Array.isArray.call(null,e)},E=function(e){return"function"==typeof e},O=function(e){return!!~o.indexOf(typeof e)},j={objectId:"{$field} is not a valid ObjectId",email:"{$field} is not a valid email address",alpha:"{$field} contains non-letter characters",alphaNum:"{$field} contains non alpha-numeric characters",alphaDash:"{$field} must be alpha-numeric, dash, underscore",chs:"{$field} must be chinese",chsAlpha:"{$field} must be chinese or alpha",chsAlphaNum:"{$field} must be chinese,alpha-numeric",chsDash:"{$field} must be chinese,alpha-numeric,underscore, dash",url:"{$field} is not a valid url",date:"{$field} is not a valid date",require:"{$field} is required",notEmpty:"{$field} is can not be empty",array:"{$field} must be a array",number:"{$field} must be numeric",integer:"{$field} must be integer",float:"{$field} must be float",boolean:"{$field} must be boolean",in:"{$field} must be in {$rule}",between:"{$field} must between {$min} - {$max}",length:"size of {$field} must be {$rule}",max:"max size of {$field} must be {$rule}",min:"min size of {$field} must be {$rule}",minLength:"length of {$field} must be greater than {$rule} characters",maxLength:"length of {$field} must be less than {$rule} characters"},D={objectId:/^[0-9a-fA-F]{24}$/,email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,alpha:/^[A-Za-z]+$/,alphaNum:/^[A-Za-z0-9]+$/,alphaDash:/^[A-Za-z0-9\-\_]+$/,chs:/^[\u4E00-\u9FA5\uF900-\uFA2D]+$/,chsAlpha:/^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z]+$/,chsAlphaNum:/^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]+$/,chsDash:/^[\u4E00-\u9FA5\uF900-\uFA2DA-Za-z0-9\-\_]+$/,url:/^(http(?:|s)\:)*\/\/([^\/]+)/,date:/^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}$/},F=["objectId","email","alpha","alphaNum","alphaDash","chs","chsAlpha","chsAlphaNum","chsDash","url","date","array","string","number","integer","float","boolean","true","false","notEmpty","empty","in","between","min","max","length","minLength","maxLength"],L=Object.prototype.hasOwnProperty,R=function(e,t){return L.call(t,e)},z=function(e){return w(e)?e.length:b(e)?e.trim().length:0},N=function(e,t){if(!h(e)){for(var r=e.split(".");r.length;){if(t=t[r.shift()],!k(t)&&!w(t))break}return t}},T=/{\$(\w+)}/g,I=function(e,t,r){return e||(j[t]?j[t].replace(T,function(e,t){return r&&void 0!==r[t]?r[t]:t}):"")},Z=function(){function e(){}return e.is=function(e,t,r){if(!b(e)||h(e))throw TypeError("[VALIDATE ERROR]: The parameter name must be a string");var n=!1;if(~F.indexOf(e))switch(e){case"empty":n=h(t);break;case"notEmpty":n=!h(t);break;case"string":n=b(t);break;case"array":n=w(t);break;case"number":n=$(t);break;case"integer":n=y(t);break;case"float":n=g(t);break;case"boolean":n=x(t);break;case"true":n=A(t);break;case"false":n=v(t);break;case"in":if(O(r)&&(r=[r]),w(r)){var a=Number(t);t=p(a)?t:a,n=!!~r.indexOf(t)}break;case"between":k(r)&&$(r.min)&&$(r.max)&&(n=t-r.min>=0&&t-r.max<=0);break;case"min":$(r)&&(n=t-r<=0);break;case"max":$(r)&&(n=t-r>=0);break;case"minLength":$(r)&&(n=z(t)-r>=0);break;case"maxLength":$(r)&&(n=z(t)-r<=0);break;case"length":$(r)&&null!==t&&void 0!==t&&(n=z(t)>r);break;default:n=!!D[e]&&d(D[e],t)}else void 0!==r&&(n=m(r)?d(r,t):!!E(r)&&!!r(t));return n},e.check=function(t,r,n){if(!k(t)||!k(r))throw TypeError("[VALIDATE ERROR]: The parameter rules or data  must be an object");var a,i,u,o={status:!0,fields:Object.create(null)};for(a in t)if(L.call(t,a)&&(i=t[a],k(i))){u=N(a,r);var l=void 0,s=void 0,c=void 0;if((s="require")&&R("require",i)&&void 0===u||(s="array")&&R("array",i)&&!w(u)||(s="notEmpty")&&R("notEmpty",i)&&h(u)){if(c=I(b(i[s])?i[s]:"",s,{field:a}),o.status=!1,o.fields[a]=c,n){o.msg=c;break}}else if(!h(u)){for(s in i)if("require"!==s&&"array"!==s&&"notEmpty"!==s&&((l=i[s])&&k(l)||(l={msg:b(l)?l:""}),"between"===s&&(l.rule={min:l.min,max:l.max}),!e.is(s,u,l.rule))){c=I(l.msg,s,{field:a,rule:l.rule,min:l.min,max:l.max}),o.status=!1,o.fields[a]=c;break}if(n&&!o.status){o.msg=c;break}}}return o},e.version="1.0.0",e}();t.default=Z}]).default});