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
/******/ 		"ComputerOrganization/Chapter6/1": 0
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
/******/ 	deferredModules.push(["./src/pages/ComputerOrganization/Chapter6/1.page.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/ComputerOrganization/Chapter6/1.page.ts":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter6/1.page.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['', '\u4F7F\u5B66\u751F\u638C\u63E1\u6784\u6210\u5B58\u50A8\u5668\u5206\u5C42\u4F53\u7CFB\u7ED3\u6784\u7684\u51E0\u7C7B\u5B58\u50A8\u5668\u7684\u5DE5\u4F5C\u539F\u7406\u548C\u7EC4\u7EC7\u5F62\u5F0F\u3002\u8981\u6C42\u5B66\u751F\u6DF1\u523B\u7406\u89E3\u7A0B\u5E8F\u8BBF\u95EE\u5C40\u90E8\u6027\u7684\u610F\u4E49\uFF0C\u5B66\u4F1A\u5229\u7528\u65F6\u95F4\u5C40\u90E8\u6027\u548C\u7A7A\u95F4\u5C40\u90E8\u6027\u7F16\u5199\u9AD8\u6548\u7684\u7A0B\u5E8F\uFF1B\u4E86\u89E3\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u4E2D\u8BBF\u95EE\u6307\u4EE4\u548C\u8BBF\u95EE\u6570\u636E\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u4EE5\u53CA\u5B58\u50A8\u8BBF\u95EE\u8FC7\u7A0B\u4E2D\u786C\u4EF6\u548C\u8F6F\u4EF6\u7684\u5206\u5DE5\u548C\u8054\u7CFB\uFF0C\u5E76\u6DF1\u523B\u7406\u89E3\u63D0\u9AD8\u5404\u79CD\u8BBF\u95EE\u547D\u4E2D\u7387\u7684\u610F\u4E49\uFF1B\u4E86\u89E3\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u7684\u5FC5\u8981\u6027\u548C\u5B9E\u73B0\u601D\u8DEF\uFF0C\u4E3A\u5B66\u4E60\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u5B58\u50A8\u7BA1\u7406\u7B49\u5185\u5BB9\u6253\u4E0B\u575A\u5B9E\u57FA\u7840\u3002'], ['', '\u4F7F\u5B66\u751F\u638C\u63E1\u6784\u6210\u5B58\u50A8\u5668\u5206\u5C42\u4F53\u7CFB\u7ED3\u6784\u7684\u51E0\u7C7B\u5B58\u50A8\u5668\u7684\u5DE5\u4F5C\u539F\u7406\u548C\u7EC4\u7EC7\u5F62\u5F0F\u3002\u8981\u6C42\u5B66\u751F\u6DF1\u523B\u7406\u89E3\u7A0B\u5E8F\u8BBF\u95EE\u5C40\u90E8\u6027\u7684\u610F\u4E49\uFF0C\u5B66\u4F1A\u5229\u7528\u65F6\u95F4\u5C40\u90E8\u6027\u548C\u7A7A\u95F4\u5C40\u90E8\u6027\u7F16\u5199\u9AD8\u6548\u7684\u7A0B\u5E8F\uFF1B\u4E86\u89E3\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\u4E2D\u8BBF\u95EE\u6307\u4EE4\u548C\u8BBF\u95EE\u6570\u636E\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u4EE5\u53CA\u5B58\u50A8\u8BBF\u95EE\u8FC7\u7A0B\u4E2D\u786C\u4EF6\u548C\u8F6F\u4EF6\u7684\u5206\u5DE5\u548C\u8054\u7CFB\uFF0C\u5E76\u6DF1\u523B\u7406\u89E3\u63D0\u9AD8\u5404\u79CD\u8BBF\u95EE\u547D\u4E2D\u7387\u7684\u610F\u4E49\uFF1B\u4E86\u89E3\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u7684\u5FC5\u8981\u6027\u548C\u5B9E\u73B0\u601D\u8DEF\uFF0C\u4E3A\u5B66\u4E60\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u5B58\u50A8\u7BA1\u7406\u7B49\u5185\u5BB9\u6253\u4E0B\u575A\u5B9E\u57FA\u7840\u3002']),
    _templateObject2 = _taggedTemplateLiteral(['\u4E3B\u8981\u6559\u5B66\u76EE\u6807'], ['\u4E3B\u8981\u6559\u5B66\u76EE\u6807']),
    _templateObject3 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject4 = _taggedTemplateLiteral(['\u57FA\u672C\u5B66\u4E60\u8981\u6C42'], ['\u57FA\u672C\u5B66\u4E60\u8981\u6C42']),
    _templateObject5 = _taggedTemplateLiteral(['\u4E86\u89E3\u5B58\u50A8\u5668\u7684\u5404\u79CD\u5206\u7C7B\u65B9\u5F0F\u3002'], ['\u4E86\u89E3\u5B58\u50A8\u5668\u7684\u5404\u79CD\u5206\u7C7B\u65B9\u5F0F\u3002']),
    _templateObject6 = _taggedTemplateLiteral(['\u638C\u63E1\u5982\u4F55\u6784\u5EFA\u5B58\u50A8\u5668\u7684\u5C42\u6B21\u5316\u7ED3\u6784\u3002'], ['\u638C\u63E1\u5982\u4F55\u6784\u5EFA\u5B58\u50A8\u5668\u7684\u5C42\u6B21\u5316\u7ED3\u6784\u3002']),
    _templateObject7 = _taggedTemplateLiteral(['\u719F\u6089\u4E3B\u5B58\u50A8\u5668\u7684\u57FA\u672C\u903B\u8F91\u7ED3\u6784\u3002'], ['\u719F\u6089\u4E3B\u5B58\u50A8\u5668\u7684\u57FA\u672C\u903B\u8F91\u7ED3\u6784\u3002']),
    _templateObject8 = _taggedTemplateLiteral(['\u4E86\u89E3 SRAM \u548C DRAM \u82AF\u7247\u7684\u5185\u90E8\u7ED3\u6784\u3002'], ['\u4E86\u89E3 SRAM \u548C DRAM \u82AF\u7247\u7684\u5185\u90E8\u7ED3\u6784\u3002']),
    _templateObject9 = _taggedTemplateLiteral(['\u4E86\u89E3\u534A\u5BFC\u4F53\u968F\u673A\u5B58\u53D6\u5B58\u50A8\u5668\u7684\u7EC4\u7EC7\u65B9\u5F0F\u3002'], ['\u4E86\u89E3\u534A\u5BFC\u4F53\u968F\u673A\u5B58\u53D6\u5B58\u50A8\u5668\u7684\u7EC4\u7EC7\u65B9\u5F0F\u3002']),
    _templateObject10 = _taggedTemplateLiteral(['\u4E86\u89E3\u5404\u79CD\u53EA\u8BFB\u5B58\u50A8\u5668\u7684\u7279\u70B9\u3002'], ['\u4E86\u89E3\u5404\u79CD\u53EA\u8BFB\u5B58\u50A8\u5668\u7684\u7279\u70B9\u3002']),
    _templateObject11 = _taggedTemplateLiteral(['\u638C\u63E1\u5B58\u50A8\u5668\u82AF\u7247\u6269\u5C55\u6280\u672F\u53CA\u5176\u4E0E CPU \u7684\u8FDE\u63A5\u65B9\u5F0F\u3002'], ['\u638C\u63E1\u5B58\u50A8\u5668\u82AF\u7247\u6269\u5C55\u6280\u672F\u53CA\u5176\u4E0E CPU \u7684\u8FDE\u63A5\u65B9\u5F0F\u3002']),
    _templateObject12 = _taggedTemplateLiteral(['\u4E86\u89E3\u78C1\u76D8\u5B58\u50A8\u5668\u7684\u57FA\u672C\u7ED3\u6784\u548C\u5DE5\u4F5C\u539F\u7406\u3002'], ['\u4E86\u89E3\u78C1\u76D8\u5B58\u50A8\u5668\u7684\u57FA\u672C\u7ED3\u6784\u548C\u5DE5\u4F5C\u539F\u7406\u3002']),
    _templateObject13 = _taggedTemplateLiteral(['\u4E86\u89E3\u78C1\u76D8\u5B58\u50A8\u5668\u7684\u6027\u80FD\u6307\u6807\u3002'], ['\u4E86\u89E3\u78C1\u76D8\u5B58\u50A8\u5668\u7684\u6027\u80FD\u6307\u6807\u3002']),
    _templateObject14 = _taggedTemplateLiteral(['\u6DF1\u523B\u7406\u89E3\u7A0B\u5E8F\u8BBF\u95EE\u7684\u5C40\u90E8\u5316\u7279\u6027\u3002'], ['\u6DF1\u523B\u7406\u89E3\u7A0B\u5E8F\u8BBF\u95EE\u7684\u5C40\u90E8\u5316\u7279\u6027\u3002']),
    _templateObject15 = _taggedTemplateLiteral(['\u638C\u63E1 cache \u7684\u57FA\u672C\u539F\u7406\u4E0E\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5305\u62EC\u6620\u5C04\u65B9\u5F0F\u3001\u66FF\u6362\u7B97\u6CD5\u3001\u5199\u7B56\u7565\u7B49\u3002'], ['\u638C\u63E1 cache \u7684\u57FA\u672C\u539F\u7406\u4E0E\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5305\u62EC\u6620\u5C04\u65B9\u5F0F\u3001\u66FF\u6362\u7B97\u6CD5\u3001\u5199\u7B56\u7565\u7B49\u3002']),
    _templateObject16 = _taggedTemplateLiteral(['\u7406\u89E3\u4E3A\u4F55\u91C7\u7528\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u65B9\u5F0F\u3002'], ['\u7406\u89E3\u4E3A\u4F55\u91C7\u7528\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u65B9\u5F0F\u3002']),
    _templateObject17 = _taggedTemplateLiteral(['\u7406\u89E3\u4EC0\u4E48\u662F\u865A\u62DF\u5730\u5740\u548C\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u3002'], ['\u7406\u89E3\u4EC0\u4E48\u662F\u865A\u62DF\u5730\u5740\u548C\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u3002']),
    _templateObject18 = _taggedTemplateLiteral(['\u638C\u63E1\u865A\u62DF\u5730\u5740\u5411\u7269\u7406\u5730\u5740\u8F6C\u6362\u7684\u57FA\u672C\u539F\u7406\u4E0E\u5B9E\u73B0\u6280\u672F\u3002'], ['\u638C\u63E1\u865A\u62DF\u5730\u5740\u5411\u7269\u7406\u5730\u5740\u8F6C\u6362\u7684\u57FA\u672C\u539F\u7406\u4E0E\u5B9E\u73B0\u6280\u672F\u3002']),
    _templateObject19 = _taggedTemplateLiteral(['\u4E86\u89E3\u9875\u8868\u7684\u529F\u80FD\u548C\u9875\u8868\u9879\u7684\u5185\u5BB9\u3002'], ['\u4E86\u89E3\u9875\u8868\u7684\u529F\u80FD\u548C\u9875\u8868\u9879\u7684\u5185\u5BB9\u3002']),
    _templateObject20 = _taggedTemplateLiteral(['\u4E86\u89E3\u300C\u7F3A\u9875\u300D\u5F02\u5E38\u7684\u53D1\u73B0\u548C\u5904\u7406\u8FC7\u7A0B\u3002'], ['\u4E86\u89E3\u300C\u7F3A\u9875\u300D\u5F02\u5E38\u7684\u53D1\u73B0\u548C\u5904\u7406\u8FC7\u7A0B\u3002']),
    _templateObject21 = _taggedTemplateLiteral(['\u638C\u63E1 TLB\uFF08\u5FEB\u8868\uFF09\u7684\u7ED3\u6784\u548C\u5B9E\u73B0\u6280\u672F\u3002'], ['\u638C\u63E1 TLB\uFF08\u5FEB\u8868\uFF09\u7684\u7ED3\u6784\u548C\u5B9E\u73B0\u6280\u672F\u3002']),
    _templateObject22 = _taggedTemplateLiteral(['\u638C\u63E1\u4E00\u6B21\u5B58\u50A8\u8BBF\u95EE\u7684\u5168\u8FC7\u7A0B\uFF0C\u5E76\u6DF1\u523B\u7406\u89E3\u5728\u6B64\u8FC7\u7A0B\u4E2D\u786C\u4EF6\u4E0E\u8F6F\u4EF6\u4E4B\u95F4\u7684\u5206\u5DE5\u534F\u4F5C\u65B9\u5F0F\u3002'], ['\u638C\u63E1\u4E00\u6B21\u5B58\u50A8\u8BBF\u95EE\u7684\u5168\u8FC7\u7A0B\uFF0C\u5E76\u6DF1\u523B\u7406\u89E3\u5728\u6B64\u8FC7\u7A0B\u4E2D\u786C\u4EF6\u4E0E\u8F6F\u4EF6\u4E4B\u95F4\u7684\u5206\u5DE5\u534F\u4F5C\u65B9\u5F0F\u3002']),
    _templateObject23 = _taggedTemplateLiteral(['\u4E86\u89E3 IA-32/Linux \u7CFB\u7EDF\u4E2D\u7684\u5730\u5740\u8F6C\u6362\u8FC7\u7A0B\u3002'], ['\u4E86\u89E3 IA-32/Linux \u7CFB\u7EDF\u4E2D\u7684\u5730\u5740\u8F6C\u6362\u8FC7\u7A0B\u3002']),
    _templateObject24 = _taggedTemplateLiteral(['\u672C\u7AE0\u4E3B\u8981\u5305\u542B 4 \u4E2A\u6838\u5FC3\u5185\u5BB9\uFF1A\u534A\u5BFC\u4F53\u968F\u673A\u8BBF\u95EE\u5B58\u50A8\u5668\u3001\u78C1\u76D8\u5B58\u50A8\u5668\u3001cache \u548C\u865A\u62DF\u5B58\u50A8\u5668\uFF0C\u5E76\u9610\u8FF0\u4E86\u5982\u4F55\u4EE5\u8FD9 4 \u4E2A\u6838\u5FC3\u5185\u5BB9\u4E3A\u57FA\u7840\uFF0C\u6784\u5EFA\u5B58\u50A8\u5668\u7684\u5C42\u6B21\u5316\u4F53\u7CFB\u7ED3\u6784\u6846\u67B6\u3002'], ['\u672C\u7AE0\u4E3B\u8981\u5305\u542B 4 \u4E2A\u6838\u5FC3\u5185\u5BB9\uFF1A\u534A\u5BFC\u4F53\u968F\u673A\u8BBF\u95EE\u5B58\u50A8\u5668\u3001\u78C1\u76D8\u5B58\u50A8\u5668\u3001cache \u548C\u865A\u62DF\u5B58\u50A8\u5668\uFF0C\u5E76\u9610\u8FF0\u4E86\u5982\u4F55\u4EE5\u8FD9 4 \u4E2A\u6838\u5FC3\u5185\u5BB9\u4E3A\u57FA\u7840\uFF0C\u6784\u5EFA\u5B58\u50A8\u5668\u7684\u5C42\u6B21\u5316\u4F53\u7CFB\u7ED3\u6784\u6846\u67B6\u3002']),
    _templateObject25 = _taggedTemplateLiteral(['\u6709\u5173\u5B58\u50A8\u82AF\u7247\u7684\u6269\u5C55\u548C\u8FDE\u63A5\u6280\u672F\u65B9\u9762\u7684\u77E5\u8BC6\uFF0C\u6709\u52A9\u4E8E\u5BF9\u603B\u7EBF\u3001\u6570\u636E\u7684\u5B58\u653E\u987A\u5E8F\u548C\u5BF9\u9F50\u65B9\u5F0F\u7B49\u8BB8\u591A\u6982\u5FF5\u7684\u7406\u89E3\uFF0C\u540C\u6B65\u52A8\u6001\u5B58\u50A8\u5668\uFF08SDRAM \u82AF\u7247\uFF09\u7684\u6982\u5FF5\u4E0E\u540E\u9762\u6709\u5173\u603B\u7EBF\u8BBE\u8BA1\u3001\u7CFB\u7EDF\u4E92\u8FDE\u7B49\u5185\u5BB9\u76F8\u5173\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u534A\u5BFC\u4F53\u968F\u673A\u8BBF\u95EE\u5B58\u50A8\u5668\uFF0C\u5E94\u7740\u91CD\u8BB2\u6E05\u695A DRAM \u82AF\u7247\u7684\u57FA\u672C\u7ED3\u6784\u3001\u7279\u70B9\u548C\u7528\u9014\uFF0C\u4EE5\u53CA\u5B58\u50A8\u82AF\u7247\u7684\u6269\u5C55\u548C\u8FDE\u63A5\u6280\u672F\u3002'], ['\u6709\u5173\u5B58\u50A8\u82AF\u7247\u7684\u6269\u5C55\u548C\u8FDE\u63A5\u6280\u672F\u65B9\u9762\u7684\u77E5\u8BC6\uFF0C\u6709\u52A9\u4E8E\u5BF9\u603B\u7EBF\u3001\u6570\u636E\u7684\u5B58\u653E\u987A\u5E8F\u548C\u5BF9\u9F50\u65B9\u5F0F\u7B49\u8BB8\u591A\u6982\u5FF5\u7684\u7406\u89E3\uFF0C\u540C\u6B65\u52A8\u6001\u5B58\u50A8\u5668\uFF08SDRAM \u82AF\u7247\uFF09\u7684\u6982\u5FF5\u4E0E\u540E\u9762\u6709\u5173\u603B\u7EBF\u8BBE\u8BA1\u3001\u7CFB\u7EDF\u4E92\u8FDE\u7B49\u5185\u5BB9\u76F8\u5173\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u534A\u5BFC\u4F53\u968F\u673A\u8BBF\u95EE\u5B58\u50A8\u5668\uFF0C\u5E94\u7740\u91CD\u8BB2\u6E05\u695A DRAM \u82AF\u7247\u7684\u57FA\u672C\u7ED3\u6784\u3001\u7279\u70B9\u548C\u7528\u9014\uFF0C\u4EE5\u53CA\u5B58\u50A8\u82AF\u7247\u7684\u6269\u5C55\u548C\u8FDE\u63A5\u6280\u672F\u3002']),
    _templateObject26 = _taggedTemplateLiteral(['\u5BF9\u4E8E\u78C1\u76D8\u5B58\u50A8\u5668\uFF0C\u56E0\u4E3A\u5B83\u662F\u5B58\u50A8\u5668\u5206\u5C42\u4F53\u7CFB\u7ED3\u6784\u4E2D\u7684\u4E00\u4E2A\u91CD\u8981\u7EC4\u6210\u90E8\u5206\uFF0C\u5B83\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u5B58\u50A8\u7BA1\u7406\u548C\u8BBE\u5907\u7BA1\u7406\u90FD\u6709\u5F88\u5927\u7684\u5173\u8054\uFF0C\u56E0\u6B64\uFF0C\u672C\u8BFE\u7A0B\u4E2D\u5E94\u8BE5\u628A\u786C\u76D8\u5B58\u50A8\u5668\u8BB2\u6E05\u695A\uFF0C\u5305\u62EC\uFF1A\u6027\u80FD\u6307\u6807\u3001\u8BFB\u5199\u539F\u7406\u3001\u786C\u76D8\u9A71\u52A8\u5668\u7684\u5185\u90E8\u7ED3\u6784\u3001\u786C\u76D8\u63A7\u5236\u5668\u7684\u7ED3\u6784\u548C\u529F\u80FD\u3001\u78C1\u9053\u548C\u6247\u533A\u8BB0\u5F55\u683C\u5F0F\u7B49\u3002'], ['\u5BF9\u4E8E\u78C1\u76D8\u5B58\u50A8\u5668\uFF0C\u56E0\u4E3A\u5B83\u662F\u5B58\u50A8\u5668\u5206\u5C42\u4F53\u7CFB\u7ED3\u6784\u4E2D\u7684\u4E00\u4E2A\u91CD\u8981\u7EC4\u6210\u90E8\u5206\uFF0C\u5B83\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u5B58\u50A8\u7BA1\u7406\u548C\u8BBE\u5907\u7BA1\u7406\u90FD\u6709\u5F88\u5927\u7684\u5173\u8054\uFF0C\u56E0\u6B64\uFF0C\u672C\u8BFE\u7A0B\u4E2D\u5E94\u8BE5\u628A\u786C\u76D8\u5B58\u50A8\u5668\u8BB2\u6E05\u695A\uFF0C\u5305\u62EC\uFF1A\u6027\u80FD\u6307\u6807\u3001\u8BFB\u5199\u539F\u7406\u3001\u786C\u76D8\u9A71\u52A8\u5668\u7684\u5185\u90E8\u7ED3\u6784\u3001\u786C\u76D8\u63A7\u5236\u5668\u7684\u7ED3\u6784\u548C\u529F\u80FD\u3001\u78C1\u9053\u548C\u6247\u533A\u8BB0\u5F55\u683C\u5F0F\u7B49\u3002']),
    _templateObject27 = _taggedTemplateLiteral(['\u5BF9\u4E8E cache\uFF0C\u9996\u5148\uFF0C\u5E94\u7740\u91CD\u8BB2\u6E05\u695A\u7A0B\u5E8F\u8BBF\u95EE\u7684\u5C40\u90E8\u6027\uFF0C\u56E0\u4E3A\u7A0B\u5E8F\u7684\u65F6\u95F4\u5C40\u90E8\u6027\u548C\u7A7A\u95F4\u5C40\u90E8\u6027\u662F\u63D0\u51FA\u5E76\u5B9E\u73B0 cache \u7684\u57FA\u7840\uFF0C\u5BF9\u8FD9\u4E9B\u5185\u5BB9\u7684\u6DF1\u523B\u7406\u89E3\uFF0C\u4E5F\u6709\u52A9\u4E8E\u7F16\u5199\u9AD8\u6548\u7684\u7A0B\u5E8F\u3002\u901A\u8FC7\u5177\u4F53\u7A0B\u5E8F\u793A\u4F8B\uFF0C\u53EF\u4EE5\u5C06\u7A0B\u5E8F\u8BBF\u95EE\u7684\u5C40\u90E8\u6027\u7279\u70B9\u8BB2\u6DF1\u8BB2\u900F\u3002cache \u548C\u4E3B\u5B58\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u53EF\u80FD\u662F\u96BE\u70B9\u90E8\u5206\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u4F8B\u5B50\u6765\u8BF4\u660E\u4E0D\u540C\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u4F7F\u5F97\u5B66\u751F\u80FD\u591F\u8F83\u5FEB\u5730\u638C\u63E1\u4E0D\u540C\u6620\u5C04\u5173\u7CFB\u7684\u4E0D\u540C\u5B9E\u73B0\u65B9\u5F0F\u53CA\u5176\u8BBF\u5B58\u8FC7\u7A0B\u3002'], ['\u5BF9\u4E8E cache\uFF0C\u9996\u5148\uFF0C\u5E94\u7740\u91CD\u8BB2\u6E05\u695A\u7A0B\u5E8F\u8BBF\u95EE\u7684\u5C40\u90E8\u6027\uFF0C\u56E0\u4E3A\u7A0B\u5E8F\u7684\u65F6\u95F4\u5C40\u90E8\u6027\u548C\u7A7A\u95F4\u5C40\u90E8\u6027\u662F\u63D0\u51FA\u5E76\u5B9E\u73B0 cache \u7684\u57FA\u7840\uFF0C\u5BF9\u8FD9\u4E9B\u5185\u5BB9\u7684\u6DF1\u523B\u7406\u89E3\uFF0C\u4E5F\u6709\u52A9\u4E8E\u7F16\u5199\u9AD8\u6548\u7684\u7A0B\u5E8F\u3002\u901A\u8FC7\u5177\u4F53\u7A0B\u5E8F\u793A\u4F8B\uFF0C\u53EF\u4EE5\u5C06\u7A0B\u5E8F\u8BBF\u95EE\u7684\u5C40\u90E8\u6027\u7279\u70B9\u8BB2\u6DF1\u8BB2\u900F\u3002cache \u548C\u4E3B\u5B58\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u53EF\u80FD\u662F\u96BE\u70B9\u90E8\u5206\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u4F8B\u5B50\u6765\u8BF4\u660E\u4E0D\u540C\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u4F7F\u5F97\u5B66\u751F\u80FD\u591F\u8F83\u5FEB\u5730\u638C\u63E1\u4E0D\u540C\u6620\u5C04\u5173\u7CFB\u7684\u4E0D\u540C\u5B9E\u73B0\u65B9\u5F0F\u53CA\u5176\u8BBF\u5B58\u8FC7\u7A0B\u3002']),
    _templateObject28 = _taggedTemplateLiteral(['\u5BF9\u4E8E\u865A\u62DF\u5B58\u50A8\u5668\uFF0C\u7740\u91CD\u8BB2\u6E05\u695A\u8BF7\u6C42\u5206\u9875\u7684\u601D\u60F3\u3001\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u7684\u6982\u5FF5\u3001\u9875\u8868\u7684\u7ED3\u6784\u3001\u5730\u5740\u8F6C\u6362\u8FC7\u7A0B\u548C\u5FEB\u8868\u7684\u6982\u5FF5\uFF0C\u5E76\u7ED3\u5408 IA-32/Linux \u7CFB\u7EDF\u4E2D\u7684\u5730\u5740\u8F6C\u6362\u5B9E\u4F8B\u6765\u52A0\u6DF1\u5B66\u751F\u5BF9\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u3001\u5730\u5740\u8F6C\u6362\u3001\u5B58\u50A8\u4FDD\u62A4\u7B49\u65B9\u9762\u7684\u8BA4\u8BC6\u3002'], ['\u5BF9\u4E8E\u865A\u62DF\u5B58\u50A8\u5668\uFF0C\u7740\u91CD\u8BB2\u6E05\u695A\u8BF7\u6C42\u5206\u9875\u7684\u601D\u60F3\u3001\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u7684\u6982\u5FF5\u3001\u9875\u8868\u7684\u7ED3\u6784\u3001\u5730\u5740\u8F6C\u6362\u8FC7\u7A0B\u548C\u5FEB\u8868\u7684\u6982\u5FF5\uFF0C\u5E76\u7ED3\u5408 IA-32/Linux \u7CFB\u7EDF\u4E2D\u7684\u5730\u5740\u8F6C\u6362\u5B9E\u4F8B\u6765\u52A0\u6DF1\u5B66\u751F\u5BF9\u865A\u62DF\u5B58\u50A8\u7BA1\u7406\u3001\u5730\u5740\u8F6C\u6362\u3001\u5B58\u50A8\u4FDD\u62A4\u7B49\u65B9\u9762\u7684\u8BA4\u8BC6\u3002']);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = '6.1　教学目标和内容安排';
var page = (0, _write.section)(title)((0, _write.p)(_templateObject, (0, _write.b)(_templateObject2)), (0, _write.p)(_templateObject3, (0, _write.b)(_templateObject4)), (0, _write.ol)((0, _write.p)(_templateObject5), (0, _write.p)(_templateObject6), (0, _write.p)(_templateObject7), (0, _write.p)(_templateObject8), (0, _write.p)(_templateObject9), (0, _write.p)(_templateObject10), (0, _write.p)(_templateObject11), (0, _write.p)(_templateObject12), (0, _write.p)(_templateObject13), (0, _write.p)(_templateObject14), (0, _write.p)(_templateObject15), (0, _write.p)(_templateObject16), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18), (0, _write.p)(_templateObject19), (0, _write.p)(_templateObject20), (0, _write.p)(_templateObject21), (0, _write.p)(_templateObject22), (0, _write.p)(_templateObject23)), (0, _write.p)(_templateObject24), (0, _write.p)(_templateObject25), (0, _write.p)(_templateObject26), (0, _write.p)(_templateObject27), (0, _write.p)(_templateObject28)).elem;

