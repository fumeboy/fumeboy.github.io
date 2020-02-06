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
/******/ 		"outer": 0
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
/******/ 	deferredModules.push(["./src/outer/index.ts","vendors","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/outer/layout.styl":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/outer/layout.styl ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "img {\n  max-width: 100%;\n}\n#footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: 10rem;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: row;\n}\n#main {\n  width: 100%;\n}\n#router_view {\n  margin-right: 340px;\n}\n#sidebar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 6;\n  width: 340px;\n  min-height: 100%;\n  background: #fff;\n  border-left: 1px solid #eee;\n}\n@media screen and (max-width: 720px) {\n  #router_view {\n    margin-right: 0;\n  }\n  #sidebar {\n    position: relative;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/outer/loading.styl":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/outer/loading.styl ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  position: relative;\n}\n.loading__loading___3N5zL {\n  position: fixed;\n  font-size: 20px;\n  font-weight: 700;\n  border-bottom: 2px solid #000;\n  left: 10px;\n  top: 10px;\n  transition: all ease-in-out 1s;\n  opacity: 1;\n}\n.loading__done___2TN4I {\n  opacity: 0;\n}\n.loading__undone___1he2B {\n  opacity: 1;\n}\n", ""]);

// Exports
exports.locals = {
	"loading": "loading__loading___3N5zL",
	"done": "loading__done___2TN4I",
	"undone": "loading__undone___1he2B"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/outer/sidebar.styl":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/outer/sidebar.styl ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sidebar__sidebar___2-zPP>* {\n  width: 100%;\n}\n.sidebar__sidebar___2-zPP .sidebar__header___1hIm0 {\n  margin-top: 10px;\n}\n.sidebar__sidebar___2-zPP .sidebar__footer___1ZBhF {\n  margin-top: 30px;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n}\n.sidebar__sidebar___2-zPP .sidebar__content___3TBag .sidebar__menu_btn___3ock7 {\n  outline: none;\n  display: block;\n  width: 300px;\n  max-width: 300px;\n  margin: 20px auto;\n  background: #fff;\n  border: 2px solid #eee;\n  padding: 10px 20px;\n  font-size: 18px;\n  font-weight: 500;\n}\n@media screen and (max-width: 720px) {\n  .sidebar__footer___1ZBhF {\n    position: relative !important;\n  }\n}\n", ""]);

// Exports
exports.locals = {
	"sidebar": "sidebar__sidebar___2-zPP",
	"header": "sidebar__header___1hIm0",
	"footer": "sidebar__footer___1ZBhF",
	"content": "sidebar__content___3TBag",
	"menu_btn": "sidebar__menu_btn___3ock7"
};

/***/ }),

/***/ "./src/outer/footer.ts":
/*!*****************************!*\
  !*** ./src/outer/footer.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var footer = new _justDom.Component().c();

/***/ }),

/***/ "./src/outer/index.ts":
/*!****************************!*\
  !*** ./src/outer/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loading = __webpack_require__(/*! ./loading */ "./src/outer/loading.ts");

var _router = __webpack_require__(/*! ./router */ "./src/outer/router.ts");

__webpack_require__(/*! ./sidebar */ "./src/outer/sidebar.ts");

__webpack_require__(/*! ./footer */ "./src/outer/footer.ts");

__webpack_require__(/*! ./layout.styl */ "./src/outer/layout.styl");

window['outer'] = {
    router: _router.router,
    loading: _loading.loading,
    views: _router.views
};
window.onload = function () {
    _router.router.run();
};

/***/ }),

