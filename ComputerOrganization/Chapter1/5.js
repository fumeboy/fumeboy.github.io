/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ComputerOrganization/Chapter1/5": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/pages/ComputerOrganization/Chapter1/5.page.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/ComputerOrganization/Chapter1/1-5-1.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter1/1-5-1.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/81f-1-5-1.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter1/1-5-2.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter1/1-5-2.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/168-1-5-2.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter1/5.page.ts":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter1/5.page.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\u6BCF 18 \u4E2A\u6708\uFF0C\u96C6\u6210\u7535\u8DEF\u82AF\u7247\u4E0A\u96C6\u6210\u7684\u6676\u4F53\u7BA1\u6570\u5C06\u7FFB\u4E00\u756A'], ['\u6BCF 18 \u4E2A\u6708\uFF0C\u96C6\u6210\u7535\u8DEF\u82AF\u7247\u4E0A\u96C6\u6210\u7684\u6676\u4F53\u7BA1\u6570\u5C06\u7FFB\u4E00\u756A']),
    _templateObject2 = _taggedTemplateLiteral(['\u6BCF 18 \u4E2A\u6708\uFF0C\u96C6\u6210\u7535\u8DEF\u82AF\u7247\u7684\u901F\u5EA6\u5C06\u63D0\u9AD8\u4E00\u500D'], ['\u6BCF 18 \u4E2A\u6708\uFF0C\u96C6\u6210\u7535\u8DEF\u82AF\u7247\u7684\u901F\u5EA6\u5C06\u63D0\u9AD8\u4E00\u500D']),
    _templateObject3 = _taggedTemplateLiteral(['\u96C6\u6210\u7535\u8DEF\u6280\u672F\u4E00\u76F4\u4F1A\u9075\u5FAA\u6469\u5C14\u5B9A\u5F8B\u53D1\u5C55\u4E0B\u53BB'], ['\u96C6\u6210\u7535\u8DEF\u6280\u672F\u4E00\u76F4\u4F1A\u9075\u5FAA\u6469\u5C14\u5B9A\u5F8B\u53D1\u5C55\u4E0B\u53BB']),
    _templateObject4 = _taggedTemplateLiteral(['\u6BCF 18 \u4E2A\u6708\uFF0C\u96C6\u6210\u7535\u8DEF\u82AF\u7247\u7684\u4EF7\u683C\u5C06\u964D\u4F4E\u4E00\u534A'], ['\u6BCF 18 \u4E2A\u6708\uFF0C\u96C6\u6210\u7535\u8DEF\u82AF\u7247\u7684\u4EF7\u683C\u5C06\u964D\u4F4E\u4E00\u534A']),
    _templateObject5 = _taggedTemplateLiteral(['\u6676\u4F53\u7BA1\u3001\u7535\u5B50\u7BA1\u3001SSI\u3001MSI\u3001LSI\u3001ULSI\u3001VLSI'], ['\u6676\u4F53\u7BA1\u3001\u7535\u5B50\u7BA1\u3001SSI\u3001MSI\u3001LSI\u3001ULSI\u3001VLSI']),
    _templateObject6 = _taggedTemplateLiteral(['\u7535\u5B50\u7BA1\u3001\u6676\u4F53\u7BA1\u3001SSI\u3001MSI\u3001LSI\u3001VLSI\u3001ULSI'], ['\u7535\u5B50\u7BA1\u3001\u6676\u4F53\u7BA1\u3001SSI\u3001MSI\u3001LSI\u3001VLSI\u3001ULSI']),
    _templateObject7 = _taggedTemplateLiteral(['\u6676\u4F53\u7BA1\u3001\u7535\u5B50\u7BA1\u3001MSI\u3001SSI\u3001LSI\u3001ULSI\u3001VLSI'], ['\u6676\u4F53\u7BA1\u3001\u7535\u5B50\u7BA1\u3001MSI\u3001SSI\u3001LSI\u3001ULSI\u3001VLSI']),
    _templateObject8 = _taggedTemplateLiteral(['\u64CD\u4F5C\u7CFB\u7EDF\u548C\u8BED\u8A00\u5904\u7406\u7A0B\u5E8F'], ['\u64CD\u4F5C\u7CFB\u7EDF\u548C\u8BED\u8A00\u5904\u7406\u7A0B\u5E8F']),
    _templateObject9 = _taggedTemplateLiteral(['\u7CFB\u7EDF\u8F6F\u4EF6\u548C\u5E94\u7528\u8F6F\u4EF6'], ['\u7CFB\u7EDF\u8F6F\u4EF6\u548C\u5E94\u7528\u8F6F\u4EF6']),
    _templateObject10 = _taggedTemplateLiteral(['\u64CD\u4F5C\u7CFB\u7EDF\u548C\u9AD8\u7EA7\u8BED\u8A00'], ['\u64CD\u4F5C\u7CFB\u7EDF\u548C\u9AD8\u7EA7\u8BED\u8A00']),
    _templateObject11 = _taggedTemplateLiteral(['\u4F4E\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u548C\u9AD8\u7EA7\u8BED\u8A00\u7A0B\u5E8F'], ['\u4F4E\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u548C\u9AD8\u7EA7\u8BED\u8A00\u7A0B\u5E8F']),
    _templateObject12 = _taggedTemplateLiteral(['\u6C47\u7F16\u7A0B\u5E8F'], ['\u6C47\u7F16\u7A0B\u5E8F']),
    _templateObject13 = _taggedTemplateLiteral(['\u7F16\u8BD1\u7A0B\u5E8F'], ['\u7F16\u8BD1\u7A0B\u5E8F']),
    _templateObject14 = _taggedTemplateLiteral(['\u64CD\u4F5C\u7CFB\u7EDF'], ['\u64CD\u4F5C\u7CFB\u7EDF']),
    _templateObject15 = _taggedTemplateLiteral(['\u6587\u5B57\u5904\u7406\u7A0B\u5E8F'], ['\u6587\u5B57\u5904\u7406\u7A0B\u5E8F']),
    _templateObject16 = _taggedTemplateLiteral(['Windows XP'], ['Windows XP']),
    _templateObject17 = _taggedTemplateLiteral(['MS Word'], ['MS Word']),
    _templateObject18 = _taggedTemplateLiteral(['\u91D1\u5C71\u8BCD\u9738'], ['\u91D1\u5C71\u8BCD\u9738']),
    _templateObject19 = _taggedTemplateLiteral(['RealPlayer'], ['RealPlayer']),
    _templateObject20 = _taggedTemplateLiteral(['\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u4F4D\u4E8E\u8BA1\u7B97\u673A\u8F6F\u4EF6\u548C\u786C\u4EF6\u7684\u4EA4\u754C\u9762\u4E0A'], ['\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u4F4D\u4E8E\u8BA1\u7B97\u673A\u8F6F\u4EF6\u548C\u786C\u4EF6\u7684\u4EA4\u754C\u9762\u4E0A']),
    _templateObject21 = _taggedTemplateLiteral(['\u7A0B\u5E8F\u5458\u53EF\u89C1\u5BC4\u5B58\u5668\u7684\u957F\u5EA6\u3001\u529F\u80FD\u4E0E\u7F16\u53F7\u4E0D\u5C5E\u4E8E\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u7684\u5185\u5BB9'], ['\u7A0B\u5E8F\u5458\u53EF\u89C1\u5BC4\u5B58\u5668\u7684\u957F\u5EA6\u3001\u529F\u80FD\u4E0E\u7F16\u53F7\u4E0D\u5C5E\u4E8E\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u7684\u5185\u5BB9']),
    _templateObject22 = _taggedTemplateLiteral(['\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u662F\u6307\u4F4E\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u5458\u6240\u770B\u5230\u7684\u6982\u5FF5\u7ED3\u6784\u548C\u529F\u80FD\u7279\u6027'], ['\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u662F\u6307\u4F4E\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u5458\u6240\u770B\u5230\u7684\u6982\u5FF5\u7ED3\u6784\u548C\u529F\u80FD\u7279\u6027']),
    _templateObject23 = _taggedTemplateLiteral(['\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u7684\u82F1\u6587\u7F29\u5199\u662F ISA'], ['\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u7684\u82F1\u6587\u7F29\u5199\u662F ISA']),
    _templateObject24 = _taggedTemplateLiteral(['\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668'], ['\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668']),
    _templateObject25 = _taggedTemplateLiteral(['\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668\u2014\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A'], ['\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668\u2014\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A']),
    _templateObject26 = _taggedTemplateLiteral(['\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u2014\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668'], ['\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u2014\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668']),
    _templateObject27 = _taggedTemplateLiteral(['\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668'], ['\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u2014\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u2014\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u2014\u673A\u5668\u8BED\u8A00\u673A\u5668']),
    _templateObject28 = _taggedTemplateLiteral(['\u53EF\u7528\u9AD8\u7EA7\u8BED\u8A00\u548C\u4F4E\u7EA7\u8BED\u8A00\u7F16\u5199\u51FA\u529F\u80FD\u7B49\u4EF7\u7684\u7A0B\u5E8F'], ['\u53EF\u7528\u9AD8\u7EA7\u8BED\u8A00\u548C\u4F4E\u7EA7\u8BED\u8A00\u7F16\u5199\u51FA\u529F\u80FD\u7B49\u4EF7\u7684\u7A0B\u5E8F']),
    _templateObject29 = _taggedTemplateLiteral(['\u9AD8\u7EA7\u8BED\u8A00\u548C\u6C47\u7F16\u8BED\u8A00\u6E90\u7A0B\u5E8F\u90FD\u4E0D\u80FD\u5728\u673A\u5668\u4E0A\u76F4\u63A5\u6267\u884C'], ['\u9AD8\u7EA7\u8BED\u8A00\u548C\u6C47\u7F16\u8BED\u8A00\u6E90\u7A0B\u5E8F\u90FD\u4E0D\u80FD\u5728\u673A\u5668\u4E0A\u76F4\u63A5\u6267\u884C']),
    _templateObject30 = _taggedTemplateLiteral(['\u6C47\u7F16\u8BED\u8A00\u662F\u4E00\u79CD\u4E0E\u673A\u5668\u7ED3\u6784\u65E0\u5173\u7684\u7F16\u7A0B\u8BED\u8A00'], ['\u6C47\u7F16\u8BED\u8A00\u662F\u4E00\u79CD\u4E0E\u673A\u5668\u7ED3\u6784\u65E0\u5173\u7684\u7F16\u7A0B\u8BED\u8A00']),
    _templateObject31 = _taggedTemplateLiteral(['\u7F16\u8BD1\u7A0B\u5E8F\u5458\u5FC5\u987B\u4E86\u89E3\u673A\u5668\u7ED3\u6784\u548C\u6307\u4EE4\u7CFB\u7EDF'], ['\u7F16\u8BD1\u7A0B\u5E8F\u5458\u5FC5\u987B\u4E86\u89E3\u673A\u5668\u7ED3\u6784\u548C\u6307\u4EE4\u7CFB\u7EDF']),
    _templateObject32 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u7684\u8BBF\u95EE\u9636\u6BB5\u7684\u4E0D\u540C'], ['\u6307\u4EE4\u548C\u6570\u636E\u7684\u8BBF\u95EE\u9636\u6BB5\u7684\u4E0D\u540C']),
    _templateObject33 = _taggedTemplateLiteral(['\u6307\u4EE4\u8BD1\u7801\u7ED3\u679C\u7684\u4E0D\u540C'], ['\u6307\u4EE4\u8BD1\u7801\u7ED3\u679C\u7684\u4E0D\u540C']),
    _templateObject34 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u7684\u5BFB\u5740\u65B9\u5F0F\u7684\u4E0D\u540C'], ['\u6307\u4EE4\u548C\u6570\u636E\u7684\u5BFB\u5740\u65B9\u5F0F\u7684\u4E0D\u540C']),
    _templateObject35 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u6240\u5728\u7684\u5B58\u50A8\u5355\u5143\u7684\u4E0D\u540C'], ['\u6307\u4EE4\u548C\u6570\u636E\u6240\u5728\u7684\u5B58\u50A8\u5355\u5143\u7684\u4E0D\u540C']),
    _templateObject36 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u53EF\u4EE5\u4ECE\u5F62\u5F0F\u4E0A\u52A0\u4EE5\u533A\u5206'], ['\u6307\u4EE4\u548C\u6570\u636E\u53EF\u4EE5\u4ECE\u5F62\u5F0F\u4E0A\u52A0\u4EE5\u533A\u5206']),
    _templateObject37 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u90FD\u4EE5\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E'], ['\u6307\u4EE4\u548C\u6570\u636E\u90FD\u4EE5\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E']),
    _templateObject38 = _taggedTemplateLiteral(['\u6307\u4EE4\u4EE5\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E\uFF0C\u6570\u636E\u4EE5\u5341\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E'], ['\u6307\u4EE4\u4EE5\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E\uFF0C\u6570\u636E\u4EE5\u5341\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E']),
    _templateObject39 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u90FD\u4EE5\u5341\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E'], ['\u6307\u4EE4\u548C\u6570\u636E\u90FD\u4EE5\u5341\u8FDB\u5236\u5F62\u5F0F\u5B58\u653E']),
    _templateObject40 = _taggedTemplateLiteral(['\u6307\u4EE4\u5B58\u653E\u5728\u5185\u5B58\uFF0C\u6570\u636E\u5B58\u653E\u5728\u5916\u5B58'], ['\u6307\u4EE4\u5B58\u653E\u5728\u5185\u5B58\uFF0C\u6570\u636E\u5B58\u653E\u5728\u5916\u5B58']),
    _templateObject41 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u4EFB\u4F55\u65F6\u5019\u90FD\u5B58\u653E\u5728\u5185\u5B58'], ['\u6307\u4EE4\u548C\u6570\u636E\u4EFB\u4F55\u65F6\u5019\u90FD\u5B58\u653E\u5728\u5185\u5B58']),
    _templateObject42 = _taggedTemplateLiteral(['\u7A0B\u5E8F\u88AB\u542F\u52A8\u540E\uFF0C\u5176\u6307\u4EE4\u548C\u6570\u636E\u88AB\u88C5\u5165\u5185\u5B58'], ['\u7A0B\u5E8F\u88AB\u542F\u52A8\u540E\uFF0C\u5176\u6307\u4EE4\u548C\u6570\u636E\u88AB\u88C5\u5165\u5185\u5B58']),
    _templateObject43 = _taggedTemplateLiteral(['\u6307\u4EE4\u548C\u6570\u636E\u4EFB\u4F55\u65F6\u5019\u90FD\u5B58\u653E\u5728\u5916\u5B58'], ['\u6307\u4EE4\u548C\u6570\u636E\u4EFB\u4F55\u65F6\u5019\u90FD\u5B58\u653E\u5728\u5916\u5B58']),
    _templateObject44 = _taggedTemplateLiteral(['\u7A0B\u5E8F\u4E00\u8FB9\u88AB\u8F93\u5165\u8BA1\u7B97\u673A\u4E00\u8FB9\u88AB\u6267\u884C'], ['\u7A0B\u5E8F\u4E00\u8FB9\u88AB\u8F93\u5165\u8BA1\u7B97\u673A\u4E00\u8FB9\u88AB\u6267\u884C']),
    _templateObject45 = _taggedTemplateLiteral(['\u6309\u5730\u5740\u8BBF\u95EE\u6307\u4EE4\u5E76\u81EA\u52A8\u6309\u5E8F\u6267\u884C\u7A0B\u5E8F'], ['\u6309\u5730\u5740\u8BBF\u95EE\u6307\u4EE4\u5E76\u81EA\u52A8\u6309\u5E8F\u6267\u884C\u7A0B\u5E8F']),
    _templateObject46 = _taggedTemplateLiteral(['\u7A0B\u5E8F\u76F4\u63A5\u4ECE\u78C1\u76D8\u8BFB\u5230 CPU \u6267\u884C'], ['\u7A0B\u5E8F\u76F4\u63A5\u4ECE\u78C1\u76D8\u8BFB\u5230 CPU \u6267\u884C']),
    _templateObject47 = _taggedTemplateLiteral(['\u7A0B\u5E8F\u81EA\u52A8\u6267\u884C\u800C\u6570\u636E\u624B\u5DE5\u8F93\u5165'], ['\u7A0B\u5E8F\u81EA\u52A8\u6267\u884C\u800C\u6570\u636E\u624B\u5DE5\u8F93\u5165']),
    _templateObject48 = _taggedTemplateLiteral(['\u8BA1\u7B97\u673A\u7531\u8FD0\u7B97\u5668\u3001\u63A7\u5236\u5668\u3001\u5B58\u50A8\u5668\u548C\u8F93\u5165/\u8F93\u51FA\u8BBE\u5907\u7EC4\u6210'], ['\u8BA1\u7B97\u673A\u7531\u8FD0\u7B97\u5668\u3001\u63A7\u5236\u5668\u3001\u5B58\u50A8\u5668\u548C\u8F93\u5165/\u8F93\u51FA\u8BBE\u5907\u7EC4\u6210']),
    _templateObject49 = _taggedTemplateLiteral(['\u7A0B\u5E8F\u7531\u6307\u4EE4\u548C\u6570\u636E\u6784\u6210\uFF0C\u5B58\u653E\u5728\u5B58\u50A8\u5668\u4E2D'], ['\u7A0B\u5E8F\u7531\u6307\u4EE4\u548C\u6570\u636E\u6784\u6210\uFF0C\u5B58\u653E\u5728\u5B58\u50A8\u5668\u4E2D']),
    _templateObject50 = _taggedTemplateLiteral(['\u6307\u4EE4\u7531\u64CD\u4F5C\u7801\u548C\u5730\u5740\u7801\u4E24\u90E8\u5206\u7EC4\u6210'], ['\u6307\u4EE4\u7531\u64CD\u4F5C\u7801\u548C\u5730\u5740\u7801\u4E24\u90E8\u5206\u7EC4\u6210']),
    _templateObject51 = _taggedTemplateLiteral(['\u6307\u4EE4\u6309\u5730\u5740\u8BBF\u95EE\uFF0C\u6240\u6709\u6570\u636E\u5728\u6307\u4EE4\u4E2D\u76F4\u63A5\u7ED9\u51FA'], ['\u6307\u4EE4\u6309\u5730\u5740\u8BBF\u95EE\uFF0C\u6240\u6709\u6570\u636E\u5728\u6307\u4EE4\u4E2D\u76F4\u63A5\u7ED9\u51FA']),
    _templateObject52 = _taggedTemplateLiteral(['\u8FD0\u7B97\u5668\u7528\u6765\u5B8C\u6210\u7B97\u672F\u8FD0\u7B97'], ['\u8FD0\u7B97\u5668\u7528\u6765\u5B8C\u6210\u7B97\u672F\u8FD0\u7B97']),
    _templateObject53 = _taggedTemplateLiteral(['\u5B58\u50A8\u5668\u7528\u6765\u5B58\u653E\u6307\u4EE4\u548C\u6570\u636E'], ['\u5B58\u50A8\u5668\u7528\u6765\u5B58\u653E\u6307\u4EE4\u548C\u6570\u636E']),
    _templateObject54 = _taggedTemplateLiteral(['\u63A7\u5236\u5668\u901A\u8FC7\u6267\u884C\u6307\u4EE4\u6765\u63A7\u5236\u6574\u4E2A\u673A\u5668\u7684\u8FD0\u884C'], ['\u63A7\u5236\u5668\u901A\u8FC7\u6267\u884C\u6307\u4EE4\u6765\u63A7\u5236\u6574\u4E2A\u673A\u5668\u7684\u8FD0\u884C']),
    _templateObject55 = _taggedTemplateLiteral(['\u8F93\u5165/\u8F93\u51FA\u8BBE\u5907\u7528\u6765\u5B8C\u6210\u7528\u6237\u548C\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u4FE1\u606F\u4EA4\u6362'], ['\u8F93\u5165/\u8F93\u51FA\u8BBE\u5907\u7528\u6765\u5B8C\u6210\u7528\u6237\u548C\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u4FE1\u606F\u4EA4\u6362']),
    _templateObject56 = _taggedTemplateLiteral(['\u5BF9\u4E8E\u67D0\u4E2A\u7279\u5B9A\u7684\u7A0B\u5E8F\uFF0C\u4EE5\u4E0B\u63AA\u65BD\u4E2D\uFF0C\u80FD\u7F29\u77ED\u5176\u6267\u884C\u65F6\u95F4\u7684\u63AA\u65BD\u662F'], ['\u5BF9\u4E8E\u67D0\u4E2A\u7279\u5B9A\u7684\u7A0B\u5E8F\uFF0C\u4EE5\u4E0B\u63AA\u65BD\u4E2D\uFF0C\u80FD\u7F29\u77ED\u5176\u6267\u884C\u65F6\u95F4\u7684\u63AA\u65BD\u662F']),
    _templateObject57 = _taggedTemplateLiteral(['\u7528\u66F4\u5FEB\u7684\u5904\u7406\u5668\u6765\u66FF\u6362\u539F\u6765\u7684\u6162\u901F\u5904\u7406\u5668'], ['\u7528\u66F4\u5FEB\u7684\u5904\u7406\u5668\u6765\u66FF\u6362\u539F\u6765\u7684\u6162\u901F\u5904\u7406\u5668']),
    _templateObject58 = _taggedTemplateLiteral(['\u589E\u52A0\u540C\u7C7B\u5904\u7406\u5668\u4E2A\u6570\uFF0C\u4F7F\u5F97\u4E0D\u540C\u7684\u5904\u7406\u5668\u540C\u65F6\u6267\u884C\u7A0B\u5E8F'], ['\u589E\u52A0\u540C\u7C7B\u5904\u7406\u5668\u4E2A\u6570\uFF0C\u4F7F\u5F97\u4E0D\u540C\u7684\u5904\u7406\u5668\u540C\u65F6\u6267\u884C\u7A0B\u5E8F']),
    _templateObject59 = _taggedTemplateLiteral(['\u4F18\u5316\u7F16\u8BD1\u751F\u6210\u7684\u4EE3\u7801\u4F7F\u5F97\u7A0B\u5E8F\u6267\u884C\u7684\u603B\u65F6\u949F\u5468\u671F\u6570\u51CF\u5C11'], ['\u4F18\u5316\u7F16\u8BD1\u751F\u6210\u7684\u4EE3\u7801\u4F7F\u5F97\u7A0B\u5E8F\u6267\u884C\u7684\u603B\u65F6\u949F\u5468\u671F\u6570\u51CF\u5C11']),
    _templateObject60 = _taggedTemplateLiteral(['\u51CF\u5C11\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u4E2D\u8BBF\u95EE\u5185\u5B58\u7684\u65F6\u95F4'], ['\u51CF\u5C11\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u4E2D\u8BBF\u95EE\u5185\u5B58\u7684\u65F6\u95F4']),
    _templateObject61 = _taggedTemplateLiteral(['\u6240\u6709\u7A0B\u5E8F\u5728\u673A\u5668 A \u4E0A\u90FD\u6BD4\u5728\u673A\u5668 B \u4E0A\u8FD0\u884C\u901F\u5EA6\u6162'], ['\u6240\u6709\u7A0B\u5E8F\u5728\u673A\u5668 A \u4E0A\u90FD\u6BD4\u5728\u673A\u5668 B \u4E0A\u8FD0\u884C\u901F\u5EA6\u6162']),
    _templateObject62 = _taggedTemplateLiteral(['\u673A\u5668 A \u7684\u901F\u5EA6\u662F\u673A\u5668 B \u7684 1.25 \u500D'], ['\u673A\u5668 A \u7684\u901F\u5EA6\u662F\u673A\u5668 B \u7684 1.25 \u500D']),
    _templateObject63 = _taggedTemplateLiteral(['\u673A\u5668 A \u6BD4\u673A\u5668 B \u6162 1.25 \u500D'], ['\u673A\u5668 A \u6BD4\u673A\u5668 B \u6162 1.25 \u500D']),
    _templateObject64 = _taggedTemplateLiteral(['\u673A\u5668 B \u7684\u901F\u5EA6\u662F\u673A\u5668 A \u7684 1.25 \u500D'], ['\u673A\u5668 B \u7684\u901F\u5EA6\u662F\u673A\u5668 A \u7684 1.25 \u500D']),
    _templateObject65 = _taggedTemplateLiteral(['800MHz'], ['800MHz']),
    _templateObject66 = _taggedTemplateLiteral(['1.2GHz'], ['1.2GHz']),
    _templateObject67 = _taggedTemplateLiteral(['1.5GHz'], ['1.5GHz']),
    _templateObject68 = _taggedTemplateLiteral(['1.8GHz'], ['1.8GHz']),
    _templateObject69 = _taggedTemplateLiteral(['\u673A\u5668 A \u6BD4\u673A\u5668 B \u5FEB 1.2 \u500D'], ['\u673A\u5668 A \u6BD4\u673A\u5668 B \u5FEB 1.2 \u500D']),
    _templateObject70 = _taggedTemplateLiteral(['\u673A\u5668 B \u6BD4\u673A\u5668 A \u5FEB 1.2 \u500D'], ['\u673A\u5668 B \u6BD4\u673A\u5668 A \u5FEB 1.2 \u500D']),
    _templateObject71 = _taggedTemplateLiteral(['\u673A\u5668 B \u7684\u901F\u5EA6\u662F\u673A\u5668 A \u7684 1.2 \u500D'], ['\u673A\u5668 B \u7684\u901F\u5EA6\u662F\u673A\u5668 A \u7684 1.2 \u500D']),
    _templateObject72 = _taggedTemplateLiteral(['\u673A\u5668 A \u7684\u901F\u5EA6\u662F\u673A\u5668 B \u7684 1.2 \u500D'], ['\u673A\u5668 A \u7684\u901F\u5EA6\u662F\u673A\u5668 B \u7684 1.2 \u500D']),
    _templateObject73 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E00\u6BD4\u5E8F\u5217\u4E8C\u5C11 1 \u6761\u6307\u4EE4'], ['\u5E8F\u5217\u4E00\u6BD4\u5E8F\u5217\u4E8C\u5C11 1 \u6761\u6307\u4EE4']),
    _templateObject74 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E00\u7684\u603B\u65F6\u949F\u5468\u671F\u6570\u6BD4\u5E8F\u5217\u4E8C\u591A 1 \u4E2A'], ['\u5E8F\u5217\u4E00\u7684\u603B\u65F6\u949F\u5468\u671F\u6570\u6BD4\u5E8F\u5217\u4E8C\u591A 1 \u4E2A']),
    _templateObject75 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E00\u7684 CPI \u6BD4\u5E8F\u5217\u4E8C\u7684 CPI \u5927'], ['\u5E8F\u5217\u4E00\u7684 CPI \u6BD4\u5E8F\u5217\u4E8C\u7684 CPI \u5927']),
    _templateObject76 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E00\u6BD4\u5E8F\u5217\u4E8C\u7684\u6267\u884C\u901F\u5EA6\u5FEB'], ['\u5E8F\u5217\u4E00\u6BD4\u5E8F\u5217\u4E8C\u7684\u6267\u884C\u901F\u5EA6\u5FEB']),
    _templateObject77 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E00\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E8C\u591A 50\uFF0C\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u4E5F\u6BD4\u5E8F\u5217\u4E8C\u5FEB 10s'], ['\u5E8F\u5217\u4E00\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E8C\u591A 50\uFF0C\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u4E5F\u6BD4\u5E8F\u5217\u4E8C\u5FEB 10s']),
    _templateObject78 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E8C\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E00\u591A 50\uFF0C\u4F46\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u6BD4\u5E8F\u5217\u4E8C\u5FEB 10s'], ['\u5E8F\u5217\u4E8C\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E00\u591A 50\uFF0C\u4F46\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u6BD4\u5E8F\u5217\u4E8C\u5FEB 10s']),
    _templateObject79 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E00\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E00\u591A 100\uFF0C\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u4E5F\u6BD4\u5E8F\u5217\u4E8C\u5FEB 20s'], ['\u5E8F\u5217\u4E00\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E00\u591A 100\uFF0C\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u4E5F\u6BD4\u5E8F\u5217\u4E8C\u5FEB 20s']),
    _templateObject80 = _taggedTemplateLiteral(['\u5E8F\u5217\u4E8C\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E00\u591A 100\uFF0C\u4F46\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u6BD4\u5E8F\u5217\u4E8C\u5FEB 20s'], ['\u5E8F\u5217\u4E8C\u7684 MIPS \u6570\u6BD4\u5E8F\u5217\u4E00\u591A 100\uFF0C\u4F46\u5E8F\u5217\u4E00\u7684\u6267\u884C\u901F\u5EA6\u6BD4\u5E8F\u5217\u4E8C\u5FEB 20s']);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

