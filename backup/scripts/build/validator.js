/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/validator.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/messages.ts":
/*!*************************!*\
  !*** ./src/messages.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var messages = {
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
    "in": '{$field} must be in {$rule}',
    between: '{$field} must between {$min} - {$max}',
    length: 'size of {$field} must be {$rule}',
    max: 'max size of {$field} must be {$rule}',
    min: 'min size of {$field} must be {$rule}',
    minLength: 'length of {$field} must be greater than {$rule} characters',
    maxLength: 'length of {$field} must be less than {$rule} characters'
};
exports["default"] = messages;


/***/ }),

/***/ "./src/rules.ts":
/*!**********************!*\
  !*** ./src/rules.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var rules = {
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
};
exports["default"] = rules;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
//缓存 Object.prototype.toString
var TOSTRING = Object.prototype.toString;
//true values
var TRUE_VALUES = [true, 1, '1', 'true'];
//false values
var FALSE_VALIES = [false, 0, '0', 'false'];
//boolean values
var BOOLEAN_VALUES = TRUE_VALUES.concat(FALSE_VALIES);
//primitive values
var PRIMITIVE_VALUES = ['string', 'number', 'boolean', 'symbol'];
/**
 * 正则对象
 * @param value
 * @returns {Boolean}
 */
var isRegexp = function (value) { return TOSTRING.call(value) === '[object RegExp]'; };
/**
 * 匹配正则表达式
 * @param reg
 * @param value
 * @returns {Boolean}
 */
var regex = function (reg, value) {
    if (!isRegexp(reg)) {
        throw TypeError('[VALIDATE ERROR]: The parameter reg must be a RegExp object');
    }
    return !!reg.test(value);
};
/**
 * 字符串
 * @param value
 * @returns {Boolean}
 */
var isString = function (value) { return typeof value === 'string'; };
/**
 * 判断传入的值是否为空
 * @param value
 * @returns {Boolean}
 */
var isEmpty = function (value) {
    if (value === void 0 ||
        value === null ||
        (isString(value) && value.trim().length === 0))
        return true;
    return false;
};
/**
 * NaN
 * @param value
 * @returns {Boolean}
 */
var isNaN = function (value) { return value !== value; };
/**
 * 数值
 * @param value
 * @returns {Boolean}
 */
var isNumber = function (value) {
    value = Number(value);
    return typeof value === 'number' && !isNaN(value);
};
/**
 * 整数值
 * @param value
 * @returns {Boolean}
 */
var isInteger = function (value) { return isNumber(value) && (Number(value) % 1 === 0); };
/**
 * 浮点数值
 * @param value
 * @returns {Boolean}
 */
var isFloat = function (value) { return +value && value !== (value | 0); };
/**
 * 布尔值
 * @param value
 * @returns {Boolean}
 */
var isBoolean = function (value) {
    if (isString(value)) {
        value = value.toLowerCase();
    }
    return !!~BOOLEAN_VALUES.indexOf(value);
};
/**
 * 真值
 * @param value
 * @returns {Boolean}
 */
var isTrue = function (value) {
    if (isString(value)) {
        value = value.toLowerCase();
    }
    return !!~TRUE_VALUES.indexOf(value);
};
/**
 * 假值
 * @param value
 * @returns {Boolean}
 */
var isFalse = function (value) {
    if (isString(value)) {
        value = value.toLowerCase();
    }
    return !!~FALSE_VALIES.indexOf(value);
};
/**
 * 对象
 * @param value
 * @returns {Boolean}
 */
var isPlainObject = function (value) { return value !== null && TOSTRING.call(value) === '[object Object]'; };
/**
 * 数组
 * @param value
 * @returns {Boolean}
 */
var isArray = function (value) { return Array.isArray.call(null, value); };
/**
 * 方法/函数
 * @param value
 * @returns {Boolean}
 */
var isFunction = function (value) { return typeof value === 'function'; };
/**
 * 基本类型
 * @param value
 * @returns {Boolean}
 */
var isPrimitive = function (value) { return !!~PRIMITIVE_VALUES.indexOf((typeof value)); };
exports["default"] = {
    isRegexp: isRegexp,
    regex: regex,
    isString: isString,
    isEmpty: isEmpty,
    isNaN: isNaN,
    isNumber: isNumber,
    isInteger: isInteger,
    isFloat: isFloat,
    isBoolean: isBoolean,
    isTrue: isTrue,
    isFalse: isFalse,
    isPlainObject: isPlainObject,
    isArray: isArray,
    isFunction: isFunction,
    isPrimitive: isPrimitive
};


/***/ }),

/***/ "./src/validator.ts":
/*!**************************!*\
  !*** ./src/validator.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var messages_1 = __webpack_require__(/*! ./messages */ "./src/messages.ts");
var rules_1 = __webpack_require__(/*! ./rules */ "./src/rules.ts");
//内置规则
var BUILT_IN_RULES = ['objectId', 'email', 'alpha', 'alphaNum', 'alphaDash', 'chs', 'chsAlpha', 'chsAlphaNum', 'chsDash', 'url', 'date', 'array', 'string', 'number', 'integer', 'float', 'boolean', 'true', 'false', 'require', 'empty', 'in', 'between', 'min', 'max', 'length', 'minLength', 'maxLength'];
//缓存hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * 属性检测
 * @param name
 * @param obj
 * @returns {Boolean}
 */
var hasOwn = function (name, obj) { return hasOwnProperty.call(obj, name); };
/**
 * 获取长度
 * @param value
 * @returns {Number}
 */
var getLen = function (value) {
    if (utils_1["default"].isArray(value))
        return value.length;
    return utils_1["default"].isString(value) ? (value.trim()).length : 0;
};
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
var getObjectValue = function (name, object) {
    if (utils_1["default"].isEmpty(name))
        return void 0;
    var paths = name.split('.');
    while (paths.length) {
        var k = paths.shift();
        object = object[k];
        if (!utils_1["default"].isPlainObject(object) && !utils_1["default"].isArray(object)) {
            break;
        }
    }
    return object;
};
//消息模板
var MSG_TPL_REG = /{\$(\w+)}/g;
/**
 * 获取信息
 * @param {String} msg
 * @param {String} rule
 * @param {Any} replace
 * @returns {String}
 */