/***/ "./src/outer/layout.styl":
/*!*******************************!*\
  !*** ./src/outer/layout.styl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/stylus-loader??ref--5-2!./layout.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/outer/layout.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/outer/loading.styl":
/*!********************************!*\
  !*** ./src/outer/loading.styl ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/stylus-loader??ref--5-2!./loading.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/outer/loading.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/outer/loading.ts":
/*!******************************!*\
  !*** ./src/outer/loading.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loading = undefined;

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var _loading = __webpack_require__(/*! ./loading.styl */ "./src/outer/loading.styl");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var if_loading = new _justDom.Status(false);
var setLoading = function setLoading() {
    if_loading.set(true);
};
var setLoaded = function setLoaded() {
    if_loading.set(false);
};
var elem = new _justDom.Component().c('loading').a({ class: _loading2.default.loading }).with(if_loading, (0, _justDom.reactive_class)(function (v) {
    return v ? _loading2.default.undone : _loading2.default.done;
})).elem;
var loading = exports.loading = {
    setLoading: setLoading,
    setLoaded: setLoaded,
    elem: elem
};
document.querySelector('#header').appendChild(elem);

/***/ }),

/***/ "./src/outer/router.ts":
/*!*****************************!*\
  !*** ./src/outer/router.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.views = exports.router = undefined;

var _franxx = __webpack_require__(/*! franxx */ "./node_modules/franxx/dist/franxx.esm.js");