var _questionnaire = __webpack_require__(/*! @src/components/@questionnaire */ "./src/components/@questionnaire/index.ts");

var _ = __webpack_require__(/*! ./1-5-1.jpg */ "./src/pages/ComputerOrganization/Chapter1/1-5-1.jpg");

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(/*! ./1-5-2.jpg */ "./src/pages/ComputerOrganization/Chapter1/1-5-2.jpg");

var _4 = _interopRequireDefault(_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = '1.5　单项选择题';
var page = (0, _write.section)(title)((0, _questionnaire.multipleChoice)('1.以下有关对摩尔定律的描述中，错误的是')((0, _write.p)(_templateObject), (0, _write.p)(_templateObject2), (0, _questionnaire.answer)((0, _write.p)(_templateObject3)), (0, _write.p)(_templateObject4)), (0, _questionnaire.multipleChoice)('2.从计算机的主要元器件来看，计算机发展所经历的过程为')((0, _write.p)(_templateObject5), (0, _write.p)(_templateObject6), (0, _questionnaire.answer)((0, _write.p)(_templateObject6)), (0, _write.p)(_templateObject7)), (0, _questionnaire.multipleChoice)('3.一个完整的计算机系统包括硬件和软件。软件又分为')((0, _write.p)(_templateObject8), (0, _questionnaire.answer)((0, _write.p)(_templateObject9)), (0, _write.p)(_templateObject10), (0, _write.p)(_templateObject11)), (0, _questionnaire.multipleChoice)('4.以下给出的软件中，属于应用软件的是')((0, _write.p)(_templateObject12), (0, _write.p)(_templateObject13), (0, _write.p)(_templateObject14), (0, _questionnaire.answer)((0, _write.p)(_templateObject15))), (0, _questionnaire.multipleChoice)('5.以下给出的软件中，属于系统软件的是')((0, _questionnaire.answer)((0, _write.p)(_templateObject16)), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18), (0, _write.p)(_templateObject19)), (0, _questionnaire.multipleChoice)('6.以下有关指令集体系结构的说法中，错误的是')((0, _write.p)(_templateObject20), (0, _questionnaire.answer)((0, _write.p)(_templateObject21)), (0, _write.p)(_templateObject22), (0, _write.p)(_templateObject23)), (0, _questionnaire.multipleChoice)('7.计算机系统采用层次化结构，从最上面的应用层到最下面的硬件层，其层次化构成为')((0, _write.p)(_templateObject24), (0, _write.p)(_templateObject25), (0, _write.p)(_templateObject26), (0, _questionnaire.answer)((0, _write.p)(_templateObject27))), (0, _questionnaire.multipleChoice)('8.以下有关程序编写和执行方面的叙述中，错误的是')((0, _write.p)(_templateObject28), (0, _write.p)(_templateObject29), (0, _questionnaire.answer)((0, _write.p)(_templateObject30)), (0, _write.p)(_templateObject31)), (0, _questionnaire.multipleChoice)('9.冯·诺依曼计算机中，CPU 区分从存储器取出的是指令还是数据的依据是')((0, _questionnaire.answer)((0, _write.p)(_templateObject32)), (0, _write.p)(_templateObject33), (0, _write.p)(_templateObject34), (0, _write.p)(_templateObject35)), (0, _questionnaire.multipleChoice)('10.以下有关冯·诺依曼计算机结构中指令和数据表示形式的叙述中，正确的是')((0, _write.p)(_templateObject36), (0, _questionnaire.answer)((0, _write.p)(_templateObject37)), (0, _write.p)(_templateObject38), (0, _write.p)(_templateObject39)), (0, _questionnaire.multipleChoice)('11.以下有关计算机中指令和数据存放位置的叙述中，正确的是')((0, _write.p)(_templateObject40), (0, _write.p)(_templateObject41), (0, _questionnaire.answer)((0, _write.p)(_templateObject42)), (0, _write.p)(_templateObject43)), (0, _questionnaire.multipleChoice)('12.冯·诺依曼计算机工作方式的基本特点是')((0, _write.p)(_templateObject44), (0, _questionnaire.answer)((0, _write.p)(_templateObject45)), (0, _write.p)(_templateObject46), (0, _write.p)(_templateObject47)), (0, _questionnaire.multipleChoice)('13.以下有关冯·诺依曼计算机结构的叙述中，错误的是')((0, _write.p)(_templateObject48), (0, _write.p)(_templateObject49), (0, _write.p)(_templateObject50), (0, _questionnaire.answer)((0, _write.p)(_templateObject51))), (0, _questionnaire.multipleChoice)('14.以下有关计算机各部件功能的叙述中，错误的是')((0, _questionnaire.answer)((0, _write.p)(_templateObject52)), (0, _write.p)(_templateObject53), (0, _write.p)(_templateObject54), (0, _write.p)(_templateObject55)), (0, _questionnaire.multipleChoice)('15.以下给出了改善计算机性能的 4 种措施：', (0, _write.p)(_templateObject56))((0, _questionnaire.answer)((0, _write.p)(_templateObject57)), (0, _questionnaire.answer)((0, _write.p)(_templateObject58)), (0, _questionnaire.answer)((0, _write.p)(_templateObject59)), (0, _questionnaire.answer)((0, _write.p)(_templateObject60))), (0, _questionnaire.multipleChoice)('16.若某典型基准测试程序在机器 A 上运行时需要 20s，而在机器 B 上的运行时间是 16s，则相对来说，下面给出的结论中，正确的是')((0, _write.p)(_templateObject61), (0, _write.p)(_templateObject62), (0, _write.p)(_templateObject63), (0, _questionnaire.answer)((0, _write.p)(_templateObject64))), (0, _questionnaire.multipleChoice)('17.已知计算机 A 的时钟频率为 800MHz，假定某程序在计算机 A 上运行需要 12s。现在硬件设计人员想设计计算机 B，希望该程序在 B 上的运行时间能缩短为 8s，使用新技术后可使 B 的时钟频率大幅度提高，但在 B 上运行该程序所需的时钟周期数为在 A 上的 1.5 倍。那么，机器 B 的时钟频率至少应为多少才能达到所希望的要求？')((0, _write.p)(_templateObject65), (0, _write.p)(_templateObject66), (0, _write.p)(_templateObject67), (0, _questionnaire.answer)((0, _write.p)(_templateObject68))), (0, _questionnaire.multipleChoice)('18.假设同一套指令集用不同的方法设计了两种计算机 A 和 B。机器 A 的时钟周期为 1.2ns，机器 B 的时钟周期为 2ns。某个程序在机器 A 上运行时的 CPI 为 2，在 B 上的 CPI 为 1，则对于该程序来说，机器 A 和机器 B 之间的速度关系为')((0, _write.p)(_templateObject69), (0, _write.p)(_templateObject70), (0, _questionnaire.answer)((0, _write.p)(_templateObject71)), (0, _write.p)(_templateObject72)), (0, _questionnaire.multipleChoice)('19.假定编译器对高级语言的某条语句可以编译生成两种不同的指令序列，则以下哪个结论是错误的？', (0, _write.img)(_2.default)('表 1-5-1　各类指令的 CPI 及指令条数'))((0, _write.p)(_templateObject73), (0, _write.p)(_templateObject74), (0, _write.p)(_templateObject75), (0, _questionnaire.answer)((0, _write.p)(_templateObject76))), (0, _questionnaire.multipleChoice)('20.假定用不同的编译器对同一个程序进行编译生成不同的目标代码指令序列，两个指令序列都在时钟周期为 2ns 的机器上运行。根据计算得到其 MIPS 指标和执行速度两方面的结论为', (0, _write.img)(_4.default)('表 1-5-2　各类指令的 CPI 及指令条数'))((0, _write.p)(_templateObject77), (0, _questionnaire.answer)((0, _write.p)(_templateObject78)), (0, _write.p)(_templateObject79), (0, _write.p)(_templateObject80))).elem;

