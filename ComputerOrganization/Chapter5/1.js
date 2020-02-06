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
/******/ 		"ComputerOrganization/Chapter5/1": 0
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
/******/ 	deferredModules.push(["./src/pages/ComputerOrganization/Chapter5/1.page.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/ComputerOrganization/Chapter5/1.page.ts":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter5/1.page.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['', '\u4F7F\u5B66\u751F\u4E86\u89E3 CPU \u7684\u4E3B\u8981\u529F\u80FD\u3001CPU \u7684\u5185\u90E8\u7ED3\u6784\u3001\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u3001\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7EC4\u6210\u3001\u6570\u636E\u901A\u8DEF\u7684\u5B9A\u65F6\u4EE5\u53CA\u6570\u636E\u901A\u8DEF\u4E2D\u4FE1\u606F\u7684\u6D41\u52A8\u8FC7\u7A0B\uFF0C\u4ECE\u800C\u7406\u89E3\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\u3002'], ['', '\u4F7F\u5B66\u751F\u4E86\u89E3 CPU \u7684\u4E3B\u8981\u529F\u80FD\u3001CPU \u7684\u5185\u90E8\u7ED3\u6784\u3001\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u3001\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7EC4\u6210\u3001\u6570\u636E\u901A\u8DEF\u7684\u5B9A\u65F6\u4EE5\u53CA\u6570\u636E\u901A\u8DEF\u4E2D\u4FE1\u606F\u7684\u6D41\u52A8\u8FC7\u7A0B\uFF0C\u4ECE\u800C\u7406\u89E3\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\u3002']),
    _templateObject2 = _taggedTemplateLiteral(['\u4E3B\u8981\u6559\u5B66\u76EE\u6807'], ['\u4E3B\u8981\u6559\u5B66\u76EE\u6807']),
    _templateObject3 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject4 = _taggedTemplateLiteral(['\u57FA\u672C\u5B66\u4E60\u8981\u6C42'], ['\u57FA\u672C\u5B66\u4E60\u8981\u6C42']),
    _templateObject5 = _taggedTemplateLiteral(['\u7406\u89E3 CPU \u7684\u529F\u80FD\u3002'], ['\u7406\u89E3 CPU \u7684\u529F\u80FD\u3002']),
    _templateObject6 = _taggedTemplateLiteral(['\u4E86\u89E3 CPU \u7684\u57FA\u672C\u7ED3\u6784\u3002'], ['\u4E86\u89E3 CPU \u7684\u57FA\u672C\u7ED3\u6784\u3002']),
    _templateObject7 = _taggedTemplateLiteral(['\u7406\u89E3 CPU \u4E2D\u901A\u7528\u5BC4\u5B58\u5668\u548C\u4E13\u7528\u5BC4\u5B58\u5668\u7684\u4F5C\u7528\u3002'], ['\u7406\u89E3 CPU \u4E2D\u901A\u7528\u5BC4\u5B58\u5668\u548C\u4E13\u7528\u5BC4\u5B58\u5668\u7684\u4F5C\u7528\u3002']),
    _templateObject8 = _taggedTemplateLiteral(['\u7406\u89E3\u4E00\u6761\u6307\u4EE4\u7684\u57FA\u672C\u6267\u884C\u8FC7\u7A0B\u3002'], ['\u7406\u89E3\u4E00\u6761\u6307\u4EE4\u7684\u57FA\u672C\u6267\u884C\u8FC7\u7A0B\u3002']),
    _templateObject9 = _taggedTemplateLiteral(['\u7406\u89E3\u6307\u4EE4\u5468\u671F\u3001\u673A\u5668\u5468\u671F\u4EE5\u53CA\u65F6\u949F\u5468\u671F\u7684\u6982\u5FF5\u3002'], ['\u7406\u89E3\u6307\u4EE4\u5468\u671F\u3001\u673A\u5668\u5468\u671F\u4EE5\u53CA\u65F6\u949F\u5468\u671F\u7684\u6982\u5FF5\u3002']),
    _templateObject10 = _taggedTemplateLiteral(['\u4E86\u89E3\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7EC4\u6210\u3002'], ['\u4E86\u89E3\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7EC4\u6210\u3002']),
    _templateObject11 = _taggedTemplateLiteral(['\u4E86\u89E3\u5BC4\u5B58\u5668\u5806\uFF08\u901A\u7528\u5BC4\u5B58\u5668\u7EC4\uFF09\u7684\u4F5C\u7528\u4E0E\u5DE5\u4F5C\u539F\u7406\u3002'], ['\u4E86\u89E3\u5BC4\u5B58\u5668\u5806\uFF08\u901A\u7528\u5BC4\u5B58\u5668\u7EC4\uFF09\u7684\u4F5C\u7528\u4E0E\u5DE5\u4F5C\u539F\u7406\u3002']),
    _templateObject12 = _taggedTemplateLiteral(['\u7406\u89E3\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u7684\u57FA\u672C\u6982\u5FF5\u4EE5\u53CA\u4E24\u8005\u7684\u533A\u522B\u3002'], ['\u7406\u89E3\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u7684\u57FA\u672C\u6982\u5FF5\u4EE5\u53CA\u4E24\u8005\u7684\u533A\u522B\u3002']),
    _templateObject13 = _taggedTemplateLiteral(['\u7406\u89E3\u6307\u4EE4\u6D41\u6C34\u7EBF\u7684\u4E00\u822C\u6982\u5FF5\u3002'], ['\u7406\u89E3\u6307\u4EE4\u6D41\u6C34\u7EBF\u7684\u4E00\u822C\u6982\u5FF5\u3002']),
    _templateObject14 = _taggedTemplateLiteral(['\u4E86\u89E3\u9002\u5408\u6D41\u6C34\u7EBF\u6267\u884C\u7684\u6307\u4EE4\u96C6\u7684\u7279\u5F81\u3002'], ['\u4E86\u89E3\u9002\u5408\u6D41\u6C34\u7EBF\u6267\u884C\u7684\u6307\u4EE4\u96C6\u7684\u7279\u5F81\u3002']),
    _templateObject15 = _taggedTemplateLiteral(['\u4E86\u89E3\u6D41\u6C34\u7EBF\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7EC4\u6210\u3002'], ['\u4E86\u89E3\u6D41\u6C34\u7EBF\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7EC4\u6210\u3002']),
    _templateObject16 = _taggedTemplateLiteral(['\u4E86\u89E3\u6D41\u6C34\u7EBF\u5192\u9669\u7684\u57FA\u672C\u6982\u5FF5\u3002'], ['\u4E86\u89E3\u6D41\u6C34\u7EBF\u5192\u9669\u7684\u57FA\u672C\u6982\u5FF5\u3002']),
    _templateObject17 = _taggedTemplateLiteral(['\u4E86\u89E3\u7ED3\u6784\u5192\u9669\u7684\u6982\u5FF5\u548C\u5904\u7406\u7B56\u7565\u3002'], ['\u4E86\u89E3\u7ED3\u6784\u5192\u9669\u7684\u6982\u5FF5\u548C\u5904\u7406\u7B56\u7565\u3002']),
    _templateObject18 = _taggedTemplateLiteral(['\u4E86\u89E3\u6570\u636E\u5192\u9669\uFF08\u6570\u636E\u76F8\u5173\uFF09\u7684\u6982\u5FF5\u3002'], ['\u4E86\u89E3\u6570\u636E\u5192\u9669\uFF08\u6570\u636E\u76F8\u5173\uFF09\u7684\u6982\u5FF5\u3002']),
    _templateObject19 = _taggedTemplateLiteral(['\u4E86\u89E3\u63A7\u5236\u5192\u9669\u7684\u6982\u5FF5\u548C\u5F15\u8D77\u63A7\u5236\u5192\u9669\u7684\u539F\u56E0\u3002'], ['\u4E86\u89E3\u63A7\u5236\u5192\u9669\u7684\u6982\u5FF5\u548C\u5F15\u8D77\u63A7\u5236\u5192\u9669\u7684\u539F\u56E0\u3002']),
    _templateObject20 = _taggedTemplateLiteral(['\u4E86\u89E3\u8D85\u6D41\u6C34\u7EBF\u3001\u8D85\u6807\u91CF\u548C\u52A8\u6001\u6D41\u6C34\u7EBF\u7B49\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u5176\u57FA\u672C\u5B9E\u73B0\u6280\u672F\u3002'], ['\u4E86\u89E3\u8D85\u6D41\u6C34\u7EBF\u3001\u8D85\u6807\u91CF\u548C\u52A8\u6001\u6D41\u6C34\u7EBF\u7B49\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u5176\u57FA\u672C\u5B9E\u73B0\u6280\u672F\u3002']),
    _templateObject21 = _taggedTemplateLiteral(['\u672C\u7AE0\u7B80\u8981\u4ECB\u7ECD\u7A0B\u5E8F\u5728 CPU \u4E2D\u7684\u6267\u884C\u8FC7\u7A0B\u3002\u7A0B\u5E8F\u7531\u4E00\u6761\u6761\u6307\u4EE4\u7EC4\u6210\uFF0C\u7A0B\u5E8F\u7684\u6267\u884C\u5C31\u662F\u6240\u5305\u542B\u7684\u6307\u4EE4\u5E8F\u5217\u7684\u6267\u884C\u3002\u56E0\u6B64\uFF0C\u672C\u7AE0\u4E3B\u8981\u56F4\u7ED5\u6307\u4EE4\u7684\u6267\u884C\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u4E3B\u8981\u5185\u5BB9\u5305\u62EC\u7A0B\u5E8F\u6267\u884C\u6982\u8FF0\u3001\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7ED3\u6784\u548C\u57FA\u672C\u5DE5\u4F5C\u539F\u7406\u3001\u6307\u4EE4\u6D41\u6C34\u7EBF\u7684\u57FA\u672C\u539F\u7406\u3001\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u4E0E\u6307\u4EE4\u6D41\u6C34\u7EBF\u5B9E\u73B0\u4E4B\u95F4\u7684\u5173\u7CFB\u3001\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u57FA\u672C\u5B9E\u73B0\u6280\u672F\u7B49\u3002'], ['\u672C\u7AE0\u7B80\u8981\u4ECB\u7ECD\u7A0B\u5E8F\u5728 CPU \u4E2D\u7684\u6267\u884C\u8FC7\u7A0B\u3002\u7A0B\u5E8F\u7531\u4E00\u6761\u6761\u6307\u4EE4\u7EC4\u6210\uFF0C\u7A0B\u5E8F\u7684\u6267\u884C\u5C31\u662F\u6240\u5305\u542B\u7684\u6307\u4EE4\u5E8F\u5217\u7684\u6267\u884C\u3002\u56E0\u6B64\uFF0C\u672C\u7AE0\u4E3B\u8981\u56F4\u7ED5\u6307\u4EE4\u7684\u6267\u884C\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u4E3B\u8981\u5185\u5BB9\u5305\u62EC\u7A0B\u5E8F\u6267\u884C\u6982\u8FF0\u3001\u6570\u636E\u901A\u8DEF\u7684\u57FA\u672C\u7ED3\u6784\u548C\u57FA\u672C\u5DE5\u4F5C\u539F\u7406\u3001\u6307\u4EE4\u6D41\u6C34\u7EBF\u7684\u57FA\u672C\u539F\u7406\u3001\u6307\u4EE4\u96C6\u4F53\u7CFB\u7ED3\u6784\u4E0E\u6307\u4EE4\u6D41\u6C34\u7EBF\u5B9E\u73B0\u4E4B\u95F4\u7684\u5173\u7CFB\u3001\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u57FA\u672C\u5B9E\u73B0\u6280\u672F\u7B49\u3002']),
    _templateObject22 = _taggedTemplateLiteral(['\u8BA1\u7B97\u673A\u7CFB\u7EDF\u57FA\u7840\u8BFE\u7A0B\u4E3B\u8981\u56F4\u7ED5\u4E0E\u9AD8\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u7684\u8F6C\u6362\u4E0E\u6267\u884C\u5BC6\u5207\u76F8\u5173\u7684\u5185\u5BB9\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u56E0\u800C\uFF0C\u5BF9\u4E8E\u5B9E\u73B0\u6307\u4EE4\u7684\u5FAE\u4F53\u7CFB\u7ED3\u6784\u65B9\u9762\uFF0C\u4E0D\u5B9C\u5C55\u5F00\u6765\u8BB2\u89E3\u5176\u7EC6\u8282\u5185\u5BB9\u3002\u672C\u7AE0\u7684\u6559\u5B66\u76EE\u6807\u4EC5\u4EC5\u662F\u8BA9\u5B66\u751F\u7406\u89E3\u6307\u4EE4\u662F\u5982\u4F55\u5728 CPU \u4E2D\u63A7\u5236\u5668\u7684\u63A7\u5236\u4E0B\u7531\u6570\u636E\u901A\u8DEF\u4E2D\u7684\u6267\u884C\u90E8\u4EF6\u6267\u884C\u5B8C\u6210\u7684\u3002'], ['\u8BA1\u7B97\u673A\u7CFB\u7EDF\u57FA\u7840\u8BFE\u7A0B\u4E3B\u8981\u56F4\u7ED5\u4E0E\u9AD8\u7EA7\u8BED\u8A00\u7A0B\u5E8F\u7684\u8F6C\u6362\u4E0E\u6267\u884C\u5BC6\u5207\u76F8\u5173\u7684\u5185\u5BB9\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u56E0\u800C\uFF0C\u5BF9\u4E8E\u5B9E\u73B0\u6307\u4EE4\u7684\u5FAE\u4F53\u7CFB\u7ED3\u6784\u65B9\u9762\uFF0C\u4E0D\u5B9C\u5C55\u5F00\u6765\u8BB2\u89E3\u5176\u7EC6\u8282\u5185\u5BB9\u3002\u672C\u7AE0\u7684\u6559\u5B66\u76EE\u6807\u4EC5\u4EC5\u662F\u8BA9\u5B66\u751F\u7406\u89E3\u6307\u4EE4\u662F\u5982\u4F55\u5728 CPU \u4E2D\u63A7\u5236\u5668\u7684\u63A7\u5236\u4E0B\u7531\u6570\u636E\u901A\u8DEF\u4E2D\u7684\u6267\u884C\u90E8\u4EF6\u6267\u884C\u5B8C\u6210\u7684\u3002']),
    _templateObject23 = _taggedTemplateLiteral(['\u672C\u7AE0\u63D0\u5230\u4E86\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u7684\u6982\u5FF5\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6307\u4EE4\u5728\u6B63\u5E38\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u4E00\u4E9B\u5982\u975E\u6CD5\u6307\u4EE4\u3001\u7ED3\u679C\u6EA2\u51FA\u7B49\u7279\u6B8A\u4E8B\u4EF6\uFF0C\u4F7F\u5F97\u5F53\u524D\u6307\u4EE4\u65E0\u6CD5\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\uFF0C\u4E5F\u5373\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u4E0E\u6307\u4EE4\u7684\u6267\u884C\u76F8\u5173\u3002\u4E0D\u8FC7\uFF0C\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u8FD8\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u76F8\u5173\uFF0C\u5916\u90E8\u4E2D\u65AD\u4E5F\u4E0E\u5916\u8BBE\u4EE5\u53CA\u5916\u8BBE\u63A5\u53E3\u76F8\u5173\u3002\u5173\u4E8E\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u7684\u8BE6\u7EC6\u5185\u5BB9\u5728\u540E\u9762\u5C06\u4E13\u95E8\u7528\u4E00\u7AE0\u6765\u4ECB\u7ECD\uFF0C\u56E0\u6B64\uFF0C\u672C\u7AE0\u53EA\u8981\u63D0\u4E00\u4E0B\u76F8\u5173\u7684\u6982\u5FF5\u5373\u53EF\u3002'], ['\u672C\u7AE0\u63D0\u5230\u4E86\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u7684\u6982\u5FF5\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6307\u4EE4\u5728\u6B63\u5E38\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u4E00\u4E9B\u5982\u975E\u6CD5\u6307\u4EE4\u3001\u7ED3\u679C\u6EA2\u51FA\u7B49\u7279\u6B8A\u4E8B\u4EF6\uFF0C\u4F7F\u5F97\u5F53\u524D\u6307\u4EE4\u65E0\u6CD5\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\uFF0C\u4E5F\u5373\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u4E0E\u6307\u4EE4\u7684\u6267\u884C\u76F8\u5173\u3002\u4E0D\u8FC7\uFF0C\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u8FD8\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u76F8\u5173\uFF0C\u5916\u90E8\u4E2D\u65AD\u4E5F\u4E0E\u5916\u8BBE\u4EE5\u53CA\u5916\u8BBE\u63A5\u53E3\u76F8\u5173\u3002\u5173\u4E8E\u5185\u90E8\u5F02\u5E38\u548C\u5916\u90E8\u4E2D\u65AD\u7684\u8BE6\u7EC6\u5185\u5BB9\u5728\u540E\u9762\u5C06\u4E13\u95E8\u7528\u4E00\u7AE0\u6765\u4ECB\u7ECD\uFF0C\u56E0\u6B64\uFF0C\u672C\u7AE0\u53EA\u8981\u63D0\u4E00\u4E0B\u76F8\u5173\u7684\u6982\u5FF5\u5373\u53EF\u3002']),
    _templateObject24 = _taggedTemplateLiteral(['\u73B0\u4EE3\u8BA1\u7B97\u673A\u90FD\u91C7\u7528\u6D41\u6C34\u7EBF\u65B9\u5F0F\u6267\u884C\u6307\u4EE4\uFF0C\u56E0\u6B64\uFF0C\u6709\u5173\u6307\u4EE4\u7684\u6D41\u6C34\u7EBF\u6267\u884C\u65B9\u5F0F\u548C\u6D41\u6C34\u7EBF\u5904\u7406\u5668\u7684\u5B9E\u73B0\u7B49\u5185\u5BB9\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u4E0D\u8FC7\uFF0C\u7531\u4E8E\u8BA1\u7B97\u673A\u7CFB\u7EDF\u57FA\u7840\u8BFE\u7A0B\u4E0D\u4F1A\u8FC7\u591A\u6DF1\u5165\u5FAE\u4F53\u7CFB\u7ED3\u6784\u5C42\uFF0C\u56E0\u6B64\uFF0C\u5173\u4E8E\u6307\u4EE4\u6D41\u6C34\u7EBF\u7684\u5185\u5BB9\u4E5F\u53EA\u662F\u4ECB\u7ECD\u76F8\u5173\u7684\u57FA\u672C\u6982\u5FF5\u548C\u57FA\u7840\u5185\u5BB9\uFF0C\u5E76\u4E0D\u9700\u8981\u4ECB\u7ECD\u6307\u4EE4\u6D41\u6C34\u7EBF\u5B9E\u73B0\u7684\u8BE6\u7EC6\u5185\u5BB9\u3002'], ['\u73B0\u4EE3\u8BA1\u7B97\u673A\u90FD\u91C7\u7528\u6D41\u6C34\u7EBF\u65B9\u5F0F\u6267\u884C\u6307\u4EE4\uFF0C\u56E0\u6B64\uFF0C\u6709\u5173\u6307\u4EE4\u7684\u6D41\u6C34\u7EBF\u6267\u884C\u65B9\u5F0F\u548C\u6D41\u6C34\u7EBF\u5904\u7406\u5668\u7684\u5B9E\u73B0\u7B49\u5185\u5BB9\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u4E0D\u8FC7\uFF0C\u7531\u4E8E\u8BA1\u7B97\u673A\u7CFB\u7EDF\u57FA\u7840\u8BFE\u7A0B\u4E0D\u4F1A\u8FC7\u591A\u6DF1\u5165\u5FAE\u4F53\u7CFB\u7ED3\u6784\u5C42\uFF0C\u56E0\u6B64\uFF0C\u5173\u4E8E\u6307\u4EE4\u6D41\u6C34\u7EBF\u7684\u5185\u5BB9\u4E5F\u53EA\u662F\u4ECB\u7ECD\u76F8\u5173\u7684\u57FA\u672C\u6982\u5FF5\u548C\u57FA\u7840\u5185\u5BB9\uFF0C\u5E76\u4E0D\u9700\u8981\u4ECB\u7ECD\u6307\u4EE4\u6D41\u6C34\u7EBF\u5B9E\u73B0\u7684\u8BE6\u7EC6\u5185\u5BB9\u3002']),
    _templateObject25 = _taggedTemplateLiteral(['\u5BF9\u4E8E\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u6280\u672F\uFF0C\u57FA\u672C\u8981\u6C42\u662F\u80FD\u591F\u4E86\u89E3\u8D85\u6D41\u6C34\u7EBF\u3001\u8D85\u6807\u91CF\u548C\u52A8\u6001\u6D41\u6C34\u7EBF\u7B49\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u5176\u57FA\u672C\u5B9E\u73B0\u6280\u672F\u3002\u5728\u8BFE\u65F6\u6709\u9650\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BFE\u5802\u4E2D\u53EA\u8981\u7B80\u5355\u8BF4\u660E\u4E00\u4E0B\u6BCF\u79CD\u5B9E\u73B0\u6280\u672F\u7684\u57FA\u672C\u601D\u60F3\u5373\u53EF\uFF0C\u5177\u4F53\u7684\u5B9E\u73B0\u5B9E\u4F8B\u548C\u8BE6\u7EC6\u7684\u63CF\u8FF0\u90E8\u5206\u53EF\u4EE5\u8DF3\u8FC7\u3002'], ['\u5BF9\u4E8E\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u6280\u672F\uFF0C\u57FA\u672C\u8981\u6C42\u662F\u80FD\u591F\u4E86\u89E3\u8D85\u6D41\u6C34\u7EBF\u3001\u8D85\u6807\u91CF\u548C\u52A8\u6001\u6D41\u6C34\u7EBF\u7B49\u9AD8\u7EA7\u6D41\u6C34\u7EBF\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u5176\u57FA\u672C\u5B9E\u73B0\u6280\u672F\u3002\u5728\u8BFE\u65F6\u6709\u9650\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BFE\u5802\u4E2D\u53EA\u8981\u7B80\u5355\u8BF4\u660E\u4E00\u4E0B\u6BCF\u79CD\u5B9E\u73B0\u6280\u672F\u7684\u57FA\u672C\u601D\u60F3\u5373\u53EF\uFF0C\u5177\u4F53\u7684\u5B9E\u73B0\u5B9E\u4F8B\u548C\u8BE6\u7EC6\u7684\u63CF\u8FF0\u90E8\u5206\u53EF\u4EE5\u8DF3\u8FC7\u3002']);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = '5.1　教学目标和内容安排';
var page = (0, _write.section)(title)((0, _write.p)(_templateObject, (0, _write.b)(_templateObject2)), (0, _write.p)(_templateObject3, (0, _write.b)(_templateObject4)), (0, _write.ol)((0, _write.p)(_templateObject5), (0, _write.p)(_templateObject6), (0, _write.p)(_templateObject7), (0, _write.p)(_templateObject8), (0, _write.p)(_templateObject9), (0, _write.p)(_templateObject10), (0, _write.p)(_templateObject11), (0, _write.p)(_templateObject12), (0, _write.p)(_templateObject13), (0, _write.p)(_templateObject14), (0, _write.p)(_templateObject15), (0, _write.p)(_templateObject16), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18), (0, _write.p)(_templateObject19), (0, _write.p)(_templateObject20)), (0, _write.p)(_templateObject21), (0, _write.p)(_templateObject22), (0, _write.p)(_templateObject23), (0, _write.p)(_templateObject24), (0, _write.p)(_templateObject25)).elem;

