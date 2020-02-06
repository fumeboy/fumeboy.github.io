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
/******/ 		"webpack/webpack-loader": 0
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
/******/ 	deferredModules.push(["./src/pages/webpack/webpack-loader.page.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/webpack/webpack-loader.page.ts":
/*!**************************************************!*\
  !*** ./src/pages/webpack/webpack-loader.page.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['loader \u7684\u529F\u80FD\u975E\u5E38\u5F3A\u5927\uFF0C\u51ED\u501F loader\uFF0C\u4F60\u53EF\u4EE5\u521B\u9020\u51FA\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49 javascript\u3002\u5728\u7F16\u5199loader\u7684\u65F6\u5019\uFF0C\u6211\u4E3B\u8981\u4ECE\u4E24\u4E2A\u6587\u6863\u70B9\u8FDB\u884C\u53C2\u8003\uFF1A'], ['loader \u7684\u529F\u80FD\u975E\u5E38\u5F3A\u5927\uFF0C\u51ED\u501F loader\uFF0C\u4F60\u53EF\u4EE5\u521B\u9020\u51FA\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49 javascript\u3002\u5728\u7F16\u5199loader\u7684\u65F6\u5019\uFF0C\u6211\u4E3B\u8981\u4ECE\u4E24\u4E2A\u6587\u6863\u70B9\u8FDB\u884C\u53C2\u8003\uFF1A']),
    _templateObject2 = _taggedTemplateLiteral(['\u4E00\u4E2A\u662F\u5B98\u65B9\u7684 ', ''], ['\u4E00\u4E2A\u662F\u5B98\u65B9\u7684 ', '']),
    _templateObject3 = _taggedTemplateLiteral(['\u7F16\u5199\u4E00\u4E2Aloader'], ['\u7F16\u5199\u4E00\u4E2Aloader']),
    _templateObject4 = _taggedTemplateLiteral(['\u53E6\u4E00\u4E2A\u662F ', ''], ['\u53E6\u4E00\u4E2A\u662F ', '']),
    _templateObject5 = _taggedTemplateLiteral(['loader API'], ['loader API']),
    _templateObject6 = _taggedTemplateLiteral(['\u5176\u4E2D\u7B2C\u4E8C\u4E2A\u6587\u6863\u5C24\u5176\u91CD\u8981\u3002'], ['\u5176\u4E2D\u7B2C\u4E8C\u4E2A\u6587\u6863\u5C24\u5176\u91CD\u8981\u3002']),
    _templateObject7 = _taggedTemplateLiteral(['\u5149\u770B\u6587\u6863\u662F\u8FDC\u8FDC\u4E0D\u591F\u7684\uFF0C\u4E3A\u4E86\u4E86\u89E3 webpack loader \u7684\u4E0A\u4E0B\u6587\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5199\u4E00\u4E2A\u7B80\u5355\u7684loader(example-loader)\uFF1A'], ['\u5149\u770B\u6587\u6863\u662F\u8FDC\u8FDC\u4E0D\u591F\u7684\uFF0C\u4E3A\u4E86\u4E86\u89E3 webpack loader \u7684\u4E0A\u4E0B\u6587\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5199\u4E00\u4E2A\u7B80\u5355\u7684loader(example-loader)\uFF1A']),
    _templateObject8 = _taggedTemplateLiteral(['\u5728 webpack config \u6587\u4EF6\u4E2D\uFF0C\u5C06\u8FD9\u4E2A loader \u6302\u8F7D\u5230\uFF0C\u6BD4\u5982 .js \u7A0B\u5E8F\u6216\u8005 .ts \u7A0B\u5E8F\u4E0B\u9762\uFF0C \u770B\u770B\u8FD0\u884C webpack \u540E\uFF0Cexample-loader \u4F1A\u6253\u5370\u51FA\u4EC0\u4E48'], ['\u5728 webpack config \u6587\u4EF6\u4E2D\uFF0C\u5C06\u8FD9\u4E2A loader \u6302\u8F7D\u5230\uFF0C\u6BD4\u5982 .js \u7A0B\u5E8F\u6216\u8005 .ts \u7A0B\u5E8F\u4E0B\u9762\uFF0C \u770B\u770B\u8FD0\u884C webpack \u540E\uFF0Cexample-loader \u4F1A\u6253\u5370\u51FA\u4EC0\u4E48']),
    _templateObject9 = _taggedTemplateLiteral(['\u5B9E\u9645\u4E0A\uFF0C\u7531\u4E8E\u6253\u5370\u51FA\u6765\u7684 this \u975E\u5E38\u5927\uFF0C\u6240\u4EE5\u6211\u5EFA\u8BAE\u4F60\u53C2\u8003 loader API\uFF0C\u6307\u5B9A\u6253\u5370\u5BF9\u8C61\uFF1A'], ['\u5B9E\u9645\u4E0A\uFF0C\u7531\u4E8E\u6253\u5370\u51FA\u6765\u7684 this \u975E\u5E38\u5927\uFF0C\u6240\u4EE5\u6211\u5EFA\u8BAE\u4F60\u53C2\u8003 loader API\uFF0C\u6307\u5B9A\u6253\u5370\u5BF9\u8C61\uFF1A']),
    _templateObject10 = _taggedTemplateLiteral(['webpack \u7684\u4E00\u4E2A\u673A\u5236\uFF1A'], ['webpack \u7684\u4E00\u4E2A\u673A\u5236\uFF1A']),
    _templateObject11 = _taggedTemplateLiteral(['', ' \u548C ', ' \u7531\u4E8E\u8BF7\u6C42\u5730\u5740\u90FD\u662F "./a", webpack \u4E0D\u4F1A\u5BF9 ./a \u91CD\u590D\u5904\u7406\uFF0C\u800C\u662F\u5904\u7406\u4E00\u6B21\u540E\uFF0C\u8FD4\u56DE\u7F13\u5B58\u540E\u7684\u7ED3\u679C\uFF0C\u6240\u4EE5\u8FD9\u4E24\u4E2A\u5BFC\u5165\u8BED\u53E5\u5F97\u5230\u7684\u90FD\u662F\u540C\u4E00\u4E2A ./a \u7A0B\u5E8F'], ['', ' \u548C ', ' \u7531\u4E8E\u8BF7\u6C42\u5730\u5740\u90FD\u662F "./a", webpack \u4E0D\u4F1A\u5BF9 ./a \u91CD\u590D\u5904\u7406\uFF0C\u800C\u662F\u5904\u7406\u4E00\u6B21\u540E\uFF0C\u8FD4\u56DE\u7F13\u5B58\u540E\u7684\u7ED3\u679C\uFF0C\u6240\u4EE5\u8FD9\u4E24\u4E2A\u5BFC\u5165\u8BED\u53E5\u5F97\u5230\u7684\u90FD\u662F\u540C\u4E00\u4E2A ./a \u7A0B\u5E8F']),
    _templateObject12 = _taggedTemplateLiteral(['\u4F46\u5982\u679C\u540E\u4E00\u4E2A\u5BFC\u5165\u8BED\u53E5\u6539\u4E3A\uFF1A', ' \u5C06\u8DF3\u8FC7 webpack \u7684\u7F13\u5B58\uFF0C\u91CD\u65B0\u5BF9 ./a \u8FDB\u884C\u5904\u7406\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u6211\u4EEC\u7684loader\u8FDB\u884C\u4E00\u4E9B\u7279\u6B8A\u7684\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u8FBE\u5230\uFF0C\u662F\u540C\u4E00\u4E2A ./a \u5374\u8FD4\u56DE\u4E0D\u540C\u7A0B\u5E8F\u7684\u6548\u679C'], ['\u4F46\u5982\u679C\u540E\u4E00\u4E2A\u5BFC\u5165\u8BED\u53E5\u6539\u4E3A\uFF1A', ' \u5C06\u8DF3\u8FC7 webpack \u7684\u7F13\u5B58\uFF0C\u91CD\u65B0\u5BF9 ./a \u8FDB\u884C\u5904\u7406\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u6211\u4EEC\u7684loader\u8FDB\u884C\u4E00\u4E9B\u7279\u6B8A\u7684\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u8FBE\u5230\uFF0C\u662F\u540C\u4E00\u4E2A ./a \u5374\u8FD4\u56DE\u4E0D\u540C\u7A0B\u5E8F\u7684\u6548\u679C']),
    _templateObject13 = _taggedTemplateLiteral(['\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u77E5\u9053\u8C03\u7528 A \u6587\u4EF6\u7684\u662F B \u8FD8\u662F C\uFF0C \u5373\u660E\u786Erequest\u662F\u8C01\u53D1\u8D77\u7684\uFF0C\u6211\u4E2A\u4EBA\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A'], ['\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u77E5\u9053\u8C03\u7528 A \u6587\u4EF6\u7684\u662F B \u8FD8\u662F C\uFF0C \u5373\u660E\u786Erequest\u662F\u8C01\u53D1\u8D77\u7684\uFF0C\u6211\u4E2A\u4EBA\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A']),
    _templateObject14 = _taggedTemplateLiteral(['\u7B2C\u4E00\u79CD\uFF0C\u662F\u76F4\u63A5\u4ECE this._module.issuer \u83B7\u53D6\u4FE1\u606F\uFF0C\u8FD9\u91CC\u6709\u4E24\u79CD\u60C5\u51B5(\u6211\u4EEC\u5047\u8BBE\u88AB\u8C03\u7528\u3001\u5373\u5C06\u8981\u5904\u7406\u7684\u6587\u4EF6\u662F index.ts\uFF1A'], ['\u7B2C\u4E00\u79CD\uFF0C\u662F\u76F4\u63A5\u4ECE this._module.issuer \u83B7\u53D6\u4FE1\u606F\uFF0C\u8FD9\u91CC\u6709\u4E24\u79CD\u60C5\u51B5(\u6211\u4EEC\u5047\u8BBE\u88AB\u8C03\u7528\u3001\u5373\u5C06\u8981\u5904\u7406\u7684\u6587\u4EF6\u662F index.ts\uFF1A']),
    _templateObject15 = _taggedTemplateLiteral(['1. index.ts \u662F webpack \u7684 entry\uFF0C\u4F1A\u6709\u4F5C\u4E3A entry \u800C\u88AB\u7CFB\u7EDF\u8C03\u7528\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6 this._module.issuer \u4E0D\u5B58\u5728'], ['1. index.ts \u662F webpack \u7684 entry\uFF0C\u4F1A\u6709\u4F5C\u4E3A entry \u800C\u88AB\u7CFB\u7EDF\u8C03\u7528\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6 this._module.issuer \u4E0D\u5B58\u5728']),
    _templateObject16 = _taggedTemplateLiteral(['2. \u5982\u679C\u662F page2.ts \u8C03\u7528 index.ts\uFF0C\u90A3\u4E48\u6211\u4EEC\u5728\u5904\u7406 index.ts \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 this._module.issuer._source._name \u6765\u83B7\u53D6\u8C03\u7528\u65B9 page2.ts \u7684\u5730\u5740'], ['2. \u5982\u679C\u662F page2.ts \u8C03\u7528 index.ts\uFF0C\u90A3\u4E48\u6211\u4EEC\u5728\u5904\u7406 index.ts \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 this._module.issuer._source._name \u6765\u83B7\u53D6\u8C03\u7528\u65B9 page2.ts \u7684\u5730\u5740']),
    _templateObject17 = _taggedTemplateLiteral(['\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F60\u53EF\u80FD\u4E5F\u77E5\u9053\u4E86\uFF0Cthis._module \u5DF2\u7ECF\u662F\u5373\u5C06\u88AB\u5E9F\u5F03\u7684\u5C5E\u6027\u4E86'], ['\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F60\u53EF\u80FD\u4E5F\u77E5\u9053\u4E86\uFF0Cthis._module \u5DF2\u7ECF\u662F\u5373\u5C06\u88AB\u5E9F\u5F03\u7684\u5C5E\u6027\u4E86']),
    _templateObject18 = _taggedTemplateLiteral(['\u7B2C\u4E8C\u79CD\uFF0C\u662F\u5728\u5904\u7406 page2.ts \u65F6\uFF0C\u5C06 page2.ts \u4E2D\u5BF9 index.ts \u7684\u8C03\u7528\u8BED\u53E5 ', ' \u66FF\u6362\u4E3A ', ''], ['\u7B2C\u4E8C\u79CD\uFF0C\u662F\u5728\u5904\u7406 page2.ts \u65F6\uFF0C\u5C06 page2.ts \u4E2D\u5BF9 index.ts \u7684\u8C03\u7528\u8BED\u53E5 ', ' \u66FF\u6362\u4E3A ', '']);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = 'webpack4 loader 经验小结';
var article = (0, _write.section)(title)((0, _write.p)(_templateObject), (0, _write.p)(_templateObject2, (0, _write.a)(_templateObject3)('https://www.webpackjs.com/contribute/writing-a-loader/')), (0, _write.p)(_templateObject4, (0, _write.a)(_templateObject5)('https://www.webpackjs.com/api/loaders/')), (0, _write.p)(_templateObject6), (0, _write.section)('明确 loader 上下文')((0, _write.p)(_templateObject7), (0, _write.precode)('//filename: example-loader/index.js\nconst f = function(src) {\n  console.log(this)\n  return src\n}\nmodule.exports = f;')('js'), (0, _write.p)(_templateObject8), (0, _write.p)(_templateObject9), (0, _write.precode)('\n    console.log(this)\n    \n    =>\n    \n    console.log(\'version\', this.version)\n    console.log(\'context\', this.context)\n    console.log(\'request\', this.request)\n    console.log(\'query\', this.query)\n    console.log(\'data\', this.data)\n    console.log(\'loaders\', this.loaders)\n    console.log(\'loaderIndex\', this.loaderIndex)\n    console.log(\'resource\', this.resource)\n    console.log(\'resourcePath\',this.resourcePath)\n    console.log(\'resourceQuery\',this.resourceQuery)\n    ...')('js')), (0, _write.section)('query 的特殊作用')((0, _write.p)(_templateObject10), (0, _write.p)(_templateObject11, (0, _write.code)('import {a} from "./a"')(), (0, _write.code)('import {b} from "./a"')()), (0, _write.p)(_templateObject12, (0, _write.code)('import {b} from "./a?query=123"')())), (0, _write.section)('更多的上下文')((0, _write.p)(_templateObject13), (0, _write.p)(_templateObject14), (0, _write.p)(_templateObject15), (0, _write.p)(_templateObject16), (0, _write.p)(_templateObject17), (0, _write.p)(_templateObject18, (0, _write.code)('import "./index.ts"')(), (0, _write.code)('import ./index.ts?from=page2.ts')())));

window.outer.views['/webpack/webpack-loader'] = { page: page, title: title };console.log(title);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3dlYnBhY2svd2VicGFjay1sb2FkZXIucGFnZS50cyJdLCJuYW1lcyI6WyJ0aXRsZSIsImFydGljbGUiLCJwIiwid2luZG93Iiwib3V0ZXIiLCJ2aWV3cyIsInBhZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQTs7OztBQUNBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSxJQUFNQyxVQUFVLG9CQUFRRCxLQUFSLE1BQWVFLFFBQWYsd0JBQWlHQSxRQUFqRyxvQkFBNkcsZ0NBQWUsd0RBQWYsQ0FBN0csT0FBeUxBLFFBQXpMLG9CQUFtTSxnQ0FBZSx3Q0FBZixDQUFuTSxPQUErUEEsUUFBL1AscUJBQWlSLG9CQUFRLGVBQVIsTUFBeUJBLFFBQXpCLHFCQUFvRyxpSkFLL1csSUFMK1csQ0FBcEcsTUFLcFFBLFFBTG9RLHlCQUtoS0EsUUFMZ0sscUJBSzFHLHdoQkFlN0ssSUFmNkssQ0FMMEcsQ0FBalIsRUFvQkUsb0JBQVEsYUFBUixNQUF1QkEsUUFBdkIsMEJBQTJDQSxRQUEzQyxxQkFBZ0QsaUJBQUssdUJBQUwsR0FBaEQsRUFBcUYsaUJBQUssdUJBQUwsR0FBckYsT0FBdU1BLFFBQXZNLHFCQUF5TixpQkFBSyxpQ0FBTCxHQUF6TixFQXBCRixFQW9Cd1Ysb0JBQVEsUUFBUixNQUFrQkEsUUFBbEIsMEJBQThFQSxRQUE5RSwwQkFBeUpBLFFBQXpKLDBCQUE0T0EsUUFBNU8sMEJBQTJWQSxRQUEzViwwQkFBeVlBLFFBQXpZLHFCQUErYixpQkFBSyxxQkFBTCxHQUEvYixFQUFvZSxpQkFBSyxpQ0FBTCxHQUFwZSxFQXBCeFYsQ0FBaEI7O0FBc0JNQyxPQUFPQyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIseUJBQW5CLElBQThDLEVBQUNDLFVBQUQsRUFBTU4sWUFBTixFQUE5QyxDQUEyRE8sUUFBUUMsR0FBUixDQUFZUixLQUFaLEUiLCJmaWxlIjoid2VicGFjay93ZWJwYWNrLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJ3ZWJwYWNrL3dlYnBhY2stbG9hZGVyXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvcGFnZXMvd2VicGFjay93ZWJwYWNrLWxvYWRlci5wYWdlLnRzXCIsXCJ2ZW5kb3JzXCIsXCJjb21tb25cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBwLCBzZWN0aW9uLCBhLCBwcmVjb2RlLCBjb2RlIH0gZnJvbSAnQHNyYy9jb21wb25lbnRzL0B3cml0ZSc7XG5jb25zdCB0aXRsZSA9ICd3ZWJwYWNrNCBsb2FkZXIg57uP6aqM5bCP57uTJztcbmNvbnN0IGFydGljbGUgPSBzZWN0aW9uKHRpdGxlKShwIGBsb2FkZXIg55qE5Yqf6IO96Z2e5bi45by65aSn77yM5Yet5YCfIGxvYWRlcu+8jOS9oOWPr+S7peWIm+mAoOWHuuiHquW3seeahOiHquWumuS5iSBqYXZhc2NyaXB044CC5Zyo57yW5YaZbG9hZGVy55qE5pe25YCZ77yM5oiR5Li76KaB5LuO5Lik5Liq5paH5qGj54K56L+b6KGM5Y+C6ICD77yaYCwgcCBg5LiA5Liq5piv5a6Y5pa555qEICR7YSBg57yW5YaZ5LiA5LiqbG9hZGVyYCgnaHR0cHM6Ly93d3cud2VicGFja2pzLmNvbS9jb250cmlidXRlL3dyaXRpbmctYS1sb2FkZXIvJyl9YCwgcCBg5Y+m5LiA5Liq5pivICR7YSBgbG9hZGVyIEFQSWAoJ2h0dHBzOi8vd3d3LndlYnBhY2tqcy5jb20vYXBpL2xvYWRlcnMvJyl9YCwgcCBg5YW25Lit56ys5LqM5Liq5paH5qGj5bCk5YW26YeN6KaB44CCYCwgc2VjdGlvbign5piO56GuIGxvYWRlciDkuIrkuIvmlocnKShwIGDlhYnnnIvmlofmoaPmmK/ov5zov5zkuI3lpJ/nmoTvvIzkuLrkuobkuobop6Mgd2VicGFjayBsb2FkZXIg55qE5LiK5LiL5paH77yM5oiR5Lus5Y+v5Lul5YaZ5LiA5Liq566A5Y2V55qEbG9hZGVyKGV4YW1wbGUtbG9hZGVyKe+8mmAsIHByZWNvZGUoYC8vZmlsZW5hbWU6IGV4YW1wbGUtbG9hZGVyL2luZGV4LmpzXG5jb25zdCBmID0gZnVuY3Rpb24oc3JjKSB7XG4gIGNvbnNvbGUubG9nKHRoaXMpXG4gIHJldHVybiBzcmNcbn1cbm1vZHVsZS5leHBvcnRzID0gZjtgKSgnanMnKSwgcCBg5ZyoIHdlYnBhY2sgY29uZmlnIOaWh+S7tuS4re+8jOWwhui/meS4qiBsb2FkZXIg5oyC6L295Yiw77yM5q+U5aaCIC5qcyDnqIvluo/miJbogIUgLnRzIOeoi+W6j+S4i+mdou+8jCDnnIvnnIvov5DooYwgd2VicGFjayDlkI7vvIxleGFtcGxlLWxvYWRlciDkvJrmiZPljbDlh7rku4DkuYhgLCBwIGDlrp7pmYXkuIrvvIznlLHkuo7miZPljbDlh7rmnaXnmoQgdGhpcyDpnZ7luLjlpKfvvIzmiYDku6XmiJHlu7rorq7kvaDlj4LogIMgbG9hZGVyIEFQSe+8jOaMh+WumuaJk+WNsOWvueixoe+8mmAsIHByZWNvZGUoYFxuICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgXG4gICAgPT5cbiAgICBcbiAgICBjb25zb2xlLmxvZygndmVyc2lvbicsIHRoaXMudmVyc2lvbilcbiAgICBjb25zb2xlLmxvZygnY29udGV4dCcsIHRoaXMuY29udGV4dClcbiAgICBjb25zb2xlLmxvZygncmVxdWVzdCcsIHRoaXMucmVxdWVzdClcbiAgICBjb25zb2xlLmxvZygncXVlcnknLCB0aGlzLnF1ZXJ5KVxuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgdGhpcy5kYXRhKVxuICAgIGNvbnNvbGUubG9nKCdsb2FkZXJzJywgdGhpcy5sb2FkZXJzKVxuICAgIGNvbnNvbGUubG9nKCdsb2FkZXJJbmRleCcsIHRoaXMubG9hZGVySW5kZXgpXG4gICAgY29uc29sZS5sb2coJ3Jlc291cmNlJywgdGhpcy5yZXNvdXJjZSlcbiAgICBjb25zb2xlLmxvZygncmVzb3VyY2VQYXRoJyx0aGlzLnJlc291cmNlUGF0aClcbiAgICBjb25zb2xlLmxvZygncmVzb3VyY2VRdWVyeScsdGhpcy5yZXNvdXJjZVF1ZXJ5KVxuICAgIC4uLmApKCdqcycpKSwgc2VjdGlvbigncXVlcnkg55qE54m55q6K5L2c55SoJykocCBgd2VicGFjayDnmoTkuIDkuKrmnLrliLbvvJpgLCBwIGAke2NvZGUoJ2ltcG9ydCB7YX0gZnJvbSBcIi4vYVwiJykoKX0g5ZKMICR7Y29kZSgnaW1wb3J0IHtifSBmcm9tIFwiLi9hXCInKSgpfSDnlLHkuo7or7fmsYLlnLDlnYDpg73mmK8gXCIuL2FcIiwgd2VicGFjayDkuI3kvJrlr7kgLi9hIOmHjeWkjeWkhOeQhu+8jOiAjOaYr+WkhOeQhuS4gOasoeWQju+8jOi/lOWbnue8k+WtmOWQjueahOe7k+aenO+8jOaJgOS7pei/meS4pOS4quWvvOWFpeivreWPpeW+l+WIsOeahOmDveaYr+WQjOS4gOS4qiAuL2Eg56iL5bqPYCwgcCBg5L2G5aaC5p6c5ZCO5LiA5Liq5a+85YWl6K+t5Y+l5pS55Li677yaJHtjb2RlKCdpbXBvcnQge2J9IGZyb20gXCIuL2E/cXVlcnk9MTIzXCInKSgpfSDlsIbot7Pov4cgd2VicGFjayDnmoTnvJPlrZjvvIzph43mlrDlr7kgLi9hIOi/m+ihjOWkhOeQhu+8jOi/meS4quaXtuWAmeWmguaenOaIkeS7rOeahGxvYWRlcui/m+ihjOS4gOS6m+eJueauiueahOW3peS9nO+8jOWPr+S7pei+vuWIsO+8jOaYr+WQjOS4gOS4qiAuL2Eg5Y206L+U5Zue5LiN5ZCM56iL5bqP55qE5pWI5p6cYCksIHNlY3Rpb24oJ+abtOWkmueahOS4iuS4i+aWhycpKHAgYOacieS6m+aXtuWAme+8jOaIkeS7rOW4jOacm+efpemBk+iwg+eUqCBBIOaWh+S7tueahOaYryBCIOi/mOaYryBD77yMIOWNs+aYjuehrnJlcXVlc3TmmK/osIHlj5HotbfnmoTvvIzmiJHkuKrkurrmnInkuKTnp43mlrnms5XvvJpgLCBwIGDnrKzkuIDnp43vvIzmmK/nm7TmjqXku44gdGhpcy5fbW9kdWxlLmlzc3VlciDojrflj5bkv6Hmga/vvIzov5nph4zmnInkuKTnp43mg4XlhrUo5oiR5Lus5YGH6K6+6KKr6LCD55So44CB5Y2z5bCG6KaB5aSE55CG55qE5paH5Lu25pivIGluZGV4LnRz77yaYCwgcCBgMS4gaW5kZXgudHMg5pivIHdlYnBhY2sg55qEIGVudHJ577yM5Lya5pyJ5L2c5Li6IGVudHJ5IOiAjOiiq+ezu+e7n+iwg+eUqOeahOaDheWGte+8jOi/meaXtiB0aGlzLl9tb2R1bGUuaXNzdWVyIOS4jeWtmOWcqGAsIHAgYDIuIOWmguaenOaYryBwYWdlMi50cyDosIPnlKggaW5kZXgudHPvvIzpgqPkuYjmiJHku6zlnKjlpITnkIYgaW5kZXgudHMg5pe277yM5Y+v5Lul6YCa6L+HIHRoaXMuX21vZHVsZS5pc3N1ZXIuX3NvdXJjZS5fbmFtZSDmnaXojrflj5bosIPnlKjmlrkgcGFnZTIudHMg55qE5Zyw5Z2AYCwgcCBg6ZyA6KaB5rOo5oSP55qE5piv77yM5L2g5Y+v6IO95Lmf55+l6YGT5LqG77yMdGhpcy5fbW9kdWxlIOW3sue7j+aYr+WNs+Wwhuiiq+W6n+W8g+eahOWxnuaAp+S6hmAsIHAgYOesrOS6jOenje+8jOaYr+WcqOWkhOeQhiBwYWdlMi50cyDml7bvvIzlsIYgcGFnZTIudHMg5Lit5a+5IGluZGV4LnRzIOeahOiwg+eUqOivreWPpSAke2NvZGUoJ2ltcG9ydCBcIi4vaW5kZXgudHNcIicpKCl9IOabv+aNouS4uiAke2NvZGUoJ2ltcG9ydCAuL2luZGV4LnRzP2Zyb209cGFnZTIudHMnKSgpfWApKTtcblxuICAgICAgd2luZG93Lm91dGVyLnZpZXdzWycvd2VicGFjay93ZWJwYWNrLWxvYWRlciddPXtwYWdlLHRpdGxlfTtjb25zb2xlLmxvZyh0aXRsZSkiXSwic291cmNlUm9vdCI6IiJ9