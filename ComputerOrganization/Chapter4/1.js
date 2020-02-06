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
/******/ 		"ComputerOrganization/Chapter4/1": 0
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
/******/ 	deferredModules.push(["./src/pages/ComputerOrganization/Chapter4/1.page.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/ComputerOrganization/Chapter4/1.page.ts":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/1.page.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['', '\u4F7F\u5B66\u751F\u4E86\u89E3\u9759\u6001\u94FE\u63A5\u7684\u6982\u5FF5\u3001\u76EE\u6807\u6587\u4EF6\u683C\u5F0F\u3001\u7B26\u53F7\u53CA\u7B26\u53F7\u8868\u3001\u7B26\u53F7\u89E3\u6790\u3001\u4F7F\u7528\u9759\u6001\u5E93\u94FE\u63A5\u3001\u91CD\u5B9A\u4F4D\u4FE1\u606F\u53CA\u91CD\u5B9A\u4F4D\u8FC7\u7A0B\u3001\u53EF\u6267\u884C\u6587\u4EF6\u7684\u5B58\u50A8\u5668\u6620\u50CF\u3001\u53EF\u6267\u884C\u6587\u4EF6\u7684\u52A0\u8F7D\u548C\u5171\u4EAB\u5E93\u52A8\u6001\u94FE\u63A5\u7B49\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u5E2E\u52A9\u5B66\u751F\u517B\u6210\u826F\u597D\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u4E60\u60EF\uFF0C\u589E\u5F3A\u7A0B\u5E8F\u8C03\u8BD5\u80FD\u529B\uFF0C\u5E76\u4F7F\u5176\u80FD\u591F\u6DF1\u5165\u7406\u89E3\u8FDB\u7A0B\u7684\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u6982\u5FF5\u3002'], ['', '\u4F7F\u5B66\u751F\u4E86\u89E3\u9759\u6001\u94FE\u63A5\u7684\u6982\u5FF5\u3001\u76EE\u6807\u6587\u4EF6\u683C\u5F0F\u3001\u7B26\u53F7\u53CA\u7B26\u53F7\u8868\u3001\u7B26\u53F7\u89E3\u6790\u3001\u4F7F\u7528\u9759\u6001\u5E93\u94FE\u63A5\u3001\u91CD\u5B9A\u4F4D\u4FE1\u606F\u53CA\u91CD\u5B9A\u4F4D\u8FC7\u7A0B\u3001\u53EF\u6267\u884C\u6587\u4EF6\u7684\u5B58\u50A8\u5668\u6620\u50CF\u3001\u53EF\u6267\u884C\u6587\u4EF6\u7684\u52A0\u8F7D\u548C\u5171\u4EAB\u5E93\u52A8\u6001\u94FE\u63A5\u7B49\uFF0C\u5728\u6B64\u57FA\u7840\u4E0A\u5E2E\u52A9\u5B66\u751F\u517B\u6210\u826F\u597D\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u4E60\u60EF\uFF0C\u589E\u5F3A\u7A0B\u5E8F\u8C03\u8BD5\u80FD\u529B\uFF0C\u5E76\u4F7F\u5176\u80FD\u591F\u6DF1\u5165\u7406\u89E3\u8FDB\u7A0B\u7684\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u6982\u5FF5\u3002']),
    _templateObject2 = _taggedTemplateLiteral(['\u4E3B\u8981\u6559\u5B66\u76EE\u6807'], ['\u4E3B\u8981\u6559\u5B66\u76EE\u6807']),
    _templateObject3 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject4 = _taggedTemplateLiteral(['\u57FA\u672C\u5B66\u4E60\u8981\u6C42'], ['\u57FA\u672C\u5B66\u4E60\u8981\u6C42']),
    _templateObject5 = _taggedTemplateLiteral(['\u4E86\u89E3\u7F16\u8BD1\u548C\u6C47\u7F16\u7684\u533A\u522B\u3002'], ['\u4E86\u89E3\u7F16\u8BD1\u548C\u6C47\u7F16\u7684\u533A\u522B\u3002']),
    _templateObject6 = _taggedTemplateLiteral(['\u4E86\u89E3\u94FE\u63A5\u7684\u57FA\u672C\u6982\u5FF5\u548C\u94FE\u63A5\u8FC7\u7A0B\u6240\u8981\u5B8C\u6210\u7684\u4EFB\u52A1\u3002'], ['\u4E86\u89E3\u94FE\u63A5\u7684\u57FA\u672C\u6982\u5FF5\u548C\u94FE\u63A5\u8FC7\u7A0B\u6240\u8981\u5B8C\u6210\u7684\u4EFB\u52A1\u3002']),
    _templateObject7 = _taggedTemplateLiteral(['\u7406\u89E3\u76EE\u6807\u4EE3\u7801\u548C\u76EE\u6807\u4EE3\u7801\u6587\u4EF6\u7684\u57FA\u672C\u6982\u5FF5\u3002'], ['\u7406\u89E3\u76EE\u6807\u4EE3\u7801\u548C\u76EE\u6807\u4EE3\u7801\u6587\u4EF6\u7684\u57FA\u672C\u6982\u5FF5\u3002']),
    _templateObject8 = _taggedTemplateLiteral(['\u4E86\u89E3 ELF \u76EE\u6807\u6587\u4EF6\u7684\u57FA\u672C\u6784\u6210\u5F62\u5F0F\u3002'], ['\u4E86\u89E3 ELF \u76EE\u6807\u6587\u4EF6\u7684\u57FA\u672C\u6784\u6210\u5F62\u5F0F\u3002']),
    _templateObject9 = _taggedTemplateLiteral(['\u4E86\u89E3 ELF \u76EE\u6807\u6587\u4EF6\u94FE\u63A5\u89C6\u56FE\u548C\u6267\u884C\u89C6\u56FE\u7684\u5DEE\u522B\u3002'], ['\u4E86\u89E3 ELF \u76EE\u6807\u6587\u4EF6\u94FE\u63A5\u89C6\u56FE\u548C\u6267\u884C\u89C6\u56FE\u7684\u5DEE\u522B\u3002']),
    _templateObject10 = _taggedTemplateLiteral(['\u4E86\u89E3 ELF \u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u7684\u683C\u5F0F\u4EE5\u53CA\u4E3B\u8981\u7EC4\u6210\u90E8\u5206\u3002'], ['\u4E86\u89E3 ELF \u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u7684\u683C\u5F0F\u4EE5\u53CA\u4E3B\u8981\u7EC4\u6210\u90E8\u5206\u3002']),
    _templateObject11 = _taggedTemplateLiteral(['\u4E86\u89E3 ELF \u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u7684\u683C\u5F0F\u4EE5\u53CA\u4E3B\u8981\u7EC4\u6210\u90E8\u5206\u3002'], ['\u4E86\u89E3 ELF \u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u7684\u683C\u5F0F\u4EE5\u53CA\u4E3B\u8981\u7EC4\u6210\u90E8\u5206\u3002']),
    _templateObject12 = _taggedTemplateLiteral(['\u4E86\u89E3 ELF \u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u548C\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u7684\u5DEE\u522B\u3002'], ['\u4E86\u89E3 ELF \u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u548C\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u7684\u5DEE\u522B\u3002']),
    _templateObject13 = _taggedTemplateLiteral(['\u7406\u89E3\u7B26\u53F7\u8868\u4E2D\u5305\u542B\u7684\u5168\u5C40\u7B26\u53F7\u3001\u5916\u90E8\u7B26\u53F7\u548C\u672C\u5730\u7B26\u53F7\u7684\u5B9A\u4E49\u3002'], ['\u7406\u89E3\u7B26\u53F7\u8868\u4E2D\u5305\u542B\u7684\u5168\u5C40\u7B26\u53F7\u3001\u5916\u90E8\u7B26\u53F7\u548C\u672C\u5730\u7B26\u53F7\u7684\u5B9A\u4E49\u3002']),
    _templateObject14 = _taggedTemplateLiteral(['\u7406\u89E3\u7B26\u53F7\u89E3\u6790\u7684\u76EE\u7684\u548C\u529F\u80FD\u4EE5\u53CA\u8FDB\u884C\u7B26\u53F7\u89E3\u6790\u7684\u8FC7\u7A0B\u3002'], ['\u7406\u89E3\u7B26\u53F7\u89E3\u6790\u7684\u76EE\u7684\u548C\u529F\u80FD\u4EE5\u53CA\u8FDB\u884C\u7B26\u53F7\u89E3\u6790\u7684\u8FC7\u7A0B\u3002']),
    _templateObject15 = _taggedTemplateLiteral(['\u7406\u89E3\u5168\u5C40\u7B26\u53F7\u7684\u5F3A\u5F31\u6027\u4EE5\u53CA\u5982\u4F55\u5904\u7406\u591A\u91CD\u7B26\u53F7\u5B9A\u4E49\u3002'], ['\u7406\u89E3\u5168\u5C40\u7B26\u53F7\u7684\u5F3A\u5F31\u6027\u4EE5\u53CA\u5982\u4F55\u5904\u7406\u591A\u91CD\u7B26\u53F7\u5B9A\u4E49\u3002']),
    _templateObject16 = _taggedTemplateLiteral(['\u80FD\u591F\u8FD0\u7528\u591A\u91CD\u7B26\u53F7\u5B9A\u4E49\u89C4\u5219\u5BF9\u7A0B\u5E8F\u6267\u884C\u7ED3\u679C\u8FDB\u884C\u5206\u6790\u3002'], ['\u80FD\u591F\u8FD0\u7528\u591A\u91CD\u7B26\u53F7\u5B9A\u4E49\u89C4\u5219\u5BF9\u7A0B\u5E8F\u6267\u884C\u7ED3\u679C\u8FDB\u884C\u5206\u6790\u3002']),
    _templateObject17 = _taggedTemplateLiteral(['\u4E86\u89E3\u9759\u6001\u5E93\u7684\u6982\u5FF5\u548C\u9759\u6001\u94FE\u63A5\u65F6\u7684\u7B26\u53F7\u89E3\u6790\u8FC7\u7A0B\u3002'], ['\u4E86\u89E3\u9759\u6001\u5E93\u7684\u6982\u5FF5\u548C\u9759\u6001\u94FE\u63A5\u65F6\u7684\u7B26\u53F7\u89E3\u6790\u8FC7\u7A0B\u3002']),
    _templateObject18 = _taggedTemplateLiteral(['\u7406\u89E3\u91CD\u5B9A\u4F4D\u7684\u76EE\u7684\u548C\u529F\u80FD\u4EE5\u53CA\u8FDB\u884C\u91CD\u5B9A\u4F4D\u7684\u8FC7\u7A0B\u3002'], ['\u7406\u89E3\u91CD\u5B9A\u4F4D\u7684\u76EE\u7684\u548C\u529F\u80FD\u4EE5\u53CA\u8FDB\u884C\u91CD\u5B9A\u4F4D\u7684\u8FC7\u7A0B\u3002']),
    _templateObject19 = _taggedTemplateLiteral(['\u4E86\u89E3\u91CD\u5B9A\u4F4D\u4FE1\u606F\u5728\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u4E2D\u5B58\u653E\u5728\u54EA\u4E9B\u8282\u4E2D\u3002'], ['\u4E86\u89E3\u91CD\u5B9A\u4F4D\u4FE1\u606F\u5728\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u4E2D\u5B58\u653E\u5728\u54EA\u4E9B\u8282\u4E2D\u3002']),
    _templateObject20 = _taggedTemplateLiteral(['\u4E86\u89E3 IA-32 \u5904\u7406\u5668\u76F8\u5173\u7684\u4E24\u79CD\u57FA\u672C\u91CD\u5B9A\u4F4D\u4FE1\u606F\u7C7B\u578B\u3002'], ['\u4E86\u89E3 IA-32 \u5904\u7406\u5668\u76F8\u5173\u7684\u4E24\u79CD\u57FA\u672C\u91CD\u5B9A\u4F4D\u4FE1\u606F\u7C7B\u578B\u3002']),
    _templateObject21 = _taggedTemplateLiteral(['\u7406\u89E3 IA-32 \u5904\u7406\u5668\u76F8\u5173\u7684\u4E24\u79CD\u57FA\u672C\u91CD\u5B9A\u4F4D\u65B9\u5F0F\u7684\u6267\u884C\u8FC7\u7A0B\u3002'], ['\u7406\u89E3 IA-32 \u5904\u7406\u5668\u76F8\u5173\u7684\u4E24\u79CD\u57FA\u672C\u91CD\u5B9A\u4F4D\u65B9\u5F0F\u7684\u6267\u884C\u8FC7\u7A0B\u3002']),
    _templateObject22 = _taggedTemplateLiteral(['\u4E86\u89E3\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u7684\u52A0\u8F7D\u8FC7\u7A0B\u3002'], ['\u4E86\u89E3\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u7684\u52A0\u8F7D\u8FC7\u7A0B\u3002']),
    _templateObject23 = _taggedTemplateLiteral(['\u4E86\u89E3\u52A8\u6001\u94FE\u63A5\u7684\u6982\u5FF5\u548C\u57FA\u672C\u7279\u6027\u3002'], ['\u4E86\u89E3\u52A8\u6001\u94FE\u63A5\u7684\u6982\u5FF5\u548C\u57FA\u672C\u7279\u6027\u3002']),
    _templateObject24 = _taggedTemplateLiteral(['\u4E86\u89E3\u7A0B\u5E8F\u52A0\u8F7D\u65F6\u7684\u52A8\u6001\u94FE\u63A5\u8FC7\u7A0B\u3002'], ['\u4E86\u89E3\u7A0B\u5E8F\u52A0\u8F7D\u65F6\u7684\u52A8\u6001\u94FE\u63A5\u8FC7\u7A0B\u3002']),
    _templateObject25 = _taggedTemplateLiteral(['\u4E86\u89E3\u7A0B\u5E8F\u8FD0\u884C\u65F6\u7684\u52A8\u6001\u94FE\u63A5\u8FC7\u7A0B\u3002'], ['\u4E86\u89E3\u7A0B\u5E8F\u8FD0\u884C\u65F6\u7684\u52A8\u6001\u94FE\u63A5\u8FC7\u7A0B\u3002']),
    _templateObject26 = _taggedTemplateLiteral(['\u94FE\u63A5\u5668\u4F4D\u4E8E\u7F16\u8BD1\u5668\u3001\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u548C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4EA4\u53C9\u70B9\u4E0A\uFF0C\u6D89\u53CA\u6307\u4EE4\u7CFB\u7EDF\u3001\u4EE3\u7801\u751F\u6210\u3001\u673A\u5668\u8BED\u8A00\u3001\u7A0B\u5E8F\u8F6C\u6362\u548C\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u7B49\u8BF8\u591A\u6982\u5FF5\uFF0C\u56E0\u800C\u5B83\u5BF9\u4E8E\u7406\u89E3\u6574\u4E2A\u8BA1\u7B97\u673A\u7CFB\u7EDF\u6982\u5FF5\u6765\u8BF4\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002'], ['\u94FE\u63A5\u5668\u4F4D\u4E8E\u7F16\u8BD1\u5668\u3001\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u548C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4EA4\u53C9\u70B9\u4E0A\uFF0C\u6D89\u53CA\u6307\u4EE4\u7CFB\u7EDF\u3001\u4EE3\u7801\u751F\u6210\u3001\u673A\u5668\u8BED\u8A00\u3001\u7A0B\u5E8F\u8F6C\u6362\u548C\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u7B49\u8BF8\u591A\u6982\u5FF5\uFF0C\u56E0\u800C\u5B83\u5BF9\u4E8E\u7406\u89E3\u6574\u4E2A\u8BA1\u7B97\u673A\u7CFB\u7EDF\u6982\u5FF5\u6765\u8BF4\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002']),
    _templateObject27 = _taggedTemplateLiteral(['\u672C\u7AE0\u7684\u5185\u5BB9\u5728\u4F20\u7EDF\u7684\u8BA1\u7B97\u673A\u4E13\u4E1A\u6559\u5B66\u4F53\u7CFB\u4E2D\u6CA1\u6709\u4E00\u95E8\u8BFE\u7A0B\u4F1A\u6D89\u53CA\uFF0C\u4F46\u662F\u7531\u4E8E\u94FE\u63A5\u5668\u5728\u6574\u4E2A\u8BA1\u7B97\u673A\u7CFB\u7EDF\u4E2D\u5904\u4E8E\u591A\u4E2A\u6838\u5FC3\u5185\u5BB9\u7684\u4EA4\u53C9\u70B9\u4E0A\uFF0C\u56E0\u6B64\u5B66\u751F\u5BF9\u8FD9\u90E8\u5206\u5185\u5BB9\u7684\u6DF1\u5165\u7406\u89E3\u662F\u975E\u5E38\u6709\u5FC5\u8981\u7684\uFF0C\u5BF9\u4E8E\u517B\u6210\u826F\u597D\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u4E60\u60EF\u3001\u589E\u5F3A\u7A0B\u5E8F\u8C03\u8BD5\u80FD\u529B\u3001\u6DF1\u5165\u7406\u89E3\u8FDB\u7A0B\u7684\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u6982\u5FF5\u7B49\u90FD\u6709\u975E\u5E38\u91CD\u8981\u7684\u4F5C\u7528\u3002'], ['\u672C\u7AE0\u7684\u5185\u5BB9\u5728\u4F20\u7EDF\u7684\u8BA1\u7B97\u673A\u4E13\u4E1A\u6559\u5B66\u4F53\u7CFB\u4E2D\u6CA1\u6709\u4E00\u95E8\u8BFE\u7A0B\u4F1A\u6D89\u53CA\uFF0C\u4F46\u662F\u7531\u4E8E\u94FE\u63A5\u5668\u5728\u6574\u4E2A\u8BA1\u7B97\u673A\u7CFB\u7EDF\u4E2D\u5904\u4E8E\u591A\u4E2A\u6838\u5FC3\u5185\u5BB9\u7684\u4EA4\u53C9\u70B9\u4E0A\uFF0C\u56E0\u6B64\u5B66\u751F\u5BF9\u8FD9\u90E8\u5206\u5185\u5BB9\u7684\u6DF1\u5165\u7406\u89E3\u662F\u975E\u5E38\u6709\u5FC5\u8981\u7684\uFF0C\u5BF9\u4E8E\u517B\u6210\u826F\u597D\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u4E60\u60EF\u3001\u589E\u5F3A\u7A0B\u5E8F\u8C03\u8BD5\u80FD\u529B\u3001\u6DF1\u5165\u7406\u89E3\u8FDB\u7A0B\u7684\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u6982\u5FF5\u7B49\u90FD\u6709\u975E\u5E38\u91CD\u8981\u7684\u4F5C\u7528\u3002']),
    _templateObject28 = _taggedTemplateLiteral(['\u672C\u7AE0\u7684\u6559\u5B66\u53EF\u4EE5\u7ED3\u5408\u5B9E\u9A8C\u8FDB\u884C\uFF0C\u5173\u4E8E ELF \u5934\u3001\u5404\u4E2A\u8282\u4EE5\u53CA\u8282\u5934\u8868\u3001\u7A0B\u5E8F\u5934\u8868\uFF08\u6BB5\u5934\u8868\uFF09\u4EE5\u53CA\u5404\u79CD\u8282\u7EC4\u6210\u7684\u6BB5\u7B49\u7EC6\u8282\u5185\u5BB9\uFF0C\u53EA\u8981\u6C42\u5B66\u751F\u80FD\u591F\u7406\u89E3\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u6B7B\u8BB0\u786C\u80CC\u3002'], ['\u672C\u7AE0\u7684\u6559\u5B66\u53EF\u4EE5\u7ED3\u5408\u5B9E\u9A8C\u8FDB\u884C\uFF0C\u5173\u4E8E ELF \u5934\u3001\u5404\u4E2A\u8282\u4EE5\u53CA\u8282\u5934\u8868\u3001\u7A0B\u5E8F\u5934\u8868\uFF08\u6BB5\u5934\u8868\uFF09\u4EE5\u53CA\u5404\u79CD\u8282\u7EC4\u6210\u7684\u6BB5\u7B49\u7EC6\u8282\u5185\u5BB9\uFF0C\u53EA\u8981\u6C42\u5B66\u751F\u80FD\u591F\u7406\u89E3\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u6B7B\u8BB0\u786C\u80CC\u3002']);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = '4.1　教学目标和内容安排';
var page = (0, _write.section)(title)((0, _write.p)(_templateObject, (0, _write.b)(_templateObject2)), (0, _write.p)(_templateObject3, (0, _write.b)(_templateObject4)), (0, _write.ol)((0, _write.p)(_templateObject5), (0, _write.p)(_templateObject6), (0, _write.p)(_templateObject7), (0, _write.p)(_templateObject8), (0, _write.p)(_templateObject9), (0, _write.p)(_templateObject10), (0, _write.p)(_templateObject11), (0, _write.p)(_templateObject12), (0, _write.p)(_templateObject13), (0, _write.p)(_templateObject14), (0, _write.p)(_templateObject15), (0, _write.p)(_templateObject16), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18), (0, _write.p)(_templateObject19), (0, _write.p)(_templateObject20), (0, _write.p)(_templateObject21), (0, _write.p)(_templateObject22), (0, _write.p)(_templateObject23), (0, _write.p)(_templateObject24), (0, _write.p)(_templateObject25)), (0, _write.p)(_templateObject26), (0, _write.p)(_templateObject27), (0, _write.p)(_templateObject28)).elem;