var router = exports.router = (0, _franxx.createBrowserRouter)();
var views = exports.views = {};
var loadJS = function loadJS(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.getElementsByTagName('head')[0].appendChild(script);
};
var router_view = document.createTextNode('');
document.querySelector('#router_view').appendChild(router_view);
var loadView = function loadView(path) {
    if (views[path]) {
        var elem = views[path].page;
        document.title = views[path].title;
        router_view.replaceWith(elem);
        router_view = elem;
        window['outer'].loading.setLoaded();
    } else {
        loadJS(path + '.js', function () {
            loadView(path);
        });
    }
};
router.add('/', function () {
    return loadView('/index');
});
//[routes]
router.add('/ComputerOrganization/Chapter1/1.html', function () {
    return loadView('/ComputerOrganization/Chapter1/1');
});
router.add('/ComputerOrganization/Chapter1/2.html', function () {
    return loadView('/ComputerOrganization/Chapter1/2');
});
router.add('/ComputerOrganization/Chapter1/3.html', function () {
    return loadView('/ComputerOrganization/Chapter1/3');
});
router.add('/ComputerOrganization/Chapter1/4.html', function () {
    return loadView('/ComputerOrganization/Chapter1/4');
});
router.add('/ComputerOrganization/Chapter1/5.html', function () {
    return loadView('/ComputerOrganization/Chapter1/5');
});
router.add('/ComputerOrganization/Chapter1/6.html', function () {
    return loadView('/ComputerOrganization/Chapter1/6');
});
router.add('/ComputerOrganization/Chapter2/1.html', function () {
    return loadView('/ComputerOrganization/Chapter2/1');
});
router.add('/ComputerOrganization/Chapter2/2.html', function () {
    return loadView('/ComputerOrganization/Chapter2/2');
});
router.add('/ComputerOrganization/Chapter2/3.html', function () {
    return loadView('/ComputerOrganization/Chapter2/3');
});
router.add('/ComputerOrganization/Chapter2/4.html', function () {
    return loadView('/ComputerOrganization/Chapter2/4');
});
router.add('/ComputerOrganization/Chapter2/5.html', function () {
    return loadView('/ComputerOrganization/Chapter2/5');
});
router.add('/ComputerOrganization/Chapter2/6.html', function () {
    return loadView('/ComputerOrganization/Chapter2/6');
});
router.add('/ComputerOrganization/Chapter3/1.html', function () {
    return loadView('/ComputerOrganization/Chapter3/1');
});
router.add('/ComputerOrganization/Chapter3/2.html', function () {
    return loadView('/ComputerOrganization/Chapter3/2');
});
router.add('/ComputerOrganization/Chapter3/3.html', function () {
    return loadView('/ComputerOrganization/Chapter3/3');
});
router.add('/ComputerOrganization/Chapter3/4.html', function () {
    return loadView('/ComputerOrganization/Chapter3/4');
});
router.add('/ComputerOrganization/Chapter3/5.html', function () {
    return loadView('/ComputerOrganization/Chapter3/5');
});
router.add('/ComputerOrganization/Chapter3/6.html', function () {
    return loadView('/ComputerOrganization/Chapter3/6');
});
router.add('/ComputerOrganization/Chapter4/1.html', function () {
    return loadView('/ComputerOrganization/Chapter4/1');
});
router.add('/ComputerOrganization/Chapter4/2.html', function () {
    return loadView('/ComputerOrganization/Chapter4/2');
});
router.add('/ComputerOrganization/Chapter4/3.html', function () {
    return loadView('/ComputerOrganization/Chapter4/3');
});
router.add('/ComputerOrganization/Chapter4/4.html', function () {
    return loadView('/ComputerOrganization/Chapter4/4');
});
router.add('/ComputerOrganization/Chapter4/5.html', function () {
    return loadView('/ComputerOrganization/Chapter4/5');
});
router.add('/ComputerOrganization/Chapter4/6.html', function () {
    return loadView('/ComputerOrganization/Chapter4/6');
});
router.add('/ComputerOrganization/Chapter5/1.html', function () {
    return loadView('/ComputerOrganization/Chapter5/1');
});
router.add('/ComputerOrganization/Chapter5/2.html', function () {
    return loadView('/ComputerOrganization/Chapter5/2');
});
router.add('/ComputerOrganization/Chapter5/3.html', function () {
    return loadView('/ComputerOrganization/Chapter5/3');
});
router.add('/ComputerOrganization/Chapter5/4.html', function () {
    return loadView('/ComputerOrganization/Chapter5/4');
});
router.add('/ComputerOrganization/Chapter5/5.html', function () {
    return loadView('/ComputerOrganization/Chapter5/5');
});
router.add('/ComputerOrganization/Chapter5/6.html', function () {
    return loadView('/ComputerOrganization/Chapter5/6');
});
router.add('/ComputerOrganization/Chapter6/1.html', function () {
    return loadView('/ComputerOrganization/Chapter6/1');
});
router.add('/ComputerOrganization/Chapter6/2.html', function () {
    return loadView('/ComputerOrganization/Chapter6/2');
});
router.add('/ComputerOrganization/Chapter6/3.html', function () {
    return loadView('/ComputerOrganization/Chapter6/3');
});
router.add('/ComputerOrganization/Chapter6/4.html', function () {
    return loadView('/ComputerOrganization/Chapter6/4');
});
router.add('/ComputerOrganization/Chapter6/5.html', function () {
    return loadView('/ComputerOrganization/Chapter6/5');
});
router.add('/ComputerOrganization/Chapter6/6.html', function () {
    return loadView('/ComputerOrganization/Chapter6/6');
});
router.add('/ComputerOrganization/Chapter7/1.html', function () {
    return loadView('/ComputerOrganization/Chapter7/1');
});
router.add('/ComputerOrganization/Chapter7/2.html', function () {
    return loadView('/ComputerOrganization/Chapter7/2');
});
router.add('/ComputerOrganization/Chapter7/3.html', function () {
    return loadView('/ComputerOrganization/Chapter7/3');
});
router.add('/ComputerOrganization/Chapter7/4.html', function () {
    return loadView('/ComputerOrganization/Chapter7/4');
});
router.add('/ComputerOrganization/Chapter7/5.html', function () {
    return loadView('/ComputerOrganization/Chapter7/5');
});
router.add('/ComputerOrganization/Chapter7/6.html', function () {
    return loadView('/ComputerOrganization/Chapter7/6');
});
router.add('/ComputerOrganization/Chapter8/1.html', function () {
    return loadView('/ComputerOrganization/Chapter8/1');
});
router.add('/ComputerOrganization/Chapter8/2.html', function () {
    return loadView('/ComputerOrganization/Chapter8/2');
});
router.add('/ComputerOrganization/Chapter8/3.html', function () {
    return loadView('/ComputerOrganization/Chapter8/3');
});
router.add('/ComputerOrganization/Chapter8/4.html', function () {
    return loadView('/ComputerOrganization/Chapter8/4');
});
router.add('/ComputerOrganization/Chapter8/5.html', function () {
    return loadView('/ComputerOrganization/Chapter8/5');
});
router.add('/ComputerOrganization/Chapter8/6.html', function () {
    return loadView('/ComputerOrganization/Chapter8/6');
});
router.add('/ComputerOrganization/index.html', function () {
    return loadView('/ComputerOrganization/index');
});
router.add('/index.html', function () {
    return loadView('/index');
});
router.add('/webpack/webpack-loader.html', function () {
    return loadView('/webpack/webpack-loader');
});

