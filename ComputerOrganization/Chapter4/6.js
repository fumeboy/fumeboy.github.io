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
/******/ 		"ComputerOrganization/Chapter4/6": 0
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
/******/ 	deferredModules.push(["./src/pages/ComputerOrganization/Chapter4/6.page.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-1.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-1.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/ff3-4-6-1.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-10.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-10.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/6a7-4-6-10.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-11.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-11.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/e71-4-6-11.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-12.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-12.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/fe7-4-6-12.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-13.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-13.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/b61-4-6-13.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-14.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-14.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/753-4-6-14.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-15.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-15.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/2cc-4-6-15.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-16.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-16.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/a9b-4-6-16.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-17.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-17.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/82b-4-6-17.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-18.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-18.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/533-4-6-18.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-19.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-19.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/047-4-6-19.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-2.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-2.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/bb2-4-6-2.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-20.jpg":
/*!************************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-20.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/f6d-4-6-20.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-3.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-3.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/ebe-4-6-3.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-4.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-4.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/b83-4-6-4.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-5.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-5.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/ae1-4-6-5.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-6.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-6.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/83d-4-6-6.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-7.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-7.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/f44-4-6-7.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-8.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-8.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/97b-4-6-8.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/4-6-9.jpg":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/4-6-9.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/a95-4-6-9.jpg");

/***/ }),