window.outer.views['/ComputerOrganization/Chapter1/5'] = { page: page, title: title };console.log(title);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzEtNS0xLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjEvMS01LTIuanBnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMS81LnBhZ2UudHMiXSwibmFtZXMiOlsidGl0bGUiLCJwYWdlIiwicCIsInBpYzFfNV8xIiwicGljMV81XzIiLCJlbGVtIiwid2luZG93Iiwib3V0ZXIiLCJ2aWV3cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQWUsb0ZBQXVCLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxvRkFBdUIsdUJBQXVCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdEOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxXQUFkO0FBQ0EsSUFBTUMsT0FBTyxvQkFBU0QsS0FBVCxFQUFpQixtQ0FBZSxzQkFBZixNQUF1Q0UsUUFBdkMsd0JBQXVFQSxRQUF2RSxxQkFBbUcsK0JBQU9BLFFBQVAsb0JBQW5HLE1BQW9JQSxRQUFwSSxvQkFBakIsRUFBa0wsbUNBQWUsNkJBQWYsTUFBOENBLFFBQTlDLHlCQUFpRkEsUUFBakYscUJBQW9ILCtCQUFPQSxRQUFQLG9CQUFwSCxNQUErSkEsUUFBL0osb0JBQWxMLEVBQXFYLG1DQUFlLDJCQUFmLE1BQTRDQSxRQUE1QyxxQkFBNkQsK0JBQU9BLFFBQVAsb0JBQTdELE1BQW9GQSxRQUFwRiwwQkFBbUdBLFFBQW5HLHFCQUFyWCxFQUE0ZSxtQ0FBZSxxQkFBZixNQUFzQ0EsUUFBdEMsMEJBQWdEQSxRQUFoRCwwQkFBMERBLFFBQTFELHNCQUFvRSwrQkFBT0EsUUFBUCxxQkFBcEUsQ0FBNWUsRUFBcWtCLG1DQUFlLHFCQUFmLEVBQXNDLCtCQUFPQSxRQUFQLHFCQUF0QyxNQUE4REEsUUFBOUQsMEJBQTJFQSxRQUEzRSwwQkFBcUZBLFFBQXJGLHFCQUFya0IsRUFBMnFCLG1DQUFlLHdCQUFmLE1BQXlDQSxRQUF6QyxzQkFBcUUsK0JBQU9BLFFBQVAscUJBQXJFLE1BQWlIQSxRQUFqSCwwQkFBb0pBLFFBQXBKLHFCQUEzcUIsRUFBdTFCLG1DQUFlLHlDQUFmLE1BQTBEQSxRQUExRCwwQkFBOEZBLFFBQTlGLDBCQUFrSUEsUUFBbEksc0JBQXNLLCtCQUFPQSxRQUFQLHFCQUF0SyxDQUF2MUIsRUFBMGlDLG1DQUFlLDBCQUFmLE1BQTJDQSxRQUEzQywwQkFBc0VBLFFBQXRFLHNCQUFtRywrQkFBT0EsUUFBUCxxQkFBbkcsTUFBb0lBLFFBQXBJLHFCQUExaUMsRUFBdXNDLG1DQUFlLHNDQUFmLEVBQXVELCtCQUFPQSxRQUFQLHFCQUF2RCxNQUFrRkEsUUFBbEYsMEJBQWlHQSxRQUFqRywwQkFBb0hBLFFBQXBILHFCQUF2c0MsRUFBaTFDLG1DQUFlLHNDQUFmLE1BQXVEQSxRQUF2RCxzQkFBNEUsK0JBQU9BLFFBQVAscUJBQTVFLE1BQXdHQSxRQUF4RywwQkFBbUlBLFFBQW5JLHFCQUFqMUMsRUFBeStDLG1DQUFlLCtCQUFmLE1BQWdEQSxRQUFoRCwwQkFBcUVBLFFBQXJFLHNCQUEwRiwrQkFBT0EsUUFBUCxxQkFBMUYsTUFBMEhBLFFBQTFILHFCQUF6K0MsRUFBeW5ELG1DQUFlLHVCQUFmLE1BQXdDQSxRQUF4QyxzQkFBNkQsK0JBQU9BLFFBQVAscUJBQTdELE1BQTJGQSxRQUEzRiwwQkFBaUhBLFFBQWpILHFCQUF6bkQsRUFBOHZELG1DQUFlLDRCQUFmLE1BQTZDQSxRQUE3QywwQkFBNEVBLFFBQTVFLDBCQUFvR0EsUUFBcEcsc0JBQXlILCtCQUFPQSxRQUFQLHFCQUF6SCxDQUE5dkQsRUFBMDVELG1DQUFlLDBCQUFmLEVBQTJDLCtCQUFPQSxRQUFQLHFCQUEzQyxNQUFvRUEsUUFBcEUsMEJBQXNGQSxRQUF0RiwwQkFBK0dBLFFBQS9HLHFCQUExNUQsRUFBd2lFLG1DQUFlLHlCQUFmLE1BQTBDQSxRQUExQyxzQkFBNEUsK0JBQU9BLFFBQVAscUJBQTVFLEVBQTRHLCtCQUFPQSxRQUFQLHFCQUE1RyxFQUFrSiwrQkFBT0EsUUFBUCxxQkFBbEosRUFBd0wsK0JBQU9BLFFBQVAscUJBQXhMLENBQXhpRSxFQUErdkUsbUNBQWUsc0VBQWYsTUFBdUZBLFFBQXZGLDBCQUFzSEEsUUFBdEgsMEJBQWtKQSxRQUFsSixzQkFBMkssK0JBQU9BLFFBQVAscUJBQTNLLENBQS92RSxFQUErOEUsbUNBQWUsOEtBQWYsTUFBK0xBLFFBQS9MLDBCQUEyTUEsUUFBM00sMEJBQXVOQSxRQUF2TixzQkFBbU8sK0JBQU9BLFFBQVAscUJBQW5PLENBQS84RSxFQUF1c0YsbUNBQWUsdUlBQWYsTUFBd0pBLFFBQXhKLDBCQUFnTEEsUUFBaEwsc0JBQXdNLCtCQUFPQSxRQUFQLHFCQUF4TSxNQUEyT0EsUUFBM08scUJBQXZzRixFQUE4OEYsbUNBQWUsZ0RBQWYsRUFBaUUsZ0JBQUlDLFVBQUosRUFBYyx5QkFBZCxDQUFqRSxNQUEyR0QsUUFBM0csMEJBQStIQSxRQUEvSCwwQkFBd0pBLFFBQXhKLHNCQUFrTCwrQkFBT0EsUUFBUCxxQkFBbEwsQ0FBOThGLEVBQTRwRyxtQ0FBZSwwRkFBZixFQUEyRyxnQkFBSUUsVUFBSixFQUFjLHlCQUFkLENBQTNHLE1BQXFKRixRQUFySixzQkFBaU0sK0JBQU9BLFFBQVAscUJBQWpNLE1BQXFQQSxRQUFyUCwwQkFBa1NBLFFBQWxTLHFCQUE1cEcsRUFBNCtHRyxJQUF6L0c7O0FBRU1DLE9BQU9DLEtBQVAsQ0FBYUMsS0FBYixDQUFtQixrQ0FBbkIsSUFBdUQsRUFBQ1AsVUFBRCxFQUFNRCxZQUFOLEVBQXZELENBQW9FUyxRQUFRQyxHQUFSLENBQVlWLEtBQVosRSIsImZpbGUiOiJDb21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMS81LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkNvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wYWdlcy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMS81LnBhZ2UudHNcIixcInZlbmRvcnNcIixcImNvbW1vblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nLzgxZi0xLTUtMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy8xNjgtMS01LTIuanBnXCI7IiwiaW1wb3J0IHsgc2VjdGlvbiwgcCwgaW1nIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL0B3cml0ZSc7XG5pbXBvcnQgeyBtdWx0aXBsZUNob2ljZSwgYW5zd2VyIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL0BxdWVzdGlvbm5haXJlJztcbmltcG9ydCBwaWMxXzVfMSBmcm9tICcuLzEtNS0xLmpwZyc7XG5pbXBvcnQgcGljMV81XzIgZnJvbSAnLi8xLTUtMi5qcGcnO1xuY29uc3QgdGl0bGUgPSAnMS4144CA5Y2V6aG56YCJ5oup6aKYJztcbmNvbnN0IHBhZ2UgPSBzZWN0aW9uKCh0aXRsZSkpKG11bHRpcGxlQ2hvaWNlKCcxLuS7peS4i+acieWFs+WvueaRqeWwlOWumuW+i+eahOaPj+i/sOS4re+8jOmUmeivr+eahOaYrycpKHAgYOavjyAxOCDkuKrmnIjvvIzpm4bmiJDnlLXot6/oiq/niYfkuIrpm4bmiJDnmoTmmbbkvZPnrqHmlbDlsIbnv7vkuIDnlapgLCBwIGDmr48gMTgg5Liq5pyI77yM6ZuG5oiQ55S16Lev6Iqv54mH55qE6YCf5bqm5bCG5o+Q6auY5LiA5YCNYCwgYW5zd2VyKHAgYOmbhuaIkOeUtei3r+aKgOacr+S4gOebtOS8mumBteW+quaRqeWwlOWumuW+i+WPkeWxleS4i+WOu2ApLCBwIGDmr48gMTgg5Liq5pyI77yM6ZuG5oiQ55S16Lev6Iqv54mH55qE5Lu35qC85bCG6ZmN5L2O5LiA5Y2KYCksIG11bHRpcGxlQ2hvaWNlKCcyLuS7juiuoeeul+acuueahOS4u+imgeWFg+WZqOS7tuadpeeci++8jOiuoeeul+acuuWPkeWxleaJgOe7j+WOhueahOi/h+eoi+S4uicpKHAgYOaZtuS9k+euoeOAgeeUteWtkOeuoeOAgVNTSeOAgU1TSeOAgUxTSeOAgVVMU0njgIFWTFNJYCwgcCBg55S15a2Q566h44CB5pm25L2T566h44CBU1NJ44CBTVNJ44CBTFNJ44CBVkxTSeOAgVVMU0lgLCBhbnN3ZXIocCBg55S15a2Q566h44CB5pm25L2T566h44CBU1NJ44CBTVNJ44CBTFNJ44CBVkxTSeOAgVVMU0lgKSwgcCBg5pm25L2T566h44CB55S15a2Q566h44CBTVNJ44CBU1NJ44CBTFNJ44CBVUxTSeOAgVZMU0lgKSwgbXVsdGlwbGVDaG9pY2UoJzMu5LiA5Liq5a6M5pW055qE6K6h566X5py657O757uf5YyF5ous56Gs5Lu25ZKM6L2v5Lu244CC6L2v5Lu25Y+I5YiG5Li6JykocCBg5pON5L2c57O757uf5ZKM6K+t6KiA5aSE55CG56iL5bqPYCwgYW5zd2VyKHAgYOezu+e7n+i9r+S7tuWSjOW6lOeUqOi9r+S7tmApLCBwIGDmk43kvZzns7vnu5/lkozpq5jnuqfor63oqIBgLCBwIGDkvY7nuqfor63oqIDnqIvluo/lkozpq5jnuqfor63oqIDnqIvluo9gKSwgbXVsdGlwbGVDaG9pY2UoJzQu5Lul5LiL57uZ5Ye655qE6L2v5Lu25Lit77yM5bGe5LqO5bqU55So6L2v5Lu255qE5pivJykocCBg5rGH57yW56iL5bqPYCwgcCBg57yW6K+R56iL5bqPYCwgcCBg5pON5L2c57O757ufYCwgYW5zd2VyKHAgYOaWh+Wtl+WkhOeQhueoi+W6j2ApKSwgbXVsdGlwbGVDaG9pY2UoJzUu5Lul5LiL57uZ5Ye655qE6L2v5Lu25Lit77yM5bGe5LqO57O757uf6L2v5Lu255qE5pivJykoYW5zd2VyKHAgYFdpbmRvd3MgWFBgKSwgcCBgTVMgV29yZGAsIHAgYOmHkeWxseivjemcuGAsIHAgYFJlYWxQbGF5ZXJgKSwgbXVsdGlwbGVDaG9pY2UoJzYu5Lul5LiL5pyJ5YWz5oyH5Luk6ZuG5L2T57O757uT5p6E55qE6K+05rOV5Lit77yM6ZSZ6K+v55qE5pivJykocCBg5oyH5Luk6ZuG5L2T57O757uT5p6E5L2N5LqO6K6h566X5py66L2v5Lu25ZKM56Gs5Lu255qE5Lqk55WM6Z2i5LiKYCwgYW5zd2VyKHAgYOeoi+W6j+WRmOWPr+ingeWvhOWtmOWZqOeahOmVv+W6puOAgeWKn+iDveS4jue8luWPt+S4jeWxnuS6juaMh+S7pOmbhuS9k+ezu+e7k+aehOeahOWGheWuuWApLCBwIGDmjIfku6Tpm4bkvZPns7vnu5PmnoTmmK/mjIfkvY7nuqfor63oqIDnqIvluo/lkZjmiYDnnIvliLDnmoTmpoLlv7Xnu5PmnoTlkozlip/og73nibnmgKdgLCBwIGDmjIfku6Tpm4bkvZPns7vnu5PmnoTnmoToi7HmlofnvKnlhpnmmK8gSVNBYCksIG11bHRpcGxlQ2hvaWNlKCc3Luiuoeeul+acuuezu+e7n+mHh+eUqOWxguasoeWMlue7k+aehO+8jOS7juacgOS4iumdoueahOW6lOeUqOWxguWIsOacgOS4i+mdoueahOehrOS7tuWxgu+8jOWFtuWxguasoeWMluaehOaIkOS4uicpKHAgYOmrmOe6p+ivreiogOiZmuaLn+acuuKAlOaTjeS9nOezu+e7n+iZmuaLn+acuuKAlOaxh+e8luivreiogOiZmuaLn+acuuKAlOacuuWZqOivreiogOacuuWZqGAsIHAgYOmrmOe6p+ivreiogOiZmuaLn+acuuKAlOaxh+e8luivreiogOiZmuaLn+acuuKAlOacuuWZqOivreiogOacuuWZqOKAlOaTjeS9nOezu+e7n+iZmuaLn+acumAsIHAgYOaTjeS9nOezu+e7n+iZmuaLn+acuuKAlOmrmOe6p+ivreiogOiZmuaLn+acuuKAlOaxh+e8luivreiogOiZmuaLn+acuuKAlOacuuWZqOivreiogOacuuWZqGAsIGFuc3dlcihwIGDpq5jnuqfor63oqIDomZrmi5/mnLrigJTmsYfnvJbor63oqIDomZrmi5/mnLrigJTmk43kvZzns7vnu5/omZrmi5/mnLrigJTmnLrlmajor63oqIDmnLrlmahgKSksIG11bHRpcGxlQ2hvaWNlKCc4LuS7peS4i+acieWFs+eoi+W6j+e8luWGmeWSjOaJp+ihjOaWuemdoueahOWPmei/sOS4re+8jOmUmeivr+eahOaYrycpKHAgYOWPr+eUqOmrmOe6p+ivreiogOWSjOS9jue6p+ivreiogOe8luWGmeWHuuWKn+iDveetieS7t+eahOeoi+W6j2AsIHAgYOmrmOe6p+ivreiogOWSjOaxh+e8luivreiogOa6kOeoi+W6j+mDveS4jeiDveWcqOacuuWZqOS4iuebtOaOpeaJp+ihjGAsIGFuc3dlcihwIGDmsYfnvJbor63oqIDmmK/kuIDnp43kuI7mnLrlmajnu5PmnoTml6DlhbPnmoTnvJbnqIvor63oqIBgKSwgcCBg57yW6K+R56iL5bqP5ZGY5b+F6aG75LqG6Kej5py65Zmo57uT5p6E5ZKM5oyH5Luk57O757ufYCksIG11bHRpcGxlQ2hvaWNlKCc5LuWGr8K36K+65L6d5pu86K6h566X5py65Lit77yMQ1BVIOWMuuWIhuS7juWtmOWCqOWZqOWPluWHuueahOaYr+aMh+S7pOi/mOaYr+aVsOaNrueahOS+neaNruaYrycpKGFuc3dlcihwIGDmjIfku6TlkozmlbDmja7nmoTorr/pl67pmLbmrrXnmoTkuI3lkIxgKSwgcCBg5oyH5Luk6K+R56CB57uT5p6c55qE5LiN5ZCMYCwgcCBg5oyH5Luk5ZKM5pWw5o2u55qE5a+75Z2A5pa55byP55qE5LiN5ZCMYCwgcCBg5oyH5Luk5ZKM5pWw5o2u5omA5Zyo55qE5a2Y5YKo5Y2V5YWD55qE5LiN5ZCMYCksIG11bHRpcGxlQ2hvaWNlKCcxMC7ku6XkuIvmnInlhbPlhq/Ct+ivuuS+neabvOiuoeeul+acuue7k+aehOS4reaMh+S7pOWSjOaVsOaNruihqOekuuW9ouW8j+eahOWPmei/sOS4re+8jOato+ehrueahOaYrycpKHAgYOaMh+S7pOWSjOaVsOaNruWPr+S7peS7juW9ouW8j+S4iuWKoOS7peWMuuWIhmAsIGFuc3dlcihwIGDmjIfku6TlkozmlbDmja7pg73ku6Xkuozov5vliLblvaLlvI/lrZjmlL5gKSwgcCBg5oyH5Luk5Lul5LqM6L+b5Yi25b2i5byP5a2Y5pS+77yM5pWw5o2u5Lul5Y2B6L+b5Yi25b2i5byP5a2Y5pS+YCwgcCBg5oyH5Luk5ZKM5pWw5o2u6YO95Lul5Y2B6L+b5Yi25b2i5byP5a2Y5pS+YCksIG11bHRpcGxlQ2hvaWNlKCcxMS7ku6XkuIvmnInlhbPorqHnrpfmnLrkuK3mjIfku6TlkozmlbDmja7lrZjmlL7kvY3nva7nmoTlj5nov7DkuK3vvIzmraPnoa7nmoTmmK8nKShwIGDmjIfku6TlrZjmlL7lnKjlhoXlrZjvvIzmlbDmja7lrZjmlL7lnKjlpJblrZhgLCBwIGDmjIfku6TlkozmlbDmja7ku7vkvZXml7blgJnpg73lrZjmlL7lnKjlhoXlrZhgLCBhbnN3ZXIocCBg56iL5bqP6KKr5ZCv5Yqo5ZCO77yM5YW25oyH5Luk5ZKM5pWw5o2u6KKr6KOF5YWl5YaF5a2YYCksIHAgYOaMh+S7pOWSjOaVsOaNruS7u+S9leaXtuWAmemDveWtmOaUvuWcqOWkluWtmGApLCBtdWx0aXBsZUNob2ljZSgnMTIu5Yavwrfor7rkvp3mm7zorqHnrpfmnLrlt6XkvZzmlrnlvI/nmoTln7rmnKznibnngrnmmK8nKShwIGDnqIvluo/kuIDovrnooqvovpPlhaXorqHnrpfmnLrkuIDovrnooqvmiafooYxgLCBhbnN3ZXIocCBg5oyJ5Zyw5Z2A6K6/6Zeu5oyH5Luk5bm26Ieq5Yqo5oyJ5bqP5omn6KGM56iL5bqPYCksIHAgYOeoi+W6j+ebtOaOpeS7juejgeebmOivu+WIsCBDUFUg5omn6KGMYCwgcCBg56iL5bqP6Ieq5Yqo5omn6KGM6ICM5pWw5o2u5omL5bel6L6T5YWlYCksIG11bHRpcGxlQ2hvaWNlKCcxMy7ku6XkuIvmnInlhbPlhq/Ct+ivuuS+neabvOiuoeeul+acuue7k+aehOeahOWPmei/sOS4re+8jOmUmeivr+eahOaYrycpKHAgYOiuoeeul+acuueUsei/kOeul+WZqOOAgeaOp+WItuWZqOOAgeWtmOWCqOWZqOWSjOi+k+WFpS/ovpPlh7rorr7lpIfnu4TmiJBgLCBwIGDnqIvluo/nlLHmjIfku6TlkozmlbDmja7mnoTmiJDvvIzlrZjmlL7lnKjlrZjlgqjlmajkuK1gLCBwIGDmjIfku6TnlLHmk43kvZznoIHlkozlnLDlnYDnoIHkuKTpg6jliIbnu4TmiJBgLCBhbnN3ZXIocCBg5oyH5Luk5oyJ5Zyw5Z2A6K6/6Zeu77yM5omA5pyJ5pWw5o2u5Zyo5oyH5Luk5Lit55u05o6l57uZ5Ye6YCkpLCBtdWx0aXBsZUNob2ljZSgnMTQu5Lul5LiL5pyJ5YWz6K6h566X5py65ZCE6YOo5Lu25Yqf6IO955qE5Y+Z6L+w5Lit77yM6ZSZ6K+v55qE5pivJykoYW5zd2VyKHAgYOi/kOeul+WZqOeUqOadpeWujOaIkOeul+acr+i/kOeul2ApLCBwIGDlrZjlgqjlmajnlKjmnaXlrZjmlL7mjIfku6TlkozmlbDmja5gLCBwIGDmjqfliLblmajpgJrov4fmiafooYzmjIfku6TmnaXmjqfliLbmlbTkuKrmnLrlmajnmoTov5DooYxgLCBwIGDovpPlhaUv6L6T5Ye66K6+5aSH55So5p2l5a6M5oiQ55So5oi35ZKM6K6h566X5py65LmL6Ze055qE5L+h5oGv5Lqk5o2iYCksIG11bHRpcGxlQ2hvaWNlKCcxNS7ku6XkuIvnu5nlh7rkuobmlLnlloTorqHnrpfmnLrmgKfog73nmoQgNCDnp43mjqrmlr3vvJonLCBwIGDlr7nkuo7mn5DkuKrnibnlrprnmoTnqIvluo/vvIzku6XkuIvmjqrmlr3kuK3vvIzog73nvKnnn63lhbbmiafooYzml7bpl7TnmoTmjqrmlr3mmK9gKShhbnN3ZXIocCBg55So5pu05b+r55qE5aSE55CG5Zmo5p2l5pu/5o2i5Y6f5p2l55qE5oWi6YCf5aSE55CG5ZmoYCksIGFuc3dlcihwIGDlop7liqDlkIznsbvlpITnkIblmajkuKrmlbDvvIzkvb/lvpfkuI3lkIznmoTlpITnkIblmajlkIzml7bmiafooYznqIvluo9gKSwgYW5zd2VyKHAgYOS8mOWMlue8luivkeeUn+aIkOeahOS7o+eggeS9v+W+l+eoi+W6j+aJp+ihjOeahOaAu+aXtumSn+WRqOacn+aVsOWHj+WwkWApLCBhbnN3ZXIocCBg5YeP5bCR5oyH5Luk5omn6KGM6L+H56iL5Lit6K6/6Zeu5YaF5a2Y55qE5pe26Ze0YCkpLCBtdWx0aXBsZUNob2ljZSgnMTYu6Iul5p+Q5YW45Z6L5Z+65YeG5rWL6K+V56iL5bqP5Zyo5py65ZmoIEEg5LiK6L+Q6KGM5pe26ZyA6KaBIDIwc++8jOiAjOWcqOacuuWZqCBCIOS4iueahOi/kOihjOaXtumXtOaYryAxNnPvvIzliJnnm7jlr7nmnaXor7TvvIzkuIvpnaLnu5nlh7rnmoTnu5PorrrkuK3vvIzmraPnoa7nmoTmmK8nKShwIGDmiYDmnInnqIvluo/lnKjmnLrlmaggQSDkuIrpg73mr5TlnKjmnLrlmaggQiDkuIrov5DooYzpgJ/luqbmhaJgLCBwIGDmnLrlmaggQSDnmoTpgJ/luqbmmK/mnLrlmaggQiDnmoQgMS4yNSDlgI1gLCBwIGDmnLrlmaggQSDmr5TmnLrlmaggQiDmhaIgMS4yNSDlgI1gLCBhbnN3ZXIocCBg5py65ZmoIEIg55qE6YCf5bqm5piv5py65ZmoIEEg55qEIDEuMjUg5YCNYCkpLCBtdWx0aXBsZUNob2ljZSgnMTcu5bey55+l6K6h566X5py6IEEg55qE5pe26ZKf6aKR546H5Li6IDgwME1Ieu+8jOWBh+WumuafkOeoi+W6j+WcqOiuoeeul+acuiBBIOS4iui/kOihjOmcgOimgSAxMnPjgILnjrDlnKjnoazku7borr7orqHkurrlkZjmg7Porr7orqHorqHnrpfmnLogQu+8jOW4jOacm+ivpeeoi+W6j+WcqCBCIOS4iueahOi/kOihjOaXtumXtOiDvee8qeefreS4uiA4c++8jOS9v+eUqOaWsOaKgOacr+WQjuWPr+S9vyBCIOeahOaXtumSn+mikeeOh+Wkp+W5heW6puaPkOmrmO+8jOS9huWcqCBCIOS4iui/kOihjOivpeeoi+W6j+aJgOmcgOeahOaXtumSn+WRqOacn+aVsOS4uuWcqCBBIOS4iueahCAxLjUg5YCN44CC6YKj5LmI77yM5py65ZmoIEIg55qE5pe26ZKf6aKR546H6Iez5bCR5bqU5Li65aSa5bCR5omN6IO96L6+5Yiw5omA5biM5pyb55qE6KaB5rGC77yfJykocCBgODAwTUh6YCwgcCBgMS4yR0h6YCwgcCBgMS41R0h6YCwgYW5zd2VyKHAgYDEuOEdIemApKSwgbXVsdGlwbGVDaG9pY2UoJzE4LuWBh+iuvuWQjOS4gOWll+aMh+S7pOmbhueUqOS4jeWQjOeahOaWueazleiuvuiuoeS6huS4pOenjeiuoeeul+acuiBBIOWSjCBC44CC5py65ZmoIEEg55qE5pe26ZKf5ZGo5pyf5Li6IDEuMm5z77yM5py65ZmoIEIg55qE5pe26ZKf5ZGo5pyf5Li6IDJuc+OAguafkOS4queoi+W6j+WcqOacuuWZqCBBIOS4iui/kOihjOaXtueahCBDUEkg5Li6IDLvvIzlnKggQiDkuIrnmoQgQ1BJIOS4uiAx77yM5YiZ5a+55LqO6K+l56iL5bqP5p2l6K+077yM5py65ZmoIEEg5ZKM5py65ZmoIEIg5LmL6Ze055qE6YCf5bqm5YWz57O75Li6JykocCBg5py65ZmoIEEg5q+U5py65ZmoIEIg5b+rIDEuMiDlgI1gLCBwIGDmnLrlmaggQiDmr5TmnLrlmaggQSDlv6sgMS4yIOWAjWAsIGFuc3dlcihwIGDmnLrlmaggQiDnmoTpgJ/luqbmmK/mnLrlmaggQSDnmoQgMS4yIOWAjWApLCBwIGDmnLrlmaggQSDnmoTpgJ/luqbmmK/mnLrlmaggQiDnmoQgMS4yIOWAjWApLCBtdWx0aXBsZUNob2ljZSgnMTku5YGH5a6a57yW6K+R5Zmo5a+56auY57qn6K+t6KiA55qE5p+Q5p2h6K+t5Y+l5Y+v5Lul57yW6K+R55Sf5oiQ5Lik56eN5LiN5ZCM55qE5oyH5Luk5bqP5YiX77yM5YiZ5Lul5LiL5ZOq5Liq57uT6K665piv6ZSZ6K+v55qE77yfJywgaW1nKHBpYzFfNV8xKSgn6KGoIDEtNS0x44CA5ZCE57G75oyH5Luk55qEIENQSSDlj4rmjIfku6TmnaHmlbAnKSkocCBg5bqP5YiX5LiA5q+U5bqP5YiX5LqM5bCRIDEg5p2h5oyH5LukYCwgcCBg5bqP5YiX5LiA55qE5oC75pe26ZKf5ZGo5pyf5pWw5q+U5bqP5YiX5LqM5aSaIDEg5LiqYCwgcCBg5bqP5YiX5LiA55qEIENQSSDmr5Tluo/liJfkuoznmoQgQ1BJIOWkp2AsIGFuc3dlcihwIGDluo/liJfkuIDmr5Tluo/liJfkuoznmoTmiafooYzpgJ/luqblv6tgKSksIG11bHRpcGxlQ2hvaWNlKCcyMC7lgYflrprnlKjkuI3lkIznmoTnvJbor5Hlmajlr7nlkIzkuIDkuKrnqIvluo/ov5vooYznvJbor5HnlJ/miJDkuI3lkIznmoTnm67moIfku6PnoIHmjIfku6Tluo/liJfvvIzkuKTkuKrmjIfku6Tluo/liJfpg73lnKjml7bpkp/lkajmnJ/kuLogMm5zIOeahOacuuWZqOS4iui/kOihjOOAguagueaNruiuoeeul+W+l+WIsOWFtiBNSVBTIOaMh+agh+WSjOaJp+ihjOmAn+W6puS4pOaWuemdoueahOe7k+iuuuS4uicsIGltZyhwaWMxXzVfMikoJ+ihqCAxLTUtMuOAgOWQhOexu+aMh+S7pOeahCBDUEkg5Y+K5oyH5Luk5p2h5pWwJykpKHAgYOW6j+WIl+S4gOeahCBNSVBTIOaVsOavlOW6j+WIl+S6jOWkmiA1MO+8jOW6j+WIl+S4gOeahOaJp+ihjOmAn+W6puS5n+avlOW6j+WIl+S6jOW/qyAxMHNgLCBhbnN3ZXIocCBg5bqP5YiX5LqM55qEIE1JUFMg5pWw5q+U5bqP5YiX5LiA5aSaIDUw77yM5L2G5bqP5YiX5LiA55qE5omn6KGM6YCf5bqm5q+U5bqP5YiX5LqM5b+rIDEwc2ApLCBwIGDluo/liJfkuIDnmoQgTUlQUyDmlbDmr5Tluo/liJfkuIDlpJogMTAw77yM5bqP5YiX5LiA55qE5omn6KGM6YCf5bqm5Lmf5q+U5bqP5YiX5LqM5b+rIDIwc2AsIHAgYOW6j+WIl+S6jOeahCBNSVBTIOaVsOavlOW6j+WIl+S4gOWkmiAxMDDvvIzkvYbluo/liJfkuIDnmoTmiafooYzpgJ/luqbmr5Tluo/liJfkuozlv6sgMjBzYCkpLmVsZW07XG5cbiAgICAgIHdpbmRvdy5vdXRlci52aWV3c1snL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzUnXT17cGFnZSx0aXRsZX07Y29uc29sZS5sb2codGl0bGUpIl0sInNvdXJjZVJvb3QiOiIifQ==