window.outer.views['/ComputerOrganization/Chapter4/1'] = { page: page, title: title };console.log(title);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzEucGFnZS50cyJdLCJuYW1lcyI6WyJ0aXRsZSIsInBhZ2UiLCJwIiwiYiIsImVsZW0iLCJ3aW5kb3ciLCJvdXRlciIsInZpZXdzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBOzs7O0FBQ0EsSUFBTUEsUUFBUSxlQUFkO0FBQ0EsSUFBTUMsT0FBTyxvQkFBUUQsS0FBUixNQUFlRSxRQUFmLHVCQUFvQkMsUUFBcEIsMEJBQXVLRCxRQUF2Syx3QkFBNEtDLFFBQTVLLHNCQUEwTCxtQkFBR0QsUUFBSCx5QkFBb0JBLFFBQXBCLHlCQUFnREEsUUFBaEQseUJBQXlFQSxRQUF6RSx5QkFBa0dBLFFBQWxHLHlCQUFnSUEsUUFBaEksMEJBQWlLQSxRQUFqSywwQkFBaU1BLFFBQWpNLDBCQUFrT0EsUUFBbE8sMEJBQW1RQSxRQUFuUSwwQkFBaVNBLFFBQWpTLDBCQUE4VEEsUUFBOVQsMEJBQTRWQSxRQUE1ViwwQkFBd1hBLFFBQXhYLDBCQUFvWkEsUUFBcFosMEJBQW1iQSxRQUFuYiwwQkFBb2RBLFFBQXBkLDBCQUF3ZkEsUUFBeGYsMEJBQTZnQkEsUUFBN2dCLDBCQUFraUJBLFFBQWxpQiwwQkFBdWpCQSxRQUF2akIscUJBQTFMLE1BQXV3QkEsUUFBdndCLDBCQUFtMkJBLFFBQW4yQiwwQkFBNCtCQSxRQUE1K0Isc0JBQThqQ0UsSUFBM2tDOztBQUVNQyxPQUFPQyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsa0NBQW5CLElBQXVELEVBQUNOLFVBQUQsRUFBTUQsWUFBTixFQUF2RCxDQUFvRVEsUUFBUUMsR0FBUixDQUFZVCxLQUFaLEUiLCJmaWxlIjoiQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJDb21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC8xXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvMS5wYWdlLnRzXCIsXCJ2ZW5kb3JzXCIsXCJjb21tb25cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBwLCBiLCBzZWN0aW9uLCBvbCB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy9Ad3JpdGUnO1xuY29uc3QgdGl0bGUgPSAnNC4x44CA5pWZ5a2m55uu5qCH5ZKM5YaF5a655a6J5o6SJztcbmNvbnN0IHBhZ2UgPSBzZWN0aW9uKHRpdGxlKShwIGAke2IgYOS4u+imgeaVmeWtpuebruagh2B95L2/5a2m55Sf5LqG6Kej6Z2Z5oCB6ZO+5o6l55qE5qaC5b+144CB55uu5qCH5paH5Lu25qC85byP44CB56ym5Y+35Y+K56ym5Y+36KGo44CB56ym5Y+36Kej5p6Q44CB5L2/55So6Z2Z5oCB5bqT6ZO+5o6l44CB6YeN5a6a5L2N5L+h5oGv5Y+K6YeN5a6a5L2N6L+H56iL44CB5Y+v5omn6KGM5paH5Lu255qE5a2Y5YKo5Zmo5pig5YOP44CB5Y+v5omn6KGM5paH5Lu255qE5Yqg6L295ZKM5YWx5Lqr5bqT5Yqo5oCB6ZO+5o6l562J77yM5Zyo5q2k5Z+656GA5LiK5biu5Yqp5a2m55Sf5YW75oiQ6Imv5aW955qE56iL5bqP6K6+6K6h5Lmg5oOv77yM5aKe5by656iL5bqP6LCD6K+V6IO95Yqb77yM5bm25L2/5YW26IO95aSf5rex5YWl55CG6Kej6L+b56iL55qE6Jma5ouf5Zyw5Z2A56m66Ze05qaC5b+144CCYCwgcCBgJHtiIGDln7rmnKzlrabkuaDopoHmsYJgfWAsIG9sKHAgYOS6huino+e8luivkeWSjOaxh+e8lueahOWMuuWIq+OAgmAsIHAgYOS6huino+mTvuaOpeeahOWfuuacrOamguW/teWSjOmTvuaOpei/h+eoi+aJgOimgeWujOaIkOeahOS7u+WKoeOAgmAsIHAgYOeQhuino+ebruagh+S7o+eggeWSjOebruagh+S7o+eggeaWh+S7tueahOWfuuacrOamguW/teOAgmAsIHAgYOS6huinoyBFTEYg55uu5qCH5paH5Lu255qE5Z+65pys5p6E5oiQ5b2i5byP44CCYCwgcCBg5LqG6KejIEVMRiDnm67moIfmlofku7bpk77mjqXop4blm77lkozmiafooYzop4blm77nmoTlt67liKvjgIJgLCBwIGDkuobop6MgRUxGIOWPr+mHjeWumuS9jeebruagh+aWh+S7tueahOagvOW8j+S7peWPiuS4u+imgee7hOaIkOmDqOWIhuOAgmAsIHAgYOS6huinoyBFTEYg5Y+v5omn6KGM55uu5qCH5paH5Lu255qE5qC85byP5Lul5Y+K5Li76KaB57uE5oiQ6YOo5YiG44CCYCwgcCBg5LqG6KejIEVMRiDlj6/ph43lrprkvY3nm67moIfmlofku7blkozlj6/miafooYznm67moIfmlofku7bnmoTlt67liKvjgIJgLCBwIGDnkIbop6PnrKblj7fooajkuK3ljIXlkKvnmoTlhajlsYDnrKblj7fjgIHlpJbpg6jnrKblj7flkozmnKzlnLDnrKblj7fnmoTlrprkuYnjgIJgLCBwIGDnkIbop6PnrKblj7fop6PmnpDnmoTnm67nmoTlkozlip/og73ku6Xlj4rov5vooYznrKblj7fop6PmnpDnmoTov4fnqIvjgIJgLCBwIGDnkIbop6PlhajlsYDnrKblj7fnmoTlvLrlvLHmgKfku6Xlj4rlpoLkvZXlpITnkIblpJrph43nrKblj7flrprkuYnjgIJgLCBwIGDog73lpJ/ov5DnlKjlpJrph43nrKblj7flrprkuYnop4TliJnlr7nnqIvluo/miafooYznu5Pmnpzov5vooYzliIbmnpDjgIJgLCBwIGDkuobop6PpnZnmgIHlupPnmoTmpoLlv7XlkozpnZnmgIHpk77mjqXml7bnmoTnrKblj7fop6PmnpDov4fnqIvjgIJgLCBwIGDnkIbop6Pph43lrprkvY3nmoTnm67nmoTlkozlip/og73ku6Xlj4rov5vooYzph43lrprkvY3nmoTov4fnqIvjgIJgLCBwIGDkuobop6Pph43lrprkvY3kv6Hmga/lnKjlj6/ph43lrprkvY3nm67moIfmlofku7bkuK3lrZjmlL7lnKjlk6rkupvoioLkuK3jgIJgLCBwIGDkuobop6MgSUEtMzIg5aSE55CG5Zmo55u45YWz55qE5Lik56eN5Z+65pys6YeN5a6a5L2N5L+h5oGv57G75Z6L44CCYCwgcCBg55CG6KejIElBLTMyIOWkhOeQhuWZqOebuOWFs+eahOS4pOenjeWfuuacrOmHjeWumuS9jeaWueW8j+eahOaJp+ihjOi/h+eoi+OAgmAsIHAgYOS6huino+WPr+aJp+ihjOebruagh+aWh+S7tueahOWKoOi9vei/h+eoi+OAgmAsIHAgYOS6huino+WKqOaAgemTvuaOpeeahOamguW/teWSjOWfuuacrOeJueaAp+OAgmAsIHAgYOS6huino+eoi+W6j+WKoOi9veaXtueahOWKqOaAgemTvuaOpei/h+eoi+OAgmAsIHAgYOS6huino+eoi+W6j+i/kOihjOaXtueahOWKqOaAgemTvuaOpei/h+eoi+OAgmApLCBwIGDpk77mjqXlmajkvY3kuo7nvJbor5HlmajjgIHmjIfku6Tpm4bkvZPns7vnu5PmnoTlkozmk43kvZzns7vnu5/nmoTkuqTlj4nngrnkuIrvvIzmtonlj4rmjIfku6Tns7vnu5/jgIHku6PnoIHnlJ/miJDjgIHmnLrlmajor63oqIDjgIHnqIvluo/ovazmjaLlkozomZrmi5/lrZjlgqjnrqHnkIbnrYnor7jlpJrmpoLlv7XvvIzlm6DogIzlroPlr7nkuo7nkIbop6PmlbTkuKrorqHnrpfmnLrns7vnu5/mpoLlv7XmnaXor7TmmK/pnZ7luLjph43opoHnmoTjgIJgLCBwIGDmnKznq6DnmoTlhoXlrrnlnKjkvKDnu5/nmoTorqHnrpfmnLrkuJPkuJrmlZnlrabkvZPns7vkuK3msqHmnInkuIDpl6jor77nqIvkvJrmtonlj4rvvIzkvYbmmK/nlLHkuo7pk77mjqXlmajlnKjmlbTkuKrorqHnrpfmnLrns7vnu5/kuK3lpITkuo7lpJrkuKrmoLjlv4PlhoXlrrnnmoTkuqTlj4nngrnkuIrvvIzlm6DmraTlrabnlJ/lr7nov5npg6jliIblhoXlrrnnmoTmt7HlhaXnkIbop6PmmK/pnZ7luLjmnInlv4XopoHnmoTvvIzlr7nkuo7lhbvmiJDoia/lpb3nmoTnqIvluo/orr7orqHkuaDmg6/jgIHlop7lvLrnqIvluo/osIPor5Xog73lipvjgIHmt7HlhaXnkIbop6Pov5vnqIvnmoTomZrmi5/lnLDlnYDnqbrpl7TmpoLlv7XnrYnpg73mnInpnZ7luLjph43opoHnmoTkvZznlKjjgIJgLCBwIGDmnKznq6DnmoTmlZnlrablj6/ku6Xnu5PlkIjlrp7pqozov5vooYzvvIzlhbPkuo4gRUxGIOWktOOAgeWQhOS4quiKguS7peWPiuiKguWktOihqOOAgeeoi+W6j+WktOihqO+8iOauteWktOihqO+8ieS7peWPiuWQhOenjeiKgue7hOaIkOeahOauteetiee7huiKguWGheWuue+8jOWPquimgeaxguWtpueUn+iDveWkn+eQhuino+WNs+WPr++8jOS4jemcgOimgeatu+iusOehrOiDjOOAgmApLmVsZW07XG5cbiAgICAgIHdpbmRvdy5vdXRlci52aWV3c1snL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzEnXT17cGFnZSx0aXRsZX07Y29uc29sZS5sb2codGl0bGUpIl0sInNvdXJjZVJvb3QiOiIifQ==