/***/ "./src/pages/ComputerOrganization/Chapter4/6.page.ts":
/*!***********************************************************!*\
  !*** ./src/pages/ComputerOrganization/Chapter4/6.page.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\u5BF9\u4E8E\u7F16\u8BD1\u751F\u6210\u7684\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6 test.o\uFF0C\u586B\u5199\u8868 4.1 \u4E2D\u5404\u7B26\u53F7\u7684\u60C5\u51B5\uFF0C\u8BF4\u660E\u6BCF\u4E2A\u7B26\u53F7\u662F\u5426\u51FA\u73B0\u5728 test.o \u7684\u7B26\u53F7\u8868\uFF08.symtab \u8282\uFF09\u4E2D\uFF0C\u5982\u679C\u662F\uFF0C\u5B9A\u4E49\u8BE5\u7B26\u53F7\u7684\u6A21\u5757\u662F main.o \u8FD8\u662F test.o\uFF1F\u8BE5\u7B26\u53F7\u7684\u7C7B\u578B\u662F\u5168\u5C40\u3001\u5916\u90E8\uFF0C\u8FD8\u662F\u672C\u5730\u7B26\u53F7\uFF1F\u8BE5\u7B26\u53F7\u51FA\u73B0\u5728\u76F8\u5E94\u5B9A\u4E49\u6A21\u5757\u7684\u54EA\u4E2A\u8282\uFF08.text\u3001.data \u6216.bss\uFF09\uFF1F'], ['\u5BF9\u4E8E\u7F16\u8BD1\u751F\u6210\u7684\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6 test.o\uFF0C\u586B\u5199\u8868 4.1 \u4E2D\u5404\u7B26\u53F7\u7684\u60C5\u51B5\uFF0C\u8BF4\u660E\u6BCF\u4E2A\u7B26\u53F7\u662F\u5426\u51FA\u73B0\u5728 test.o \u7684\u7B26\u53F7\u8868\uFF08.symtab \u8282\uFF09\u4E2D\uFF0C\u5982\u679C\u662F\uFF0C\u5B9A\u4E49\u8BE5\u7B26\u53F7\u7684\u6A21\u5757\u662F main.o \u8FD8\u662F test.o\uFF1F\u8BE5\u7B26\u53F7\u7684\u7C7B\u578B\u662F\u5168\u5C40\u3001\u5916\u90E8\uFF0C\u8FD8\u662F\u672C\u5730\u7B26\u53F7\uFF1F\u8BE5\u7B26\u53F7\u51FA\u73B0\u5728\u76F8\u5E94\u5B9A\u4E49\u6A21\u5757\u7684\u54EA\u4E2A\u8282\uFF08.text\u3001.data \u6216.bss\uFF09\uFF1F']),
    _templateObject2 = _taggedTemplateLiteral(['\u6839\u636E\u9898 1 \u4E2D\u7ED9\u51FA\u7684\u6761\u4EF6\uFF0C\u586B\u8868 4.1 \u540E\uFF0C\u5F97\u5230\u8868 4.2\u3002'], ['\u6839\u636E\u9898 1 \u4E2D\u7ED9\u51FA\u7684\u6761\u4EF6\uFF0C\u586B\u8868 4.1 \u540E\uFF0C\u5F97\u5230\u8868 4.2\u3002']),
    _templateObject3 = _taggedTemplateLiteral(['\u5BF9\u4E8E\u7F16\u8BD1\u751F\u6210\u7684\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6 swap.o\uFF0C\u586B\u5199\u8868 4.3 \u4E2D\u5404\u7B26\u53F7\u7684\u60C5\u51B5\uFF0C\u8BF4\u660E\u6BCF\u4E2A\u7B26\u53F7\u662F\u5426\u51FA\u73B0\u5728 swap.o \u7684\u7B26\u53F7\u8868\uFF08.symtab \u8282\uFF09\u4E2D\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u5B9A\u4E49\u8BE5\u7B26\u53F7\u7684\u6A21\u5757\u662F main.o \u8FD8\u662F swap.o\u3001\u8BE5\u7B26\u53F7\u7684\u7C7B\u578B\u662F\u5168\u5C40\u3001\u5916\u90E8\u8FD8\u662F\u672C\u5730\u7B26\u53F7\u3001\u8BE5\u7B26\u53F7\u51FA\u73B0\u5728\u76F8\u5E94\u5B9A\u4E49\u6A21\u5757\u7684\u54EA\u4E2A\u8282\uFF08.text\u3001.data \u6216.bss\uFF09\u3002'], ['\u5BF9\u4E8E\u7F16\u8BD1\u751F\u6210\u7684\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6 swap.o\uFF0C\u586B\u5199\u8868 4.3 \u4E2D\u5404\u7B26\u53F7\u7684\u60C5\u51B5\uFF0C\u8BF4\u660E\u6BCF\u4E2A\u7B26\u53F7\u662F\u5426\u51FA\u73B0\u5728 swap.o \u7684\u7B26\u53F7\u8868\uFF08.symtab \u8282\uFF09\u4E2D\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u5B9A\u4E49\u8BE5\u7B26\u53F7\u7684\u6A21\u5757\u662F main.o \u8FD8\u662F swap.o\u3001\u8BE5\u7B26\u53F7\u7684\u7C7B\u578B\u662F\u5168\u5C40\u3001\u5916\u90E8\u8FD8\u662F\u672C\u5730\u7B26\u53F7\u3001\u8BE5\u7B26\u53F7\u51FA\u73B0\u5728\u76F8\u5E94\u5B9A\u4E49\u6A21\u5757\u7684\u54EA\u4E2A\u8282\uFF08.text\u3001.data \u6216.bss\uFF09\u3002']),
    _templateObject4 = _taggedTemplateLiteral(['\u6839\u636E\u9898 2 \u4E2D\u7ED9\u51FA\u7684\u6761\u4EF6\uFF0C\u586B\u8868 4.3 \u540E\uFF0C\u5F97\u5230\u8868 4.4\u3002'], ['\u6839\u636E\u9898 2 \u4E2D\u7ED9\u51FA\u7684\u6761\u4EF6\uFF0C\u586B\u8868 4.3 \u540E\uFF0C\u5F97\u5230\u8868 4.4\u3002']),
    _templateObject5 = _taggedTemplateLiteral(['\u8868 4.4\u3000\u9898 2 \u7528\u8868 2'], ['\u8868 4.4\u3000\u9898 2 \u7528\u8868 2']),
    _templateObject6 = _taggedTemplateLiteral(['\u56DE\u7B54\u4E0B\u5217\u95EE\u9898\u3002'], ['\u56DE\u7B54\u4E0B\u5217\u95EE\u9898\u3002']),
    _templateObject7 = _taggedTemplateLiteral(['\uFF081\uFF09\u5728\u4E0A\u8FF0\u4E24\u4E2A\u6587\u4EF6\u4E2D\u51FA\u73B0\u7684\u7B26\u53F7\u54EA\u4E9B\u662F\u5F3A\u7B26\u53F7\uFF1F\u54EA\u4E9B\u662F\u5F31\u7B26\u53F7\uFF1F\u5404\u53D8\u91CF\u7684\u5B58\u50A8\u7A7A\u95F4\u5206\u914D\u5728\u54EA\u4E2A\u8282\u4E2D\uFF1F\u5404\u5360\u51E0\u4E2A\u5B57\u8282\uFF1F'], ['\uFF081\uFF09\u5728\u4E0A\u8FF0\u4E24\u4E2A\u6587\u4EF6\u4E2D\u51FA\u73B0\u7684\u7B26\u53F7\u54EA\u4E9B\u662F\u5F3A\u7B26\u53F7\uFF1F\u54EA\u4E9B\u662F\u5F31\u7B26\u53F7\uFF1F\u5404\u53D8\u91CF\u7684\u5B58\u50A8\u7A7A\u95F4\u5206\u914D\u5728\u54EA\u4E2A\u8282\u4E2D\uFF1F\u5404\u5360\u51E0\u4E2A\u5B57\u8282\uFF1F']),
    _templateObject8 = _taggedTemplateLiteral(['\uFF082\uFF09\u7A0B\u5E8F\u6267\u884C\u540E\u6253\u5370\u7684\u7ED3\u679C\u662F\u4EC0\u4E48\uFF1F\u8BF7\u5206\u522B\u753B\u51FA\u6267\u884C\u7B2C 7 \u884C\u7684 proc1\uFF08\uFF09\u51FD\u6570\u8C03\u7528\u524D\u3001\u540E\uFF0C\u5728\u5730\u5740&x \u548C&z \u4E2D\u5B58\u653E\u7684\u5185\u5BB9\u3002'], ['\uFF082\uFF09\u7A0B\u5E8F\u6267\u884C\u540E\u6253\u5370\u7684\u7ED3\u679C\u662F\u4EC0\u4E48\uFF1F\u8BF7\u5206\u522B\u753B\u51FA\u6267\u884C\u7B2C 7 \u884C\u7684 proc1\uFF08\uFF09\u51FD\u6570\u8C03\u7528\u524D\u3001\u540E\uFF0C\u5728\u5730\u5740&x \u548C&z \u4E2D\u5B58\u653E\u7684\u5185\u5BB9\u3002']),
    _templateObject9 = _taggedTemplateLiteral(['\uFF083\uFF09\u82E5 main.c \u7684\u7B2C 3 \u884C\u6539\u4E3A\u300Cshort y=1\uFF0Cz=2\uFF1B\u300D\uFF0C\u7ED3\u679C\u53C8\u4F1A\u600E\u6837\uFF1F'], ['\uFF083\uFF09\u82E5 main.c \u7684\u7B2C 3 \u884C\u6539\u4E3A\u300Cshort y=1\uFF0Cz=2\uFF1B\u300D\uFF0C\u7ED3\u679C\u53C8\u4F1A\u600E\u6837\uFF1F']),
    _templateObject10 = _taggedTemplateLiteral(['\uFF084\uFF09\u4FEE\u6539\u6587\u4EF6 proc1\uFF0C\u4F7F\u5F97 main.c \u80FD\u8F93\u51FA\u6B63\u786E\u7684\u7ED3\u679C\uFF08\u5373 x=257\uFF0Cz=2\uFF09\u3002\u8981\u6C42\u4FEE\u6539\u65F6\u4E0D\u80FD\u6539\u53D8\u4EFB\u4F55\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u548C\u540D\u5B57\u3002'], ['\uFF084\uFF09\u4FEE\u6539\u6587\u4EF6 proc1\uFF0C\u4F7F\u5F97 main.c \u80FD\u8F93\u51FA\u6B63\u786E\u7684\u7ED3\u679C\uFF08\u5373 x=257\uFF0Cz=2\uFF09\u3002\u8981\u6C42\u4FEE\u6539\u65F6\u4E0D\u80FD\u6539\u53D8\u4EFB\u4F55\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u548C\u540D\u5B57\u3002']),
    _templateObject11 = _taggedTemplateLiteral(['\uFF081\uFF09main.c \u4E2D\u5F3A\u7B26\u53F7\u6709 x\u3001z\u3001main\uFF0C\u5F31\u7B26\u53F7\u6709 y \u548C proc1\uFF1Bproc1.c \u4E2D\u7684\u5F3A\u7B26\u53F7\u6709 proc1\uFF0C\u5F31\u7B26\u53F7\u6709 x\u3002\u6839\u636E\u591A\u91CD\u5B9A\u4E49\u7B26\u53F7\u5904\u7406\u89C4\u5219 2\uFF08\u82E5\u4E00\u4E2A\u7B26\u53F7\u88AB\u8BF4\u660E\u4E3A\u4E00\u6B21\u5F3A\u7B26\u53F7\u5B9A\u4E49\u548C\u591A\u6B21\u5F31\u7B26\u53F7\u5B9A\u4E49\uFF0C\u5219\u6309\u5F3A\u7B26\u53F7\u5B9A\u4E49\u4E3A\u51C6\uFF09\uFF0C\u7B26\u53F7 x \u7684\u5B9A\u4E49\u4EE5 main.c \u4E2D\u7684\u5F3A\u7B26\u53F7 x \u4E3A\u51C6\uFF0C\u5373\u5728 main.o \u7684.data \u8282\u4E2D\u5206\u914D x\uFF0C\u5360 4 \u4E2A\u5B57\u8282\uFF0C\u968F\u540E\u662F\u53E6\u4E00\u4E2A\u5F3A\u7B26\u53F7 z \u5360\u4E24\u4E2A\u5B57\u8282\uFF0Cx \u548C z \u90FD\u5C5E\u4E8E.data \u8282\uFF0C\u968F\u540E\u662F.bss \u8282\uFF0C\u5176\u4E2D\u53EA\u6709\u4E00\u4E2A\u53D8\u91CF y\uFF0C\u6309 4 \u5B57\u8282\u5BF9\u9F50\uFF0C\u56E0\u6B64\uFF0C\u5728 z \u540E\u9762\u6709\u4E24\u4E2A\u5B57\u8282\u7A7A\u95F2\uFF0C\u518D\u540E\u9762\u662F\u53D8\u91CF y \u7684\u7A7A\u95F4\u3002'], ['\uFF081\uFF09main.c \u4E2D\u5F3A\u7B26\u53F7\u6709 x\u3001z\u3001main\uFF0C\u5F31\u7B26\u53F7\u6709 y \u548C proc1\uFF1Bproc1.c \u4E2D\u7684\u5F3A\u7B26\u53F7\u6709 proc1\uFF0C\u5F31\u7B26\u53F7\u6709 x\u3002\u6839\u636E\u591A\u91CD\u5B9A\u4E49\u7B26\u53F7\u5904\u7406\u89C4\u5219 2\uFF08\u82E5\u4E00\u4E2A\u7B26\u53F7\u88AB\u8BF4\u660E\u4E3A\u4E00\u6B21\u5F3A\u7B26\u53F7\u5B9A\u4E49\u548C\u591A\u6B21\u5F31\u7B26\u53F7\u5B9A\u4E49\uFF0C\u5219\u6309\u5F3A\u7B26\u53F7\u5B9A\u4E49\u4E3A\u51C6\uFF09\uFF0C\u7B26\u53F7 x \u7684\u5B9A\u4E49\u4EE5 main.c \u4E2D\u7684\u5F3A\u7B26\u53F7 x \u4E3A\u51C6\uFF0C\u5373\u5728 main.o \u7684.data \u8282\u4E2D\u5206\u914D x\uFF0C\u5360 4 \u4E2A\u5B57\u8282\uFF0C\u968F\u540E\u662F\u53E6\u4E00\u4E2A\u5F3A\u7B26\u53F7 z \u5360\u4E24\u4E2A\u5B57\u8282\uFF0Cx \u548C z \u90FD\u5C5E\u4E8E.data \u8282\uFF0C\u968F\u540E\u662F.bss \u8282\uFF0C\u5176\u4E2D\u53EA\u6709\u4E00\u4E2A\u53D8\u91CF y\uFF0C\u6309 4 \u5B57\u8282\u5BF9\u9F50\uFF0C\u56E0\u6B64\uFF0C\u5728 z \u540E\u9762\u6709\u4E24\u4E2A\u5B57\u8282\u7A7A\u95F2\uFF0C\u518D\u540E\u9762\u662F\u53D8\u91CF y \u7684\u7A7A\u95F4\u3002']),
    _templateObject12 = _taggedTemplateLiteral(['\uFF082\uFF09\u7A0B\u5E8F\u6267\u884C\u65F6\uFF0C\u5728\u8C03\u7528 proc1\uFF08\uFF09\u51FD\u6570\u4E4B\u524D\uFF0C&x \u4E2D\u5B58\u653E\u7684\u662F x \u7684\u673A\u5668\u6570\uFF1A00000101H\uFF0C\u968F\u540E\u4E24\u4E2A\u5B57\u8282\uFF08\u5730\u5740\u4E3A&z\uFF09\u5B58\u653E z\uFF0C\u5373 0002H\uFF0C\u518D\u540E\u9762\u4E24\u4E2A\u5B57\u8282\u7A7A\u95F2\uFF0C\u5982\u56FE 4.3a \u6240\u793A\u3002'], ['\uFF082\uFF09\u7A0B\u5E8F\u6267\u884C\u65F6\uFF0C\u5728\u8C03\u7528 proc1\uFF08\uFF09\u51FD\u6570\u4E4B\u524D\uFF0C&x \u4E2D\u5B58\u653E\u7684\u662F x \u7684\u673A\u5668\u6570\uFF1A00000101H\uFF0C\u968F\u540E\u4E24\u4E2A\u5B57\u8282\uFF08\u5730\u5740\u4E3A&z\uFF09\u5B58\u653E z\uFF0C\u5373 0002H\uFF0C\u518D\u540E\u9762\u4E24\u4E2A\u5B57\u8282\u7A7A\u95F2\uFF0C\u5982\u56FE 4.3a \u6240\u793A\u3002']),
    _templateObject13 = _taggedTemplateLiteral(['\u5728\u8C03\u7528 proc1\uFF08\uFF09\u51FD\u6570\u4EE5\u540E\uFF0C\u56E0\u4E3A proc1\uFF08\uFF09\u4E2D\u7684\u7B26\u53F7 x \u662F\u5F31\u7B26\u53F7\uFF0C\u6240\u4EE5\uFF0Cx \u7684\u5B9A\u4E49\u4EE5 main \u4E2D\u7684\u5F3A\u7B26\u53F7 x \u4E3A\u51C6\uFF0C\u6267\u884C x=-1.5 \u540E\uFF0C\u4FBF\u5C06\u300C-1.5\u300D\u7684\u673A\u5668\u6570 BFF8000000000000H \u5B58\u653E\u5230\u4E86&x \u5F00\u59CB\u7684 8 \u4E2A\u5B57\u8282\u4E2D\u3002\u5373&x \u4E2D\u4E3A\u5176\u4F4E 32 \u4F4D\u7684 00000000H\uFF0C&z \u4E2D\u4E3A\u9AD8 32 \u4F4D\u7684 BFF80000H \u4E2D\u7684\u4F4E 16 \u4F4D 0000H\uFF0Cz \u540E\u9762\u7684\u4E24\u4E2A\u7A7A\u95F2\u5B57\u8282\u4E2D\u4E3A\u9AD8 16 \u4F4D BFF8H\uFF0C\u5982\u56FE 4.3b \u6240\u793A\u3002'], ['\u5728\u8C03\u7528 proc1\uFF08\uFF09\u51FD\u6570\u4EE5\u540E\uFF0C\u56E0\u4E3A proc1\uFF08\uFF09\u4E2D\u7684\u7B26\u53F7 x \u662F\u5F31\u7B26\u53F7\uFF0C\u6240\u4EE5\uFF0Cx \u7684\u5B9A\u4E49\u4EE5 main \u4E2D\u7684\u5F3A\u7B26\u53F7 x \u4E3A\u51C6\uFF0C\u6267\u884C x=-1.5 \u540E\uFF0C\u4FBF\u5C06\u300C-1.5\u300D\u7684\u673A\u5668\u6570 BFF8000000000000H \u5B58\u653E\u5230\u4E86&x \u5F00\u59CB\u7684 8 \u4E2A\u5B57\u8282\u4E2D\u3002\u5373&x \u4E2D\u4E3A\u5176\u4F4E 32 \u4F4D\u7684 00000000H\uFF0C&z \u4E2D\u4E3A\u9AD8 32 \u4F4D\u7684 BFF80000H \u4E2D\u7684\u4F4E 16 \u4F4D 0000H\uFF0Cz \u540E\u9762\u7684\u4E24\u4E2A\u7A7A\u95F2\u5B57\u8282\u4E2D\u4E3A\u9AD8 16 \u4F4D BFF8H\uFF0C\u5982\u56FE 4.3b \u6240\u793A\u3002']),
    _templateObject14 = _taggedTemplateLiteral(['\u56E0\u6B64\uFF0C\u6700\u7EC8\u6253\u5370\u7684\u7ED3\u679C\u4E3A x=0\uFF0Cz=0\u3002'], ['\u56E0\u6B64\uFF0C\u6700\u7EC8\u6253\u5370\u7684\u7ED3\u679C\u4E3A x=0\uFF0Cz=0\u3002']),
    _templateObject15 = _taggedTemplateLiteral(['\uFF083\uFF09\u82E5 main.c \u7684\u7B2C 3 \u884C\u6539\u4E3A\u300Cshort y=1\uFF0Cz=2\uFF1B\u300D\uFF0C\u5219 x\u3001y\u3001z \u90FD\u662F\u5F3A\u7B26\u53F7\uFF0C\u90FD\u88AB\u5206\u914D\u5728.data \u8282\u4E2D\uFF0C\u56E0\u6B64\uFF0Cx \u5360 4 \u4E2A\u5B57\u8282\uFF0C\u968F\u540E\u662F y \u5360\u4E24\u4E2A\u5B57\u8282\uFF0Cz \u5360\u4E24\u4E2A\u5B57\u8282\uFF0Cproc1 \u51FD\u6570\u6267\u884C\u524D\u3001\u540E\u7684\u5B58\u50A8\u5185\u5BB9\u5982\u56FE 4.4 \u6240\u793A\uFF0C\u7531\u6B64\u53EF\u89C1\uFF0Cx \u7684\u673A\u5668\u6570\u4E3A\u5168 0\uFF0Cz \u7684\u673A\u5668\u6570\u4E3A BFF8H\uFF0C\u56E0\u6B64\uFF0C\u6700\u7EC8\u6253\u5370\u7684\u7ED3\u679C\u4E3A x=0\uFF0Cz=-16392\u3002'], ['\uFF083\uFF09\u82E5 main.c \u7684\u7B2C 3 \u884C\u6539\u4E3A\u300Cshort y=1\uFF0Cz=2\uFF1B\u300D\uFF0C\u5219 x\u3001y\u3001z \u90FD\u662F\u5F3A\u7B26\u53F7\uFF0C\u90FD\u88AB\u5206\u914D\u5728.data \u8282\u4E2D\uFF0C\u56E0\u6B64\uFF0Cx \u5360 4 \u4E2A\u5B57\u8282\uFF0C\u968F\u540E\u662F y \u5360\u4E24\u4E2A\u5B57\u8282\uFF0Cz \u5360\u4E24\u4E2A\u5B57\u8282\uFF0Cproc1 \u51FD\u6570\u6267\u884C\u524D\u3001\u540E\u7684\u5B58\u50A8\u5185\u5BB9\u5982\u56FE 4.4 \u6240\u793A\uFF0C\u7531\u6B64\u53EF\u89C1\uFF0Cx \u7684\u673A\u5668\u6570\u4E3A\u5168 0\uFF0Cz \u7684\u673A\u5668\u6570\u4E3A BFF8H\uFF0C\u56E0\u6B64\uFF0C\u6700\u7EC8\u6253\u5370\u7684\u7ED3\u679C\u4E3A x=0\uFF0Cz=-16392\u3002']),
    _templateObject16 = _taggedTemplateLiteral(['\uFF084\uFF09\u53EA\u8981\u5C06\u6587\u4EF6 proc1.c \u4E2D\u7684\u7B2C 1 \u884C\u4FEE\u6539\u4E3A\u300Cstatic double x\u300D\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u5F97 proc1 \u4E2D\u7684 x \u8BBE\u5B9A\u4E3A\u672C\u5730\u53D8\u91CF\uFF0C\u4ECE\u800C\u5728 proc1.o \u7684.data \u8282\u4E2D\u4E13\u95E8\u5206\u914D\u5B58\u653E x \u7684 8 \u4E2A\u5B57\u8282\u7A7A\u95F4\uFF0C\u800C\u4E0D\u4F1A\u548C main \u4E2D\u7684 x \u5171\u7528\u540C\u4E00\u4E2A\u5B58\u50A8\u5730\u5740\uFF0C\u56E0\u6B64\u4E5F\u5C31\u4E0D\u4F1A\u7834\u574F main \u4E2D x \u548C z \u7684\u503C\u3002'], ['\uFF084\uFF09\u53EA\u8981\u5C06\u6587\u4EF6 proc1.c \u4E2D\u7684\u7B2C 1 \u884C\u4FEE\u6539\u4E3A\u300Cstatic double x\u300D\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u5F97 proc1 \u4E2D\u7684 x \u8BBE\u5B9A\u4E3A\u672C\u5730\u53D8\u91CF\uFF0C\u4ECE\u800C\u5728 proc1.o \u7684.data \u8282\u4E2D\u4E13\u95E8\u5206\u914D\u5B58\u653E x \u7684 8 \u4E2A\u5B57\u8282\u7A7A\u95F4\uFF0C\u800C\u4E0D\u4F1A\u548C main \u4E2D\u7684 x \u5171\u7528\u540C\u4E00\u4E2A\u5B58\u50A8\u5730\u5740\uFF0C\u56E0\u6B64\u4E5F\u5C31\u4E0D\u4F1A\u7834\u574F main \u4E2D x \u548C z \u7684\u503C\u3002']),
    _templateObject17 = _taggedTemplateLiteral(['\u2460REF\uFF08m1.main\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2460REF\uFF08m1.main\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject18 = _taggedTemplateLiteral(['\u2461REF\uFF08m2.main\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2461REF\uFF08m2.main\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject19 = _taggedTemplateLiteral(['\u2462REF\uFF08m1.p\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2462REF\uFF08m1.p\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject20 = _taggedTemplateLiteral(['\u2463REF\uFF08m2.p\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2463REF\uFF08m2.p\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject21 = _taggedTemplateLiteral(['\u2462REF\uFF08m1.x\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2462REF\uFF08m1.x\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject22 = _taggedTemplateLiteral(['\u2462REF\uFF08m1.p1\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2462REF\uFF08m1.p1\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject23 = _taggedTemplateLiteral(['\u2463REF\uFF08m1.x\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2463REF\uFF08m1.x\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject24 = _taggedTemplateLiteral(['\u2464REF\uFF08m2.x\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2464REF\uFF08m2.x\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject25 = _taggedTemplateLiteral(['\u2460REF\uFF08m1.x\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2460REF\uFF08m1.x\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject26 = _taggedTemplateLiteral(['\u2461REF\uFF08m2.x\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2461REF\uFF08m2.x\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject27 = _taggedTemplateLiteral(['\u2462REF\uFF08m1.y\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2462REF\uFF08m1.y\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject28 = _taggedTemplateLiteral(['\u2463REF\uFF08m2.y\uFF09\u2192DEF\uFF08_____._____\uFF09'], ['\u2463REF\uFF08m2.y\uFF09\u2192DEF\uFF08_____._____\uFF09']),
    _templateObject29 = _taggedTemplateLiteral(['\uFF081\uFF09main \u5728 m1 \u4E2D\u662F\u5F3A\u5B9A\u4E49\uFF0C\u5728 m2 \u4E2D\u662F\u672C\u5730\u7B26\u53F7\u3002'], ['\uFF081\uFF09main \u5728 m1 \u4E2D\u662F\u5F3A\u5B9A\u4E49\uFF0C\u5728 m2 \u4E2D\u662F\u672C\u5730\u7B26\u53F7\u3002']),
    _templateObject30 = _taggedTemplateLiteral(['\u2460REF\uFF08m1.main\uFF09\u2192 \u5728 m1 \u4E2D\u4E0D\u5B58\u5728\u5BF9 main \u7684\u5F15\u7528'], ['\u2460REF\uFF08m1.main\uFF09\u2192 \u5728 m1 \u4E2D\u4E0D\u5B58\u5728\u5BF9 main \u7684\u5F15\u7528']),
    _templateObject31 = _taggedTemplateLiteral(['\u2461REF\uFF08m2.main\uFF09\u2192DEF\uFF08m2.main\uFF09'], ['\u2461REF\uFF08m2.main\uFF09\u2192DEF\uFF08m2.main\uFF09']),
    _templateObject32 = _taggedTemplateLiteral(['\u2462REF\uFF08m1.p\uFF09\u2192DEF\uFF08m2.p\uFF09'], ['\u2462REF\uFF08m1.p\uFF09\u2192DEF\uFF08m2.p\uFF09']),
    _templateObject33 = _taggedTemplateLiteral(['\u2463REF\uFF08m2.p\uFF09\u2192 \u5728 m2 \u4E2D\u4E0D\u5B58\u5728\u5BF9 p \u7684\u5F15\u7528'], ['\u2463REF\uFF08m2.p\uFF09\u2192 \u5728 m2 \u4E2D\u4E0D\u5B58\u5728\u5BF9 p \u7684\u5F15\u7528']),
    _templateObject34 = _taggedTemplateLiteral(['\uFF082\uFF09\u53D1\u751F\u94FE\u63A5\u9519\u8BEF\uFF0C\u56E0\u4E3A\u5168\u5C40\u53D8\u91CF main \u548C x \u90FD\u6709\u4E24\u4E2A\u5F3A\u5B9A\u4E49\u3002'], ['\uFF082\uFF09\u53D1\u751F\u94FE\u63A5\u9519\u8BEF\uFF0C\u56E0\u4E3A\u5168\u5C40\u53D8\u91CF main \u548C x \u90FD\u6709\u4E24\u4E2A\u5F3A\u5B9A\u4E49\u3002']),
    _templateObject35 = _taggedTemplateLiteral(['\uFF083\uFF09main \u5728 m1 \u4E2D\u662F\u5F3A\u5B9A\u4E49\u7B26\u53F7\uFF0C\u5728 m2 \u4E2D\u662F\u5F31\u7B26\u53F7\uFF0C\u56E0\u6B64\u94FE\u63A5\u5668\u9009\u62E9\u5F3A\u5B9A\u4E49'], ['\uFF083\uFF09main \u5728 m1 \u4E2D\u662F\u5F3A\u5B9A\u4E49\u7B26\u53F7\uFF0C\u5728 m2 \u4E2D\u662F\u5F31\u7B26\u53F7\uFF0C\u56E0\u6B64\u94FE\u63A5\u5668\u9009\u62E9\u5F3A\u5B9A\u4E49']),
    _templateObject36 = _taggedTemplateLiteral(['\u2461REF\uFF08m2.main\uFF09\u2192DEF\uFF08m1.main\uFF09'], ['\u2461REF\uFF08m2.main\uFF09\u2192DEF\uFF08m1.main\uFF09']),
    _templateObject37 = _taggedTemplateLiteral(['\u2462REF\uFF08m1.p1\uFF09\u2192DEF\uFF08m2.p1\uFF09'], ['\u2462REF\uFF08m1.p1\uFF09\u2192DEF\uFF08m2.p1\uFF09']),
    _templateObject38 = _taggedTemplateLiteral(['\u2463REF\uFF08m1.x\uFF09\u2192 \u5728 m1 \u4E2D\u5F15\u7528\u7684 x \u662F\u5C40\u90E8\u53D8\u91CF\uFF0C\u4E0D\u5B58\u5728\u5173\u8054'], ['\u2463REF\uFF08m1.x\uFF09\u2192 \u5728 m1 \u4E2D\u5F15\u7528\u7684 x \u662F\u5C40\u90E8\u53D8\u91CF\uFF0C\u4E0D\u5B58\u5728\u5173\u8054']),
    _templateObject39 = _taggedTemplateLiteral(['\u2464REF\uFF08m2.x\uFF09\u2192DEF\uFF08m2.x\uFF09'], ['\u2464REF\uFF08m2.x\uFF09\u2192DEF\uFF08m2.x\uFF09']),
    _templateObject40 = _taggedTemplateLiteral(['\uFF084\uFF09\u5168\u5C40\u7B26\u53F7 x \u5728 m1 \u4E2D\u662F\u5F31\u5B9A\u4E49\uFF0C\u5728 m2 \u4E2D\u662F\u5F3A\u5B9A\u4E49\uFF0Cy \u5728\u4E24\u4E2A\u6A21\u5757\u4E2D\u90FD\u662F\u5F31\u5B9A\u4E49'], ['\uFF084\uFF09\u5168\u5C40\u7B26\u53F7 x \u5728 m1 \u4E2D\u662F\u5F31\u5B9A\u4E49\uFF0C\u5728 m2 \u4E2D\u662F\u5F3A\u5B9A\u4E49\uFF0Cy \u5728\u4E24\u4E2A\u6A21\u5757\u4E2D\u90FD\u662F\u5F31\u5B9A\u4E49']),
    _templateObject41 = _taggedTemplateLiteral(['\u2460REF\uFF08m1.x\uFF09\u2192DEF\uFF08m2.x\uFF09'], ['\u2460REF\uFF08m1.x\uFF09\u2192DEF\uFF08m2.x\uFF09']),
    _templateObject42 = _taggedTemplateLiteral(['\u2461REF\uFF08m2.x\uFF09\u2192 \u5728 m2 \u4E2D\u4E0D\u5B58\u5728\u5BF9 x \u7684\u5F15\u7528'], ['\u2461REF\uFF08m2.x\uFF09\u2192 \u5728 m2 \u4E2D\u4E0D\u5B58\u5728\u5BF9 x \u7684\u5F15\u7528']),
    _templateObject43 = _taggedTemplateLiteral(['\u2462REF\uFF08m1.y\uFF09\u2192 \u5728 m1 \u4E2D\u4E0D\u5B58\u5728\u5BF9 y \u7684\u5F15\u7528'], ['\u2462REF\uFF08m1.y\uFF09\u2192 \u5728 m1 \u4E2D\u4E0D\u5B58\u5728\u5BF9 y \u7684\u5F15\u7528']),
    _templateObject44 = _taggedTemplateLiteral(['\u2463REF\uFF08m2.y\uFF09\u2192DEF\uFF08m1.y\uFF09\u6216\u8005 DEF\uFF08m2.y\uFF09'], ['\u2463REF\uFF08m2.y\uFF09\u2192DEF\uFF08m1.y\uFF09\u6216\u8005 DEF\uFF08m2.y\uFF09']),
    _templateObject45 = _taggedTemplateLiteral(['\u5168\u5C40\u7B26\u53F7 main \u5728 m1 \u4E2D\u662F\u5F3A\u7B26\u53F7\uFF0C\u5728 m2 \u4E2D\u662F\u5F31\u7B26\u53F7\uFF0C\u56E0\u6B64\u4EE5 m1 \u4E2D main \u7684\u5B9A\u4E49\u4E3A\u51C6\u3002\u5728 m1 \u4E2D\u5168\u5C40\u7B26\u53F7 main \u88AB\u5B9A\u4E49\u5728.text \u8282\u4E2D\uFF0C\u51FA\u73B0\u672C\u9898\u6240\u8BF4\u7ED3\u679C\u7684\u539F\u56E0\u662F\uFF0Cmain \u51FD\u6570\u5BF9\u5E94\u7684\u673A\u5668\u7801\u5F00\u59CB\u4E24\u4E2A\u5B57\u8282\u4E3A 55H \u548C 89H\u3002\u5728\u6709\u4E9B\u7CFB\u7EDF\u4E2D\uFF0Cmain \u51FD\u6570\u6700\u521D\u4E24\u6761\u6307\u4EE4\u5982\u4E0B\uFF1A'], ['\u5168\u5C40\u7B26\u53F7 main \u5728 m1 \u4E2D\u662F\u5F3A\u7B26\u53F7\uFF0C\u5728 m2 \u4E2D\u662F\u5F31\u7B26\u53F7\uFF0C\u56E0\u6B64\u4EE5 m1 \u4E2D main \u7684\u5B9A\u4E49\u4E3A\u51C6\u3002\u5728 m1 \u4E2D\u5168\u5C40\u7B26\u53F7 main \u88AB\u5B9A\u4E49\u5728.text \u8282\u4E2D\uFF0C\u51FA\u73B0\u672C\u9898\u6240\u8BF4\u7ED3\u679C\u7684\u539F\u56E0\u662F\uFF0Cmain \u51FD\u6570\u5BF9\u5E94\u7684\u673A\u5668\u7801\u5F00\u59CB\u4E24\u4E2A\u5B57\u8282\u4E3A 55H \u548C 89H\u3002\u5728\u6709\u4E9B\u7CFB\u7EDF\u4E2D\uFF0Cmain \u51FD\u6570\u6700\u521D\u4E24\u6761\u6307\u4EE4\u5982\u4E0B\uFF1A']),
    _templateObject46 = _taggedTemplateLiteral(['\u5176\u4E2D\uFF0C55H \u662F\u6307\u4EE4\u300Cpush%ebp\u300D\u7684\u673A\u5668\u7801\uFF0C89E5H \u662F\u6307\u4EE4\u300Cmov%esp\uFF0C%ebp\u300D\u7684\u673A\u5668\u7801\uFF0C\u56E0\u6B64\uFF0C\u53EF\u4EE5\u770B\u51FA\u5728 m2 \u4E2D\u7684 printf \u8BED\u53E5\u4E2D\u5F15\u7528\u6570\u7EC4\u5143\u7D20 main[0]\u548C main[1]\u65F6\uFF0Cmain[0]=55H\uFF0Cmain[1]=89H\u3002'], ['\u5176\u4E2D\uFF0C55H \u662F\u6307\u4EE4\u300Cpush%ebp\u300D\u7684\u673A\u5668\u7801\uFF0C89E5H \u662F\u6307\u4EE4\u300Cmov%esp\uFF0C%ebp\u300D\u7684\u673A\u5668\u7801\uFF0C\u56E0\u6B64\uFF0C\u53EF\u4EE5\u770B\u51FA\u5728 m2 \u4E2D\u7684 printf \u8BED\u53E5\u4E2D\u5F15\u7528\u6570\u7EC4\u5143\u7D20 main[0]\u548C main[1]\u65F6\uFF0Cmain[0]=55H\uFF0Cmain[1]=89H\u3002']),
    _templateObject47 = _taggedTemplateLiteral(['\u5728\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u4E2D\u63CF\u8FF0\u7684\u300C\u53EF\u8BFB\u5199\u6570\u636E\u6BB5\u300D\u7531\u6240\u6709\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u4E2D\u7684.data \u8282\u5408\u5E76\u751F\u6210\u7684.data \u8282\u3001\u6240\u6709\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u4E2D\u7684.bss \u8282\u5408\u5E76\u751F\u6210\u7684.bss \u8282\u8FD9\u4E24\u90E8\u5206\u7EC4\u6210\u3002.data \u8282\u7531\u521D\u59CB\u5316\u7684\u5168\u5C40\u53D8\u91CF\u7EC4\u6210\uFF0C\u56E0\u6B64\u5176\u521D\u59CB\u503C\u5FC5\u987B\u8BB0\u5F55\u5728\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\uFF1B\u800C.bss \u8282\u7531\u672A\u521D\u59CB\u5316\u7684\u5168\u5C40\u53D8\u91CF\u7EC4\u6210\uFF0C\u56E0\u6B64\u5728\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u4E2D\u65E0\u9700\u8BB0\u5F55\u5176\u503C\uFF0C\u53EA\u8981\u63CF\u8FF0\u603B\u7684\u957F\u5EA6\u548C\u6BCF\u4E2A\u53D8\u91CF\u7684\u8D77\u59CB\u4F4D\u7F6E\u5373\u53EF\u3002'], ['\u5728\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u4E2D\u63CF\u8FF0\u7684\u300C\u53EF\u8BFB\u5199\u6570\u636E\u6BB5\u300D\u7531\u6240\u6709\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u4E2D\u7684.data \u8282\u5408\u5E76\u751F\u6210\u7684.data \u8282\u3001\u6240\u6709\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6\u4E2D\u7684.bss \u8282\u5408\u5E76\u751F\u6210\u7684.bss \u8282\u8FD9\u4E24\u90E8\u5206\u7EC4\u6210\u3002.data \u8282\u7531\u521D\u59CB\u5316\u7684\u5168\u5C40\u53D8\u91CF\u7EC4\u6210\uFF0C\u56E0\u6B64\u5176\u521D\u59CB\u503C\u5FC5\u987B\u8BB0\u5F55\u5728\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\uFF1B\u800C.bss \u8282\u7531\u672A\u521D\u59CB\u5316\u7684\u5168\u5C40\u53D8\u91CF\u7EC4\u6210\uFF0C\u56E0\u6B64\u5728\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u4E2D\u65E0\u9700\u8BB0\u5F55\u5176\u503C\uFF0C\u53EA\u8981\u63CF\u8FF0\u603B\u7684\u957F\u5EA6\u548C\u6BCF\u4E2A\u53D8\u91CF\u7684\u8D77\u59CB\u4F4D\u7F6E\u5373\u53EF\u3002']),
    _templateObject48 = _taggedTemplateLiteral(['\u6839\u636E\u56FE 4.5 \u4E2D\u7684\u5185\u5BB9\u53EF\u77E5\uFF0C.data \u8282\u4E2D\u5168\u5C40\u53D8\u91CF\u7684\u521D\u59CB\u503C\u603B\u7684\u6570\u636E\u957F\u5EA6\u4E3A 0xe8\u3002\u56E0\u6B64\uFF0C\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u4E2D\u957F\u5EA6\u4E3A 0x104 \u5B57\u8282\u7684\u53EF\u8BFB\u5199\u6570\u636E\u6BB5\u4E2D\uFF0C\u5F00\u59CB\u7684 0xe8 \u4E2A\u5B57\u8282\u53D6\u81EA.data \u8282\uFF0C\u540E\u9762\u7684 28 \u5B57\u8282\u662F\u672A\u521D\u59CB\u5316\u5168\u5C40\u53D8\u91CF\u6240\u5728\u533A\u57DF\u3002'], ['\u6839\u636E\u56FE 4.5 \u4E2D\u7684\u5185\u5BB9\u53EF\u77E5\uFF0C.data \u8282\u4E2D\u5168\u5C40\u53D8\u91CF\u7684\u521D\u59CB\u503C\u603B\u7684\u6570\u636E\u957F\u5EA6\u4E3A 0xe8\u3002\u56E0\u6B64\uFF0C\u865A\u62DF\u5730\u5740\u7A7A\u95F4\u4E2D\u957F\u5EA6\u4E3A 0x104 \u5B57\u8282\u7684\u53EF\u8BFB\u5199\u6570\u636E\u6BB5\u4E2D\uFF0C\u5F00\u59CB\u7684 0xe8 \u4E2A\u5B57\u8282\u53D6\u81EA.data \u8282\uFF0C\u540E\u9762\u7684 28 \u5B57\u8282\u662F\u672A\u521D\u59CB\u5316\u5168\u5C40\u53D8\u91CF\u6240\u5728\u533A\u57DF\u3002']),
    _templateObject49 = _taggedTemplateLiteral(['\uFF081\uFF09p.o\u2192libx.a\u2192liby.a\u2192p.o'], ['\uFF081\uFF09p.o\u2192libx.a\u2192liby.a\u2192p.o']),
    _templateObject50 = _taggedTemplateLiteral(['\uFF082\uFF09p.o\u2192libx.a\u2192liby.a \u540C\u65F6 liby.a\u2192libx.a'], ['\uFF082\uFF09p.o\u2192libx.a\u2192liby.a \u540C\u65F6 liby.a\u2192libx.a']),
    _templateObject51 = _taggedTemplateLiteral(['\uFF083\uFF09p.o\u2192libx.a\u2192liby.a\u2192libz.a \u540C\u65F6 liby.a\u2192libx.a\u2192libz.a'], ['\uFF083\uFF09p.o\u2192libx.a\u2192liby.a\u2192libz.a \u540C\u65F6 liby.a\u2192libx.a\u2192libz.a']),
    _templateObject52 = _taggedTemplateLiteral(['\uFF081\uFF09gcc-static-o p p.o libx.a liby.a p.o'], ['\uFF081\uFF09gcc-static-o p p.o libx.a liby.a p.o']),
    _templateObject53 = _taggedTemplateLiteral(['\uFF082\uFF09gcc-static-o p p.o libx.a liby.a libx.a'], ['\uFF082\uFF09gcc-static-o p p.o libx.a liby.a libx.a']),
    _templateObject54 = _taggedTemplateLiteral(['\uFF083\uFF09gcc-static-o p p.o libx.a liby.a libx.a libz.a'], ['\uFF083\uFF09gcc-static-o p p.o libx.a liby.a libx.a libz.a']),
    _templateObject55 = _taggedTemplateLiteral(['\u56FE 4.7 \u7ED9\u51FA\u4E86 main \u51FD\u6570\u6E90\u4EE3\u7801\u5BF9\u5E94\u7684 main.o \u4E2D.text \u8282\u548C.rel.text \u8282\u7684\u5185\u5BB9\uFF0C\u56FE\u4E2D\u663E\u793A\u5176.text \u8282\u4E2D\u6709\u4E00\u5904\u9700\u91CD\u5B9A\u4F4D\u3002\u5047\u5B9A\u94FE\u63A5\u540E main \u51FD\u6570\u4EE3\u7801\u8D77\u59CB\u5730\u5740\u662F 0x8048386\uFF0C\u7D27\u8DDF\u5728 main \u540E\u7684\u662F swap \u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u4E14\u9996\u5730\u5740\u6309 4 \u5B57\u8282\u8FB9\u754C\u5BF9\u9F50\u3002\u8981\u6C42\u6839\u636E\u5BF9\u56FE 4.7 \u7684\u5206\u6790\uFF0C\u6307\u51FA main.o \u7684.text \u8282\u4E2D\u9700\u91CD\u5B9A\u4F4D\u7684\u7B26\u53F7\u540D\u3001\u76F8\u5BF9\u4E8E.text \u8282\u8D77\u59CB\u4F4D\u7F6E\u7684\u4F4D\u79FB\u3001\u6240\u5728\u6307\u4EE4\u884C\u53F7\u3001\u91CD\u5B9A\u4F4D\u7C7B\u578B\u3001\u91CD\u5B9A\u4F4D\u524D\u7684\u5185\u5BB9\u3001\u91CD\u5B9A\u4F4D\u540E\u7684\u5185\u5BB9\uFF0C\u5E76\u7ED9\u51FA\u91CD\u5B9A\u4F4D\u503C\u7684\u8BA1\u7B97\u8FC7\u7A0B\u3002'], ['\u56FE 4.7 \u7ED9\u51FA\u4E86 main \u51FD\u6570\u6E90\u4EE3\u7801\u5BF9\u5E94\u7684 main.o \u4E2D.text \u8282\u548C.rel.text \u8282\u7684\u5185\u5BB9\uFF0C\u56FE\u4E2D\u663E\u793A\u5176.text \u8282\u4E2D\u6709\u4E00\u5904\u9700\u91CD\u5B9A\u4F4D\u3002\u5047\u5B9A\u94FE\u63A5\u540E main \u51FD\u6570\u4EE3\u7801\u8D77\u59CB\u5730\u5740\u662F 0x8048386\uFF0C\u7D27\u8DDF\u5728 main \u540E\u7684\u662F swap \u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u4E14\u9996\u5730\u5740\u6309 4 \u5B57\u8282\u8FB9\u754C\u5BF9\u9F50\u3002\u8981\u6C42\u6839\u636E\u5BF9\u56FE 4.7 \u7684\u5206\u6790\uFF0C\u6307\u51FA main.o \u7684.text \u8282\u4E2D\u9700\u91CD\u5B9A\u4F4D\u7684\u7B26\u53F7\u540D\u3001\u76F8\u5BF9\u4E8E.text \u8282\u8D77\u59CB\u4F4D\u7F6E\u7684\u4F4D\u79FB\u3001\u6240\u5728\u6307\u4EE4\u884C\u53F7\u3001\u91CD\u5B9A\u4F4D\u7C7B\u578B\u3001\u91CD\u5B9A\u4F4D\u524D\u7684\u5185\u5BB9\u3001\u91CD\u5B9A\u4F4D\u540E\u7684\u5185\u5BB9\uFF0C\u5E76\u7ED9\u51FA\u91CD\u5B9A\u4F4D\u503C\u7684\u8BA1\u7B97\u8FC7\u7A0B\u3002']),
    _templateObject56 = _taggedTemplateLiteral(['\u6839\u636E\u56FE 4.7 \u53EF\u77E5\uFF0Cmain.o \u7684.text \u8282\u4E2D\u53EA\u6709\u4E00\u4E2A\u7B26\u53F7\u9700\u8981\u91CD\u5B9A\u4F4D\uFF0C\u5B83\u5C31\u662F\u5728 main.c \u4E2D\u88AB\u5F15\u7528\u7684\u5168\u5C40\u7B26\u53F7 swap\uFF1B\u9700\u8981\u91CD\u5B9A\u4F4D\u7684\u662F\u56FE 4.7 \u4E2D\u7B2C 6 \u884C call \u6307\u4EE4\u4E2D\u7684\u504F\u79FB\u91CF\u5B57\u6BB5\uFF0C\u5176\u4F4D\u7F6E\u76F8\u5BF9\u4E8E.text \u8282\u8D77\u59CB\u4F4D\u7F6E\u4F4D\u79FB\u91CF r_offset \u4E3A 7\uFF0C\u6309\u7167 PC \u76F8\u5BF9\u5730\u5740\u65B9\u5F0F\uFF08R_386_PC32\uFF09\u8FDB\u884C\u91CD\u5B9A\u4F4D\u3002'], ['\u6839\u636E\u56FE 4.7 \u53EF\u77E5\uFF0Cmain.o \u7684.text \u8282\u4E2D\u53EA\u6709\u4E00\u4E2A\u7B26\u53F7\u9700\u8981\u91CD\u5B9A\u4F4D\uFF0C\u5B83\u5C31\u662F\u5728 main.c \u4E2D\u88AB\u5F15\u7528\u7684\u5168\u5C40\u7B26\u53F7 swap\uFF1B\u9700\u8981\u91CD\u5B9A\u4F4D\u7684\u662F\u56FE 4.7 \u4E2D\u7B2C 6 \u884C call \u6307\u4EE4\u4E2D\u7684\u504F\u79FB\u91CF\u5B57\u6BB5\uFF0C\u5176\u4F4D\u7F6E\u76F8\u5BF9\u4E8E.text \u8282\u8D77\u59CB\u4F4D\u7F6E\u4F4D\u79FB\u91CF r_offset \u4E3A 7\uFF0C\u6309\u7167 PC \u76F8\u5BF9\u5730\u5740\u65B9\u5F0F\uFF08R_386_PC32\uFF09\u8FDB\u884C\u91CD\u5B9A\u4F4D\u3002']),
    _templateObject57 = _taggedTemplateLiteral(['\u91CD\u5B9A\u4F4D\u524D\uFF0C\u5728\u4F4D\u79FB\u91CF 7\u30018\u30019\u3001a \u5904\u7684\u5185\u5BB9\u5206\u522B\u4E3A fc\u3001ff\u3001ff\u3001ff\uFF0C\u56E0\u6B64\u521D\u59CB\u503C init \u7684\u673A\u5668\u6570\u4E3A 0xfffffffc\uFF0C\u503C\u4E3A-4\u3002\u91CD\u5B9A\u4F4D\u540E\uFF0C\u5E94\u8BE5\u4F7F call \u6307\u4EE4\u7684\u76EE\u6807\u8F6C\u79FB\u5730\u5740\u6307\u5411 swap \u51FD\u6570\u7684\u8D77\u59CB\u5730\u5740\u3002'], ['\u91CD\u5B9A\u4F4D\u524D\uFF0C\u5728\u4F4D\u79FB\u91CF 7\u30018\u30019\u3001a \u5904\u7684\u5185\u5BB9\u5206\u522B\u4E3A fc\u3001ff\u3001ff\u3001ff\uFF0C\u56E0\u6B64\u521D\u59CB\u503C init \u7684\u673A\u5668\u6570\u4E3A 0xfffffffc\uFF0C\u503C\u4E3A-4\u3002\u91CD\u5B9A\u4F4D\u540E\uFF0C\u5E94\u8BE5\u4F7F call \u6307\u4EE4\u7684\u76EE\u6807\u8F6C\u79FB\u5730\u5740\u6307\u5411 swap \u51FD\u6570\u7684\u8D77\u59CB\u5730\u5740\u3002']),
    _templateObject58 = _taggedTemplateLiteral(['main \u51FD\u6570\u603B\u5171\u5360 12H=18 \u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5176\u8D77\u59CB\u5730\u5740 ADDR\uFF08.text\uFF09\u4E3A 0x8048386\uFF0C\u56E0\u6B64 main \u51FD\u6570\u6700\u540E\u4E00\u6761\u6307\u4EE4\u5730\u5740\u4E3A\uFF1A0x8048386+0x12=0x8048398\u3002\u56E0\u4E3A swap \u51FD\u6570\u4EE3\u7801\u7D27\u8DDF\u5728 main \u540E\u4E14\u9996\u5730\u5740\u6309 4 \u5B57\u8282\u8FB9\u754C\u5BF9\u9F50\uFF0C\u6545 swap \u7684\u8D77\u59CB\u5730\u5740 ADDR\uFF08swap\uFF09\u5C31\u662F 0x8048398\u3002'], ['main \u51FD\u6570\u603B\u5171\u5360 12H=18 \u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5176\u8D77\u59CB\u5730\u5740 ADDR\uFF08.text\uFF09\u4E3A 0x8048386\uFF0C\u56E0\u6B64 main \u51FD\u6570\u6700\u540E\u4E00\u6761\u6307\u4EE4\u5730\u5740\u4E3A\uFF1A0x8048386+0x12=0x8048398\u3002\u56E0\u4E3A swap \u51FD\u6570\u4EE3\u7801\u7D27\u8DDF\u5728 main \u540E\u4E14\u9996\u5730\u5740\u6309 4 \u5B57\u8282\u8FB9\u754C\u5BF9\u9F50\uFF0C\u6545 swap \u7684\u8D77\u59CB\u5730\u5740 ADDR\uFF08swap\uFF09\u5C31\u662F 0x8048398\u3002']),
    _templateObject59 = _taggedTemplateLiteral(['\u91CD\u5B9A\u4F4D\u503C\u7684\u8BA1\u7B97\u516C\u5F0F\u4E3A'], ['\u91CD\u5B9A\u4F4D\u503C\u7684\u8BA1\u7B97\u516C\u5F0F\u4E3A']),
    _templateObject60 = _taggedTemplateLiteral(['ADDR\uFF08swap\uFF09-\uFF08\uFF08ADDR\uFF08.text\uFF09+r_offset\uFF09-init\uFF09=0x8048398-\uFF08\uFF080x8048386+7\uFF09-\uFF08-4\uFF09\uFF09=7\u3002'], ['ADDR\uFF08swap\uFF09-\uFF08\uFF08ADDR\uFF08.text\uFF09+r_offset\uFF09-init\uFF09=0x8048398-\uFF08\uFF080x8048386+7\uFF09-\uFF08-4\uFF09\uFF09=7\u3002']),
    _templateObject61 = _taggedTemplateLiteral(['\u56E0\u6B64\uFF0C\u91CD\u5B9A\u4F4D\u540E\uFF0C\u5728\u4F4D\u79FB\u91CF 7\u30018\u30019\u3001a \u5904\u7684 call \u6307\u4EE4\u7684\u504F\u79FB\u91CF\u5B57\u6BB5\u4E3A 07000000\u3002'], ['\u56E0\u6B64\uFF0C\u91CD\u5B9A\u4F4D\u540E\uFF0C\u5728\u4F4D\u79FB\u91CF 7\u30018\u30019\u3001a \u5904\u7684 call \u6307\u4EE4\u7684\u504F\u79FB\u91CF\u5B57\u6BB5\u4E3A 07000000\u3002']),
    _templateObject62 = _taggedTemplateLiteral(['\u5047\u5B9A\u94FE\u63A5\u540E\u751F\u6210\u7684\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u4E2D buf \u548C bufp0 \u7684\u5B58\u50A8\u5730\u5740\u5206\u522B\u662F 0x80495c8 \u548C 0x80495d0\uFF0Cbufp1 \u7684\u5B58\u50A8\u5730\u5740\u4F4D\u4E8E.bss \u8282\u7684\u5F00\u59CB\uFF0C\u4E3A 0x8049620\u3002\u6839\u636E\u5BF9\u56FE 4.8 \u7684\u5206\u6790\uFF0C\u4EFF\u7167\u4F8B\u5B50\u586B\u5199\u8868 4.5\uFF0C\u4EE5\u6307\u51FA\u5404\u4E2A\u91CD\u5B9A\u4F4D\u7684\u7B26\u53F7\u540D\u3001\u76F8\u5BF9\u4E8E.text \u8282\u8D77\u59CB\u4F4D\u7F6E\u7684\u4F4D\u79FB\u3001\u6240\u5728\u6307\u4EE4\u884C\u53F7\u3001\u91CD\u5B9A\u4F4D\u7C7B\u578B\u3001\u91CD\u5B9A\u4F4D\u524D\u7684\u5185\u5BB9\u4EE5\u53CA\u91CD\u5B9A\u4F4D\u540E\u7684\u5185\u5BB9\u3002'], ['\u5047\u5B9A\u94FE\u63A5\u540E\u751F\u6210\u7684\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6\u4E2D buf \u548C bufp0 \u7684\u5B58\u50A8\u5730\u5740\u5206\u522B\u662F 0x80495c8 \u548C 0x80495d0\uFF0Cbufp1 \u7684\u5B58\u50A8\u5730\u5740\u4F4D\u4E8E.bss \u8282\u7684\u5F00\u59CB\uFF0C\u4E3A 0x8049620\u3002\u6839\u636E\u5BF9\u56FE 4.8 \u7684\u5206\u6790\uFF0C\u4EFF\u7167\u4F8B\u5B50\u586B\u5199\u8868 4.5\uFF0C\u4EE5\u6307\u51FA\u5404\u4E2A\u91CD\u5B9A\u4F4D\u7684\u7B26\u53F7\u540D\u3001\u76F8\u5BF9\u4E8E.text \u8282\u8D77\u59CB\u4F4D\u7F6E\u7684\u4F4D\u79FB\u3001\u6240\u5728\u6307\u4EE4\u884C\u53F7\u3001\u91CD\u5B9A\u4F4D\u7C7B\u578B\u3001\u91CD\u5B9A\u4F4D\u524D\u7684\u5185\u5BB9\u4EE5\u53CA\u91CD\u5B9A\u4F4D\u540E\u7684\u5185\u5BB9\u3002']),
    _templateObject63 = _taggedTemplateLiteral(['\u6839\u636E\u9898 9 \u4E2D\u7ED9\u51FA\u7684\u6761\u4EF6\uFF0C\u586B\u8868 4.5 \u540E\uFF0C\u5F97\u5230\u8868 4.6\u3002'], ['\u6839\u636E\u9898 9 \u4E2D\u7ED9\u51FA\u7684\u6761\u4EF6\uFF0C\u586B\u8868 4.5 \u540E\uFF0C\u5F97\u5230\u8868 4.6\u3002']);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

var _ = __webpack_require__(/*! ./4-6-1.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-1.jpg");

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(/*! ./4-6-2.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-2.jpg");

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(/*! ./4-6-3.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-3.jpg");

var _6 = _interopRequireDefault(_5);

var _7 = __webpack_require__(/*! ./4-6-4.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-4.jpg");

var _8 = _interopRequireDefault(_7);

var _9 = __webpack_require__(/*! ./4-6-5.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-5.jpg");

var _10 = _interopRequireDefault(_9);

var _11 = __webpack_require__(/*! ./4-6-6.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-6.jpg");

var _12 = _interopRequireDefault(_11);

var _13 = __webpack_require__(/*! ./4-6-7.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-7.jpg");

var _14 = _interopRequireDefault(_13);

var _15 = __webpack_require__(/*! ./4-6-8.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-8.jpg");

var _16 = _interopRequireDefault(_15);

var _17 = __webpack_require__(/*! ./4-6-9.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-9.jpg");

var _18 = _interopRequireDefault(_17);

var _19 = __webpack_require__(/*! ./4-6-10.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-10.jpg");

var _20 = _interopRequireDefault(_19);

var _21 = __webpack_require__(/*! ./4-6-11.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-11.jpg");

var _22 = _interopRequireDefault(_21);

var _23 = __webpack_require__(/*! ./4-6-12.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-12.jpg");

var _24 = _interopRequireDefault(_23);

var _25 = __webpack_require__(/*! ./4-6-13.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-13.jpg");

var _26 = _interopRequireDefault(_25);

var _27 = __webpack_require__(/*! ./4-6-14.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-14.jpg");

var _28 = _interopRequireDefault(_27);

var _29 = __webpack_require__(/*! ./4-6-15.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-15.jpg");

var _30 = _interopRequireDefault(_29);

var _31 = __webpack_require__(/*! ./4-6-16.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-16.jpg");

var _32 = _interopRequireDefault(_31);

var _33 = __webpack_require__(/*! ./4-6-17.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-17.jpg");

var _34 = _interopRequireDefault(_33);

var _35 = __webpack_require__(/*! ./4-6-18.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-18.jpg");

var _36 = _interopRequireDefault(_35);

var _37 = __webpack_require__(/*! ./4-6-19.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-19.jpg");

var _38 = _interopRequireDefault(_37);

var _39 = __webpack_require__(/*! ./4-6-20.jpg */ "./src/pages/ComputerOrganization/Chapter4/4-6-20.jpg");