window.outer.views['/ComputerOrganization/Chapter5/1'] = { page: page, title: title };console.log(title);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzEucGFnZS50cyJdLCJuYW1lcyI6WyJ0aXRsZSIsInBhZ2UiLCJwIiwiYiIsImVsZW0iLCJ3aW5kb3ciLCJvdXRlciIsInZpZXdzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBOzs7O0FBQ0EsSUFBTUEsUUFBUSxlQUFkO0FBQ0EsSUFBTUMsT0FBTyxvQkFBUUQsS0FBUixNQUFlRSxRQUFmLHVCQUFvQkMsUUFBcEIsMEJBQXNIRCxRQUF0SCx3QkFBMkhDLFFBQTNILHNCQUF5SSxtQkFBR0QsUUFBSCx5QkFBb0JBLFFBQXBCLHlCQUF1Q0EsUUFBdkMseUJBQW9FQSxRQUFwRSx5QkFBd0ZBLFFBQXhGLHlCQUFtSEEsUUFBbkgsMEJBQXFJQSxRQUFySSwwQkFBa0tBLFFBQWxLLDBCQUFnTUEsUUFBaE0sMEJBQW1OQSxRQUFuTiwwQkFBME9BLFFBQTFPLDBCQUErUEEsUUFBL1AsMEJBQWtSQSxRQUFsUiwwQkFBdVNBLFFBQXZTLDBCQUE2VEEsUUFBN1QsMEJBQXVWQSxRQUF2VixxQkFBekksTUFBMmdCQSxRQUEzZ0IsMEJBQWtxQkEsUUFBbHFCLDBCQUFneUJBLFFBQWh5QiwwQkFBdzlCQSxRQUF4OUIsMEJBQWdtQ0EsUUFBaG1DLHNCQUFrdENFLElBQS90Qzs7QUFFTUMsT0FBT0MsS0FBUCxDQUFhQyxLQUFiLENBQW1CLGtDQUFuQixJQUF1RCxFQUFDTixVQUFELEVBQU1ELFlBQU4sRUFBdkQsQ0FBb0VRLFFBQVFDLEdBQVIsQ0FBWVQsS0FBWixFIiwiZmlsZSI6IkNvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjUvMVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzEucGFnZS50c1wiLFwidmVuZG9yc1wiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgcCwgYiwgc2VjdGlvbiwgb2wgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvQHdyaXRlJztcbmNvbnN0IHRpdGxlID0gJzUuMeOAgOaVmeWtpuebruagh+WSjOWGheWuueWuieaOkic7XG5jb25zdCBwYWdlID0gc2VjdGlvbih0aXRsZSkocCBgJHtiIGDkuLvopoHmlZnlrabnm67moIdgfeS9v+WtpueUn+S6huinoyBDUFUg55qE5Li76KaB5Yqf6IO944CBQ1BVIOeahOWGhemDqOe7k+aehOOAgeaMh+S7pOeahOaJp+ihjOi/h+eoi+OAgeaVsOaNrumAmui3r+eahOWfuuacrOe7hOaIkOOAgeaVsOaNrumAmui3r+eahOWumuaXtuS7peWPiuaVsOaNrumAmui3r+S4reS/oeaBr+eahOa1geWKqOi/h+eoi++8jOS7juiAjOeQhuino+WPr+aJp+ihjOaWh+S7tuS4reeoi+W6j+eahOaJp+ihjOi/h+eoi+OAgmAsIHAgYCR7YiBg5Z+65pys5a2m5Lmg6KaB5rGCYH1gLCBvbChwIGDnkIbop6MgQ1BVIOeahOWKn+iDveOAgmAsIHAgYOS6huinoyBDUFUg55qE5Z+65pys57uT5p6E44CCYCwgcCBg55CG6KejIENQVSDkuK3pgJrnlKjlr4TlrZjlmajlkozkuJPnlKjlr4TlrZjlmajnmoTkvZznlKjjgIJgLCBwIGDnkIbop6PkuIDmnaHmjIfku6TnmoTln7rmnKzmiafooYzov4fnqIvjgIJgLCBwIGDnkIbop6PmjIfku6TlkajmnJ/jgIHmnLrlmajlkajmnJ/ku6Xlj4rml7bpkp/lkajmnJ/nmoTmpoLlv7XjgIJgLCBwIGDkuobop6PmlbDmja7pgJrot6/nmoTln7rmnKznu4TmiJDjgIJgLCBwIGDkuobop6Plr4TlrZjlmajloIbvvIjpgJrnlKjlr4TlrZjlmajnu4TvvInnmoTkvZznlKjkuI7lt6XkvZzljp/nkIbjgIJgLCBwIGDnkIbop6PlhoXpg6jlvILluLjlkozlpJbpg6jkuK3mlq3nmoTln7rmnKzmpoLlv7Xku6Xlj4rkuKTogIXnmoTljLrliKvjgIJgLCBwIGDnkIbop6PmjIfku6TmtYHmsLTnur/nmoTkuIDoiKzmpoLlv7XjgIJgLCBwIGDkuobop6PpgILlkIjmtYHmsLTnur/miafooYznmoTmjIfku6Tpm4bnmoTnibnlvoHjgIJgLCBwIGDkuobop6PmtYHmsLTnur/mlbDmja7pgJrot6/nmoTln7rmnKznu4TmiJDjgIJgLCBwIGDkuobop6PmtYHmsLTnur/lhpLpmannmoTln7rmnKzmpoLlv7XjgIJgLCBwIGDkuobop6Pnu5PmnoTlhpLpmannmoTmpoLlv7XlkozlpITnkIbnrZbnlaXjgIJgLCBwIGDkuobop6PmlbDmja7lhpLpmanvvIjmlbDmja7nm7jlhbPvvInnmoTmpoLlv7XjgIJgLCBwIGDkuobop6PmjqfliLblhpLpmannmoTmpoLlv7XlkozlvJXotbfmjqfliLblhpLpmannmoTljp/lm6DjgIJgLCBwIGDkuobop6PotoXmtYHmsLTnur/jgIHotoXmoIfph4/lkozliqjmgIHmtYHmsLTnur/nrYnpq5jnuqfmtYHmsLTnur/nmoTln7rmnKzmpoLlv7Xlj4rlhbbln7rmnKzlrp7njrDmioDmnK/jgIJgKSwgcCBg5pys56ug566A6KaB5LuL57uN56iL5bqP5ZyoIENQVSDkuK3nmoTmiafooYzov4fnqIvjgILnqIvluo/nlLHkuIDmnaHmnaHmjIfku6Tnu4TmiJDvvIznqIvluo/nmoTmiafooYzlsLHmmK/miYDljIXlkKvnmoTmjIfku6Tluo/liJfnmoTmiafooYzjgILlm6DmraTvvIzmnKznq6DkuLvopoHlm7Tnu5XmjIfku6TnmoTmiafooYzov5vooYzku4vnu43vvIzkuLvopoHlhoXlrrnljIXmi6znqIvluo/miafooYzmpoLov7DjgIHmlbDmja7pgJrot6/nmoTln7rmnKznu5PmnoTlkozln7rmnKzlt6XkvZzljp/nkIbjgIHmjIfku6TmtYHmsLTnur/nmoTln7rmnKzljp/nkIbjgIHmjIfku6Tpm4bkvZPns7vnu5PmnoTkuI7mjIfku6TmtYHmsLTnur/lrp7njrDkuYvpl7TnmoTlhbPns7vjgIHpq5jnuqfmtYHmsLTnur/ln7rmnKzlrp7njrDmioDmnK/nrYnjgIJgLCBwIGDorqHnrpfmnLrns7vnu5/ln7rnoYDor77nqIvkuLvopoHlm7Tnu5XkuI7pq5jnuqfor63oqIDnqIvluo/nmoTovazmjaLkuI7miafooYzlr4bliIfnm7jlhbPnmoTlhoXlrrnov5vooYzku4vnu43vvIzlm6DogIzvvIzlr7nkuo7lrp7njrDmjIfku6TnmoTlvq7kvZPns7vnu5PmnoTmlrnpnaLvvIzkuI3lrpzlsZXlvIDmnaXorrLop6Plhbbnu4boioLlhoXlrrnjgILmnKznq6DnmoTmlZnlrabnm67moIfku4Xku4XmmK/orqnlrabnlJ/nkIbop6PmjIfku6TmmK/lpoLkvZXlnKggQ1BVIOS4reaOp+WItuWZqOeahOaOp+WItuS4i+eUseaVsOaNrumAmui3r+S4reeahOaJp+ihjOmDqOS7tuaJp+ihjOWujOaIkOeahOOAgmAsIHAgYOacrOeroOaPkOWIsOS6huWGhemDqOW8guW4uOWSjOWklumDqOS4reaWreeahOamguW/te+8jOi/meaYr+WboOS4uuaMh+S7pOWcqOato+W4uOaJp+ihjOi/h+eoi+S4re+8jOWPr+iDveS8mumBh+WIsOS4gOS6m+WmgumdnuazleaMh+S7pOOAgee7k+aenOa6ouWHuuetieeJueauiuS6i+S7tu+8jOS9v+W+l+W9k+WJjeaMh+S7pOaXoOazlee7p+e7reaJp+ihjOS4i+WOu++8jOS5n+WNs+WGhemDqOW8guW4uOWSjOWklumDqOS4reaWreS4juaMh+S7pOeahOaJp+ihjOebuOWFs+OAguS4jei/h++8jOWGhemDqOW8guW4uOWSjOWklumDqOS4reaWrei/mOS4juaTjeS9nOezu+e7n+WGheaguOebuOWFs++8jOWklumDqOS4reaWreS5n+S4juWkluiuvuS7peWPiuWkluiuvuaOpeWPo+ebuOWFs+OAguWFs+S6juWGhemDqOW8guW4uOWSjOWklumDqOS4reaWreeahOivpue7huWGheWuueWcqOWQjumdouWwhuS4k+mXqOeUqOS4gOeroOadpeS7i+e7je+8jOWboOatpO+8jOacrOeroOWPquimgeaPkOS4gOS4i+ebuOWFs+eahOamguW/teWNs+WPr+OAgmAsIHAgYOeOsOS7o+iuoeeul+acuumDvemHh+eUqOa1geawtOe6v+aWueW8j+aJp+ihjOaMh+S7pO+8jOWboOatpO+8jOacieWFs+aMh+S7pOeahOa1geawtOe6v+aJp+ihjOaWueW8j+WSjOa1geawtOe6v+WkhOeQhuWZqOeahOWunueOsOetieWGheWuueaYr+mdnuW4uOmHjeimgeeahOOAguS4jei/h++8jOeUseS6juiuoeeul+acuuezu+e7n+WfuuehgOivvueoi+S4jeS8mui/h+Wkmua3seWFpeW+ruS9k+ezu+e7k+aehOWxgu+8jOWboOatpO+8jOWFs+S6juaMh+S7pOa1geawtOe6v+eahOWGheWuueS5n+WPquaYr+S7i+e7jeebuOWFs+eahOWfuuacrOamguW/teWSjOWfuuehgOWGheWuue+8jOW5tuS4jemcgOimgeS7i+e7jeaMh+S7pOa1geawtOe6v+WunueOsOeahOivpue7huWGheWuueOAgmAsIHAgYOWvueS6jumrmOe6p+a1geawtOe6v+aKgOacr++8jOWfuuacrOimgeaxguaYr+iDveWkn+S6huino+i2hea1geawtOe6v+OAgei2heagh+mHj+WSjOWKqOaAgea1geawtOe6v+etiemrmOe6p+a1geawtOe6v+eahOWfuuacrOamguW/teWPiuWFtuWfuuacrOWunueOsOaKgOacr+OAguWcqOivvuaXtuaciemZkOeahOaDheWGteS4i++8jOivvuWgguS4reWPquimgeeugOWNleivtOaYjuS4gOS4i+avj+enjeWunueOsOaKgOacr+eahOWfuuacrOaAneaDs+WNs+WPr++8jOWFt+S9k+eahOWunueOsOWunuS+i+WSjOivpue7hueahOaPj+i/sOmDqOWIhuWPr+S7pei3s+i/h+OAgmApLmVsZW07XG5cbiAgICAgIHdpbmRvdy5vdXRlci52aWV3c1snL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzEnXT17cGFnZSx0aXRsZX07Y29uc29sZS5sb2codGl0bGUpIl0sInNvdXJjZVJvb3QiOiIifQ==