/***/ }),

/***/ "./src/outer/sidebar.styl":
/*!********************************!*\
  !*** ./src/outer/sidebar.styl ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/stylus-loader??ref--5-2!./sidebar.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/outer/sidebar.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/outer/sidebar.ts":
/*!******************************!*\
  !*** ./src/outer/sidebar.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['powered by ', ' & ', ''], ['powered by ', ' & ', '']),
    _templateObject2 = _taggedTemplateLiteral(['justDOM'], ['justDOM']),
    _templateObject3 = _taggedTemplateLiteral(['PenJS'], ['PenJS']);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var _sidebar = __webpack_require__(/*! ./sidebar.styl */ "./src/outer/sidebar.styl");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sidebar = new _justDom.Component().c(new _justDom.Component().a({ class: _sidebar2.default.header }).c((0, _write.h)("fumeboy's blog")(1)), new _justDom.Component().a({ class: _sidebar2.default.content }).c(new _justDom.Component('button').a({ class: _sidebar2.default.menu_btn }).c("goto  ' / ' ").on('click', function () {
    window['outer'].router.push('/');
}), new _justDom.Component('button').a({ class: _sidebar2.default.menu_btn }).c('router.back()').on('click', function () {
    window['outer'].router.back();
})), new _justDom.Component().a({ class: _sidebar2.default.footer }).c((0, _write.p)(_templateObject, (0, _write.a)(_templateObject2)('https://github.com/fumeboy/justDOM'), (0, _write.a)(_templateObject3)('https://github.com/fumeboy/PenJS')))).a({ class: _sidebar2.default.sidebar }).elem;
document.querySelector('#sidebar').appendChild(sidebar);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyL2xheW91dC5zdHlsIiwid2VicGFjazovLy8uL3NyYy9vdXRlci9sb2FkaW5nLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyL3NpZGViYXIuc3R5bCIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0ZXIvZm9vdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vdXRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0ZXIvbGF5b3V0LnN0eWw/Yzc2MCIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0ZXIvbG9hZGluZy5zdHlsPzlhOTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyL2xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0ZXIvc2lkZWJhci5zdHlsP2IyMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGVyL3NpZGViYXIudHMiXSwibmFtZXMiOlsiZm9vdGVyIiwiQ29tcG9uZW50IiwiYyIsIndpbmRvdyIsInJvdXRlciIsImxvYWRpbmciLCJ2aWV3cyIsIm9ubG9hZCIsInJ1biIsImlmX2xvYWRpbmciLCJTdGF0dXMiLCJzZXRMb2FkaW5nIiwic2V0Iiwic2V0TG9hZGVkIiwiZWxlbSIsImEiLCJjbGFzcyIsInN0eWxlIiwid2l0aCIsInYiLCJ1bmRvbmUiLCJkb25lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJsb2FkSlMiLCJ1cmwiLCJjYWxsYmFjayIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwic3JjIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyb3V0ZXJfdmlldyIsImNyZWF0ZVRleHROb2RlIiwibG9hZFZpZXciLCJwYXRoIiwicGFnZSIsInRpdGxlIiwicmVwbGFjZVdpdGgiLCJhZGQiLCJzaWRlYmFyIiwiaGVhZGVyIiwiY29u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SCxDQUE5QyxFQUErSyxJQUFJN0Msa0JBQUosQ0FBYyxRQUFkLEVBQXdCYyxDQUF4QixDQUEwQixFQUFFQyxPQUFPQyxrQkFBTTJCLFFBQWYsRUFBMUIsRUFBcUQxQyxDQUFyRCxDQUF1RCxlQUF2RCxFQUF3RTJDLEVBQXhFLENBQTJFLE9BQTNFLEVBQW9GLFlBQU07QUFBRTFDLFdBQU8sT0FBUCxFQUFnQkMsTUFBaEIsQ0FBdUIyQyxJQUF2QjtBQUFnQyxDQUE1SCxDQUEvSyxDQUQ3RCxFQUM0VyxJQUFJOUMsa0JBQUosR0FBZ0JjLENBQWhCLENBQWtCLEVBQUVDLE9BQU9DLGtCQUFNakIsTUFBZixFQUFsQixFQUEyQ0UsQ0FBM0MsS0FBNkM4QyxRQUE3QyxtQkFBNkQsZ0NBQVksb0NBQVosQ0FBN0QsRUFBb0gsZ0NBQVUsa0NBQVYsQ0FBcEgsRUFENVcsRUFFWGpDLENBRlcsQ0FFVCxFQUFFQyxPQUFPQyxrQkFBTXdCLE9BQWYsRUFGUyxFQUVpQjNCLElBRmpDO0FBR0FRLFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsRUFBbUNDLFdBQW5DLENBQStDaUIsT0FBL0MsRSIsImZpbGUiOiJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJvdXRlclwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL291dGVyL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCIsXCJjb21tb25cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbiNmb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4jbWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3JvdXRlcl92aWV3IHtcXG4gIG1hcmdpbi1yaWdodDogMzQwcHg7XFxufVxcbiNzaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogNjtcXG4gIHdpZHRoOiAzNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgI3JvdXRlcl92aWV3IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbiAgI3NpZGViYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sb2FkaW5nX19sb2FkaW5nX19fM041ekwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxcztcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5sb2FkaW5nX19kb25lX19fMlRONEkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmxvYWRpbmdfX3VuZG9uZV9fXzFoZTJCIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImxvYWRpbmdcIjogXCJsb2FkaW5nX19sb2FkaW5nX19fM041ekxcIixcblx0XCJkb25lXCI6IFwibG9hZGluZ19fZG9uZV9fXzJUTjRJXCIsXG5cdFwidW5kb25lXCI6IFwibG9hZGluZ19fdW5kb25lX19fMWhlMkJcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlYmFyX19zaWRlYmFyX19fMi16UFA+KiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNpZGViYXJfX3NpZGViYXJfX18yLXpQUCAuc2lkZWJhcl9faGVhZGVyX19fMWhJbTAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnNpZGViYXJfX3NpZGViYXJfX18yLXpQUCAuc2lkZWJhcl9fZm9vdGVyX19fMVpCaEYge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zaWRlYmFyX19zaWRlYmFyX19fMi16UFAgLnNpZGViYXJfX2NvbnRlbnRfX18zVEJhZyAuc2lkZWJhcl9fbWVudV9idG5fX18zb2NrNyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAuc2lkZWJhcl9fZm9vdGVyX19fMVpCaEYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2lkZWJhclwiOiBcInNpZGViYXJfX3NpZGViYXJfX18yLXpQUFwiLFxuXHRcImhlYWRlclwiOiBcInNpZGViYXJfX2hlYWRlcl9fXzFoSW0wXCIsXG5cdFwiZm9vdGVyXCI6IFwic2lkZWJhcl9fZm9vdGVyX19fMVpCaEZcIixcblx0XCJjb250ZW50XCI6IFwic2lkZWJhcl9fY29udGVudF9fXzNUQmFnXCIsXG5cdFwibWVudV9idG5cIjogXCJzaWRlYmFyX19tZW51X2J0bl9fXzNvY2s3XCJcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImp1c3QtZG9tXCI7XG5jb25zdCBmb290ZXIgPSBuZXcgQ29tcG9uZW50KCkuYygpO1xuIiwiaW1wb3J0IHsgbG9hZGluZyB9IGZyb20gJy4vbG9hZGluZyc7XG5pbXBvcnQgeyByb3V0ZXIsIHZpZXdzIH0gZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0ICcuL3NpZGViYXInO1xuaW1wb3J0ICcuL2Zvb3Rlcic7XG5pbXBvcnQgJy4vbGF5b3V0LnN0eWwnO1xud2luZG93WydvdXRlciddID0ge1xuICAgIHJvdXRlcixcbiAgICBsb2FkaW5nLFxuICAgIHZpZXdzXG59O1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICByb3V0ZXIucnVuKCk7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9sYXlvdXQuc3R5bFwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL2xheW91dC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL2xheW91dC5zdHlsXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9sb2FkaW5nLnN0eWxcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9sb2FkaW5nLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vbG9hZGluZy5zdHlsXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBTdGF0dXMsIHJlYWN0aXZlX2NsYXNzIH0gZnJvbSAnanVzdC1kb20nO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vbG9hZGluZy5zdHlsJztcbmNvbnN0IGlmX2xvYWRpbmcgPSBuZXcgU3RhdHVzKGZhbHNlKTtcbmNvbnN0IHNldExvYWRpbmcgPSAoKSA9PiB7XG4gICAgaWZfbG9hZGluZy5zZXQodHJ1ZSk7XG59O1xuY29uc3Qgc2V0TG9hZGVkID0gKCkgPT4ge1xuICAgIGlmX2xvYWRpbmcuc2V0KGZhbHNlKTtcbn07XG5jb25zdCBlbGVtID0gbmV3IENvbXBvbmVudCgpXG4gICAgLmMoJ2xvYWRpbmcnKVxuICAgIC5hKHsgY2xhc3M6IHN0eWxlLmxvYWRpbmcgfSlcbiAgICAud2l0aChpZl9sb2FkaW5nLCByZWFjdGl2ZV9jbGFzcyh2ID0+IHYgPyBzdHlsZS51bmRvbmUgOiBzdHlsZS5kb25lKSkuZWxlbTtcbmV4cG9ydCBjb25zdCBsb2FkaW5nID0ge1xuICAgIHNldExvYWRpbmcsXG4gICAgc2V0TG9hZGVkLFxuICAgIGVsZW1cbn07XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJykuYXBwZW5kQ2hpbGQoZWxlbSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyIH0gZnJvbSAnZnJhbnh4JztcbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKCk7XG5leHBvcnQgY29uc3Qgdmlld3MgPSB7fTtcbmxldCBsb2FkSlMgPSAodXJsLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0Lm9ubG9hZCA9IGNhbGxiYWNrO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07XG5sZXQgcm91dGVyX3ZpZXcgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91dGVyX3ZpZXcnKS5hcHBlbmRDaGlsZChyb3V0ZXJfdmlldyk7XG5sZXQgbG9hZFZpZXcgPSAocGF0aCkgPT4ge1xuICAgIGlmICh2aWV3c1twYXRoXSkge1xuICAgICAgICBsZXQgZWxlbSA9IHZpZXdzW3BhdGhdLnBhZ2U7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdmlld3NbcGF0aF0udGl0bGU7XG4gICAgICAgIHJvdXRlcl92aWV3LnJlcGxhY2VXaXRoKGVsZW0pO1xuICAgICAgICByb3V0ZXJfdmlldyA9IGVsZW07XG4gICAgICAgIHdpbmRvd1snb3V0ZXInXS5sb2FkaW5nLnNldExvYWRlZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbG9hZEpTKHBhdGggKyAnLmpzJywgKCkgPT4ge1xuICAgICAgICAgICAgbG9hZFZpZXcocGF0aCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5yb3V0ZXIuYWRkKCcvJywgKCkgPT4gbG9hZFZpZXcoJy9pbmRleCcpKTtcbi8vW3JvdXRlc11cbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMS8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjEvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMS8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjEvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMS80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjEvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMS81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIxLzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjEvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMi8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIyLzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjIvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMi8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIyLzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjIvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMi80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIyLzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjIvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMi81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIyLzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjIvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMy8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIzLzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjMvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMy8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIzLzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjMvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMy80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIzLzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjMvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyMy81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXIzLzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjMvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNC81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI0LzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjQvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNS8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjUvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNS8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjUvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNS80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjUvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNS81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI1LzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjUvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNi8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjYvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNi8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjYvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNi80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjYvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNi81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI2LzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjYvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNy8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI3LzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjcvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNy8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI3LzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjcvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNy80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI3LzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjcvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyNy81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI3LzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjcvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyOC8xLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI4LzEnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjgvMi5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyOC8yJykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI4LzMuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjgvMycpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyOC80Lmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI4LzQnKSk7XG5yb3V0ZXIuYWRkKCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjgvNS5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9DaGFwdGVyOC81JykpO1xucm91dGVyLmFkZCgnL0NvbXB1dGVyT3JnYW5pemF0aW9uL0NoYXB0ZXI4LzYuaHRtbCcsICgpID0+IGxvYWRWaWV3KCcvQ29tcHV0ZXJPcmdhbml6YXRpb24vQ2hhcHRlcjgvNicpKTtcbnJvdXRlci5hZGQoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9pbmRleC5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9Db21wdXRlck9yZ2FuaXphdGlvbi9pbmRleCcpKTtcbnJvdXRlci5hZGQoJy9pbmRleC5odG1sJywgKCkgPT4gbG9hZFZpZXcoJy9pbmRleCcpKTtcbnJvdXRlci5hZGQoJy93ZWJwYWNrL3dlYnBhY2stbG9hZGVyLmh0bWwnLCAoKSA9PiBsb2FkVmlldygnL3dlYnBhY2svd2VicGFjay1sb2FkZXInKSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL3NpZGViYXIuc3R5bFwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL3NpZGViYXIuc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9zaWRlYmFyLnN0eWxcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdqdXN0LWRvbSc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zaWRlYmFyLnN0eWwnO1xuaW1wb3J0IHsgYSwgaCwgcCB9IGZyb20gJ0BzcmMvY29tcG9uZW50cy9Ad3JpdGUnO1xuY29uc3Qgc2lkZWJhciA9IG5ldyBDb21wb25lbnQoKVxuICAgIC5jKG5ldyBDb21wb25lbnQoKS5hKHsgY2xhc3M6IHN0eWxlLmhlYWRlciB9KS5jKGgoXCJmdW1lYm95J3MgYmxvZ1wiKSgxKSksIG5ldyBDb21wb25lbnQoKS5hKHsgY2xhc3M6IHN0eWxlLmNvbnRlbnQgfSkuYyhuZXcgQ29tcG9uZW50KCdidXR0b24nKS5hKHsgY2xhc3M6IHN0eWxlLm1lbnVfYnRuIH0pLmMoXCJnb3RvICAnIC8gJyBcIikub24oJ2NsaWNrJywgKCkgPT4geyB3aW5kb3dbJ291dGVyJ10ucm91dGVyLnB1c2goJy8nKTsgfSksIG5ldyBDb21wb25lbnQoJ2J1dHRvbicpLmEoeyBjbGFzczogc3R5bGUubWVudV9idG4gfSkuYygncm91dGVyLmJhY2soKScpLm9uKCdjbGljaycsICgpID0+IHsgd2luZG93WydvdXRlciddLnJvdXRlci5iYWNrKCk7IH0pKSwgbmV3IENvbXBvbmVudCgpLmEoeyBjbGFzczogc3R5bGUuZm9vdGVyIH0pLmMocCBgcG93ZXJlZCBieSAke2EgYGp1c3RET01gKCdodHRwczovL2dpdGh1Yi5jb20vZnVtZWJveS9qdXN0RE9NJyl9ICYgJHthIGBQZW5KU2AoJ2h0dHBzOi8vZ2l0aHViLmNvbS9mdW1lYm95L1BlbkpTJyl9YCkpXG4gICAgLmEoeyBjbGFzczogc3R5bGUuc2lkZWJhciB9KS5lbGVtO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=