var _40 = _interopRequireDefault(_39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = '4.6　分析应用题';
var page = (0, _write.section)(title)((0, _write.section)('1.假设一个 C 语言程序有两个源文件：main.c 和 test.c，它们的内容如图 4.1 所示。')((0, _write.img)(_2.default)('图 4.1　题 1 用图'), (0, _write.p)(_templateObject), (0, _write.img)(_4.default)('表 4.1　题 1 用表 1'), (0, _write.section)('分析解答')((0, _write.p)(_templateObject2), (0, _write.img)(_6.default)('表 4.2　题 1 用表 2'))), (0, _write.section)('2.假设一个 C 语言程序有两个源文件：main.c 和 swap.c，其中，main.c 和 swap.c 的内容如下。')((0, _write.precode)('main.c\uFF1A\n 1\u3000extern void swap(void);\n 2\u3000int buf[2] = {1, 2};\n 3\u3000int main() {\n 4\u3000    swap();\n 5\u3000    return 0;\n 6\u3000}\nswap.c\uFF1A\n 1\u3000extern int buf[];\n 2\u3000int *bufp0 = &buf[0];\n 3\u3000static int *bufp1;\n 4\u3000static void incr() {\n 5\u3000    static int count=0;\n 6\u3000    count++;\n 7\u3000}\n 8\n 9\u3000void swap() {\n10\u3000    int temp;\n11\u3000    incr();\n12\u3000    bufp1=&bufp[1];\n13\u3000    temp=*bufp0;\n14\u3000    *bufp0=*bufp1;\n15\u3000    *bufp1=temp;\n16\u3000}')(), (0, _write.p)(_templateObject3), (0, _write.img)(_8.default)('表 4.3　题 2 用表 1'), (0, _write.section)('分析解答')((0, _write.p)(_templateObject4), (0, _write.p)(_templateObject5), (0, _write.img)(_10.default)())), (0, _write.section)('3.假设一个 C 语言程序有两个源文件：main.c 和 proc1.c，它们的内容如图 4.2 所示。')((0, _write.img)(_12.default)('图 4.2　题 3 用图'), (0, _write.p)(_templateObject6), (0, _write.p)(_templateObject7), (0, _write.p)(_templateObject8), (0, _write.p)(_templateObject9), (0, _write.p)(_templateObject10), (0, _write.section)('分析解答')((0, _write.p)(_templateObject11), (0, _write.p)(_templateObject12), (0, _write.p)(_templateObject13), (0, _write.img)(_14.default)('图 4.3　执行 proc1（）函数前、后 x 和 z 所在存储区中的内容 1'), (0, _write.p)(_templateObject14), (0, _write.p)(_templateObject15), (0, _write.img)(_16.default)('图 4.4　执行 proc1（）函数前、后 x 和 z 所在存储区中的内容 2'), (0, _write.p)(_templateObject16))), (0, _write.section)('4.以下每一小题给出了两个源程序文件，它们被分别编译生成可重定位目标模块 m1.o 和 m2.o。在模块 mj 中对符号 x 的任意引用与模块 mi 中定义的符号 x 关联记为 REF（mj.x）→DEF（mi.x）。请在下列空格处填写模块名和符号名以说明给出的引用符号所关联的定义符号。若发生链接错误，则说明其原因；若从多个定义符号中任选，则给出全部可能的定义符号，若是局部变量，则说明不存在关联。')((0, _write.img)(_18.default)(), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18), (0, _write.p)(_templateObject19), (0, _write.p)(_templateObject20), (0, _write.img)(_20.default)(), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18), (0, _write.p)(_templateObject21), (0, _write.img)(_22.default)(), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18), (0, _write.p)(_templateObject22), (0, _write.p)(_templateObject23), (0, _write.p)(_templateObject24), (0, _write.img)(_24.default)(), (0, _write.p)(_templateObject25), (0, _write.p)(_templateObject26), (0, _write.p)(_templateObject27), (0, _write.p)(_templateObject28), (0, _write.section)('分析解答')((0, _write.p)(_templateObject29), (0, _write.p)(_templateObject30), (0, _write.p)(_templateObject31), (0, _write.p)(_templateObject32), (0, _write.p)(_templateObject33), (0, _write.p)(_templateObject34), (0, _write.p)(_templateObject35), (0, _write.p)(_templateObject30), (0, _write.p)(_templateObject36), (0, _write.p)(_templateObject37), (0, _write.p)(_templateObject38), (0, _write.p)(_templateObject39), (0, _write.p)(_templateObject40), (0, _write.p)(_templateObject41), (0, _write.p)(_templateObject42), (0, _write.p)(_templateObject43), (0, _write.p)(_templateObject44))), (0, _write.section)('5.以下由两个目标模块 m1 和 m2 组成的程序，经编译、汇编、链接后在计算机上执行，结果发现即使 p1 函数中没有对数组变量 main 进行初始化，最终也能打印出字符串「0x5589\n」。为什么？要求解释原因。')((0, _write.img)(_26.default)(), (0, _write.img)(_28.default)(), (0, _write.section)('分析解答')((0, _write.p)(_templateObject45), (0, _write.precode)('1\u3000Disassembly of section .text:\n2\u300000000000 <main>:\n3\u3000    0:    55          push   %ebp\n4\u3000    1:    89 e5     mov   %esp,%ebp')(), (0, _write.p)(_templateObject46))), (0, _write.section)('6.图 4.5 中给出了用 OBJDUMP 显示的某个可执行目标文件的程序头表（段头表）的部分信息，其中，可读写数据段（Read/write data segment）的信息表明，该数据段对应虚拟存储空间中起始地址为 0x8049448、长度为 0x104 个字节的存储区，其数据来自可执行文件中偏移地址 0x448 开始的 0xe8 个字节。这里，可执行目标文件中的数据长度和虚拟地址空间中的存储区大小之间相差了 28 字节。请解释可能的原因。')((0, _write.img)(_30.default)('图 4.5　某可执行目标文件程序头表的部分内容'), (0, _write.section)('分析解答')((0, _write.p)(_templateObject47), (0, _write.p)(_templateObject48))), (0, _write.section)('7.假定 a 和 b 是可重定位目标文件或静态库文件，a→b 表示 b 中定义了一个被 a 引用的符号。对于以下每一小题出现的情况，给出一个最短命令行（含有最少数量的可重定位目标文件或静态库文件参数），使得链接器能够解析所有符号引用。')((0, _write.p)(_templateObject49), (0, _write.p)(_templateObject50), (0, _write.p)(_templateObject51), (0, _write.section)('分析解答')((0, _write.p)(_templateObject52), (0, _write.p)(_templateObject53), (0, _write.p)(_templateObject54))), (0, _write.section)('8.已知两个 C 语言源程序文件 main.c 和 swap.c 的内容如图 4.6 所示。')((0, _write.img)(_32.default)('图 4.6　main.c 和 swap.c 文件中的内容'), (0, _write.p)(_templateObject55), (0, _write.img)(_34.default)('图 4.7　main.o 中.text 节和.rel.text 节的内容'), (0, _write.section)('分析解答')((0, _write.p)(_templateObject56), (0, _write.p)(_templateObject57), (0, _write.p)(_templateObject58), (0, _write.p)(_templateObject59), (0, _write.p)(_templateObject60), (0, _write.p)(_templateObject61))), (0, _write.section)('9.图 4.8 给出了图 4.6b 所示的 swap 源代码对应的 swap.o 文件中.text 节和.rel.text 节的内容，图中显示.text 节中共有 6 处需重定位。')((0, _write.img)(_36.default)('图 4.8　swap.o 中.text 节和.rel.text 节的内容'), (0, _write.p)(_templateObject62), (0, _write.img)(_38.default)('表 4.5　题 9 用表 1'), (0, _write.section)('分析解答')((0, _write.p)(_templateObject63), (0, _write.img)(_40.default)('表 4.6　题 9 用表 2')))).elem;