var getMsg = function (msg, rule, replace) { return msg || (messages_1["default"][rule] ? messages_1["default"][rule].replace(MSG_TPL_REG, function (a, f) {
    if (replace && replace[f] !== void 0) {
        return replace[f];
    }
    return f;
}) : ''); };
var Validator = /** @class */ (function () {
    function Validator() {
    }
    /**
     * 验证是否是预期规则的值
     *
     * 内置方法
     * Validate.is('number', 0)
     * Validate.is('in', 1, [1,2,3])
     * Validate.is('between', 3, {min:1, max:4})
     * Validate.is('empty', [])
     * Validate.is('empty', 'smohan')
     *
     * 内置正则规则
     * Validate.is('email', 'smohan@163.com')
     * Validate.is('objectId', '5aca29dfc62051368fc1d00a')
     *
     * 自定义规则
     * 1.使用正则
     * Validate.is('nick', 'smohan', /^(\w){2,10}$/)
     * 2.函数返回值
     * Validate.is('unique', 'smohan', function(value){ return true })
     *
     * @param name 规则名称
     * @param value 值
     * @param rule [可选] 具体规则
     * @returns {Boolean}
     *
     */
    Validator.is = function (name, value, rule) {
        if (!utils_1["default"].isString(name) || utils_1["default"].isEmpty(name)) {
            throw TypeError('[VALIDATE ERROR]: The parameter name must be a string');
        }
        var result = false;
        if (!!~BUILT_IN_RULES.indexOf(name)) {
            switch (name) {
                case 'empty':
                    result = utils_1["default"].isEmpty(value);
                    break;
                case 'require':
                    result = !utils_1["default"].isEmpty(value);
                    break;
                case 'string':
                    result = utils_1["default"].isString(value);
                    break;
                case 'array':
                    result = utils_1["default"].isArray(value);
                    break;
                case 'number':
                    result = utils_1["default"].isNumber(value);
                    break;
                case 'integer':
                    result = utils_1["default"].isInteger(value);
                    break;
                case 'float':
                    result = utils_1["default"].isFloat(value);
                    break;
                case 'boolean':
                    result = utils_1["default"].isBoolean(value);
                    break;
                case 'true':
                    result = utils_1["default"].isTrue(value);
                    break;
                case 'false':
                    result = utils_1["default"].isFalse(value);
                    break;
                case 'in':
                    if (utils_1["default"].isPrimitive(rule))
                        rule = [rule];
                    if (utils_1["default"].isArray(rule)) {
                        //如果是数字，将类似于 '1' in [1]匹配到
                        var _value = Number(value);
                        value = utils_1["default"].isNaN(_value) ? value : _value;
                        result = !!~rule.indexOf(value);
                    }
                    break;
                case 'between':
                    if (utils_1["default"].isPlainObject(rule) && utils_1["default"].isNumber(rule.min) && utils_1["default"].isNumber(rule.max))
                        result = (value - rule.min) >= 0 && (value - rule.max) <= 0;
                    break;
                case 'min':
                    if (utils_1["default"].isNumber(rule))
                        result = value - rule >= 0;
                    break;
                case 'max':
                    if (utils_1["default"].isNumber(rule))
                        result = value - rule <= 0;
                    break;
                case 'minLength':
                    if (utils_1["default"].isNumber(rule))
                        result = getLen(value) - rule >= 0;
                    break;
                case 'maxLength':
                    if (utils_1["default"].isNumber(rule))
                        result = getLen(value) - rule <= 0;
                    break;
                case 'length':
                    if (utils_1["default"].isNumber(rule) && value !== null && value !== void 0)
                        result = getLen(value) > rule;
                    break;
                default:
                    //使用预定义的正则表达式
                    result = rules_1["default"][name] ? utils_1["default"].regex(rules_1["default"][name], value) : false;
            }
        }
        else if (rule !== void 0) {
            result = utils_1["default"].isRegexp(rule) ?
                utils_1["default"].regex(rule, value)
                : (utils_1["default"].isFunction(rule) ? !!(rule(value)) : false);
        }
        return result;
    };
    /**
     *
     * 检查插入对象是否和传入规则匹配
     *
     * eg.
     * {
     *    email : {
     *      require : 'email is required',
     *      email : 'invalid email',
     *    },
     *
     *    age: {
     *       require : 'age is required',
     *       integer : 'age must be an integer',
     *       between : {
     *         min : 20,
     *         max : 30,
     *         msg : 'age must be between 20-30 years old'
     *       },
     *    },
     *
     *    gender : {
     *      in : {
     *        rule : ['male', 'female'],
     *        msg : 'gender can only be male or female'
     *      }
     *    },
     *
     *     nick : {
     *       require : 'email is required',
     *       nick : {
     *         rule : /^(\w){2,20}$/,
     *         msg : 'nickname between 2-20 characters'
     *       }
     *     }
     * }
     *
     *
     * @param rules 规则
     * @param data 待验证数据包
     * @param exitImmediately 是否遇到错误就立即退出
     * 1. exitImmediately = true: 一旦遇到校验失败就立即返回失败信息
     * 2. exitImmediately = false: 待全部规则校验完毕才返回
     */
    Validator.check = function (rules, data, exitImmediately) {
        if (!utils_1["default"].isPlainObject(rules) || !utils_1["default"].isPlainObject(data)) {
            throw TypeError('[VALIDATE ERROR]: The parameter rules or data  must be an object');
        }
        var field, ruleMap, value, res = {
            status: true,
            fields: Object.create(null)
        };
        for (field in rules) {
            if (!hasOwnProperty.call(rules, field))
                continue;
            ruleMap = rules[field];
            if (!utils_1["default"].isPlainObject(ruleMap))
                continue;
            value = getObjectValue(field, data);
            var rule = void 0, ruleName = void 0, msg = void 0;
            //优先处理 require
            if (hasOwn('require', ruleMap) && utils_1["default"].isEmpty(value)) {
                msg = getMsg(utils_1["default"].isString(ruleMap['require']) ? ruleMap['require'] : '', 'require', { field: field });
                res.status = false;
                res.fields[field] = msg;
                if (exitImmediately) {
                    res.msg = msg;
                    break;
                }
                else {
                    continue;
                }
            }
            if (utils_1["default"].isEmpty(value))
                continue;
            for (ruleName in ruleMap) {
                //排除 require|array|notEmpty
                if (ruleName === 'require')
                    continue;
                rule = ruleMap[ruleName];
                //统一将rule处理为object
                if (!rule || !utils_1["default"].isPlainObject(rule)) {
                    rule = {
                        msg: utils_1["default"].isString(rule) ? rule : ''
                    };
                }
                if (ruleName === 'between') {
                    rule.rule = {
                        min: rule.min,
                        max: rule.max
                    };
                }
                if (!Validator.is(ruleName, value, rule.rule)) {
                    msg = getMsg(rule.msg, ruleName, {
                        field: field,
                        rule: rule.rule,
                        min: rule.min,
                        max: rule.max
                    });
                    res.status = false;
                    res.fields[field] = msg;
                    break;
                }
            }
            //如果设置了遇错跳出，则仅返回当前msg
            if (exitImmediately && !res.status) {
                res.msg = msg;
                break;
            }
        }
        return res;
    };
    Validator.version = '__VERSION__';
    return Validator;
}());
exports["default"] = Validator;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9ydWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBLElBQU0sUUFBUSxHQUFhO0lBQ3pCLFFBQVEsRUFBRSxrQ0FBa0M7SUFDNUMsS0FBSyxFQUFFLHVDQUF1QztJQUM5QyxLQUFLLEVBQUUseUNBQXlDO0lBQ2hELFFBQVEsRUFBRSxnREFBZ0Q7SUFDMUQsU0FBUyxFQUFFLGtEQUFrRDtJQUM3RCxHQUFHLEVBQUUsMEJBQTBCO0lBQy9CLFFBQVEsRUFBRSxtQ0FBbUM7SUFDN0MsV0FBVyxFQUFFLHdDQUF3QztJQUNyRCxPQUFPLEVBQUUseURBQXlEO0lBQ2xFLEdBQUcsRUFBRSw2QkFBNkI7SUFDbEMsSUFBSSxFQUFFLDhCQUE4QjtJQUNwQyxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CLFFBQVEsRUFBRSw4QkFBOEI7SUFDeEMsS0FBSyxFQUFFLDBCQUEwQjtJQUNqQyxNQUFNLEVBQUUsMEJBQTBCO0lBQ2xDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsS0FBSyxFQUFFLHdCQUF3QjtJQUMvQixPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLElBQUUsRUFBRSw2QkFBNkI7SUFDakMsT0FBTyxFQUFFLHVDQUF1QztJQUNoRCxNQUFNLEVBQUUsa0NBQWtDO0lBQzFDLEdBQUcsRUFBRSxzQ0FBc0M7SUFDM0MsR0FBRyxFQUFFLHNDQUFzQztJQUMzQyxTQUFTLEVBQUUsNERBQTREO0lBQ3ZFLFNBQVMsRUFBRSx5REFBeUQ7Q0FDckU7QUFFRCxxQkFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUM1QnZCLElBQU0sS0FBSyxHQUFhO0lBQ3RCLGFBQWE7SUFDYixRQUFRLEVBQUUsbUJBQW1CO0lBRTdCLEtBQUssRUFBRSx1Q0FBdUM7SUFFOUMsS0FBSyxFQUFFLGFBQWE7SUFFcEIsUUFBUSxFQUFFLGdCQUFnQjtJQUUxQixTQUFTLEVBQUUsb0JBQW9CO0lBRS9CLEdBQUcsRUFBRSxpQ0FBaUM7SUFFdEMsUUFBUSxFQUFFLHVDQUF1QztJQUVqRCxXQUFXLEVBQUUsMENBQTBDO0lBRXZELE9BQU8sRUFBRSw4Q0FBOEM7SUFFdkQsR0FBRyxFQUFFLDhCQUE4QjtJQUVuQyxJQUFJLEVBQUUsbUNBQW1DO0NBQzFDO0FBRUQscUJBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJwQiw4QkFBOEI7QUFDOUIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRO0FBRTFDLGFBQWE7QUFDYixJQUFNLFdBQVcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQztBQUUxQyxjQUFjO0FBQ2QsSUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7QUFFN0MsZ0JBQWdCO0FBQ2hCLElBQU0sY0FBYyxHQUFPLFdBQVcsUUFBSyxZQUFZLENBQUM7QUFFeEQsa0JBQWtCO0FBQ2xCLElBQU0sZ0JBQWdCLEdBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7QUFHNUU7Ozs7R0FJRztBQUNILElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBVSxJQUFjLGVBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssaUJBQWlCLEVBQTFDLENBQTBDO0FBR3BGOzs7OztHQUtHO0FBQ0gsSUFBTSxLQUFLLEdBQUcsVUFBQyxHQUFXLEVBQUUsS0FBVTtJQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sU0FBUyxDQUFDLDZEQUE2RCxDQUFDO0tBQy9FO0lBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDMUIsQ0FBQztBQUdEOzs7O0dBSUc7QUFDSCxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQVUsSUFBYyxjQUFPLEtBQUssS0FBSyxRQUFRLEVBQXpCLENBQXlCO0FBR25FOzs7O0dBSUc7QUFDSCxJQUFNLE9BQU8sR0FBRyxVQUFDLEtBQVU7SUFDekIsSUFDRSxLQUFLLEtBQUssS0FBSyxDQUFDO1FBQ2hCLEtBQUssS0FBSyxJQUFJO1FBQ2QsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJO0lBQ2IsT0FBTyxLQUFLO0FBQ2QsQ0FBQztBQUdEOzs7O0dBSUc7QUFDSCxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQVUsSUFBYyxZQUFLLEtBQUssS0FBSyxFQUFmLENBQWU7QUFHdEQ7Ozs7R0FJRztBQUNILElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBVTtJQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNyQixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDbkQsQ0FBQztBQUdEOzs7O0dBSUc7QUFDSCxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQVUsSUFBYyxlQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUE1QyxDQUE0QztBQUd2Rjs7OztHQUlHO0FBQ0gsSUFBTSxPQUFPLEdBQUcsVUFBQyxLQUFVLElBQWMsUUFBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUEvQixDQUErQjtBQUd4RTs7OztHQUlHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsVUFBQyxLQUFVO0lBQzNCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO0tBQzVCO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUN6QyxDQUFDO0FBR0Q7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBVTtJQUN4QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtLQUM1QjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDdEMsQ0FBQztBQUdEOzs7O0dBSUc7QUFDSCxJQUFNLE9BQU8sR0FBRyxVQUFDLEtBQVU7SUFDekIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUU7S0FDNUI7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ3ZDLENBQUM7QUFHRDs7OztHQUlHO0FBQ0gsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUFVLElBQWMsWUFBSyxLQUFLLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGlCQUFpQixFQUE1RCxDQUE0RDtBQUczRzs7OztHQUlHO0FBQ0gsSUFBTSxPQUFPLEdBQUcsVUFBQyxLQUFVLElBQWMsWUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUEvQixDQUErQjtBQUd4RTs7OztHQUlHO0FBQ0gsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFVLElBQWMsY0FBTyxLQUFLLEtBQUssVUFBVSxFQUEzQixDQUEyQjtBQUd2RTs7OztHQUlHO0FBQ0gsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFVLElBQWMsUUFBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUEzQyxDQUEyQztBQUd4RixxQkFBZTtJQUNiLFFBQVE7SUFDUixLQUFLO0lBQ0wsUUFBUTtJQUNSLE9BQU87SUFDUCxLQUFLO0lBQ0wsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztDQUNaOzs7Ozs7Ozs7Ozs7Ozs7QUN6TEQsbUVBQXVCO0FBQ3ZCLDRFQUEwQjtBQUMxQixtRUFBdUI7QUFFdkIsTUFBTTtBQUNOLElBQU0sY0FBYyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO0FBRTlTLGtCQUFrQjtBQUNsQixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWM7QUFhdEQ7Ozs7O0dBS0c7QUFDSCxJQUFNLE1BQU0sR0FBRyxVQUFDLElBQVksRUFBRSxHQUFhLElBQWMscUJBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUE5QixDQUE4QjtBQUd2Rjs7OztHQUlHO0FBQ0gsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFVO0lBQ3hCLElBQUksa0JBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2xCLE9BQU8sS0FBSyxDQUFDLE1BQU07SUFFckIsT0FBTyxrQkFBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCxJQUFNLGNBQWMsR0FBRyxVQUFDLElBQVksRUFBRSxNQUFnQjtJQUNwRCxJQUFJLGtCQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNqQixPQUFPLEtBQUssQ0FBQztJQUVmLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRWxDLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNuQixJQUFJLENBQUMsR0FBVyxLQUFLLENBQUMsS0FBSyxFQUFFO1FBQzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xELE1BQUs7U0FDTjtLQUNGO0lBRUQsT0FBTyxNQUFNO0FBQ2YsQ0FBQztBQUdELE1BQU07QUFDTixJQUFNLFdBQVcsR0FBVyxZQUFZO0FBRXhDOzs7Ozs7R0FNRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVksRUFBRSxPQUFhLElBQWEsVUFBRyxJQUFJLENBQUMscUJBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBUyxFQUFFLENBQVM7SUFDdkksSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sQ0FBQztBQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFMNkQsQ0FLN0Q7QUFHUjtJQUFBO0lBb1BBLENBQUM7SUFoUEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F5Qkc7SUFDSSxZQUFFLEdBQVQsVUFBVSxJQUFZLEVBQUUsS0FBVSxFQUFFLElBQVU7UUFDNUMsSUFBSSxDQUFDLGtCQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sU0FBUyxDQUFDLHVEQUF1RCxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxNQUFNLEdBQVksS0FBSztRQUUzQixJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxPQUFPO29CQUNWLE1BQU0sR0FBRyxrQkFBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3pCLE1BQUs7Z0JBQ1AsS0FBSyxTQUFTO29CQUNaLE1BQU0sR0FBRyxDQUFDLGtCQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDMUIsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsTUFBTSxHQUFHLGtCQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDMUIsTUFBSztnQkFDUCxLQUFLLE9BQU87b0JBQ1YsTUFBTSxHQUFHLGtCQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDekIsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsTUFBTSxHQUFHLGtCQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDMUIsTUFBSztnQkFDUCxLQUFLLFNBQVM7b0JBQ1osTUFBTSxHQUFHLGtCQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsTUFBSztnQkFDUCxLQUFLLE9BQU87b0JBQ1YsTUFBTSxHQUFHLGtCQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDekIsTUFBSztnQkFDUCxLQUFLLFNBQVM7b0JBQ1osTUFBTSxHQUFHLGtCQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsTUFBSztnQkFDUCxLQUFLLE1BQU07b0JBQ1QsTUFBTSxHQUFHLGtCQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDeEIsTUFBSztnQkFDUCxLQUFLLE9BQU87b0JBQ1YsTUFBTSxHQUFHLGtCQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDekIsTUFBSztnQkFDUCxLQUFLLElBQUk7b0JBQ1AsSUFBSSxrQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0JBQ3JCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDZixJQUFJLGtCQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNuQiwwQkFBMEI7d0JBQzFCLElBQUksTUFBTSxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLEtBQUssR0FBRyxrQkFBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO3dCQUN4QyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7cUJBQ2hDO29CQUNELE1BQUs7Z0JBQ1AsS0FBSyxTQUFTO29CQUNaLElBQUksa0JBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGtCQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ3ZFLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUM3RCxNQUFLO2dCQUNQLEtBQUssS0FBSztvQkFDUixJQUFJLGtCQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDbEIsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQztvQkFDNUIsTUFBSztnQkFDUCxLQUFLLEtBQUs7b0JBQ1IsSUFBSSxrQkFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUM7b0JBQzVCLE1BQUs7Z0JBQ1AsS0FBSyxXQUFXO29CQUNkLElBQUksa0JBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNsQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO29CQUNwQyxNQUFLO2dCQUNQLEtBQUssV0FBVztvQkFDZCxJQUFJLGtCQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDbEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztvQkFDcEMsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsSUFBSSxrQkFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUM7d0JBQ3hELE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSTtvQkFDL0IsTUFBSztnQkFDUDtvQkFDRSxhQUFhO29CQUNiLE1BQU0sR0FBRyxrQkFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBQyxDQUFDLEtBQUssQ0FBQyxrQkFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO2FBQ3JEO1NBQ0Y7YUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUMxQixNQUFNLEdBQUcsa0JBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDekIsa0JBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUMsa0JBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDbkQ7UUFFRCxPQUFPLE1BQU07SUFDZixDQUFDO0lBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EyQ0c7SUFDSSxlQUFLLEdBQVosVUFBYSxLQUFlLEVBQUUsSUFBYyxFQUFFLGVBQXlCO1FBQ3JFLElBQUksQ0FBQyxrQkFBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JELE1BQU0sU0FBUyxDQUFDLGtFQUFrRSxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxLQUFhLEVBQ2YsT0FBaUIsRUFDakIsS0FBVSxFQUNWLEdBQUcsR0FBVztZQUNaLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzVCO1FBRUgsS0FBSyxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3BDLFNBQVE7WUFDVixPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsa0JBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUMzQixTQUFRO1lBRVYsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBRW5DLElBQUksSUFBSSxTQUFLLEVBQUUsUUFBUSxTQUFRLEVBQUUsR0FBRyxTQUFRO1lBRTVDLGNBQWM7WUFDZCxJQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksa0JBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUc7Z0JBQ3BELEdBQUcsR0FBRyxNQUFNLENBQUMsa0JBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBRSxDQUFDO2dCQUM1RixHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUs7Z0JBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRztnQkFDdkIsSUFBSSxlQUFlLEVBQUU7b0JBQ25CLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRztvQkFDYixNQUFLO2lCQUNOO3FCQUFNO29CQUNMLFNBQVE7aUJBQ1Q7YUFDRjtZQUVELElBQUksa0JBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNsQixTQUFRO1lBRVYsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUN4QiwyQkFBMkI7Z0JBQzNCLElBQUksUUFBUSxLQUFLLFNBQVM7b0JBQ3hCLFNBQVE7Z0JBRVYsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3hCLGtCQUFrQjtnQkFDbEIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQyxJQUFJLEdBQUc7d0JBQ0wsR0FBRyxFQUFFLGtCQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7cUJBQ2xDO2lCQUNGO2dCQUVELElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRzt3QkFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO3FCQUNkO2lCQUNGO2dCQUVELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM3QyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFO3dCQUMvQixLQUFLO3dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO3FCQUNkLENBQUM7b0JBRUYsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLO29CQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7b0JBQ3ZCLE1BQUs7aUJBQ047YUFDRjtZQUVELHFCQUFxQjtZQUNyQixJQUFJLGVBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRztnQkFDYixNQUFLO2FBQ047U0FDRjtRQUVELE9BQU8sR0FBRztJQUNaLENBQUM7SUFqUE0saUJBQU8sR0FBVyxhQUFhO0lBa1B4QyxnQkFBQztDQUFBO0FBRUQscUJBQWUsU0FBUyIsImZpbGUiOiJ2YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdmFsaWRhdG9yLnRzXCIpO1xuIiwiaW50ZXJmYWNlIFByb3BlcnR5IHtcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG5jb25zdCBtZXNzYWdlczogUHJvcGVydHkgPSB7XHJcbiAgb2JqZWN0SWQ6ICd7JGZpZWxkfSBpcyBub3QgYSB2YWxpZCBPYmplY3RJZCcsXHJcbiAgZW1haWw6ICd7JGZpZWxkfSBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyxcclxuICBhbHBoYTogJ3skZmllbGR9IGNvbnRhaW5zIG5vbi1sZXR0ZXIgY2hhcmFjdGVycycsXHJcbiAgYWxwaGFOdW06ICd7JGZpZWxkfSBjb250YWlucyBub24gYWxwaGEtbnVtZXJpYyBjaGFyYWN0ZXJzJyxcclxuICBhbHBoYURhc2g6ICd7JGZpZWxkfSBtdXN0IGJlIGFscGhhLW51bWVyaWMsIGRhc2gsIHVuZGVyc2NvcmUnLFxyXG4gIGNoczogJ3skZmllbGR9IG11c3QgYmUgY2hpbmVzZScsXHJcbiAgY2hzQWxwaGE6ICd7JGZpZWxkfSBtdXN0IGJlIGNoaW5lc2Ugb3IgYWxwaGEnLFxyXG4gIGNoc0FscGhhTnVtOiAneyRmaWVsZH0gbXVzdCBiZSBjaGluZXNlLGFscGhhLW51bWVyaWMnLFxyXG4gIGNoc0Rhc2g6ICd7JGZpZWxkfSBtdXN0IGJlIGNoaW5lc2UsYWxwaGEtbnVtZXJpYyx1bmRlcnNjb3JlLCBkYXNoJyxcclxuICB1cmw6ICd7JGZpZWxkfSBpcyBub3QgYSB2YWxpZCB1cmwnLFxyXG4gIGRhdGU6ICd7JGZpZWxkfSBpcyBub3QgYSB2YWxpZCBkYXRlJyxcclxuICByZXF1aXJlOiAneyRmaWVsZH0gaXMgcmVxdWlyZWQnLFxyXG4gIG5vdEVtcHR5OiAneyRmaWVsZH0gaXMgY2FuIG5vdCBiZSBlbXB0eScsXHJcbiAgYXJyYXk6ICd7JGZpZWxkfSBtdXN0IGJlIGEgYXJyYXknLFxyXG4gIG51bWJlcjogJ3skZmllbGR9IG11c3QgYmUgbnVtZXJpYycsXHJcbiAgaW50ZWdlcjogJ3skZmllbGR9IG11c3QgYmUgaW50ZWdlcicsXHJcbiAgZmxvYXQ6ICd7JGZpZWxkfSBtdXN0IGJlIGZsb2F0JyxcclxuICBib29sZWFuOiAneyRmaWVsZH0gbXVzdCBiZSBib29sZWFuJyxcclxuICBpbjogJ3skZmllbGR9IG11c3QgYmUgaW4geyRydWxlfScsXHJcbiAgYmV0d2VlbjogJ3skZmllbGR9IG11c3QgYmV0d2VlbiB7JG1pbn0gLSB7JG1heH0nLFxyXG4gIGxlbmd0aDogJ3NpemUgb2YgeyRmaWVsZH0gbXVzdCBiZSB7JHJ1bGV9JyxcclxuICBtYXg6ICdtYXggc2l6ZSBvZiB7JGZpZWxkfSBtdXN0IGJlIHskcnVsZX0nLFxyXG4gIG1pbjogJ21pbiBzaXplIG9mIHskZmllbGR9IG11c3QgYmUgeyRydWxlfScsXHJcbiAgbWluTGVuZ3RoOiAnbGVuZ3RoIG9mIHskZmllbGR9IG11c3QgYmUgZ3JlYXRlciB0aGFuIHskcnVsZX0gY2hhcmFjdGVycycsXHJcbiAgbWF4TGVuZ3RoOiAnbGVuZ3RoIG9mIHskZmllbGR9IG11c3QgYmUgbGVzcyB0aGFuIHskcnVsZX0gY2hhcmFjdGVycydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXMiLCJpbnRlcmZhY2UgUHJvcGVydHkge1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55XHJcbn1cclxuXHJcbmNvbnN0IHJ1bGVzOiBQcm9wZXJ0eSA9IHtcclxuICAvL21vbmdvZGIgX2lkXHJcbiAgb2JqZWN0SWQ6IC9eWzAtOWEtZkEtRl17MjR9JC8sXHJcblxyXG4gIGVtYWlsOiAvXltcXHctXSsoXFwuW1xcdy1dKykqQFtcXHctXSsoXFwuW1xcdy1dKykrJC8sXHJcblxyXG4gIGFscGhhOiAvXltBLVphLXpdKyQvLFxyXG5cclxuICBhbHBoYU51bTogL15bQS1aYS16MC05XSskLyxcclxuXHJcbiAgYWxwaGFEYXNoOiAvXltBLVphLXowLTlcXC1cXF9dKyQvLFxyXG5cclxuICBjaHM6IC9eW1xcdTRFMDAtXFx1OUZBNVxcdUY5MDAtXFx1RkEyRF0rJC8sXHJcblxyXG4gIGNoc0FscGhhOiAvXltcXHU0RTAwLVxcdTlGQTVcXHVGOTAwLVxcdUZBMkRhLXpBLVpdKyQvLFxyXG5cclxuICBjaHNBbHBoYU51bTogL15bXFx1NEUwMC1cXHU5RkE1XFx1RjkwMC1cXHVGQTJEYS16QS1aMC05XSskLyxcclxuXHJcbiAgY2hzRGFzaDogL15bXFx1NEUwMC1cXHU5RkE1XFx1RjkwMC1cXHVGQTJEQS1aYS16MC05XFwtXFxfXSskLyxcclxuXHJcbiAgdXJsOiAvXihodHRwKD86fHMpXFw6KSpcXC9cXC8oW15cXC9dKykvLFxyXG5cclxuICBkYXRlOiAvXlxcZHs0fSgtfFxcLylcXGR7MSwyfSgtfFxcLylcXGR7MSwyfSQvXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bGVzIiwiXHJcbi8v57yT5a2YIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcclxuY29uc3QgVE9TVFJJTkcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXHJcblxyXG4vL3RydWUgdmFsdWVzXHJcbmNvbnN0IFRSVUVfVkFMVUVTID0gW3RydWUsIDEsICcxJywgJ3RydWUnXVxyXG5cclxuLy9mYWxzZSB2YWx1ZXNcclxuY29uc3QgRkFMU0VfVkFMSUVTID0gW2ZhbHNlLCAwLCAnMCcsICdmYWxzZSddXHJcblxyXG4vL2Jvb2xlYW4gdmFsdWVzXHJcbmNvbnN0IEJPT0xFQU5fVkFMVUVTID0gWy4uLlRSVUVfVkFMVUVTLCAuLi5GQUxTRV9WQUxJRVNdXHJcblxyXG4vL3ByaW1pdGl2ZSB2YWx1ZXNcclxuY29uc3QgUFJJTUlUSVZFX1ZBTFVFUzogc3RyaW5nW10gPSBbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbicsICdzeW1ib2wnXVxyXG5cclxuXHJcbi8qKlxyXG4gKiDmraPliJnlr7nosaFcclxuICogQHBhcmFtIHZhbHVlIFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzUmVnZXhwID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IFRPU1RSSU5HLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiDljLnphY3mraPliJnooajovr7lvI9cclxuICogQHBhcmFtIHJlZyBcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBcclxuICovXHJcbmNvbnN0IHJlZ2V4ID0gKHJlZzogUmVnRXhwLCB2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKCFpc1JlZ2V4cChyZWcpKSB7XHJcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1tWQUxJREFURSBFUlJPUl06IFRoZSBwYXJhbWV0ZXIgcmVnIG11c3QgYmUgYSBSZWdFeHAgb2JqZWN0JylcclxuICB9XHJcbiAgcmV0dXJuICEhcmVnLnRlc3QodmFsdWUpXHJcbn1cclxuXHJcblxyXG4vKipcclxuICog5a2X56ym5LiyXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gXHJcbiAqL1xyXG5jb25zdCBpc1N0cmluZyA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXHJcblxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS8oOWFpeeahOWAvOaYr+WQpuS4uuepulxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNFbXB0eSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKFxyXG4gICAgdmFsdWUgPT09IHZvaWQgMCB8fFxyXG4gICAgdmFsdWUgPT09IG51bGwgfHxcclxuICAgIChpc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkgXHJcbiAgKVxyXG4gICAgcmV0dXJuIHRydWVcclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBOYU5cclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBcclxuICovXHJcbmNvbnN0IGlzTmFOID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHZhbHVlICE9PSB2YWx1ZVxyXG5cclxuXHJcbi8qKlxyXG4gKiDmlbDlgLxcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBcclxuICovXHJcbmNvbnN0IGlzTnVtYmVyID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHtcclxuICB2YWx1ZSA9IE51bWJlcih2YWx1ZSlcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpXHJcbn1cclxuXHJcblxyXG4vKipcclxuICog5pW05pWw5YC8XHJcbiAqIEBwYXJhbSB2YWx1ZSBcclxuICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAqL1xyXG5jb25zdCBpc0ludGVnZXIgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gaXNOdW1iZXIodmFsdWUpICYmIChOdW1iZXIodmFsdWUpICUgMSA9PT0gMClcclxuXHJcblxyXG4vKipcclxuICog5rWu54K55pWw5YC8XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gXHJcbiAqL1xyXG5jb25zdCBpc0Zsb2F0ID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+ICt2YWx1ZSAmJiB2YWx1ZSAhPT0gKHZhbHVlIHwgMClcclxuXHJcblxyXG4vKipcclxuICog5biD5bCU5YC8XHJcbiAqIEBwYXJhbSB2YWx1ZSBcclxuICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAqL1xyXG5jb25zdCBpc0Jvb2xlYW4gPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gIH1cclxuICByZXR1cm4gISF+Qk9PTEVBTl9WQUxVRVMuaW5kZXhPZih2YWx1ZSlcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDnnJ/lgLxcclxuICogQHBhcmFtIHZhbHVlIFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzVHJ1ZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgfVxyXG4gIHJldHVybiAhIX5UUlVFX1ZBTFVFUy5pbmRleE9mKHZhbHVlKVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOWBh+WAvFxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNGYWxzZSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgfVxyXG4gIHJldHVybiAhIX5GQUxTRV9WQUxJRVMuaW5kZXhPZih2YWx1ZSlcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDlr7nosaFcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBcclxuICovXHJcbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gdmFsdWUgIT09IG51bGwgJiYgVE9TVFJJTkcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcblxyXG5cclxuLyoqXHJcbiAqIOaVsOe7hFxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBcclxuICovXHJcbmNvbnN0IGlzQXJyYXkgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gQXJyYXkuaXNBcnJheS5jYWxsKG51bGwsIHZhbHVlKVxyXG5cclxuXHJcbi8qKlxyXG4gKiDmlrnms5Uv5Ye95pWwXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gXHJcbiAqL1xyXG5jb25zdCBpc0Z1bmN0aW9uID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiDln7rmnKznsbvlnotcclxuICogQHBhcmFtIHZhbHVlIFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+ICEhflBSSU1JVElWRV9WQUxVRVMuaW5kZXhPZigodHlwZW9mIHZhbHVlKSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaXNSZWdleHAsXHJcbiAgcmVnZXgsXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNFbXB0eSxcclxuICBpc05hTixcclxuICBpc051bWJlcixcclxuICBpc0ludGVnZXIsXHJcbiAgaXNGbG9hdCxcclxuICBpc0Jvb2xlYW4sXHJcbiAgaXNUcnVlLFxyXG4gIGlzRmFsc2UsXHJcbiAgaXNQbGFpbk9iamVjdCxcclxuICBpc0FycmF5LFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNQcmltaXRpdmVcclxufSIsImltcG9ydCBfIGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCBNIGZyb20gJy4vbWVzc2FnZXMnXHJcbmltcG9ydCBSIGZyb20gJy4vcnVsZXMnXHJcblxyXG4vL+WGhee9ruinhOWImVxyXG5jb25zdCBCVUlMVF9JTl9SVUxFUyA9IFsnb2JqZWN0SWQnLCAnZW1haWwnLCAnYWxwaGEnLCAnYWxwaGFOdW0nLCAnYWxwaGFEYXNoJywgJ2NocycsICdjaHNBbHBoYScsICdjaHNBbHBoYU51bScsICdjaHNEYXNoJywgJ3VybCcsICdkYXRlJywgJ2FycmF5JywgJ3N0cmluZycsICdudW1iZXInLCAnaW50ZWdlcicsICdmbG9hdCcsICdib29sZWFuJywgJ3RydWUnLCAnZmFsc2UnLCAncmVxdWlyZScsICdlbXB0eScsICdpbicsICdiZXR3ZWVuJywgJ21pbicsICdtYXgnLCAnbGVuZ3RoJywgJ21pbkxlbmd0aCcsICdtYXhMZW5ndGgnXVxyXG5cclxuLy/nvJPlrZhoYXNPd25Qcm9wZXJ0eVxyXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcclxuXHJcbmludGVyZmFjZSBQcm9wZXJ0eSB7XHJcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnlcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlc3VsdCB7XHJcbiAgc3RhdHVzOiBib29sZWFuLFxyXG4gIG1zZz86IHN0cmluZyxcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOWxnuaAp+ajgOa1i1xyXG4gKiBAcGFyYW0gbmFtZSBcclxuICogQHBhcmFtIG9iaiBcclxuICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAqL1xyXG5jb25zdCBoYXNPd24gPSAobmFtZTogc3RyaW5nLCBvYmo6IFByb3BlcnR5KTogYm9vbGVhbiA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSlcclxuXHJcblxyXG4vKipcclxuICog6I635Y+W6ZW/5bqmXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBcclxuICovXHJcbmNvbnN0IGdldExlbiA9ICh2YWx1ZTogYW55KTogbnVtYmVyID0+IHtcclxuICBpZiAoXy5pc0FycmF5KHZhbHVlKSlcclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGhcclxuXHJcbiAgcmV0dXJuIF8uaXNTdHJpbmcodmFsdWUpID8gKHZhbHVlLnRyaW0oKSkubGVuZ3RoIDogMFxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOagueaNrnBhdGjot6/lvoTku45vYmplY3TkuK3lj5blgLxcclxuICogZWcuXHJcbiAqIGxldCBvYmogPSB7XHJcbiAqICBhIDoge1xyXG4gKiAgICBiIDoge1xyXG4gKiAgICAgIGMgOiAxXHJcbiAqICAgIH1cclxuICogIH0sXHJcbiAqICBkIDogW3tjIDogMn1dIFxyXG4gKiB9XHJcbiAqIGdldE9iamVjdFZhbHVlKCdhLmIuYycsIG9iaikgPT4gMVxyXG4gKiBnZXRPYmplY3RWYWx1ZSgnYS5kLjAuYycsIG9iaikgPT4gMlxyXG4gKiBnZXRPYmplY3RWYWx1ZSgnYS5kLjAnLCBvYmopID0+IHtjOiAyfVxyXG4gKiBcclxuICogQHBhcmFtIG5hbWUgXHJcbiAqIEBwYXJhbSBvYmplY3QgXHJcbiAqIEByZXR1cm5zIHtBbnl9XHJcbiAqL1xyXG5jb25zdCBnZXRPYmplY3RWYWx1ZSA9IChuYW1lOiBzdHJpbmcsIG9iamVjdDogUHJvcGVydHkpOiBhbnkgPT4ge1xyXG4gIGlmIChfLmlzRW1wdHkobmFtZSkpXHJcbiAgICByZXR1cm4gdm9pZCAwXHJcblxyXG4gIGxldCBwYXRoczogYW55W10gPSBuYW1lLnNwbGl0KCcuJylcclxuXHJcbiAgd2hpbGUgKHBhdGhzLmxlbmd0aCkge1xyXG4gICAgbGV0IGs6IHN0cmluZyA9IHBhdGhzLnNoaWZ0KClcclxuICAgIG9iamVjdCA9IG9iamVjdFtrXVxyXG4gICAgaWYgKCFfLmlzUGxhaW5PYmplY3Qob2JqZWN0KSAmJiAhXy5pc0FycmF5KG9iamVjdCkpIHtcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBvYmplY3RcclxufVxyXG5cclxuXHJcbi8v5raI5oGv5qih5p2/XHJcbmNvbnN0IE1TR19UUExfUkVHOiBSZWdFeHAgPSAve1xcJChcXHcrKX0vZ1xyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS/oeaBr1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcnVsZSBcclxuICogQHBhcmFtIHtBbnl9IHJlcGxhY2VcclxuICogQHJldHVybnMge1N0cmluZ30gXHJcbiAqL1xyXG5jb25zdCBnZXRNc2cgPSAobXNnOiBzdHJpbmcsIHJ1bGU6IHN0cmluZywgcmVwbGFjZT86IGFueSk6IHN0cmluZyA9PiBtc2cgfHwgKE1bcnVsZV0gPyBNW3J1bGVdLnJlcGxhY2UoTVNHX1RQTF9SRUcsIChhOiBzdHJpbmcsIGY6IHN0cmluZykgPT4ge1xyXG4gIGlmIChyZXBsYWNlICYmIHJlcGxhY2VbZl0gIT09IHZvaWQgMCkge1xyXG4gICAgcmV0dXJuIHJlcGxhY2VbZl1cclxuICB9XHJcbiAgcmV0dXJuIGZcclxufSkgOiAnJylcclxuXHJcblxyXG5jbGFzcyBWYWxpZGF0b3Ige1xyXG5cclxuICBzdGF0aWMgdmVyc2lvbjogc3RyaW5nID0gJ19fVkVSU0lPTl9fJ1xyXG5cclxuICAvKipcclxuICAgKiDpqozor4HmmK/lkKbmmK/pooTmnJ/op4TliJnnmoTlgLxcclxuICAgKiBcclxuICAgKiDlhoXnva7mlrnms5VcclxuICAgKiBWYWxpZGF0ZS5pcygnbnVtYmVyJywgMClcclxuICAgKiBWYWxpZGF0ZS5pcygnaW4nLCAxLCBbMSwyLDNdKVxyXG4gICAqIFZhbGlkYXRlLmlzKCdiZXR3ZWVuJywgMywge21pbjoxLCBtYXg6NH0pXHJcbiAgICogVmFsaWRhdGUuaXMoJ2VtcHR5JywgW10pXHJcbiAgICogVmFsaWRhdGUuaXMoJ2VtcHR5JywgJ3Ntb2hhbicpXHJcbiAgICogXHJcbiAgICog5YaF572u5q2j5YiZ6KeE5YiZXHJcbiAgICogVmFsaWRhdGUuaXMoJ2VtYWlsJywgJ3Ntb2hhbkAxNjMuY29tJylcclxuICAgKiBWYWxpZGF0ZS5pcygnb2JqZWN0SWQnLCAnNWFjYTI5ZGZjNjIwNTEzNjhmYzFkMDBhJylcclxuICAgKiBcclxuICAgKiDoh6rlrprkuYnop4TliJlcclxuICAgKiAxLuS9v+eUqOato+WImVxyXG4gICAqIFZhbGlkYXRlLmlzKCduaWNrJywgJ3Ntb2hhbicsIC9eKFxcdyl7MiwxMH0kLykgXHJcbiAgICogMi7lh73mlbDov5Tlm57lgLxcclxuICAgKiBWYWxpZGF0ZS5pcygndW5pcXVlJywgJ3Ntb2hhbicsIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuIHRydWUgfSlcclxuICAgKiBcclxuICAgKiBAcGFyYW0gbmFtZSDop4TliJnlkI3np7BcclxuICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICogQHBhcmFtIHJ1bGUgW+WPr+mAiV0g5YW35L2T6KeE5YiZXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICogXHJcbiAgICovXHJcbiAgc3RhdGljIGlzKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgcnVsZT86IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFfLmlzU3RyaW5nKG5hbWUpIHx8IF8uaXNFbXB0eShuYW1lKSkge1xyXG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1tWQUxJREFURSBFUlJPUl06IFRoZSBwYXJhbWV0ZXIgbmFtZSBtdXN0IGJlIGEgc3RyaW5nJylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBpZiAoISF+QlVJTFRfSU5fUlVMRVMuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlICdlbXB0eSc6XHJcbiAgICAgICAgICByZXN1bHQgPSBfLmlzRW1wdHkodmFsdWUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ3JlcXVpcmUnOlxyXG4gICAgICAgICAgcmVzdWx0ID0gIV8uaXNFbXB0eSh2YWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgIHJlc3VsdCA9IF8uaXNTdHJpbmcodmFsdWUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcclxuICAgICAgICAgIHJlc3VsdCA9IF8uaXNBcnJheSh2YWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgIHJlc3VsdCA9IF8uaXNOdW1iZXIodmFsdWUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxyXG4gICAgICAgICAgcmVzdWx0ID0gXy5pc0ludGVnZXIodmFsdWUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2Zsb2F0JzpcclxuICAgICAgICAgIHJlc3VsdCA9IF8uaXNGbG9hdCh2YWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICByZXN1bHQgPSBfLmlzQm9vbGVhbih2YWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAndHJ1ZSc6XHJcbiAgICAgICAgICByZXN1bHQgPSBfLmlzVHJ1ZSh2YWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnZmFsc2UnOlxyXG4gICAgICAgICAgcmVzdWx0ID0gXy5pc0ZhbHNlKHZhbHVlKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdpbic6XHJcbiAgICAgICAgICBpZiAoXy5pc1ByaW1pdGl2ZShydWxlKSlcclxuICAgICAgICAgICAgcnVsZSA9IFtydWxlXVxyXG4gICAgICAgICAgaWYgKF8uaXNBcnJheShydWxlKSkge1xyXG4gICAgICAgICAgICAvL+WmguaenOaYr+aVsOWtl++8jOWwhuexu+S8vOS6jiAnMScgaW4gWzFd5Yy56YWN5YiwXHJcbiAgICAgICAgICAgIGxldCBfdmFsdWU6IG51bWJlciA9IE51bWJlcih2YWx1ZSlcclxuICAgICAgICAgICAgdmFsdWUgPSBfLmlzTmFOKF92YWx1ZSkgPyB2YWx1ZSA6IF92YWx1ZVxyXG4gICAgICAgICAgICByZXN1bHQgPSAhIX5ydWxlLmluZGV4T2YodmFsdWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ2JldHdlZW4nOlxyXG4gICAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChydWxlKSAmJiBfLmlzTnVtYmVyKHJ1bGUubWluKSAmJiBfLmlzTnVtYmVyKHJ1bGUubWF4KSlcclxuICAgICAgICAgICAgcmVzdWx0ID0gKHZhbHVlIC0gcnVsZS5taW4pID49IDAgJiYgKHZhbHVlIC0gcnVsZS5tYXgpIDw9IDBcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbWluJzpcclxuICAgICAgICAgIGlmIChfLmlzTnVtYmVyKHJ1bGUpKVxyXG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZSAtIHJ1bGUgPj0gMFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdtYXgnOlxyXG4gICAgICAgICAgaWYgKF8uaXNOdW1iZXIocnVsZSkpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlIC0gcnVsZSA8PSAwXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ21pbkxlbmd0aCc6XHJcbiAgICAgICAgICBpZiAoXy5pc051bWJlcihydWxlKSlcclxuICAgICAgICAgICAgcmVzdWx0ID0gZ2V0TGVuKHZhbHVlKSAtIHJ1bGUgPj0gMFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdtYXhMZW5ndGgnOlxyXG4gICAgICAgICAgaWYgKF8uaXNOdW1iZXIocnVsZSkpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGdldExlbih2YWx1ZSkgLSBydWxlIDw9IDBcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcclxuICAgICAgICAgIGlmIChfLmlzTnVtYmVyKHJ1bGUpICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGdldExlbih2YWx1ZSkgPiBydWxlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvL+S9v+eUqOmihOWumuS5ieeahOato+WImeihqOi+vuW8j1xyXG4gICAgICAgICAgcmVzdWx0ID0gUltuYW1lXSA/IF8ucmVnZXgoUltuYW1lXSwgdmFsdWUpIDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChydWxlICE9PSB2b2lkIDApIHtcclxuICAgICAgcmVzdWx0ID0gXy5pc1JlZ2V4cChydWxlKSA/XHJcbiAgICAgICAgXy5yZWdleChydWxlLCB2YWx1ZSlcclxuICAgICAgICA6IChfLmlzRnVuY3Rpb24ocnVsZSkgPyAhIShydWxlKHZhbHVlKSkgOiBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICog5qOA5p+l5o+S5YWl5a+56LGh5piv5ZCm5ZKM5Lyg5YWl6KeE5YiZ5Yy56YWNXHJcbiAgICogXHJcbiAgICogZWcuXHJcbiAgICoge1xyXG4gICAqICAgIGVtYWlsIDoge1xyXG4gICAqICAgICAgcmVxdWlyZSA6ICdlbWFpbCBpcyByZXF1aXJlZCcsXHJcbiAgICogICAgICBlbWFpbCA6ICdpbnZhbGlkIGVtYWlsJyxcclxuICAgKiAgICB9LFxyXG4gICAqICAgIFxyXG4gICAqICAgIGFnZToge1xyXG4gICAqICAgICAgIHJlcXVpcmUgOiAnYWdlIGlzIHJlcXVpcmVkJyxcclxuICAgKiAgICAgICBpbnRlZ2VyIDogJ2FnZSBtdXN0IGJlIGFuIGludGVnZXInLFxyXG4gICAqICAgICAgIGJldHdlZW4gOiB7XHJcbiAgICogICAgICAgICBtaW4gOiAyMCxcclxuICAgKiAgICAgICAgIG1heCA6IDMwLFxyXG4gICAqICAgICAgICAgbXNnIDogJ2FnZSBtdXN0IGJlIGJldHdlZW4gMjAtMzAgeWVhcnMgb2xkJ1xyXG4gICAqICAgICAgIH0sIFxyXG4gICAqICAgIH0sXHJcbiAgICogXHJcbiAgICogICAgZ2VuZGVyIDoge1xyXG4gICAqICAgICAgaW4gOiB7XHJcbiAgICogICAgICAgIHJ1bGUgOiBbJ21hbGUnLCAnZmVtYWxlJ10sXHJcbiAgICogICAgICAgIG1zZyA6ICdnZW5kZXIgY2FuIG9ubHkgYmUgbWFsZSBvciBmZW1hbGUnXHJcbiAgICogICAgICB9XHJcbiAgICogICAgfSxcclxuICAgKiBcclxuICAgKiAgICAgbmljayA6IHtcclxuICAgKiAgICAgICByZXF1aXJlIDogJ2VtYWlsIGlzIHJlcXVpcmVkJyxcclxuICAgKiAgICAgICBuaWNrIDoge1xyXG4gICAqICAgICAgICAgcnVsZSA6IC9eKFxcdyl7MiwyMH0kLyxcclxuICAgKiAgICAgICAgIG1zZyA6ICduaWNrbmFtZSBiZXR3ZWVuIDItMjAgY2hhcmFjdGVycydcclxuICAgKiAgICAgICB9XHJcbiAgICogICAgIH1cclxuICAgKiB9XHJcbiAgICogXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHJ1bGVzIOinhOWImVxyXG4gICAqIEBwYXJhbSBkYXRhIOW+hemqjOivgeaVsOaNruWMhVxyXG4gICAqIEBwYXJhbSBleGl0SW1tZWRpYXRlbHkg5piv5ZCm6YGH5Yiw6ZSZ6K+v5bCx56uL5Y2z6YCA5Ye6XHJcbiAgICogMS4gZXhpdEltbWVkaWF0ZWx5ID0gdHJ1ZTog5LiA5pem6YGH5Yiw5qCh6aqM5aSx6LSl5bCx56uL5Y2z6L+U5Zue5aSx6LSl5L+h5oGvXHJcbiAgICogMi4gZXhpdEltbWVkaWF0ZWx5ID0gZmFsc2U6IOW+heWFqOmDqOinhOWImeagoemqjOWujOavleaJjei/lOWbnlxyXG4gICAqL1xyXG4gIHN0YXRpYyBjaGVjayhydWxlczogUHJvcGVydHksIGRhdGE6IFByb3BlcnR5LCBleGl0SW1tZWRpYXRlbHk/OiBib29sZWFuKTogUmVzdWx0IHtcclxuICAgIGlmICghXy5pc1BsYWluT2JqZWN0KHJ1bGVzKSB8fCAhXy5pc1BsYWluT2JqZWN0KGRhdGEpKSB7XHJcbiAgICAgIHRocm93IFR5cGVFcnJvcignW1ZBTElEQVRFIEVSUk9SXTogVGhlIHBhcmFtZXRlciBydWxlcyBvciBkYXRhICBtdXN0IGJlIGFuIG9iamVjdCcpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpZWxkOiBzdHJpbmcsXHJcbiAgICAgIHJ1bGVNYXA6IFByb3BlcnR5LFxyXG4gICAgICB2YWx1ZTogYW55LFxyXG4gICAgICByZXM6IFJlc3VsdCA9IHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgZmllbGRzOiBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgICAgIH1cclxuXHJcbiAgICBmb3IgKGZpZWxkIGluIHJ1bGVzKSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChydWxlcywgZmllbGQpKVxyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIHJ1bGVNYXAgPSBydWxlc1tmaWVsZF1cclxuICAgICAgaWYgKCFfLmlzUGxhaW5PYmplY3QocnVsZU1hcCkpXHJcbiAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgIHZhbHVlID0gZ2V0T2JqZWN0VmFsdWUoZmllbGQsIGRhdGEpXHJcblxyXG4gICAgICBsZXQgcnVsZTogYW55LCBydWxlTmFtZTogc3RyaW5nLCBtc2c6IHN0cmluZ1xyXG5cclxuICAgICAgLy/kvJjlhYjlpITnkIYgcmVxdWlyZVxyXG4gICAgICBpZiAoIGhhc093bigncmVxdWlyZScsIHJ1bGVNYXApICYmIF8uaXNFbXB0eSh2YWx1ZSkgKSB7XHJcbiAgICAgICAgbXNnID0gZ2V0TXNnKF8uaXNTdHJpbmcocnVsZU1hcFsncmVxdWlyZSddKSA/IHJ1bGVNYXBbJ3JlcXVpcmUnXSA6ICcnLCAncmVxdWlyZScsIHsgZmllbGQgfSlcclxuICAgICAgICByZXMuc3RhdHVzID0gZmFsc2VcclxuICAgICAgICByZXMuZmllbGRzW2ZpZWxkXSA9IG1zZ1xyXG4gICAgICAgIGlmIChleGl0SW1tZWRpYXRlbHkpIHtcclxuICAgICAgICAgIHJlcy5tc2cgPSBtc2dcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoXy5pc0VtcHR5KHZhbHVlKSlcclxuICAgICAgICBjb250aW51ZVxyXG5cclxuICAgICAgZm9yIChydWxlTmFtZSBpbiBydWxlTWFwKSB7XHJcbiAgICAgICAgLy/mjpLpmaQgcmVxdWlyZXxhcnJheXxub3RFbXB0eVxyXG4gICAgICAgIGlmIChydWxlTmFtZSA9PT0gJ3JlcXVpcmUnKVxyXG4gICAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdXHJcbiAgICAgICAgLy/nu5/kuIDlsIZydWxl5aSE55CG5Li6b2JqZWN0XHJcbiAgICAgICAgaWYgKCFydWxlIHx8ICFfLmlzUGxhaW5PYmplY3QocnVsZSkpIHtcclxuICAgICAgICAgIHJ1bGUgPSB7XHJcbiAgICAgICAgICAgIG1zZzogXy5pc1N0cmluZyhydWxlKSA/IHJ1bGUgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJ1bGVOYW1lID09PSAnYmV0d2VlbicpIHtcclxuICAgICAgICAgIHJ1bGUucnVsZSA9IHtcclxuICAgICAgICAgICAgbWluOiBydWxlLm1pbixcclxuICAgICAgICAgICAgbWF4OiBydWxlLm1heFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFWYWxpZGF0b3IuaXMocnVsZU5hbWUsIHZhbHVlLCBydWxlLnJ1bGUpKSB7XHJcbiAgICAgICAgICBtc2cgPSBnZXRNc2cocnVsZS5tc2csIHJ1bGVOYW1lLCB7XHJcbiAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICBydWxlOiBydWxlLnJ1bGUsXHJcbiAgICAgICAgICAgIG1pbjogcnVsZS5taW4sXHJcbiAgICAgICAgICAgIG1heDogcnVsZS5tYXhcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgcmVzLnN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgICByZXMuZmllbGRzW2ZpZWxkXSA9IG1zZ1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8v5aaC5p6c6K6+572u5LqG6YGH6ZSZ6Lez5Ye677yM5YiZ5LuF6L+U5Zue5b2T5YmNbXNnXHJcbiAgICAgIGlmIChleGl0SW1tZWRpYXRlbHkgJiYgIXJlcy5zdGF0dXMpIHtcclxuICAgICAgICByZXMubXNnID0gbXNnXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=