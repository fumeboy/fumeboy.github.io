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
/******/ 		"ComputerOrganization/Chapter1/2": 0
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
/******/ 	deferredModules.push(["./src/pages/ComputerOrganization/Chapter1/2.page.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/ComputerOrganization/Chapter1/2.page.ts":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter1/2.page.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\u51AF\xB7\u8BFA\u4F9D\u66FC\u8BA1\u7B97\u673A\u7ED3\u6784\u7684\u4E3B\u8981\u7279\u70B9\u5305\u62EC\uFF1A\u2460 \u8BA1\u7B97\u673A\u7531\u8FD0\u7B97\u5668\u3001\u63A7\u5236\u5668\u3001\u5B58\u50A8\u5668\u3001\u8F93\u5165\u8BBE\u5907\u548C\u8F93\u51FA\u8BBE\u5907\u4E94\u5927\u90E8\u5206\u7EC4\u6210\u3002\u2461 \u6307\u4EE4\u548C\u6570\u636E\u7528\u4E8C\u8FDB\u5236\u8868\u793A\uFF0C\u4E24\u8005\u5F62\u5F0F\u4E0A\u6CA1\u6709\u5DEE\u522B\u3002\u2462 \u6307\u4EE4\u548C\u6570\u636E\u5B58\u653E\u5728\u5B58\u50A8\u5668\u4E2D\uFF0C\u6309\u5730\u5740\u8BBF\u95EE\u3002\u2463 \u6307\u4EE4\u7531\u64CD\u4F5C\u7801\u548C\u5730\u5740\u7801\u7EC4\u6210\uFF0C\u64CD\u4F5C\u7801\u6307\u5B9A\u64CD\u4F5C\u6027\u8D28\uFF0C\u5730\u5740\u7801\u6307\u5B9A\u64CD\u4F5C\u6570\u5730\u5740\u3002\u2464 \u91C7\u7528\u300C\u5B58\u50A8\u7A0B\u5E8F\u300D\u65B9\u5F0F\u8FDB\u884C\u5DE5\u4F5C\u3002'], ['\u51AF\xB7\u8BFA\u4F9D\u66FC\u8BA1\u7B97\u673A\u7ED3\u6784\u7684\u4E3B\u8981\u7279\u70B9\u5305\u62EC\uFF1A\u2460 \u8BA1\u7B97\u673A\u7531\u8FD0\u7B97\u5668\u3001\u63A7\u5236\u5668\u3001\u5B58\u50A8\u5668\u3001\u8F93\u5165\u8BBE\u5907\u548C\u8F93\u51FA\u8BBE\u5907\u4E94\u5927\u90E8\u5206\u7EC4\u6210\u3002\u2461 \u6307\u4EE4\u548C\u6570\u636E\u7528\u4E8C\u8FDB\u5236\u8868\u793A\uFF0C\u4E24\u8005\u5F62\u5F0F\u4E0A\u6CA1\u6709\u5DEE\u522B\u3002\u2462 \u6307\u4EE4\u548C\u6570\u636E\u5B58\u653E\u5728\u5B58\u50A8\u5668\u4E2D\uFF0C\u6309\u5730\u5740\u8BBF\u95EE\u3002\u2463 \u6307\u4EE4\u7531\u64CD\u4F5C\u7801\u548C\u5730\u5740\u7801\u7EC4\u6210\uFF0C\u64CD\u4F5C\u7801\u6307\u5B9A\u64CD\u4F5C\u6027\u8D28\uFF0C\u5730\u5740\u7801\u6307\u5B9A\u64CD\u4F5C\u6570\u5730\u5740\u3002\u2464 \u91C7\u7528\u300C\u5B58\u50A8\u7A0B\u5E8F\u300D\u65B9\u5F0F\u8FDB\u884C\u5DE5\u4F5C\u3002']),
    _templateObject2 = _taggedTemplateLiteral(['\u8FD0\u7B97\u5668\u7528\u6765\u8FDB\u884C\u5404\u79CD\u7B97\u672F\u903B\u8F91\u8FD0\u7B97\uFF1B\u63A7\u5236\u5668\u7528\u6765\u5BF9\u6307\u4EE4\u8FDB\u884C\u8BD1\u7801\u5E76\u9001\u51FA\u64CD\u4F5C\u63A7\u5236\u4FE1\u53F7\uFF1B\u5B58\u50A8\u5668\u7528\u6765\u5B58\u653E\u6307\u4EE4\u548C\u6570\u636E\uFF1B\u8F93\u5165/\u8F93\u51FA\u8BBE\u5907\u7528\u6765\u5B9E\u73B0\u8BA1\u7B97\u673A\u548C\u7528\u6237\u4E4B\u95F4\u7684\u4FE1\u606F\u4EA4\u6362\u3002'], ['\u8FD0\u7B97\u5668\u7528\u6765\u8FDB\u884C\u5404\u79CD\u7B97\u672F\u903B\u8F91\u8FD0\u7B97\uFF1B\u63A7\u5236\u5668\u7528\u6765\u5BF9\u6307\u4EE4\u8FDB\u884C\u8BD1\u7801\u5E76\u9001\u51FA\u64CD\u4F5C\u63A7\u5236\u4FE1\u53F7\uFF1B\u5B58\u50A8\u5668\u7528\u6765\u5B58\u653E\u6307\u4EE4\u548C\u6570\u636E\uFF1B\u8F93\u5165/\u8F93\u51FA\u8BBE\u5907\u7528\u6765\u5B9E\u73B0\u8BA1\u7B97\u673A\u548C\u7528\u6237\u4E4B\u95F4\u7684\u4FE1\u606F\u4EA4\u6362\u3002']),
    _templateObject3 = _taggedTemplateLiteral(['\u8BA1\u7B97\u673A\u7CFB\u7EDF\u5206\u8F6F\u4EF6\u548C\u786C\u4EF6\u4E24\u90E8\u5206\uFF0C\u8F6F\u4EF6\u548C\u786C\u4EF6\u7684\u754C\u9762\u662F\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\uFF08ISA\uFF09\u3002\u8BA1\u7B97\u673A\u7CFB\u7EDF\u4ECE\u9AD8\u5230\u4F4E\u7C97\u5206\u4E3A\u5E94\u7528\u8F6F\u4EF6\u3001\u7CFB\u7EDF\u8F6F\u4EF6\u548C\u786C\u4EF6\u4E09\u4E2A\u5C42\u6B21\uFF1B\u4E0D\u540C\u8BA1\u7B97\u673A\u7528\u6237\u5DE5\u4F5C\u5728\u4E0D\u540C\u7684\u5C42\u6B21\uFF0C\u4ECE\u9AD8\u5230\u4F4E\u7EC6\u5206\u4E3A\u5E94\u7528\u7A0B\u5E8F\u7EA7\uFF08\u6700\u7EC8\u7528\u6237\uFF09\u3001\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u7EA7\uFF08\u9AD8\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u5458\u6216\u5E94\u7528\u7A0B\u5E8F\u5458\uFF09\u3001\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u7EA7\uFF08\u6C47\u7F16\u8BED\u8A00\u7A0B\u5E8F\u5458\uFF09\u3001\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u7EA7\uFF08\u7CFB\u7EDF\u7BA1\u7406\u5458\uFF09\u3001\u673A\u5668\u8BED\u8A00\u673A\u5668\u7EA7\uFF08\u673A\u5668\u8BED\u8A00\u7A0B\u5E8F\u5458\uFF09\u3002'], ['\u8BA1\u7B97\u673A\u7CFB\u7EDF\u5206\u8F6F\u4EF6\u548C\u786C\u4EF6\u4E24\u90E8\u5206\uFF0C\u8F6F\u4EF6\u548C\u786C\u4EF6\u7684\u754C\u9762\u662F\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\uFF08ISA\uFF09\u3002\u8BA1\u7B97\u673A\u7CFB\u7EDF\u4ECE\u9AD8\u5230\u4F4E\u7C97\u5206\u4E3A\u5E94\u7528\u8F6F\u4EF6\u3001\u7CFB\u7EDF\u8F6F\u4EF6\u548C\u786C\u4EF6\u4E09\u4E2A\u5C42\u6B21\uFF1B\u4E0D\u540C\u8BA1\u7B97\u673A\u7528\u6237\u5DE5\u4F5C\u5728\u4E0D\u540C\u7684\u5C42\u6B21\uFF0C\u4ECE\u9AD8\u5230\u4F4E\u7EC6\u5206\u4E3A\u5E94\u7528\u7A0B\u5E8F\u7EA7\uFF08\u6700\u7EC8\u7528\u6237\uFF09\u3001\u9AD8\u7EA7\u8BED\u8A00\u865A\u62DF\u673A\u7EA7\uFF08\u9AD8\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u5458\u6216\u5E94\u7528\u7A0B\u5E8F\u5458\uFF09\u3001\u6C47\u7F16\u8BED\u8A00\u865A\u62DF\u673A\u7EA7\uFF08\u6C47\u7F16\u8BED\u8A00\u7A0B\u5E8F\u5458\uFF09\u3001\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u673A\u7EA7\uFF08\u7CFB\u7EDF\u7BA1\u7406\u5458\uFF09\u3001\u673A\u5668\u8BED\u8A00\u673A\u5668\u7EA7\uFF08\u673A\u5668\u8BED\u8A00\u7A0B\u5E8F\u5458\uFF09\u3002']),
    _templateObject4 = _taggedTemplateLiteral(['\u8BA1\u7B97\u673A\u786C\u4EF6\u548C\u8F6F\u4EF6\u4E24\u8005\u76F8\u8F85\u76F8\u6210\uFF0C\u7F3A\u4E00\u4E0D\u53EF\u3002\u4E24\u8005\u90FD\u7528\u6765\u5B9E\u73B0\u903B\u8F91\u529F\u80FD\uFF0C\u540C\u4E00\u529F\u80FD\u53EF\u7528\u786C\u4EF6\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u7528\u8F6F\u4EF6\u5B9E\u73B0\u3002'], ['\u8BA1\u7B97\u673A\u786C\u4EF6\u548C\u8F6F\u4EF6\u4E24\u8005\u76F8\u8F85\u76F8\u6210\uFF0C\u7F3A\u4E00\u4E0D\u53EF\u3002\u4E24\u8005\u90FD\u7528\u6765\u5B9E\u73B0\u903B\u8F91\u529F\u80FD\uFF0C\u540C\u4E00\u529F\u80FD\u53EF\u7528\u786C\u4EF6\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u7528\u8F6F\u4EF6\u5B9E\u73B0\u3002']),
    _templateObject5 = _taggedTemplateLiteral(['\u9996\u5148\u7528\u67D0\u79CD\u8BED\u8A00\uFF08\u9AD8\u7EA7\u8BED\u8A00\u6216\u4F4E\u7EA7\u8BED\u8A00\uFF09\u7F16\u5236\u6E90\u7A0B\u5E8F\uFF1B\u7136\u540E\u7528\u8BED\u8A00\u5904\u7406\u7A0B\u5E8F\uFF08\u7F16\u8BD1\u7A0B\u5E8F\u6216\u6C47\u7F16\u7A0B\u5E8F\uFF09\u5C06\u6E90\u7A0B\u5E8F\u7FFB\u8BD1\u6210\u673A\u5668\u8BED\u8A00\u76EE\u6807\u7A0B\u5E8F\u3002\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\u542F\u52A8\u76EE\u6807\u7A0B\u5E8F\uFF08\u53EF\u6267\u884C\u4EE3\u7801\uFF09\u6267\u884C\u65F6\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u5C06\u6307\u4EE4\u548C\u6570\u636E\u88C5\u5165\u5185\u5B58\uFF0C\u7136\u540E\u4ECE\u7B2C\u4E00\u6761\u6307\u4EE4\u5F00\u59CB\u6267\u884C\u3002\u6BCF\u6761\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u4E3A\uFF1A\u53D6\u6307\u4EE4\u3001\u6307\u4EE4\u8BD1\u7801\u3001\u53D6\u64CD\u4F5C\u6570\u3001\u8FD0\u7B97\u3001\u9001\u7ED3\u679C\u3001PC \u6307\u5411\u4E0B\u4E00\u6761\u6307\u4EE4\u3002\u53EF\u6267\u884C\u7A0B\u5E8F\u7531\u82E5\u5E72\u6307\u4EE4\u7EC4\u6210\uFF0CCPU \u5468\u800C\u590D\u59CB\u5730\u6267\u884C\u4E00\u6761\u4E00\u6761\u6307\u4EE4\uFF0C\u76F4\u5230\u7A0B\u5E8F\u6240\u542B\u6307\u4EE4\u5168\u90E8\u6267\u884C\u5B8C\u3002'], ['\u9996\u5148\u7528\u67D0\u79CD\u8BED\u8A00\uFF08\u9AD8\u7EA7\u8BED\u8A00\u6216\u4F4E\u7EA7\u8BED\u8A00\uFF09\u7F16\u5236\u6E90\u7A0B\u5E8F\uFF1B\u7136\u540E\u7528\u8BED\u8A00\u5904\u7406\u7A0B\u5E8F\uFF08\u7F16\u8BD1\u7A0B\u5E8F\u6216\u6C47\u7F16\u7A0B\u5E8F\uFF09\u5C06\u6E90\u7A0B\u5E8F\u7FFB\u8BD1\u6210\u673A\u5668\u8BED\u8A00\u76EE\u6807\u7A0B\u5E8F\u3002\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\u542F\u52A8\u76EE\u6807\u7A0B\u5E8F\uFF08\u53EF\u6267\u884C\u4EE3\u7801\uFF09\u6267\u884C\u65F6\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u5C06\u6307\u4EE4\u548C\u6570\u636E\u88C5\u5165\u5185\u5B58\uFF0C\u7136\u540E\u4ECE\u7B2C\u4E00\u6761\u6307\u4EE4\u5F00\u59CB\u6267\u884C\u3002\u6BCF\u6761\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u4E3A\uFF1A\u53D6\u6307\u4EE4\u3001\u6307\u4EE4\u8BD1\u7801\u3001\u53D6\u64CD\u4F5C\u6570\u3001\u8FD0\u7B97\u3001\u9001\u7ED3\u679C\u3001PC \u6307\u5411\u4E0B\u4E00\u6761\u6307\u4EE4\u3002\u53EF\u6267\u884C\u7A0B\u5E8F\u7531\u82E5\u5E72\u6307\u4EE4\u7EC4\u6210\uFF0CCPU \u5468\u800C\u590D\u59CB\u5730\u6267\u884C\u4E00\u6761\u4E00\u6761\u6307\u4EE4\uFF0C\u76F4\u5230\u7A0B\u5E8F\u6240\u542B\u6307\u4EE4\u5168\u90E8\u6267\u884C\u5B8C\u3002']),
    _templateObject6 = _taggedTemplateLiteral(['\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7684\u57FA\u672C\u6027\u80FD\u6307\u6807\u5305\u62EC\u54CD\u5E94\u65F6\u95F4\u548C\u541E\u5410\u7387\u3002\u5904\u7406\u5668\u7684\u57FA\u672C\u6027\u80FD\u53C2\u6570\u5305\u62EC\u65F6\u949F\u5468\u671F\uFF08\u6216\u4E3B\u9891\uFF09\u3001CPI\u3001MIPS\u3001MFLOPS\uFF08\u6216 GFLOPS\u3001TFLOPS\u3001PFLOPS \u7B49\uFF09\u3002'], ['\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7684\u57FA\u672C\u6027\u80FD\u6307\u6807\u5305\u62EC\u54CD\u5E94\u65F6\u95F4\u548C\u541E\u5410\u7387\u3002\u5904\u7406\u5668\u7684\u57FA\u672C\u6027\u80FD\u53C2\u6570\u5305\u62EC\u65F6\u949F\u5468\u671F\uFF08\u6216\u4E3B\u9891\uFF09\u3001CPI\u3001MIPS\u3001MFLOPS\uFF08\u6216 GFLOPS\u3001TFLOPS\u3001PFLOPS \u7B49\uFF09\u3002']),
    _templateObject7 = _taggedTemplateLiteral(['\u4E00\u822C\u628A\u7A0B\u5E8F\u7684\u54CD\u5E94\u65F6\u95F4\u5212\u5206\u6210 CPU \u65F6\u95F4\u548C\u7B49\u5F85\u65F6\u95F4\uFF0CCPU \u65F6\u95F4\u53C8\u5206\u6210\u7528\u6237 CPU \u65F6\u95F4\u548C\u64CD\u4F5C\u7CFB\u7EDF CPU \u65F6\u95F4\u3002\u56E0\u4E3A\u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u81EA\u8EAB\u6240\u7528\u7684\u65F6\u95F4\u8FDB\u884C\u6D4B\u91CF\u65F6\u4E0D\u5341\u5206\u51C6\u786E\uFF0C\u6240\u4EE5\uFF0C\u5BF9 CPU \u6027\u80FD\u7684\u6D4B\u91CF\u4E00\u822C\u662F\u901A\u8FC7\u6D4B\u91CF\u7A0B\u5E8F\u8FD0\u884C\u65F6\u7684\u7528\u6237 CPU \u65F6\u95F4\u6765\u8FDB\u884C\u7684\u3002'], ['\u4E00\u822C\u628A\u7A0B\u5E8F\u7684\u54CD\u5E94\u65F6\u95F4\u5212\u5206\u6210 CPU \u65F6\u95F4\u548C\u7B49\u5F85\u65F6\u95F4\uFF0CCPU \u65F6\u95F4\u53C8\u5206\u6210\u7528\u6237 CPU \u65F6\u95F4\u548C\u64CD\u4F5C\u7CFB\u7EDF CPU \u65F6\u95F4\u3002\u56E0\u4E3A\u64CD\u4F5C\u7CFB\u7EDF\u5BF9\u81EA\u8EAB\u6240\u7528\u7684\u65F6\u95F4\u8FDB\u884C\u6D4B\u91CF\u65F6\u4E0D\u5341\u5206\u51C6\u786E\uFF0C\u6240\u4EE5\uFF0C\u5BF9 CPU \u6027\u80FD\u7684\u6D4B\u91CF\u4E00\u822C\u662F\u901A\u8FC7\u6D4B\u91CF\u7A0B\u5E8F\u8FD0\u884C\u65F6\u7684\u7528\u6237 CPU \u65F6\u95F4\u6765\u8FDB\u884C\u7684\u3002']),
    _templateObject8 = _taggedTemplateLiteral(['\u65F6\u949F\u5468\u671F\u548C\u65F6\u949F\u9891\u7387\u4E92\u4E3A\u5012\u6570\u3002CPU \u6267\u884C\u65F6\u95F4\u53EF\u7528\u300CCPU \u65F6\u949F\u5468\u671F\u6570 \xD7 \u65F6\u949F\u5468\u671F\u300D\u6765\u8BA1\u7B97\u3002CPU \u65F6\u949F\u5468\u671F\u6570\u53EF\u7528\u300C\u7A0B\u5E8F\u6240\u542B\u6307\u4EE4\u6761\u6570 \xD7 \u7A0B\u5E8F\u7684 CPI\u300D\u6765\u8BA1\u7B97\u3002'], ['\u65F6\u949F\u5468\u671F\u548C\u65F6\u949F\u9891\u7387\u4E92\u4E3A\u5012\u6570\u3002CPU \u6267\u884C\u65F6\u95F4\u53EF\u7528\u300CCPU \u65F6\u949F\u5468\u671F\u6570 \xD7 \u65F6\u949F\u5468\u671F\u300D\u6765\u8BA1\u7B97\u3002CPU \u65F6\u949F\u5468\u671F\u6570\u53EF\u7528\u300C\u7A0B\u5E8F\u6240\u542B\u6307\u4EE4\u6761\u6570 \xD7 \u7A0B\u5E8F\u7684 CPI\u300D\u6765\u8BA1\u7B97\u3002']),
    _templateObject9 = _taggedTemplateLiteral(['\u53EF\u91C7\u7528\u4E00\u7EC4\u6027\u80FD\u8BC4\u4EF7\u7A0B\u5E8F\uFF08\u5373\u57FA\u51C6\u7A0B\u5E8F\uFF09\u5BF9\u673A\u5668\u6027\u80FD\u8FDB\u884C\u8BC4\u6D4B\u3002\u6709\u4E9B\u673A\u5668\u5236\u9020\u5546\u4F1A\u9488\u5BF9\u57FA\u51C6\u7A0B\u5E8F\u4E2D\u9891\u7E41\u51FA\u73B0\u7684\u8BED\u53E5\u91C7\u7528\u4E13\u95E8\u7684\u7F16\u8BD1\u5668\u8FDB\u884C\u4F18\u5316\uFF0C\u4F7F\u57FA\u51C6\u7A0B\u5E8F\u7684\u8FD0\u884C\u6548\u7387\u5927\u5E45\u63D0\u9AD8\uFF0C\u56E0\u6B64\u6709\u65F6\u7528\u57FA\u51C6\u7A0B\u5E8F\u5F97\u5230\u7684\u8BC4\u6D4B\u7ED3\u679C\u4E0D\u80FD\u8BF4\u660E\u95EE\u9898\u3002'], ['\u53EF\u91C7\u7528\u4E00\u7EC4\u6027\u80FD\u8BC4\u4EF7\u7A0B\u5E8F\uFF08\u5373\u57FA\u51C6\u7A0B\u5E8F\uFF09\u5BF9\u673A\u5668\u6027\u80FD\u8FDB\u884C\u8BC4\u6D4B\u3002\u6709\u4E9B\u673A\u5668\u5236\u9020\u5546\u4F1A\u9488\u5BF9\u57FA\u51C6\u7A0B\u5E8F\u4E2D\u9891\u7E41\u51FA\u73B0\u7684\u8BED\u53E5\u91C7\u7528\u4E13\u95E8\u7684\u7F16\u8BD1\u5668\u8FDB\u884C\u4F18\u5316\uFF0C\u4F7F\u57FA\u51C6\u7A0B\u5E8F\u7684\u8FD0\u884C\u6548\u7387\u5927\u5E45\u63D0\u9AD8\uFF0C\u56E0\u6B64\u6709\u65F6\u7528\u57FA\u51C6\u7A0B\u5E8F\u5F97\u5230\u7684\u8BC4\u6D4B\u7ED3\u679C\u4E0D\u80FD\u8BF4\u660E\u95EE\u9898\u3002']);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = '1.2　主要内容提要';
var page = (0, _write.section)(title)((0, _write.section)('冯·诺依曼计算机结构的主要特点')((0, _write.p)(_templateObject)), (0, _write.section)('计算机硬件的基本组成和功能')((0, _write.p)(_templateObject2)), (0, _write.section)('计算机系统的层次结构')((0, _write.p)(_templateObject3)), (0, _write.section)('硬件和软件的相互关系')((0, _write.p)(_templateObject4)), (0, _write.section)('程序开发和执行过程')((0, _write.p)(_templateObject5)), (0, _write.section)('基本性能指标和性能参数')((0, _write.p)(_templateObject6)), (0, _write.section)('性能的测量')((0, _write.p)(_templateObject7)), (0, _write.section)('各种性能参数之间的关系')((0, _write.p)(_templateObject8)), (0, _write.section)('性能评价程序')((0, _write.p)(_templateObject9))).elem;

window.outer.views['/ComputerOrganization/Chapter1/2'] = { page: page, title: title };console.log(title);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzIucGFnZS50cyJdLCJuYW1lcyI6WyJ0aXRsZSIsInBhZ2UiLCJwIiwiZWxlbSIsIndpbmRvdyIsIm91dGVyIiwidmlld3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQTs7OztBQUNBLElBQU1BLFFBQVEsWUFBZDtBQUNBLElBQU1DLE9BQU8sb0JBQVFELEtBQVIsRUFBZSxvQkFBUSxpQkFBUixNQUEyQkUsUUFBM0IsbUJBQWYsRUFBdU0sb0JBQVEsZUFBUixNQUF5QkEsUUFBekIsb0JBQXZNLEVBQW1ULG9CQUFRLFlBQVIsTUFBc0JBLFFBQXRCLG9CQUFuVCxFQUFnZ0Isb0JBQVEsWUFBUixNQUFzQkEsUUFBdEIsb0JBQWhnQixFQUFnbEIsb0JBQVEsV0FBUixNQUFxQkEsUUFBckIsb0JBQWhsQixFQUFtekIsb0JBQVEsYUFBUixNQUF1QkEsUUFBdkIsb0JBQW56QixFQUF3NkIsb0JBQVEsT0FBUixNQUFpQkEsUUFBakIsb0JBQXg2QixFQUEyakMsb0JBQVEsYUFBUixNQUF1QkEsUUFBdkIsb0JBQTNqQyxFQUEwcUMsb0JBQVEsUUFBUixNQUFrQkEsUUFBbEIsb0JBQTFxQyxFQUF3eUNDLElBQXJ6Qzs7QUFFTUMsT0FBT0MsS0FBUCxDQUFhQyxLQUFiLENBQW1CLGtDQUFuQixJQUF1RCxFQUFDTCxVQUFELEVBQU1ELFlBQU4sRUFBdkQsQ0FBb0VPLFFBQVFDLEdBQVIsQ0FBWVIsS0FBWixFIiwiZmlsZSI6IkNvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjEvMlwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzIucGFnZS50c1wiLFwidmVuZG9yc1wiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgc2VjdGlvbiwgcCB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy9Ad3JpdGUnO1xuY29uc3QgdGl0bGUgPSAnMS4y44CA5Li76KaB5YaF5a655o+Q6KaBJztcbmNvbnN0IHBhZ2UgPSBzZWN0aW9uKHRpdGxlKShzZWN0aW9uKCflhq/Ct+ivuuS+neabvOiuoeeul+acuue7k+aehOeahOS4u+imgeeJueeCuScpKHAgYOWGr8K36K+65L6d5pu86K6h566X5py657uT5p6E55qE5Li76KaB54m554K55YyF5ous77ya4pGgIOiuoeeul+acuueUsei/kOeul+WZqOOAgeaOp+WItuWZqOOAgeWtmOWCqOWZqOOAgei+k+WFpeiuvuWkh+WSjOi+k+WHuuiuvuWkh+S6lOWkp+mDqOWIhue7hOaIkOOAguKRoSDmjIfku6TlkozmlbDmja7nlKjkuozov5vliLbooajnpLrvvIzkuKTogIXlvaLlvI/kuIrmsqHmnInlt67liKvjgILikaIg5oyH5Luk5ZKM5pWw5o2u5a2Y5pS+5Zyo5a2Y5YKo5Zmo5Lit77yM5oyJ5Zyw5Z2A6K6/6Zeu44CC4pGjIOaMh+S7pOeUseaTjeS9nOeggeWSjOWcsOWdgOeggee7hOaIkO+8jOaTjeS9nOeggeaMh+WumuaTjeS9nOaAp+i0qO+8jOWcsOWdgOeggeaMh+WumuaTjeS9nOaVsOWcsOWdgOOAguKRpCDph4fnlKjjgIzlrZjlgqjnqIvluo/jgI3mlrnlvI/ov5vooYzlt6XkvZzjgIJgKSwgc2VjdGlvbign6K6h566X5py656Gs5Lu255qE5Z+65pys57uE5oiQ5ZKM5Yqf6IO9JykocCBg6L+Q566X5Zmo55So5p2l6L+b6KGM5ZCE56eN566X5pyv6YC76L6R6L+Q566X77yb5o6n5Yi25Zmo55So5p2l5a+55oyH5Luk6L+b6KGM6K+R56CB5bm26YCB5Ye65pON5L2c5o6n5Yi25L+h5Y+377yb5a2Y5YKo5Zmo55So5p2l5a2Y5pS+5oyH5Luk5ZKM5pWw5o2u77yb6L6T5YWlL+i+k+WHuuiuvuWkh+eUqOadpeWunueOsOiuoeeul+acuuWSjOeUqOaIt+S5i+mXtOeahOS/oeaBr+S6pOaNouOAgmApLCBzZWN0aW9uKCforqHnrpfmnLrns7vnu5/nmoTlsYLmrKHnu5PmnoQnKShwIGDorqHnrpfmnLrns7vnu5/liIbova/ku7blkoznoazku7bkuKTpg6jliIbvvIzova/ku7blkoznoazku7bnmoTnlYzpnaLmmK/mjIfku6Tpm4bkvZPns7vnu5PmnoTvvIhJU0HvvInjgILorqHnrpfmnLrns7vnu5/ku47pq5jliLDkvY7nspfliIbkuLrlupTnlKjova/ku7bjgIHns7vnu5/ova/ku7blkoznoazku7bkuInkuKrlsYLmrKHvvJvkuI3lkIzorqHnrpfmnLrnlKjmiLflt6XkvZzlnKjkuI3lkIznmoTlsYLmrKHvvIzku47pq5jliLDkvY7nu4bliIbkuLrlupTnlKjnqIvluo/nuqfvvIjmnIDnu4jnlKjmiLfvvInjgIHpq5jnuqfor63oqIDomZrmi5/mnLrnuqfvvIjpq5jnuqfor63oqIDnqIvluo/lkZjmiJblupTnlKjnqIvluo/lkZjvvInjgIHmsYfnvJbor63oqIDomZrmi5/mnLrnuqfvvIjmsYfnvJbor63oqIDnqIvluo/lkZjvvInjgIHmk43kvZzns7vnu5/omZrmi5/mnLrnuqfvvIjns7vnu5/nrqHnkIblkZjvvInjgIHmnLrlmajor63oqIDmnLrlmajnuqfvvIjmnLrlmajor63oqIDnqIvluo/lkZjvvInjgIJgKSwgc2VjdGlvbign56Gs5Lu25ZKM6L2v5Lu255qE55u45LqS5YWz57O7JykocCBg6K6h566X5py656Gs5Lu25ZKM6L2v5Lu25Lik6ICF55u46L6F55u45oiQ77yM57y65LiA5LiN5Y+v44CC5Lik6ICF6YO955So5p2l5a6e546w6YC76L6R5Yqf6IO977yM5ZCM5LiA5Yqf6IO95Y+v55So56Gs5Lu25a6e546w77yM5Lmf5Y+v55So6L2v5Lu25a6e546w44CCYCksIHNlY3Rpb24oJ+eoi+W6j+W8gOWPkeWSjOaJp+ihjOi/h+eoiycpKHAgYOmmluWFiOeUqOafkOenjeivreiogO+8iOmrmOe6p+ivreiogOaIluS9jue6p+ivreiogO+8iee8luWItua6kOeoi+W6j++8m+eEtuWQjueUqOivreiogOWkhOeQhueoi+W6j++8iOe8luivkeeoi+W6j+aIluaxh+e8lueoi+W6j++8ieWwhua6kOeoi+W6j+e/u+ivkeaIkOacuuWZqOivreiogOebruagh+eoi+W6j+OAgumAmui/h+afkOenjeaWueW8j+WQr+WKqOebruagh+eoi+W6j++8iOWPr+aJp+ihjOS7o+egge+8ieaJp+ihjOaXtu+8jOaTjeS9nOezu+e7n+WwhuaMh+S7pOWSjOaVsOaNruijheWFpeWGheWtmO+8jOeEtuWQjuS7juesrOS4gOadoeaMh+S7pOW8gOWni+aJp+ihjOOAguavj+adoeaMh+S7pOeahOaJp+ihjOi/h+eoi+S4uu+8muWPluaMh+S7pOOAgeaMh+S7pOivkeeggeOAgeWPluaTjeS9nOaVsOOAgei/kOeul+OAgemAgee7k+aenOOAgVBDIOaMh+WQkeS4i+S4gOadoeaMh+S7pOOAguWPr+aJp+ihjOeoi+W6j+eUseiLpeW5suaMh+S7pOe7hOaIkO+8jENQVSDlkajogIzlpI3lp4vlnLDmiafooYzkuIDmnaHkuIDmnaHmjIfku6TvvIznm7TliLDnqIvluo/miYDlkKvmjIfku6Tlhajpg6jmiafooYzlrozjgIJgKSwgc2VjdGlvbign5Z+65pys5oCn6IO95oyH5qCH5ZKM5oCn6IO95Y+C5pWwJykocCBg6K6h566X5py657O757uf55qE5Z+65pys5oCn6IO95oyH5qCH5YyF5ous5ZON5bqU5pe26Ze05ZKM5ZCe5ZCQ546H44CC5aSE55CG5Zmo55qE5Z+65pys5oCn6IO95Y+C5pWw5YyF5ous5pe26ZKf5ZGo5pyf77yI5oiW5Li76aKR77yJ44CBQ1BJ44CBTUlQU+OAgU1GTE9QU++8iOaIliBHRkxPUFPjgIFURkxPUFPjgIFQRkxPUFMg562J77yJ44CCYCksIHNlY3Rpb24oJ+aAp+iDveeahOa1i+mHjycpKHAgYOS4gOiIrOaKiueoi+W6j+eahOWTjeW6lOaXtumXtOWIkuWIhuaIkCBDUFUg5pe26Ze05ZKM562J5b6F5pe26Ze077yMQ1BVIOaXtumXtOWPiOWIhuaIkOeUqOaItyBDUFUg5pe26Ze05ZKM5pON5L2c57O757ufIENQVSDml7bpl7TjgILlm6DkuLrmk43kvZzns7vnu5/lr7noh6rouqvmiYDnlKjnmoTml7bpl7Tov5vooYzmtYvph4/ml7bkuI3ljYHliIblh4bnoa7vvIzmiYDku6XvvIzlr7kgQ1BVIOaAp+iDveeahOa1i+mHj+S4gOiIrOaYr+mAmui/h+a1i+mHj+eoi+W6j+i/kOihjOaXtueahOeUqOaItyBDUFUg5pe26Ze05p2l6L+b6KGM55qE44CCYCksIHNlY3Rpb24oJ+WQhOenjeaAp+iDveWPguaVsOS5i+mXtOeahOWFs+ezuycpKHAgYOaXtumSn+WRqOacn+WSjOaXtumSn+mikeeOh+S6kuS4uuWAkuaVsOOAgkNQVSDmiafooYzml7bpl7Tlj6/nlKjjgIxDUFUg5pe26ZKf5ZGo5pyf5pWwIMOXIOaXtumSn+WRqOacn+OAjeadpeiuoeeul+OAgkNQVSDml7bpkp/lkajmnJ/mlbDlj6/nlKjjgIznqIvluo/miYDlkKvmjIfku6TmnaHmlbAgw5cg56iL5bqP55qEIENQSeOAjeadpeiuoeeul+OAgmApLCBzZWN0aW9uKCfmgKfog73or4Tku7fnqIvluo8nKShwIGDlj6/ph4fnlKjkuIDnu4TmgKfog73or4Tku7fnqIvluo/vvIjljbPln7rlh4bnqIvluo/vvInlr7nmnLrlmajmgKfog73ov5vooYzor4TmtYvjgILmnInkupvmnLrlmajliLbpgKDllYbkvJrpkojlr7nln7rlh4bnqIvluo/kuK3popHnuYHlh7rnjrDnmoTor63lj6Xph4fnlKjkuJPpl6jnmoTnvJbor5Hlmajov5vooYzkvJjljJbvvIzkvb/ln7rlh4bnqIvluo/nmoTov5DooYzmlYjnjoflpKfluYXmj5Dpq5jvvIzlm6DmraTmnInml7bnlKjln7rlh4bnqIvluo/lvpfliLDnmoTor4TmtYvnu5PmnpzkuI3og73or7TmmI7pl67popjjgIJgKSkuZWxlbTtcblxuICAgICAgd2luZG93Lm91dGVyLnZpZXdzWycvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjEvMiddPXtwYWdlLHRpdGxlfTtjb25zb2xlLmxvZyh0aXRsZSkiXSwic291cmNlUm9vdCI6IiJ9