window.outer.views['/ComputerOrganization/Chapter4/6'] = { page: page, title: title };console.log(title);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzQtNi0xLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTEwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTExLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTEyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTEzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTE0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTE1LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTE2LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTE3LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTE4LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTE5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTIuanBnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC80LTYtMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC80LTYtMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzQtNi00LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTUuanBnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC80LTYtNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzQtNi03LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNC02LTguanBnIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC80LTYtOS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzYucGFnZS50cyJdLCJuYW1lcyI6WyJ0aXRsZSIsInBhZ2UiLCJwaWM0XzZfMSIsInAiLCJwaWM0XzZfMiIsInBpYzRfNl8zIiwicGljNF82XzQiLCJwaWM0XzZfNSIsInBpYzRfNl82IiwicGljNF82XzciLCJwaWM0XzZfOCIsInBpYzRfNl85IiwicGljNF82XzEwIiwicGljNF82XzExIiwicGljNF82XzEyIiwicGljNF82XzEzIiwicGljNF82XzE0IiwicGljNF82XzE1IiwicGljNF82XzE2IiwicGljNF82XzE3IiwicGljNF82XzE4IiwicGljNF82XzE5IiwicGljNF82XzIwIiwiZWxlbSIsIndpbmRvdyIsIm91dGVyIiwidmlld3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFlLG9GQUF1Qix1QkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQTdEO0FBQWUsb0ZBQXVCLHdCQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBOUQ7QUFBZSxvRkFBdUIsd0JBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLG9GQUF1Qix3QkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUsb0ZBQXVCLHdCQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBOUQ7QUFBZSxvRkFBdUIsd0JBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLG9GQUF1Qix3QkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUsb0ZBQXVCLHdCQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBOUQ7QUFBZSxvRkFBdUIsd0JBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0E5RDtBQUFlLG9GQUF1Qix3QkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUsb0ZBQXVCLHdCQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBOUQ7QUFBZSxvRkFBdUIsdUJBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0E3RDtBQUFlLG9GQUF1Qix3QkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUsb0ZBQXVCLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxvRkFBdUIsdUJBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0E3RDtBQUFlLG9GQUF1Qix1QkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQTdEO0FBQWUsb0ZBQXVCLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxvRkFBdUIsdUJBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0E3RDtBQUFlLG9GQUF1Qix1QkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQTdEO0FBQWUsb0ZBQXVCLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0Q7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQSxRQUFRLFdBQWQ7QUFDQSxJQUFNQyxPQUFPLG9CQUFRRCxLQUFSLEVBQWUsb0JBQVEscURBQVIsRUFBK0QsZ0JBQUlFLFVBQUosRUFBYyxjQUFkLENBQS9ELE1BQThGQyxRQUE5RixvQkFBc1EsZ0JBQUlDLFVBQUosRUFBYyxnQkFBZCxDQUF0USxFQUF1UyxvQkFBUSxNQUFSLE1BQWdCRCxRQUFoQixxQkFBb0QsZ0JBQUlFLFVBQUosRUFBYyxnQkFBZCxDQUFwRCxDQUF2UyxDQUFmLEVBQTZZLG9CQUFRLCtEQUFSLEVBQXlFLG9qQkFBekUsTUF1QmhaRixRQXZCZ1oscUJBdUJ2TyxnQkFBSUcsVUFBSixFQUFjLGdCQUFkLENBdkJ1TyxFQXVCdE0sb0JBQVEsTUFBUixNQUFnQkgsUUFBaEIseUJBQW9EQSxRQUFwRCxxQkFBd0UsZ0JBQUlJLFdBQUosR0FBeEUsQ0F2QnNNLENBQTdZLEVBdUJrUyxvQkFBUSxzREFBUixFQUFnRSxnQkFBSUMsV0FBSixFQUFjLGNBQWQsQ0FBaEUsTUFBK0ZMLFFBQS9GLHlCQUE0R0EsUUFBNUcseUJBQXVLQSxRQUF2Syx5QkFBNE9BLFFBQTVPLHlCQUE4UkEsUUFBOVIsc0JBQXdXLG9CQUFRLE1BQVIsTUFBZ0JBLFFBQWhCLDBCQUF3U0EsUUFBeFMsMEJBQWdaQSxRQUFoWixzQkFBdW5CLGdCQUFJTSxXQUFKLEVBQWMseUNBQWQsQ0FBdm5CLE1BQWlyQk4sUUFBanJCLDBCQUEyc0JBLFFBQTNzQixzQkFBczRCLGdCQUFJTyxXQUFKLEVBQWMseUNBQWQsQ0FBdDRCLE1BQWc4QlAsUUFBaDhCLHFCQUF4VyxDQXZCbFMsRUF1Qmt2RCxvQkFBUSwwTUFBUixFQUFvTixnQkFBSVEsV0FBSixHQUFwTixNQUFxT1IsUUFBck8sMEJBQXlRQSxRQUF6USwwQkFBNlNBLFFBQTdTLDBCQUE4VUEsUUFBOVUsc0JBQStXLGdCQUFJUyxXQUFKLEdBQS9XLE1BQWlZVCxRQUFqWSwwQkFBcWFBLFFBQXJhLDBCQUF5Y0EsUUFBemMsc0JBQTBlLGdCQUFJVSxXQUFKLEdBQTFlLE1BQTRmVixRQUE1ZiwwQkFBZ2lCQSxRQUFoaUIsMEJBQW9rQkEsUUFBcGtCLDBCQUFzbUJBLFFBQXRtQiwwQkFBdW9CQSxRQUF2b0Isc0JBQXdxQixnQkFBSVcsV0FBSixHQUF4cUIsTUFBMHJCWCxRQUExckIsMEJBQTJ0QkEsUUFBM3RCLDBCQUE0dkJBLFFBQTV2QiwwQkFBNnhCQSxRQUE3eEIsc0JBQTh6QixvQkFBUSxNQUFSLE1BQWdCQSxRQUFoQiwwQkFBcURBLFFBQXJELDBCQUE2RkEsUUFBN0YsMEJBQTZIQSxRQUE3SCwwQkFBdUpBLFFBQXZKLDBCQUF5TEEsUUFBekwsMEJBQWlPQSxRQUFqTywwQkFBaVJBLFFBQWpSLDBCQUF5VEEsUUFBelQsMEJBQXlWQSxRQUF6ViwwQkFBcVhBLFFBQXJYLDBCQUE4WkEsUUFBOVosMEJBQXdiQSxRQUF4YiwwQkFBMmVBLFFBQTNlLDBCQUFxZ0JBLFFBQXJnQiwwQkFBdWlCQSxRQUF2aUIsMEJBQXlrQkEsUUFBemtCLHFCQUE5ekIsQ0F2Qmx2RCxFQXVCaXFHLG9CQUFRLDhHQUFSLEVBQXdILGdCQUFJWSxXQUFKLEdBQXhILEVBQTBJLGdCQUFJQyxXQUFKLEdBQTFJLEVBQTRKLG9CQUFRLE1BQVIsTUFBZ0JiLFFBQWhCLHNCQUEwSyw0S0FBMUssTUFHL3hHQSxRQUgreEcscUJBQTVKLENBdkJqcUcsRUEwQnFLLG9CQUFRLGlPQUFSLEVBQTJPLGdCQUFJYyxXQUFKLEVBQWUseUJBQWYsQ0FBM08sRUFBc1Isb0JBQVEsTUFBUixNQUFnQmQsUUFBaEIsMEJBQStNQSxRQUEvTSxxQkFBdFIsQ0ExQnJLLEVBMEIwd0Isb0JBQVEsdUhBQVIsTUFBaUlBLFFBQWpJLDBCQUErSkEsUUFBL0osMEJBQTBNQSxRQUExTSxzQkFBbVEsb0JBQVEsTUFBUixNQUFnQkEsUUFBaEIsMEJBQTZEQSxRQUE3RCwwQkFBNkdBLFFBQTdHLHFCQUFuUSxDQTFCMXdCLEVBMEJtckMsb0JBQVEsZ0RBQVIsRUFBMEQsZ0JBQUllLFdBQUosRUFBZSw4QkFBZixDQUExRCxNQUEwR2YsUUFBMUcsc0JBQXlXLGdCQUFJZ0IsV0FBSixFQUFlLHNDQUFmLENBQXpXLEVBQWlhLG9CQUFRLE1BQVIsTUFBZ0JoQixRQUFoQiwwQkFBMkxBLFFBQTNMLDBCQUErU0EsUUFBL1MsMEJBQWtlQSxRQUFsZSwwQkFBa2ZBLFFBQWxmLDBCQUFra0JBLFFBQWxrQixxQkFBamEsQ0ExQm5yQyxFQTBCOHNFLG9CQUFRLDRGQUFSLEVBQXNHLGdCQUFJaUIsV0FBSixFQUFlLHNDQUFmLENBQXRHLE1BQThKakIsUUFBOUosc0JBQXlWLGdCQUFJa0IsV0FBSixFQUFlLGdCQUFmLENBQXpWLEVBQTJYLG9CQUFRLE1BQVIsTUFBZ0JsQixRQUFoQixzQkFBb0QsZ0JBQUltQixXQUFKLEVBQWUsZ0JBQWYsQ0FBcEQsQ0FBM1gsQ0ExQjlzRSxFQTBCaXFGQyxJQTFCOXFGOztBQTRCTUMsT0FBT0MsS0FBUCxDQUFhQyxLQUFiLENBQW1CLGtDQUFuQixJQUF1RCxFQUFDekIsVUFBRCxFQUFNRCxZQUFOLEVBQXZELENBQW9FMkIsUUFBUUMsR0FBUixDQUFZNUIsS0FBWixFIiwiZmlsZSI6IkNvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNlwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BhZ2VzL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzYucGFnZS50c1wiLFwidmVuZG9yc1wiLFwiY29tbW9uXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvZmYzLTQtNi0xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nLzZhNy00LTYtMTAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvZTcxLTQtNi0xMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy9mZTctNC02LTEyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL2I2MS00LTYtMTMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvNzUzLTQtNi0xNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy8yY2MtNC02LTE1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL2E5Yi00LTYtMTYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvODJiLTQtNi0xNy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy81MzMtNC02LTE4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nLzA0Ny00LTYtMTkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvYmIyLTQtNi0yLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL2Y2ZC00LTYtMjAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvZWJlLTQtNi0zLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL2I4My00LTYtNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy9hZTEtNC02LTUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvODNkLTQtNi02LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL2Y0NC00LTYtNy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy85N2ItNC02LTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvYTk1LTQtNi05LmpwZ1wiOyIsImltcG9ydCB7IHAsIHNlY3Rpb24sIHByZWNvZGUsIGltZyB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy9Ad3JpdGUnO1xuaW1wb3J0IHBpYzRfNl8xIGZyb20gJy4vNC02LTEuanBnJztcbmltcG9ydCBwaWM0XzZfMiBmcm9tICcuLzQtNi0yLmpwZyc7XG5pbXBvcnQgcGljNF82XzMgZnJvbSAnLi80LTYtMy5qcGcnO1xuaW1wb3J0IHBpYzRfNl80IGZyb20gJy4vNC02LTQuanBnJztcbmltcG9ydCBwaWM0XzZfNSBmcm9tICcuLzQtNi01LmpwZyc7XG5pbXBvcnQgcGljNF82XzYgZnJvbSAnLi80LTYtNi5qcGcnO1xuaW1wb3J0IHBpYzRfNl83IGZyb20gJy4vNC02LTcuanBnJztcbmltcG9ydCBwaWM0XzZfOCBmcm9tICcuLzQtNi04LmpwZyc7XG5pbXBvcnQgcGljNF82XzkgZnJvbSAnLi80LTYtOS5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xMCBmcm9tICcuLzQtNi0xMC5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xMSBmcm9tICcuLzQtNi0xMS5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xMiBmcm9tICcuLzQtNi0xMi5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xMyBmcm9tICcuLzQtNi0xMy5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xNCBmcm9tICcuLzQtNi0xNC5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xNSBmcm9tICcuLzQtNi0xNS5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xNiBmcm9tICcuLzQtNi0xNi5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xNyBmcm9tICcuLzQtNi0xNy5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xOCBmcm9tICcuLzQtNi0xOC5qcGcnO1xuaW1wb3J0IHBpYzRfNl8xOSBmcm9tICcuLzQtNi0xOS5qcGcnO1xuaW1wb3J0IHBpYzRfNl8yMCBmcm9tICcuLzQtNi0yMC5qcGcnO1xuY29uc3QgdGl0bGUgPSAnNC4244CA5YiG5p6Q5bqU55So6aKYJztcbmNvbnN0IHBhZ2UgPSBzZWN0aW9uKHRpdGxlKShzZWN0aW9uKCcxLuWBh+iuvuS4gOS4qiBDIOivreiogOeoi+W6j+acieS4pOS4qua6kOaWh+S7tu+8mm1haW4uYyDlkowgdGVzdC5j77yM5a6D5Lus55qE5YaF5a655aaC5Zu+IDQuMSDmiYDnpLrjgIInKShpbWcocGljNF82XzEpKCflm74gNC4x44CA6aKYIDEg55So5Zu+JyksIHAgYOWvueS6jue8luivkeeUn+aIkOeahOWPr+mHjeWumuS9jeebruagh+aWh+S7tiB0ZXN0Lm/vvIzloavlhpnooaggNC4xIOS4reWQhOespuWPt+eahOaDheWGte+8jOivtOaYjuavj+S4quespuWPt+aYr+WQpuWHuueOsOWcqCB0ZXN0Lm8g55qE56ym5Y+36KGo77yILnN5bXRhYiDoioLvvInkuK3vvIzlpoLmnpzmmK/vvIzlrprkuYnor6XnrKblj7fnmoTmqKHlnZfmmK8gbWFpbi5vIOi/mOaYryB0ZXN0Lm/vvJ/or6XnrKblj7fnmoTnsbvlnovmmK/lhajlsYDjgIHlpJbpg6jvvIzov5jmmK/mnKzlnLDnrKblj7fvvJ/or6XnrKblj7flh7rnjrDlnKjnm7jlupTlrprkuYnmqKHlnZfnmoTlk6rkuKroioLvvIgudGV4dOOAgS5kYXRhIOaIli5ic3PvvInvvJ9gLCBpbWcocGljNF82XzIpKCfooaggNC4x44CA6aKYIDEg55So6KGoIDEnKSwgc2VjdGlvbign5YiG5p6Q6Kej562UJykocCBg5qC55o2u6aKYIDEg5Lit57uZ5Ye655qE5p2h5Lu277yM5aGr6KGoIDQuMSDlkI7vvIzlvpfliLDooaggNC4y44CCYCwgaW1nKHBpYzRfNl8zKSgn6KGoIDQuMuOAgOmimCAxIOeUqOihqCAyJykpKSwgc2VjdGlvbignMi7lgYforr7kuIDkuKogQyDor63oqIDnqIvluo/mnInkuKTkuKrmupDmlofku7bvvJptYWluLmMg5ZKMIHN3YXAuY++8jOWFtuS4re+8jG1haW4uYyDlkowgc3dhcC5jIOeahOWGheWuueWmguS4i+OAgicpKHByZWNvZGUoYG1haW4uY++8mlxuIDHjgIBleHRlcm4gdm9pZCBzd2FwKHZvaWQpO1xuIDLjgIBpbnQgYnVmWzJdID0gezEsIDJ9O1xuIDPjgIBpbnQgbWFpbigpIHtcbiA044CAICAgIHN3YXAoKTtcbiA144CAICAgIHJldHVybiAwO1xuIDbjgIB9XG5zd2FwLmPvvJpcbiAx44CAZXh0ZXJuIGludCBidWZbXTtcbiAy44CAaW50ICpidWZwMCA9ICZidWZbMF07XG4gM+OAgHN0YXRpYyBpbnQgKmJ1ZnAxO1xuIDTjgIBzdGF0aWMgdm9pZCBpbmNyKCkge1xuIDXjgIAgICAgc3RhdGljIGludCBjb3VudD0wO1xuIDbjgIAgICAgY291bnQrKztcbiA344CAfVxuIDhcbiA544CAdm9pZCBzd2FwKCkge1xuMTDjgIAgICAgaW50IHRlbXA7XG4xMeOAgCAgICBpbmNyKCk7XG4xMuOAgCAgICBidWZwMT0mYnVmcFsxXTtcbjEz44CAICAgIHRlbXA9KmJ1ZnAwO1xuMTTjgIAgICAgKmJ1ZnAwPSpidWZwMTtcbjE144CAICAgICpidWZwMT10ZW1wO1xuMTbjgIB9YCkoKSwgcCBg5a+55LqO57yW6K+R55Sf5oiQ55qE5Y+v6YeN5a6a5L2N55uu5qCH5paH5Lu2IHN3YXAub++8jOWhq+WGmeihqCA0LjMg5Lit5ZCE56ym5Y+355qE5oOF5Ya177yM6K+05piO5q+P5Liq56ym5Y+35piv5ZCm5Ye6546w5ZyoIHN3YXAubyDnmoTnrKblj7fooajvvIguc3ltdGFiIOiKgu+8ieS4re+8jOWmguaenOaYr+eahOivne+8jOWumuS5ieivpeespuWPt+eahOaooeWdl+aYryBtYWluLm8g6L+Y5pivIHN3YXAub+OAgeivpeespuWPt+eahOexu+Wei+aYr+WFqOWxgOOAgeWklumDqOi/mOaYr+acrOWcsOespuWPt+OAgeivpeespuWPt+WHuueOsOWcqOebuOW6lOWumuS5ieaooeWdl+eahOWTquS4quiKgu+8iC50ZXh044CBLmRhdGEg5oiWLmJzc++8ieOAgmAsIGltZyhwaWM0XzZfNCkoJ+ihqCA0LjPjgIDpopggMiDnlKjooaggMScpLCBzZWN0aW9uKCfliIbmnpDop6PnrZQnKShwIGDmoLnmja7popggMiDkuK3nu5nlh7rnmoTmnaHku7bvvIzloavooaggNC4zIOWQju+8jOW+l+WIsOihqCA0LjTjgIJgLCBwIGDooaggNC4044CA6aKYIDIg55So6KGoIDJgLCBpbWcocGljNF82XzUpKCkpKSwgc2VjdGlvbignMy7lgYforr7kuIDkuKogQyDor63oqIDnqIvluo/mnInkuKTkuKrmupDmlofku7bvvJptYWluLmMg5ZKMIHByb2MxLmPvvIzlroPku6znmoTlhoXlrrnlpoLlm74gNC4yIOaJgOekuuOAgicpKGltZyhwaWM0XzZfNikoJ+WbviA0LjLjgIDpopggMyDnlKjlm74nKSwgcCBg5Zue562U5LiL5YiX6Zeu6aKY44CCYCwgcCBg77yIMe+8ieWcqOS4iui/sOS4pOS4quaWh+S7tuS4reWHuueOsOeahOespuWPt+WTquS6m+aYr+W8uuespuWPt++8n+WTquS6m+aYr+W8seespuWPt++8n+WQhOWPmOmHj+eahOWtmOWCqOepuumXtOWIhumFjeWcqOWTquS4quiKguS4re+8n+WQhOWNoOWHoOS4quWtl+iKgu+8n2AsIHAgYO+8iDLvvInnqIvluo/miafooYzlkI7miZPljbDnmoTnu5PmnpzmmK/ku4DkuYjvvJ/or7fliIbliKvnlLvlh7rmiafooYznrKwgNyDooYznmoQgcHJvYzHvvIjvvInlh73mlbDosIPnlKjliY3jgIHlkI7vvIzlnKjlnLDlnYAmeCDlkowmeiDkuK3lrZjmlL7nmoTlhoXlrrnjgIJgLCBwIGDvvIgz77yJ6IulIG1haW4uYyDnmoTnrKwgMyDooYzmlLnkuLrjgIxzaG9ydCB5PTHvvIx6PTLvvJvjgI3vvIznu5Pmnpzlj4jkvJrmgI7moLfvvJ9gLCBwIGDvvIg077yJ5L+u5pS55paH5Lu2IHByb2Mx77yM5L2/5b6XIG1haW4uYyDog73ovpPlh7rmraPnoa7nmoTnu5PmnpzvvIjljbMgeD0yNTfvvIx6PTLvvInjgILopoHmsYLkv67mlLnml7bkuI3og73mlLnlj5jku7vkvZXlj5jph4/nmoTmlbDmja7nsbvlnovlkozlkI3lrZfjgIJgLCBzZWN0aW9uKCfliIbmnpDop6PnrZQnKShwIGDvvIgx77yJbWFpbi5jIOS4reW8uuespuWPt+aciSB444CBeuOAgW1haW7vvIzlvLHnrKblj7fmnIkgeSDlkowgcHJvYzHvvJtwcm9jMS5jIOS4reeahOW8uuespuWPt+aciSBwcm9jMe+8jOW8seespuWPt+aciSB444CC5qC55o2u5aSa6YeN5a6a5LmJ56ym5Y+35aSE55CG6KeE5YiZIDLvvIjoi6XkuIDkuKrnrKblj7fooqvor7TmmI7kuLrkuIDmrKHlvLrnrKblj7flrprkuYnlkozlpJrmrKHlvLHnrKblj7flrprkuYnvvIzliJnmjInlvLrnrKblj7flrprkuYnkuLrlh4bvvInvvIznrKblj7cgeCDnmoTlrprkuYnku6UgbWFpbi5jIOS4reeahOW8uuespuWPtyB4IOS4uuWHhu+8jOWNs+WcqCBtYWluLm8g55qELmRhdGEg6IqC5Lit5YiG6YWNIHjvvIzljaAgNCDkuKrlrZfoioLvvIzpmo/lkI7mmK/lj6bkuIDkuKrlvLrnrKblj7cgeiDljaDkuKTkuKrlrZfoioLvvIx4IOWSjCB6IOmDveWxnuS6ji5kYXRhIOiKgu+8jOmaj+WQjuaYry5ic3Mg6IqC77yM5YW25Lit5Y+q5pyJ5LiA5Liq5Y+Y6YePIHnvvIzmjIkgNCDlrZfoioLlr7npvZDvvIzlm6DmraTvvIzlnKggeiDlkI7pnaLmnInkuKTkuKrlrZfoioLnqbrpl7LvvIzlho3lkI7pnaLmmK/lj5jph48geSDnmoTnqbrpl7TjgIJgLCBwIGDvvIgy77yJ56iL5bqP5omn6KGM5pe277yM5Zyo6LCD55SoIHByb2Mx77yI77yJ5Ye95pWw5LmL5YmN77yMJngg5Lit5a2Y5pS+55qE5pivIHgg55qE5py65Zmo5pWw77yaMDAwMDAxMDFI77yM6ZqP5ZCO5Lik5Liq5a2X6IqC77yI5Zyw5Z2A5Li6JnrvvInlrZjmlL4geu+8jOWNsyAwMDAySO+8jOWGjeWQjumdouS4pOS4quWtl+iKguepuumXsu+8jOWmguWbviA0LjNhIOaJgOekuuOAgmAsIHAgYOWcqOiwg+eUqCBwcm9jMe+8iO+8ieWHveaVsOS7peWQju+8jOWboOS4uiBwcm9jMe+8iO+8ieS4reeahOespuWPtyB4IOaYr+W8seespuWPt++8jOaJgOS7pe+8jHgg55qE5a6a5LmJ5LulIG1haW4g5Lit55qE5by656ym5Y+3IHgg5Li65YeG77yM5omn6KGMIHg9LTEuNSDlkI7vvIzkvr/lsIbjgIwtMS4144CN55qE5py65Zmo5pWwIEJGRjgwMDAwMDAwMDAwMDBIIOWtmOaUvuWIsOS6hiZ4IOW8gOWni+eahCA4IOS4quWtl+iKguS4reOAguWNsyZ4IOS4reS4uuWFtuS9jiAzMiDkvY3nmoQgMDAwMDAwMDBI77yMJnog5Lit5Li66auYIDMyIOS9jeeahCBCRkY4MDAwMEgg5Lit55qE5L2OIDE2IOS9jSAwMDAwSO+8jHog5ZCO6Z2i55qE5Lik5Liq56m66Zey5a2X6IqC5Lit5Li66auYIDE2IOS9jSBCRkY4SO+8jOWmguWbviA0LjNiIOaJgOekuuOAgmAsIGltZyhwaWM0XzZfNykoJ+WbviA0LjPjgIDmiafooYwgcHJvYzHvvIjvvInlh73mlbDliY3jgIHlkI4geCDlkowgeiDmiYDlnKjlrZjlgqjljLrkuK3nmoTlhoXlrrkgMScpLCBwIGDlm6DmraTvvIzmnIDnu4jmiZPljbDnmoTnu5PmnpzkuLogeD0w77yMej0w44CCYCwgcCBg77yIM++8ieiLpSBtYWluLmMg55qE56ysIDMg6KGM5pS55Li644CMc2hvcnQgeT0x77yMej0y77yb44CN77yM5YiZIHjjgIF544CBeiDpg73mmK/lvLrnrKblj7fvvIzpg73ooqvliIbphY3lnKguZGF0YSDoioLkuK3vvIzlm6DmraTvvIx4IOWNoCA0IOS4quWtl+iKgu+8jOmaj+WQjuaYryB5IOWNoOS4pOS4quWtl+iKgu+8jHog5Y2g5Lik5Liq5a2X6IqC77yMcHJvYzEg5Ye95pWw5omn6KGM5YmN44CB5ZCO55qE5a2Y5YKo5YaF5a655aaC5Zu+IDQuNCDmiYDnpLrvvIznlLHmraTlj6/op4HvvIx4IOeahOacuuWZqOaVsOS4uuWFqCAw77yMeiDnmoTmnLrlmajmlbDkuLogQkZGOEjvvIzlm6DmraTvvIzmnIDnu4jmiZPljbDnmoTnu5PmnpzkuLogeD0w77yMej0tMTYzOTLjgIJgLCBpbWcocGljNF82XzgpKCflm74gNC4044CA5omn6KGMIHByb2Mx77yI77yJ5Ye95pWw5YmN44CB5ZCOIHgg5ZKMIHog5omA5Zyo5a2Y5YKo5Yy65Lit55qE5YaF5a65IDInKSwgcCBg77yINO+8ieWPquimgeWwhuaWh+S7tiBwcm9jMS5jIOS4reeahOesrCAxIOihjOS/ruaUueS4uuOAjHN0YXRpYyBkb3VibGUgeOOAje+8jOWwseWPr+S7peS9v+W+lyBwcm9jMSDkuK3nmoQgeCDorr7lrprkuLrmnKzlnLDlj5jph4/vvIzku47ogIzlnKggcHJvYzEubyDnmoQuZGF0YSDoioLkuK3kuJPpl6jliIbphY3lrZjmlL4geCDnmoQgOCDkuKrlrZfoioLnqbrpl7TvvIzogIzkuI3kvJrlkowgbWFpbiDkuK3nmoQgeCDlhbHnlKjlkIzkuIDkuKrlrZjlgqjlnLDlnYDvvIzlm6DmraTkuZ/lsLHkuI3kvJrnoLTlnY8gbWFpbiDkuK0geCDlkowgeiDnmoTlgLzjgIJgKSksIHNlY3Rpb24oJzQu5Lul5LiL5q+P5LiA5bCP6aKY57uZ5Ye65LqG5Lik5Liq5rqQ56iL5bqP5paH5Lu277yM5a6D5Lus6KKr5YiG5Yir57yW6K+R55Sf5oiQ5Y+v6YeN5a6a5L2N55uu5qCH5qih5Z2XIG0xLm8g5ZKMIG0yLm/jgILlnKjmqKHlnZcgbWog5Lit5a+556ym5Y+3IHgg55qE5Lu75oSP5byV55So5LiO5qih5Z2XIG1pIOS4reWumuS5ieeahOespuWPtyB4IOWFs+iBlOiusOS4uiBSRUbvvIhtai5477yJ4oaSREVG77yIbWkueO+8ieOAguivt+WcqOS4i+WIl+epuuagvOWkhOWhq+WGmeaooeWdl+WQjeWSjOespuWPt+WQjeS7peivtOaYjue7meWHuueahOW8leeUqOespuWPt+aJgOWFs+iBlOeahOWumuS5ieespuWPt+OAguiLpeWPkeeUn+mTvuaOpemUmeivr++8jOWImeivtOaYjuWFtuWOn+WboO+8m+iLpeS7juWkmuS4quWumuS5ieespuWPt+S4reS7u+mAie+8jOWImee7meWHuuWFqOmDqOWPr+iDveeahOWumuS5ieespuWPt++8jOiLpeaYr+WxgOmDqOWPmOmHj++8jOWImeivtOaYjuS4jeWtmOWcqOWFs+iBlOOAgicpKGltZyhwaWM0XzZfOSkoKSwgcCBg4pGgUkVG77yIbTEubWFpbu+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgcCBg4pGhUkVG77yIbTIubWFpbu+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgcCBg4pGiUkVG77yIbTEucO+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgcCBg4pGjUkVG77yIbTIucO+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgaW1nKHBpYzRfNl8xMCkoKSwgcCBg4pGgUkVG77yIbTEubWFpbu+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgcCBg4pGhUkVG77yIbTIubWFpbu+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgcCBg4pGiUkVG77yIbTEueO+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgaW1nKHBpYzRfNl8xMSkoKSwgcCBg4pGgUkVG77yIbTEubWFpbu+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgcCBg4pGhUkVG77yIbTIubWFpbu+8ieKGkkRFRu+8iF9fX19fLl9fX19f77yJYCwgcCBg4pGiUkVG77yIbTEucDHvvInihpJERUbvvIhfX19fXy5fX19fX++8iWAsIHAgYOKRo1JFRu+8iG0xLnjvvInihpJERUbvvIhfX19fXy5fX19fX++8iWAsIHAgYOKRpFJFRu+8iG0yLnjvvInihpJERUbvvIhfX19fXy5fX19fX++8iWAsIGltZyhwaWM0XzZfMTIpKCksIHAgYOKRoFJFRu+8iG0xLnjvvInihpJERUbvvIhfX19fXy5fX19fX++8iWAsIHAgYOKRoVJFRu+8iG0yLnjvvInihpJERUbvvIhfX19fXy5fX19fX++8iWAsIHAgYOKRolJFRu+8iG0xLnnvvInihpJERUbvvIhfX19fXy5fX19fX++8iWAsIHAgYOKRo1JFRu+8iG0yLnnvvInihpJERUbvvIhfX19fXy5fX19fX++8iWAsIHNlY3Rpb24oJ+WIhuaekOino+etlCcpKHAgYO+8iDHvvIltYWluIOWcqCBtMSDkuK3mmK/lvLrlrprkuYnvvIzlnKggbTIg5Lit5piv5pys5Zyw56ym5Y+344CCYCwgcCBg4pGgUkVG77yIbTEubWFpbu+8ieKGkiDlnKggbTEg5Lit5LiN5a2Y5Zyo5a+5IG1haW4g55qE5byV55SoYCwgcCBg4pGhUkVG77yIbTIubWFpbu+8ieKGkkRFRu+8iG0yLm1haW7vvIlgLCBwIGDikaJSRUbvvIhtMS5w77yJ4oaSREVG77yIbTIucO+8iWAsIHAgYOKRo1JFRu+8iG0yLnDvvInihpIg5ZyoIG0yIOS4reS4jeWtmOWcqOWvuSBwIOeahOW8leeUqGAsIHAgYO+8iDLvvInlj5HnlJ/pk77mjqXplJnor6/vvIzlm6DkuLrlhajlsYDlj5jph48gbWFpbiDlkowgeCDpg73mnInkuKTkuKrlvLrlrprkuYnjgIJgLCBwIGDvvIgz77yJbWFpbiDlnKggbTEg5Lit5piv5by65a6a5LmJ56ym5Y+377yM5ZyoIG0yIOS4reaYr+W8seespuWPt++8jOWboOatpOmTvuaOpeWZqOmAieaLqeW8uuWumuS5iWAsIHAgYOKRoFJFRu+8iG0xLm1haW7vvInihpIg5ZyoIG0xIOS4reS4jeWtmOWcqOWvuSBtYWluIOeahOW8leeUqGAsIHAgYOKRoVJFRu+8iG0yLm1haW7vvInihpJERUbvvIhtMS5tYWlu77yJYCwgcCBg4pGiUkVG77yIbTEucDHvvInihpJERUbvvIhtMi5wMe+8iWAsIHAgYOKRo1JFRu+8iG0xLnjvvInihpIg5ZyoIG0xIOS4reW8leeUqOeahCB4IOaYr+WxgOmDqOWPmOmHj++8jOS4jeWtmOWcqOWFs+iBlGAsIHAgYOKRpFJFRu+8iG0yLnjvvInihpJERUbvvIhtMi5477yJYCwgcCBg77yINO+8ieWFqOWxgOespuWPtyB4IOWcqCBtMSDkuK3mmK/lvLHlrprkuYnvvIzlnKggbTIg5Lit5piv5by65a6a5LmJ77yMeSDlnKjkuKTkuKrmqKHlnZfkuK3pg73mmK/lvLHlrprkuYlgLCBwIGDikaBSRUbvvIhtMS5477yJ4oaSREVG77yIbTIueO+8iWAsIHAgYOKRoVJFRu+8iG0yLnjvvInihpIg5ZyoIG0yIOS4reS4jeWtmOWcqOWvuSB4IOeahOW8leeUqGAsIHAgYOKRolJFRu+8iG0xLnnvvInihpIg5ZyoIG0xIOS4reS4jeWtmOWcqOWvuSB5IOeahOW8leeUqGAsIHAgYOKRo1JFRu+8iG0yLnnvvInihpJERUbvvIhtMS5577yJ5oiW6ICFIERFRu+8iG0yLnnvvIlgKSksIHNlY3Rpb24oJzUu5Lul5LiL55Sx5Lik5Liq55uu5qCH5qih5Z2XIG0xIOWSjCBtMiDnu4TmiJDnmoTnqIvluo/vvIznu4/nvJbor5HjgIHmsYfnvJbjgIHpk77mjqXlkI7lnKjorqHnrpfmnLrkuIrmiafooYzvvIznu5Pmnpzlj5HnjrDljbPkvb8gcDEg5Ye95pWw5Lit5rKh5pyJ5a+55pWw57uE5Y+Y6YePIG1haW4g6L+b6KGM5Yid5aeL5YyW77yM5pyA57uI5Lmf6IO95omT5Y2w5Ye65a2X56ym5Liy44CMMHg1NTg5XFxu44CN44CC5Li65LuA5LmI77yf6KaB5rGC6Kej6YeK5Y6f5Zug44CCJykoaW1nKHBpYzRfNl8xMykoKSwgaW1nKHBpYzRfNl8xNCkoKSwgc2VjdGlvbign5YiG5p6Q6Kej562UJykocCBg5YWo5bGA56ym5Y+3IG1haW4g5ZyoIG0xIOS4reaYr+W8uuespuWPt++8jOWcqCBtMiDkuK3mmK/lvLHnrKblj7fvvIzlm6DmraTku6UgbTEg5LitIG1haW4g55qE5a6a5LmJ5Li65YeG44CC5ZyoIG0xIOS4reWFqOWxgOespuWPtyBtYWluIOiiq+WumuS5ieWcqC50ZXh0IOiKguS4re+8jOWHuueOsOacrOmimOaJgOivtOe7k+aenOeahOWOn+WboOaYr++8jG1haW4g5Ye95pWw5a+55bqU55qE5py65Zmo56CB5byA5aeL5Lik5Liq5a2X6IqC5Li6IDU1SCDlkowgODlI44CC5Zyo5pyJ5Lqb57O757uf5Lit77yMbWFpbiDlh73mlbDmnIDliJ3kuKTmnaHmjIfku6TlpoLkuIvvvJpgLCBwcmVjb2RlKGAx44CARGlzYXNzZW1ibHkgb2Ygc2VjdGlvbiAudGV4dDpcbjLjgIAwMDAwMDAwMCA8bWFpbj46XG4z44CAICAgIDA6ICAgIDU1ICAgICAgICAgIHB1c2ggICAlZWJwXG4044CAICAgIDE6ICAgIDg5IGU1ICAgICBtb3YgICAlZXNwLCVlYnBgKSgpLCBwIGDlhbbkuK3vvIw1NUgg5piv5oyH5Luk44CMcHVzaCVlYnDjgI3nmoTmnLrlmajnoIHvvIw4OUU1SCDmmK/mjIfku6TjgIxtb3YlZXNw77yMJWVicOOAjeeahOacuuWZqOegge+8jOWboOatpO+8jOWPr+S7peeci+WHuuWcqCBtMiDkuK3nmoQgcHJpbnRmIOivreWPpeS4reW8leeUqOaVsOe7hOWFg+e0oCBtYWluWzBd5ZKMIG1haW5bMV3ml7bvvIxtYWluWzBdPTU1SO+8jG1haW5bMV09ODlI44CCYCkpLCBzZWN0aW9uKCc2LuWbviA0LjUg5Lit57uZ5Ye65LqG55SoIE9CSkRVTVAg5pi+56S655qE5p+Q5Liq5Y+v5omn6KGM55uu5qCH5paH5Lu255qE56iL5bqP5aS06KGo77yI5q615aS06KGo77yJ55qE6YOo5YiG5L+h5oGv77yM5YW25Lit77yM5Y+v6K+75YaZ5pWw5o2u5q6177yIUmVhZC93cml0ZSBkYXRhIHNlZ21lbnTvvInnmoTkv6Hmga/ooajmmI7vvIzor6XmlbDmja7mrrXlr7nlupTomZrmi5/lrZjlgqjnqbrpl7TkuK3otbflp4vlnLDlnYDkuLogMHg4MDQ5NDQ444CB6ZW/5bqm5Li6IDB4MTA0IOS4quWtl+iKgueahOWtmOWCqOWMuu+8jOWFtuaVsOaNruadpeiHquWPr+aJp+ihjOaWh+S7tuS4reWBj+enu+WcsOWdgCAweDQ0OCDlvIDlp4vnmoQgMHhlOCDkuKrlrZfoioLjgILov5nph4zvvIzlj6/miafooYznm67moIfmlofku7bkuK3nmoTmlbDmja7plb/luqblkozomZrmi5/lnLDlnYDnqbrpl7TkuK3nmoTlrZjlgqjljLrlpKflsI/kuYvpl7Tnm7jlt67kuoYgMjgg5a2X6IqC44CC6K+36Kej6YeK5Y+v6IO955qE5Y6f5Zug44CCJykoaW1nKHBpYzRfNl8xNSkoJ+WbviA0LjXjgIDmn5Dlj6/miafooYznm67moIfmlofku7bnqIvluo/lpLTooajnmoTpg6jliIblhoXlrrknKSwgc2VjdGlvbign5YiG5p6Q6Kej562UJykocCBg5Zyo5Y+v5omn6KGM55uu5qCH5paH5Lu25Lit5o+P6L+w55qE44CM5Y+v6K+75YaZ5pWw5o2u5q6144CN55Sx5omA5pyJ5Y+v6YeN5a6a5L2N55uu5qCH5paH5Lu25Lit55qELmRhdGEg6IqC5ZCI5bm255Sf5oiQ55qELmRhdGEg6IqC44CB5omA5pyJ5Y+v6YeN5a6a5L2N55uu5qCH5paH5Lu25Lit55qELmJzcyDoioLlkIjlubbnlJ/miJDnmoQuYnNzIOiKgui/meS4pOmDqOWIhue7hOaIkOOAgi5kYXRhIOiKgueUseWIneWni+WMlueahOWFqOWxgOWPmOmHj+e7hOaIkO+8jOWboOatpOWFtuWIneWni+WAvOW/hemhu+iusOW9leWcqOWPr+aJp+ihjOaWh+S7tuS4re+8m+iAjC5ic3Mg6IqC55Sx5pyq5Yid5aeL5YyW55qE5YWo5bGA5Y+Y6YeP57uE5oiQ77yM5Zug5q2k5Zyo5Y+v5omn6KGM55uu5qCH5paH5Lu25Lit5peg6ZyA6K6w5b2V5YW25YC877yM5Y+q6KaB5o+P6L+w5oC755qE6ZW/5bqm5ZKM5q+P5Liq5Y+Y6YeP55qE6LW35aeL5L2N572u5Y2z5Y+v44CCYCwgcCBg5qC55o2u5Zu+IDQuNSDkuK3nmoTlhoXlrrnlj6/nn6XvvIwuZGF0YSDoioLkuK3lhajlsYDlj5jph4/nmoTliJ3lp4vlgLzmgLvnmoTmlbDmja7plb/luqbkuLogMHhlOOOAguWboOatpO+8jOiZmuaLn+WcsOWdgOepuumXtOS4remVv+W6puS4uiAweDEwNCDlrZfoioLnmoTlj6/or7vlhpnmlbDmja7mrrXkuK3vvIzlvIDlp4vnmoQgMHhlOCDkuKrlrZfoioLlj5boh6ouZGF0YSDoioLvvIzlkI7pnaLnmoQgMjgg5a2X6IqC5piv5pyq5Yid5aeL5YyW5YWo5bGA5Y+Y6YeP5omA5Zyo5Yy65Z+f44CCYCkpLCBzZWN0aW9uKCc3LuWBh+WumiBhIOWSjCBiIOaYr+WPr+mHjeWumuS9jeebruagh+aWh+S7tuaIlumdmeaAgeW6k+aWh+S7tu+8jGHihpJiIOihqOekuiBiIOS4reWumuS5ieS6huS4gOS4quiiqyBhIOW8leeUqOeahOespuWPt+OAguWvueS6juS7peS4i+avj+S4gOWwj+mimOWHuueOsOeahOaDheWGte+8jOe7meWHuuS4gOS4quacgOefreWRveS7pOihjO+8iOWQq+acieacgOWwkeaVsOmHj+eahOWPr+mHjeWumuS9jeebruagh+aWh+S7tuaIlumdmeaAgeW6k+aWh+S7tuWPguaVsO+8ie+8jOS9v+W+l+mTvuaOpeWZqOiDveWkn+ino+aekOaJgOacieespuWPt+W8leeUqOOAgicpKHAgYO+8iDHvvIlwLm/ihpJsaWJ4LmHihpJsaWJ5LmHihpJwLm9gLCBwIGDvvIgy77yJcC5v4oaSbGlieC5h4oaSbGlieS5hIOWQjOaXtiBsaWJ5LmHihpJsaWJ4LmFgLCBwIGDvvIgz77yJcC5v4oaSbGlieC5h4oaSbGlieS5h4oaSbGliei5hIOWQjOaXtiBsaWJ5LmHihpJsaWJ4LmHihpJsaWJ6LmFgLCBzZWN0aW9uKCfliIbmnpDop6PnrZQnKShwIGDvvIgx77yJZ2NjLXN0YXRpYy1vIHAgcC5vIGxpYnguYSBsaWJ5LmEgcC5vYCwgcCBg77yIMu+8iWdjYy1zdGF0aWMtbyBwIHAubyBsaWJ4LmEgbGlieS5hIGxpYnguYWAsIHAgYO+8iDPvvIlnY2Mtc3RhdGljLW8gcCBwLm8gbGlieC5hIGxpYnkuYSBsaWJ4LmEgbGliei5hYCkpLCBzZWN0aW9uKCc4LuW3suefpeS4pOS4qiBDIOivreiogOa6kOeoi+W6j+aWh+S7tiBtYWluLmMg5ZKMIHN3YXAuYyDnmoTlhoXlrrnlpoLlm74gNC42IOaJgOekuuOAgicpKGltZyhwaWM0XzZfMTYpKCflm74gNC4244CAbWFpbi5jIOWSjCBzd2FwLmMg5paH5Lu25Lit55qE5YaF5a65JyksIHAgYOWbviA0Ljcg57uZ5Ye65LqGIG1haW4g5Ye95pWw5rqQ5Luj56CB5a+55bqU55qEIG1haW4ubyDkuK0udGV4dCDoioLlkowucmVsLnRleHQg6IqC55qE5YaF5a6577yM5Zu+5Lit5pi+56S65YW2LnRleHQg6IqC5Lit5pyJ5LiA5aSE6ZyA6YeN5a6a5L2N44CC5YGH5a6a6ZO+5o6l5ZCOIG1haW4g5Ye95pWw5Luj56CB6LW35aeL5Zyw5Z2A5pivIDB4ODA0ODM4Nu+8jOe0p+i3n+WcqCBtYWluIOWQjueahOaYryBzd2FwIOWHveaVsOeahOS7o+egge+8jOS4lOmmluWcsOWdgOaMiSA0IOWtl+iKgui+ueeVjOWvuem9kOOAguimgeaxguagueaNruWvueWbviA0Ljcg55qE5YiG5p6Q77yM5oyH5Ye6IG1haW4ubyDnmoQudGV4dCDoioLkuK3pnIDph43lrprkvY3nmoTnrKblj7flkI3jgIHnm7jlr7nkuo4udGV4dCDoioLotbflp4vkvY3nva7nmoTkvY3np7vjgIHmiYDlnKjmjIfku6TooYzlj7fjgIHph43lrprkvY3nsbvlnovjgIHph43lrprkvY3liY3nmoTlhoXlrrnjgIHph43lrprkvY3lkI7nmoTlhoXlrrnvvIzlubbnu5nlh7rph43lrprkvY3lgLznmoTorqHnrpfov4fnqIvjgIJgLCBpbWcocGljNF82XzE3KSgn5Zu+IDQuN+OAgG1haW4ubyDkuK0udGV4dCDoioLlkowucmVsLnRleHQg6IqC55qE5YaF5a65JyksIHNlY3Rpb24oJ+WIhuaekOino+etlCcpKHAgYOagueaNruWbviA0Ljcg5Y+v55+l77yMbWFpbi5vIOeahC50ZXh0IOiKguS4reWPquacieS4gOS4quespuWPt+mcgOimgemHjeWumuS9je+8jOWug+WwseaYr+WcqCBtYWluLmMg5Lit6KKr5byV55So55qE5YWo5bGA56ym5Y+3IHN3YXDvvJvpnIDopoHph43lrprkvY3nmoTmmK/lm74gNC43IOS4reesrCA2IOihjCBjYWxsIOaMh+S7pOS4reeahOWBj+enu+mHj+Wtl+aute+8jOWFtuS9jee9ruebuOWvueS6ji50ZXh0IOiKgui1t+Wni+S9jee9ruS9jeenu+mHjyByX29mZnNldCDkuLogN++8jOaMieeFpyBQQyDnm7jlr7nlnLDlnYDmlrnlvI/vvIhSXzM4Nl9QQzMy77yJ6L+b6KGM6YeN5a6a5L2N44CCYCwgcCBg6YeN5a6a5L2N5YmN77yM5Zyo5L2N56e76YePIDfjgIE444CBOeOAgWEg5aSE55qE5YaF5a655YiG5Yir5Li6IGZj44CBZmbjgIFmZuOAgWZm77yM5Zug5q2k5Yid5aeL5YC8IGluaXQg55qE5py65Zmo5pWw5Li6IDB4ZmZmZmZmZmPvvIzlgLzkuLotNOOAgumHjeWumuS9jeWQju+8jOW6lOivpeS9vyBjYWxsIOaMh+S7pOeahOebruagh+i9rOenu+WcsOWdgOaMh+WQkSBzd2FwIOWHveaVsOeahOi1t+Wni+WcsOWdgOOAgmAsIHAgYG1haW4g5Ye95pWw5oC75YWx5Y2gIDEySD0xOCDlrZfoioLnmoTlrZjlgqjnqbrpl7TvvIzlhbbotbflp4vlnLDlnYAgQUREUu+8iC50ZXh077yJ5Li6IDB4ODA0ODM4Nu+8jOWboOatpCBtYWluIOWHveaVsOacgOWQjuS4gOadoeaMh+S7pOWcsOWdgOS4uu+8mjB4ODA0ODM4NisweDEyPTB4ODA0ODM5OOOAguWboOS4uiBzd2FwIOWHveaVsOS7o+eggee0p+i3n+WcqCBtYWluIOWQjuS4lOmmluWcsOWdgOaMiSA0IOWtl+iKgui+ueeVjOWvuem9kO+8jOaVhSBzd2FwIOeahOi1t+Wni+WcsOWdgCBBRERS77yIc3dhcO+8ieWwseaYryAweDgwNDgzOTjjgIJgLCBwIGDph43lrprkvY3lgLznmoTorqHnrpflhazlvI/kuLpgLCBwIGBBRERS77yIc3dhcO+8iS3vvIjvvIhBRERS77yILnRleHTvvIkrcl9vZmZzZXTvvIktaW5pdO+8iT0weDgwNDgzOTgt77yI77yIMHg4MDQ4Mzg2KzfvvIkt77yILTTvvInvvIk9N+OAgmAsIHAgYOWboOatpO+8jOmHjeWumuS9jeWQju+8jOWcqOS9jeenu+mHjyA344CBOOOAgTnjgIFhIOWkhOeahCBjYWxsIOaMh+S7pOeahOWBj+enu+mHj+Wtl+auteS4uiAwNzAwMDAwMOOAgmApKSwgc2VjdGlvbignOS7lm74gNC44IOe7meWHuuS6huWbviA0LjZiIOaJgOekuueahCBzd2FwIOa6kOS7o+eggeWvueW6lOeahCBzd2FwLm8g5paH5Lu25LitLnRleHQg6IqC5ZKMLnJlbC50ZXh0IOiKgueahOWGheWuue+8jOWbvuS4reaYvuekui50ZXh0IOiKguS4reWFseaciSA2IOWkhOmcgOmHjeWumuS9jeOAgicpKGltZyhwaWM0XzZfMTgpKCflm74gNC4444CAc3dhcC5vIOS4rS50ZXh0IOiKguWSjC5yZWwudGV4dCDoioLnmoTlhoXlrrknKSwgcCBg5YGH5a6a6ZO+5o6l5ZCO55Sf5oiQ55qE5Y+v5omn6KGM55uu5qCH5paH5Lu25LitIGJ1ZiDlkowgYnVmcDAg55qE5a2Y5YKo5Zyw5Z2A5YiG5Yir5pivIDB4ODA0OTVjOCDlkowgMHg4MDQ5NWQw77yMYnVmcDEg55qE5a2Y5YKo5Zyw5Z2A5L2N5LqOLmJzcyDoioLnmoTlvIDlp4vvvIzkuLogMHg4MDQ5NjIw44CC5qC55o2u5a+55Zu+IDQuOCDnmoTliIbmnpDvvIzku7/nhafkvovlrZDloavlhpnooaggNC4177yM5Lul5oyH5Ye65ZCE5Liq6YeN5a6a5L2N55qE56ym5Y+35ZCN44CB55u45a+55LqOLnRleHQg6IqC6LW35aeL5L2N572u55qE5L2N56e744CB5omA5Zyo5oyH5Luk6KGM5Y+344CB6YeN5a6a5L2N57G75Z6L44CB6YeN5a6a5L2N5YmN55qE5YaF5a655Lul5Y+K6YeN5a6a5L2N5ZCO55qE5YaF5a6544CCYCwgaW1nKHBpYzRfNl8xOSkoJ+ihqCA0LjXjgIDpopggOSDnlKjooaggMScpLCBzZWN0aW9uKCfliIbmnpDop6PnrZQnKShwIGDmoLnmja7popggOSDkuK3nu5nlh7rnmoTmnaHku7bvvIzloavooaggNC41IOWQju+8jOW+l+WIsOihqCA0LjbjgIJgLCBpbWcocGljNF82XzIwKSgn6KGoIDQuNuOAgOmimCA5IOeUqOihqCAyJykpKSkuZWxlbTtcblxuICAgICAgd2luZG93Lm91dGVyLnZpZXdzWycvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNiddPXtwYWdlLHRpdGxlfTtjb25zb2xlLmxvZyh0aXRsZSkiXSwic291cmNlUm9vdCI6IiJ9