window.outer.views['/ComputerOrganization/Chapter6/1'] = { page: page, title: title };console.log(title);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzEucGFnZS50cyJdLCJuYW1lcyI6WyJ0aXRsZSIsInBhZ2UiLCJwIiwiYiIsImVsZW0iLCJ3aW5kb3ciLCJvdXRlciIsInZpZXdzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBOzs7O0FBQ0EsSUFBTUEsUUFBUSxlQUFkO0FBQ0EsSUFBTUMsT0FBTyxvQkFBUUQsS0FBUixNQUFlRSxRQUFmLHVCQUFvQkMsUUFBcEIsMEJBQXFORCxRQUFyTix3QkFBME5DLFFBQTFOLHNCQUF3TyxtQkFBR0QsUUFBSCx5QkFBc0JBLFFBQXRCLHlCQUE0Q0EsUUFBNUMseUJBQWdFQSxRQUFoRSx5QkFBNkZBLFFBQTdGLHlCQUFxSEEsUUFBckgsMEJBQXdJQSxRQUF4SSwwQkFBdUtBLFFBQXZLLDBCQUErTEEsUUFBL0wsMEJBQWtOQSxRQUFsTiwwQkFBdU9BLFFBQXZPLDBCQUFrUkEsUUFBbFIsMEJBQXVTQSxRQUF2UywwQkFBOFRBLFFBQTlULDBCQUE0VkEsUUFBNVYsMEJBQWlYQSxRQUFqWCwwQkFBd1lBLFFBQXhZLDBCQUFpYUEsUUFBamEsMEJBQTZjQSxRQUE3YyxxQkFBeE8sTUFBc3RCQSxRQUF0dEIsMEJBQTZ5QkEsUUFBN3lCLDBCQUFvOEJBLFFBQXA4QiwwQkFBcWtDQSxRQUFya0MsMEJBQW13Q0EsUUFBbndDLHNCQUFrM0NFLElBQS8zQzs7QUFFTUMsT0FBT0MsS0FBUCxDQUFhQyxLQUFiLENBQW1CLGtDQUFuQixJQUF1RCxFQUFDTixVQUFELEVBQU1ELFlBQU4sRUFBdkQsQ0FBb0VRLFFBQVFDLEdBQVIsQ0FBWVQsS0FBWixFIiwiZmlsZSI6IkNvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjYvMVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzEucGFnZS50c1wiLFwidmVuZG9yc1wiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgcCwgYiwgc2VjdGlvbiwgb2wgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvQHdyaXRlJztcbmNvbnN0IHRpdGxlID0gJzYuMeOAgOaVmeWtpuebruagh+WSjOWGheWuueWuieaOkic7XG5jb25zdCBwYWdlID0gc2VjdGlvbih0aXRsZSkocCBgJHtiIGDkuLvopoHmlZnlrabnm67moIdgfeS9v+WtpueUn+aOjOaPoeaehOaIkOWtmOWCqOWZqOWIhuWxguS9k+ezu+e7k+aehOeahOWHoOexu+WtmOWCqOWZqOeahOW3peS9nOWOn+eQhuWSjOe7hOe7h+W9ouW8j+OAguimgeaxguWtpueUn+a3seWIu+eQhuino+eoi+W6j+iuv+mXruWxgOmDqOaAp+eahOaEj+S5ie+8jOWtpuS8muWIqeeUqOaXtumXtOWxgOmDqOaAp+WSjOepuumXtOWxgOmDqOaAp+e8luWGmemrmOaViOeahOeoi+W6j++8m+S6huino+aMh+S7pOaJp+ihjOi/h+eoi+S4reiuv+mXruaMh+S7pOWSjOiuv+mXruaVsOaNrueahOaVtOS4qui/h+eoi++8jOS7peWPiuWtmOWCqOiuv+mXrui/h+eoi+S4reehrOS7tuWSjOi9r+S7tueahOWIhuW3peWSjOiBlOezu++8jOW5tua3seWIu+eQhuino+aPkOmrmOWQhOenjeiuv+mXruWRveS4reeOh+eahOaEj+S5ie+8m+S6huino+iZmuaLn+WtmOWCqOeuoeeQhueahOW/heimgeaAp+WSjOWunueOsOaAnei3r++8jOS4uuWtpuS5oOaTjeS9nOezu+e7n+S4reeahOWtmOWCqOeuoeeQhuetieWGheWuueaJk+S4i+WdmuWunuWfuuehgOOAgmAsIHAgYCR7YiBg5Z+65pys5a2m5Lmg6KaB5rGCYH1gLCBvbChwIGDkuobop6PlrZjlgqjlmajnmoTlkITnp43liIbnsbvmlrnlvI/jgIJgLCBwIGDmjozmj6HlpoLkvZXmnoTlu7rlrZjlgqjlmajnmoTlsYLmrKHljJbnu5PmnoTjgIJgLCBwIGDnhp/mgonkuLvlrZjlgqjlmajnmoTln7rmnKzpgLvovpHnu5PmnoTjgIJgLCBwIGDkuobop6MgU1JBTSDlkowgRFJBTSDoiq/niYfnmoTlhoXpg6jnu5PmnoTjgIJgLCBwIGDkuobop6PljYrlr7zkvZPpmo/mnLrlrZjlj5blrZjlgqjlmajnmoTnu4Tnu4fmlrnlvI/jgIJgLCBwIGDkuobop6PlkITnp43lj6ror7vlrZjlgqjlmajnmoTnibnngrnjgIJgLCBwIGDmjozmj6HlrZjlgqjlmajoiq/niYfmianlsZXmioDmnK/lj4rlhbbkuI4gQ1BVIOeahOi/nuaOpeaWueW8j+OAgmAsIHAgYOS6huino+ejgeebmOWtmOWCqOWZqOeahOWfuuacrOe7k+aehOWSjOW3peS9nOWOn+eQhuOAgmAsIHAgYOS6huino+ejgeebmOWtmOWCqOWZqOeahOaAp+iDveaMh+agh+OAgmAsIHAgYOa3seWIu+eQhuino+eoi+W6j+iuv+mXrueahOWxgOmDqOWMlueJueaAp+OAgmAsIHAgYOaOjOaPoSBjYWNoZSDnmoTln7rmnKzljp/nkIbkuI7lrp7njrDmlrnlvI/vvIzljIXmi6zmmKDlsITmlrnlvI/jgIHmm7/mjaLnrpfms5XjgIHlhpnnrZbnlaXnrYnjgIJgLCBwIGDnkIbop6PkuLrkvZXph4fnlKjomZrmi5/lrZjlgqjnrqHnkIbmlrnlvI/jgIJgLCBwIGDnkIbop6Pku4DkuYjmmK/omZrmi5/lnLDlnYDlkozomZrmi5/lnLDlnYDnqbrpl7TjgIJgLCBwIGDmjozmj6HomZrmi5/lnLDlnYDlkJHniannkIblnLDlnYDovazmjaLnmoTln7rmnKzljp/nkIbkuI7lrp7njrDmioDmnK/jgIJgLCBwIGDkuobop6PpobXooajnmoTlip/og73lkozpobXooajpobnnmoTlhoXlrrnjgIJgLCBwIGDkuobop6PjgIznvLrpobXjgI3lvILluLjnmoTlj5HnjrDlkozlpITnkIbov4fnqIvjgIJgLCBwIGDmjozmj6EgVExC77yI5b+r6KGo77yJ55qE57uT5p6E5ZKM5a6e546w5oqA5pyv44CCYCwgcCBg5o6M5o+h5LiA5qyh5a2Y5YKo6K6/6Zeu55qE5YWo6L+H56iL77yM5bm25rex5Yi755CG6Kej5Zyo5q2k6L+H56iL5Lit56Gs5Lu25LiO6L2v5Lu25LmL6Ze055qE5YiG5bel5Y2P5L2c5pa55byP44CCYCwgcCBg5LqG6KejIElBLTMyL0xpbnV4IOezu+e7n+S4reeahOWcsOWdgOi9rOaNoui/h+eoi+OAgmApLCBwIGDmnKznq6DkuLvopoHljIXlkKsgNCDkuKrmoLjlv4PlhoXlrrnvvJrljYrlr7zkvZPpmo/mnLrorr/pl67lrZjlgqjlmajjgIHno4Hnm5jlrZjlgqjlmajjgIFjYWNoZSDlkozomZrmi5/lrZjlgqjlmajvvIzlubbpmJDov7DkuoblpoLkvZXku6Xov5kgNCDkuKrmoLjlv4PlhoXlrrnkuLrln7rnoYDvvIzmnoTlu7rlrZjlgqjlmajnmoTlsYLmrKHljJbkvZPns7vnu5PmnoTmoYbmnrbjgIJgLCBwIGDmnInlhbPlrZjlgqjoiq/niYfnmoTmianlsZXlkozov57mjqXmioDmnK/mlrnpnaLnmoTnn6Xor4bvvIzmnInliqnkuo7lr7nmgLvnur/jgIHmlbDmja7nmoTlrZjmlL7pobrluo/lkozlr7npvZDmlrnlvI/nrYnorrjlpJrmpoLlv7XnmoTnkIbop6PvvIzlkIzmraXliqjmgIHlrZjlgqjlmajvvIhTRFJBTSDoiq/niYfvvInnmoTmpoLlv7XkuI7lkI7pnaLmnInlhbPmgLvnur/orr7orqHjgIHns7vnu5/kupLov57nrYnlhoXlrrnnm7jlhbPjgILlm6DmraTvvIzlr7nkuo7ljYrlr7zkvZPpmo/mnLrorr/pl67lrZjlgqjlmajvvIzlupTnnYDph43orrLmuIXmpZogRFJBTSDoiq/niYfnmoTln7rmnKznu5PmnoTjgIHnibnngrnlkoznlKjpgJTvvIzku6Xlj4rlrZjlgqjoiq/niYfnmoTmianlsZXlkozov57mjqXmioDmnK/jgIJgLCBwIGDlr7nkuo7no4Hnm5jlrZjlgqjlmajvvIzlm6DkuLrlroPmmK/lrZjlgqjlmajliIblsYLkvZPns7vnu5PmnoTkuK3nmoTkuIDkuKrph43opoHnu4TmiJDpg6jliIbvvIzlroPkuI7mk43kvZzns7vnu5/kuK3nmoTlrZjlgqjnrqHnkIblkozorr7lpIfnrqHnkIbpg73mnInlvojlpKfnmoTlhbPogZTvvIzlm6DmraTvvIzmnKzor77nqIvkuK3lupTor6Xmiornoaznm5jlrZjlgqjlmajorrLmuIXmpZrvvIzljIXmi6zvvJrmgKfog73mjIfmoIfjgIHor7vlhpnljp/nkIbjgIHnoaznm5jpqbHliqjlmajnmoTlhoXpg6jnu5PmnoTjgIHnoaznm5jmjqfliLblmajnmoTnu5PmnoTlkozlip/og73jgIHno4HpgZPlkozmiYfljLrorrDlvZXmoLzlvI/nrYnjgIJgLCBwIGDlr7nkuo4gY2FjaGXvvIzpppblhYjvvIzlupTnnYDph43orrLmuIXmpZrnqIvluo/orr/pl67nmoTlsYDpg6jmgKfvvIzlm6DkuLrnqIvluo/nmoTml7bpl7TlsYDpg6jmgKflkoznqbrpl7TlsYDpg6jmgKfmmK/mj5Dlh7rlubblrp7njrAgY2FjaGUg55qE5Z+656GA77yM5a+56L+Z5Lqb5YaF5a6555qE5rex5Yi755CG6Kej77yM5Lmf5pyJ5Yqp5LqO57yW5YaZ6auY5pWI55qE56iL5bqP44CC6YCa6L+H5YW35L2T56iL5bqP56S65L6L77yM5Y+v5Lul5bCG56iL5bqP6K6/6Zeu55qE5bGA6YOo5oCn54m554K56K6y5rex6K6y6YCP44CCY2FjaGUg5ZKM5Li75a2Y5LmL6Ze055qE5pig5bCE5YWz57O75Y+v6IO95piv6Zq+54K56YOo5YiG77yM5Y+v5Lul55u05o6l6YCa6L+H5L6L5a2Q5p2l6K+05piO5LiN5ZCM55qE5pig5bCE5YWz57O777yM5L2/5b6X5a2m55Sf6IO95aSf6L6D5b+r5Zyw5o6M5o+h5LiN5ZCM5pig5bCE5YWz57O755qE5LiN5ZCM5a6e546w5pa55byP5Y+K5YW26K6/5a2Y6L+H56iL44CCYCwgcCBg5a+55LqO6Jma5ouf5a2Y5YKo5Zmo77yM552A6YeN6K6y5riF5qWa6K+35rGC5YiG6aG155qE5oCd5oOz44CB6Jma5ouf5Zyw5Z2A56m66Ze055qE5qaC5b+144CB6aG16KGo55qE57uT5p6E44CB5Zyw5Z2A6L2s5o2i6L+H56iL5ZKM5b+r6KGo55qE5qaC5b+177yM5bm257uT5ZCIIElBLTMyL0xpbnV4IOezu+e7n+S4reeahOWcsOWdgOi9rOaNouWunuS+i+adpeWKoOa3seWtpueUn+WvueiZmuaLn+WtmOWCqOeuoeeQhuOAgeWcsOWdgOi9rOaNouOAgeWtmOWCqOS/neaKpOetieaWuemdoueahOiupOivhuOAgmApLmVsZW07XG5cbiAgICAgIHdpbmRvdy5vdXRlci52aWV3c1snL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzEnXT17cGFnZSx0aXRsZX07Y29uc29sZS5sb2codGl0bGUpIl0sInNvdXJjZVJvb3QiOiIifQ==