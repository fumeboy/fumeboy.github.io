(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "../justDOM/build/def/component.js":
/*!*****************************************!*\
  !*** ../justDOM/build/def/component.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vfor = __webpack_require__(/*! ./vfor */ "../justDOM/build/def/vfor.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = exports.Component = function () {
    function Component(tagName) {
        _classCallCheck(this, Component);

        if (!tagName) tagName = 'div';
        this.elem = document.createElement(tagName);
    }

    _createClass(Component, [{
        key: 'with',
        value: function _with(s, fn) {
            var run = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            s.with(fn, this);
            if (run) {
                // with 挂上时，执行一次
                fn(s.get(), this);
            }
            return this;
        }
    }, {
        key: 'a',
        value: function a(attr) {
            for (var x in attr) {
                this.elem.setAttribute(x, attr[x]);
            }
            return this;
        }
    }, {
        key: 'on',
        value: function on(k, event) {
            this.elem.addEventListener(k, event);
            return this;
        }
    }, {
        key: 'contain',
        value: function contain(child) {
            if (child instanceof Component) {
                this.elem.appendChild(child.elem);
            } else if (child instanceof _vfor.Components) {
                child.to(this.elem);
            } else if (child instanceof Node) {
                this.elem.appendChild(child);
            } else if (typeof child === 'string') {
                this.elem.appendChild(document.createTextNode(child));
            }
        }
    }, {
        key: 'c',
        value: function c() {
            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
                children[_key] = arguments[_key];
            }

            for (var i = 0, len = children.length; i < len; i++) {
                this.contain(children[i]);
            }
            return this;
        }
    }]);

    return Component;
}();

/***/ }),

/***/ "../justDOM/build/def/status.js":
/*!**************************************!*\
  !*** ../justDOM/build/def/status.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Status = exports.Status = function () {
    function Status(v) {
        _classCallCheck(this, Status);

        this.variable = v;
        this.callbacks = [];
    }

    _createClass(Status, [{
        key: 'update',
        value: function update(v) {
            this.variable = v;
            for (var i = 0, len = this.callbacks.length; i < len; i++) {
                var o = this.callbacks[i];
                o.fn.apply(o, [v].concat(_toConsumableArray(o.args ? o.args : [])));
            }
        }
    }, {
        key: 'get',
        value: function get() {
            return this.variable;
        }
    }, {
        key: 'set',
        value: function set(v) {
            var v_ = typeof v === 'function' ? v(this.variable) : v;
            if (this.variable !== v_) {
                this.update(v_);
            }
        }
    }, {
        key: 'must_update',
        value: function must_update(v) {
            this.update(typeof v === 'function' ? v(this.variable) : v);
        }
    }, {
        key: 'with',
        value: function _with(fn) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            this.callbacks.push({ fn: fn, args: args });
        }
    }]);

    return Status;
}();

var Statuses = exports.Statuses = function () {
    function Statuses(o) {
        var _this = this;

        _classCallCheck(this, Statuses);

        this.children_ = {};
        this.data = o;

        var _loop = function _loop(k) {
            if (k !== '__key__') {
                var s = new Status(o[k]);
                _this.children_[k] = s;
                s.with(function (v) {
                    o[k] = v;
                }); //子项更新时，同步母项
            }
        };

        for (var k in o) {
            _loop(k);
        }
    }

    _createClass(Statuses, [{
        key: 'set',
        value: function set() {
            var o = this.data;
            for (var k in o) {
                var s = this.children_[k];
                if (s) s.set(o[k]);
            }
        }
    }, {
        key: 'get',
        value: function get() {
            return this.data;
        }
    }, {
        key: 'children',
        value: function children() {
            return this.children_;
        }
    }]);

    return Statuses;
}();

/***/ }),

/***/ "../justDOM/build/def/vfor.js":
/*!************************************!*\
  !*** ../justDOM/build/def/vfor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vfor = exports.Components = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _status = __webpack_require__(/*! ./status */ "../justDOM/build/def/status.js");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Components = exports.Components = function Components() {
    _classCallCheck(this, Components);
};

var vfor = exports.vfor = function (_Components) {
    _inherits(vfor, _Components);

    function vfor(array, item_fn, key_fn) {
        _classCallCheck(this, vfor);

        var _this = _possibleConstructorReturn(this, (vfor.__proto__ || Object.getPrototypeOf(vfor)).call(this));

        _this.begin = document.createTextNode('');
        _this.end = document.createTextNode('');
        _this.cache = {};
        _this.key = 0;
        _this.old_list = [];
        if (!key_fn) key_fn = _this.default_key_fn;
        _this.array = array;
        _this.key_fn = key_fn;
        _this.item_fn = item_fn;
        return _this;
    }

    _createClass(vfor, [{
        key: 'default_key_fn',
        value: function default_key_fn() {
            this.key++;
            return this.key;
        }
    }, {
        key: 'to',
        value: function to(parentNode) {
            parentNode.appendChild(this.begin);
            for (var i = 0, len = this.array.length; i < len; i++) {
                var data = this.array[i];
                var key = data.__key__ = this.key_fn(data);
                var status = new _status.Statuses(data);
                var item = this.cache[key] = {
                    component: this.item_fn(status),
                    status: status
                };
                this.old_list.push({ key: key, el: item.component.elem });
                parentNode.appendChild(item.component.elem);
            }
            parentNode.appendChild(this.end);
            this.parentNode = parentNode;
            delete this.array;
        }
    }, {
        key: 'with',
        value: function _with(s, fn) {
            s.with(fn, this);
            return this;
        }
    }, {
        key: 'update',
        value: function update(array) {
            if (this.array) return;
            var key_map = {},
                new_list = [],
                len = array.length;
            for (var i = 0; i < len; i++) {
                var item = void 0;
                var data = array[i];
                var key = data.__key__;
                if (key) {
                    item = this.cache[key];
                    item.status.set();
                } else {
                    key = this.key_fn(data);
                    var status = new _status.Statuses(data);
                    item = this.cache[key] = {
                        component: this.item_fn(status),
                        status: status
                    };
                }
                key_map[key] = 1;
                new_list.push({ key: key, el: item.component.elem });
            }
            for (var _i = 0; _i < this.old_list.length; _i++) {
                var _item = this.old_list[_i];
                if (!key_map[_item.key]) {
                    this.parentNode.removeChild(_item.el);
                }
            }
            var ptr = this.end,
                ptr2 = this.begin,
                index = len - 1,
                index2 = 0,
                clean = function clean() {
                // 检查首尾元素是否相同，缩短检查组
                for (; index2 <= index;) {
                    if (new_list[index2].el === ptr2.nextSibling) {
                        index2++;
                        ptr2 = ptr2.nextSibling;
                    } else {
                        break;
                    }
                }
                for (; index > index2;) {
                    if (new_list[index].el === ptr.previousSibling) {
                        index--;
                        ptr = ptr.previousSibling;
                    } else {
                        break;
                    }
                }
            };
            clean();
            while (index >= index2) {
                this.parentNode.insertBefore(new_list[index].el, ptr);
                ptr = ptr.previousSibling;
                index--;
                clean();
            }
            this.old_list = new_list;
        }
    }]);

    return vfor;
}(Components);

/***/ }),

/***/ "../justDOM/build/index.js":
/*!*********************************!*\
  !*** ../justDOM/build/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _status = __webpack_require__(/*! ./def/status */ "../justDOM/build/def/status.js");

Object.keys(_status).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _status[key];
    }
  });
});

var _component = __webpack_require__(/*! ./def/component */ "../justDOM/build/def/component.js");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _component[key];
    }
  });
});

var _vfor = __webpack_require__(/*! ./def/vfor */ "../justDOM/build/def/vfor.js");

Object.keys(_vfor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _vfor[key];
    }
  });
});

var _reactive_event = __webpack_require__(/*! ./shortcut/reactive_event */ "../justDOM/build/shortcut/reactive_event.js");

Object.keys(_reactive_event).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactive_event[key];
    }
  });
});

var _reactive_class = __webpack_require__(/*! ./shortcut/reactive_class */ "../justDOM/build/shortcut/reactive_class.js");

Object.keys(_reactive_class).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactive_class[key];
    }
  });
});

var _reactive_text = __webpack_require__(/*! ./shortcut/reactive_text */ "../justDOM/build/shortcut/reactive_text.js");

Object.keys(_reactive_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactive_text[key];
    }
  });
});

/***/ }),

/***/ "../justDOM/build/shortcut/reactive_class.js":
/*!***************************************************!*\
  !*** ../justDOM/build/shortcut/reactive_class.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var reactive_class = exports.reactive_class = function reactive_class(fn) {
    var old = void 0;
    return function (v, e) {
        var classes = e.elem.classList,
            cls = fn(v);
        if (cls !== old) {
            if (old) classes.remove(old);
            if (cls) classes.add(cls);
            old = cls;
        }
    };
};

/***/ }),

/***/ "../justDOM/build/shortcut/reactive_event.js":
/*!***************************************************!*\
  !*** ../justDOM/build/shortcut/reactive_event.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var reactive_event = exports.reactive_event = function reactive_event(k, fn) {
    var old = void 0;
    return function (v, e) {
        var event = fn(v);
        if (event !== old) {
            e.elem.removeEventListener(k, old);
            e.elem.addEventListener(k, event);
            old = event;
        }
    };
};

/***/ }),

/***/ "../justDOM/build/shortcut/reactive_text.js":
/*!**************************************************!*\
  !*** ../justDOM/build/shortcut/reactive_text.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var reactive_text = exports.reactive_text = function reactive_text(s, fn) {
    var text = document.createTextNode(fn ? fn(s.get()) : s.get() + '');
    if (fn) s.with(function (v) {
        return text.data = fn(v);
    });else s.with(function (v) {
        return text.data = v;
    });
    return text;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@questionnaire/multipleChoice.styl":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/components/@questionnaire/multipleChoice.styl ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".multipleChoice__btn___1cx_z {\n  border: 0;\n  padding: 7px 20px;\n  margin: 0 5px;\n  outline: none;\n}\n.multipleChoice__btn___1cx_z:hover {\n  background: #eee;\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw {\n  border-radius: 3px;\n  padding: 10px;\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__item___36vFx,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__item___36vFx {\n  position: relative;\n  padding: 2px 5px;\n  margin: 10px 5px;\n  border-radius: 5px;\n  transition: all ease 0.3s;\n  border: 1px solid transparent;\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__item___36vFx:hover,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__item___36vFx:hover {\n  border-bottom: 1px solid #ccc;\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__item___36vFx::after,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__item___36vFx::after {\n  position: absolute;\n  right: 10px;\n  height: 100%;\n  top: 10px;\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__right___udofX,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__right___udofX {\n  border-bottom: 1px solid #ccc;\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__right___udofX::after,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__right___udofX::after,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__right___udofX.multipleChoice__selected___PnDcn::after,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__right___udofX.multipleChoice__selected___PnDcn::after {\n  content: 'right';\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__wrong___3rPui.multipleChoice__selected___PnDcn::after,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__wrong___3rPui.multipleChoice__selected___PnDcn::after {\n  content: 'wrong';\n}\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__content___2YrrW .multipleChoice__selected___PnDcn::after,\n.multipleChoice__main___3zb58 .multipleChoice__box___1Z2yw .multipleChoice__answers___3nsg2 .multipleChoice__selected___PnDcn::after {\n  content: 'selected';\n}\n", ""]);

// Exports
exports.locals = {
	"btn": "multipleChoice__btn___1cx_z",
	"main": "multipleChoice__main___3zb58",
	"box": "multipleChoice__box___1Z2yw",
	"content": "multipleChoice__content___2YrrW",
	"item": "multipleChoice__item___36vFx",
	"answers": "multipleChoice__answers___3nsg2",
	"right": "multipleChoice__right___udofX",
	"selected": "multipleChoice__selected___PnDcn",
	"wrong": "multipleChoice__wrong___3rPui"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/b.styl":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/components/@write/b.styl ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".b__bold___jMQsT {\n  font-weight: bold;\n}\n.b__bold___jMQsT::before,\n.b__bold___jMQsT::after {\n  content: \"＊\";\n  font-weight: 700;\n  padding: 0 3px;\n  left: -1.2em;\n}\n", ""]);

// Exports
exports.locals = {
	"bold": "b__bold___jMQsT"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/h.styl":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/components/@write/h.styl ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".h__h___27Per::before {\n  color: #009688;\n  font-weight: 700;\n  padding: 0 3px;\n  left: -1.2em;\n}\nh1 {\n  font-size: 1.5rem;\n  text-align: center;\n}\nh2 {\n  font-size: 1.3rem;\n}\nh3 {\n  font-size: 1.2rem;\n}\nh4 {\n  font-size: 1.1rem;\n}\nh5,\nh6 {\n  font-size: 1rem;\n}\nbody {\n  font-family: \"宋体\", Serif;\n}\n", ""]);

// Exports
exports.locals = {
	"h": "h__h___27Per"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/i.styl":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/components/@write/i.styl ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".i__italic___2V2_p {\n  font-style: italic;\n}\n", ""]);

// Exports
exports.locals = {
	"italic": "i__italic___2V2_p"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/ol_ul.styl":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/components/@write/ol_ul.styl ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ol_ul__ul___1DR3v,\n.ol_ul__ol___1JTWt {\n  padding-inline-start: 0px;\n}\n.ol_ul__ul___1DR3v > *,\n.ol_ul__ol___1JTWt > * {\n  display: list-item;\n}\n", ""]);

// Exports
exports.locals = {
	"ul": "ol_ul__ul___1DR3v",
	"ol": "ol_ul__ol___1JTWt"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/p.styl":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/components/@write/p.styl ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".p__p___2YEpV {\n  margin: 10px;\n}\n", ""]);

// Exports
exports.locals = {
	"p": "p__p___2YEpV"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/section.styl":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/stylus-loader??ref--5-2!./src/components/@write/section.styl ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".section__section___23_X5 {\n  border-left: 1px solid #ddd;\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n.section__section___23_X5 .section__content___KwA8o {\n  display: block;\n}\n.section__hide___2yydx {\n  display: none !important;\n}\n", ""]);

// Exports
exports.locals = {
	"section": "section__section___23_X5",
	"content": "section__content___KwA8o",
	"hide": "section__hide___2yydx"
};

/***/ }),

/***/ "./src/components/@page/link.ts":
/*!**************************************!*\
  !*** ./src/components/@page/link.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.link = undefined;

var _TaggedTemplateLiteralsArgs = __webpack_require__(/*! ../utils/TaggedTemplateLiteralsArgs */ "./src/components/utils/TaggedTemplateLiteralsArgs.ts");

var _TaggedTemplateLiteralsArgs2 = _interopRequireDefault(_TaggedTemplateLiteralsArgs);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var link = exports.link = function link() {
    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return function (href) {
        var ret = new _justDom.Component('a').a({ href: href });
        if (children.length) ret.c.apply(ret, _toConsumableArray((0, _TaggedTemplateLiteralsArgs2.default)(children)));else ret.c(href);
        return ret.on('click', function (e) {
            e.preventDefault();
            window['outer'].loading.setLoading();
            window['outer'].router.push(href);
        });
    };
};

/***/ }),

/***/ "./src/components/@questionnaire/index.ts":
/*!************************************************!*\
  !*** ./src/components/@questionnaire/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multipleChoice = __webpack_require__(/*! ./multipleChoice */ "./src/components/@questionnaire/multipleChoice.ts");

Object.keys(_multipleChoice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _multipleChoice[key];
    }
  });
});

/***/ }),

/***/ "./src/components/@questionnaire/multipleChoice.styl":
/*!***********************************************************!*\
  !*** ./src/components/@questionnaire/multipleChoice.styl ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./multipleChoice.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@questionnaire/multipleChoice.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/@questionnaire/multipleChoice.ts":
/*!*********************************************************!*\
  !*** ./src/components/@questionnaire/multipleChoice.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multipleChoice = exports.answer = undefined;

var _multipleChoice = __webpack_require__(/*! ./multipleChoice.styl */ "./src/components/@questionnaire/multipleChoice.styl");

var _multipleChoice2 = _interopRequireDefault(_multipleChoice);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var _write = __webpack_require__(/*! @src/components/@write */ "./src/components/@write/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var answer = exports.answer = function answer(inner) {
    var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return function (done) {
        var clicked = new _justDom.Status(false);
        return new _justDom.Component().c(inner).a({ class: _multipleChoice2.default.item }).with(done, (0, _justDom.reactive_event)('click', function (v) {
            return v ? null : function () {
                return clicked.set(function (v) {
                    return !v;
                });
            };
        })).with(clicked, (0, _justDom.reactive_class)(function (v) {
            return v ? _multipleChoice2.default.selected : null;
        })).with(done, (0, _justDom.reactive_class)(function (v) {
            return v ? right ? _multipleChoice2.default.right : _multipleChoice2.default.wrong : null;
        }));
    };
};
var multipleChoice = exports.multipleChoice = function multipleChoice(title) {
    for (var _len = arguments.length, content = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        content[_key - 1] = arguments[_key];
    }

    return function () {
        var _ref;

        for (var _len2 = arguments.length, answers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            answers[_key2] = arguments[_key2];
        }

        var done = new _justDom.Status(false);
        for (var i = 0, len = answers.length; i < len; i++) {
            if (typeof answers[i] !== 'function') {
                answers[i] = answer(answers[i], false)(done);
            } else {
                answers[i] = answers[i](done);
            }
        }
        return (0, _write.section)(title, new _justDom.Component('button').c(' ').a({ class: _multipleChoice2.default.btn }).with(done, (0, _justDom.reactive_event)('click', function (v) {
            return v ? null : function () {
                return done.set(true);
            };
        })), '?')(new _justDom.Component().c((_ref = new _justDom.Component()).c.apply(_ref, content).a({ class: _multipleChoice2.default.content }), new _justDom.Component().c(_write.ol.apply(undefined, answers)).a({ class: _multipleChoice2.default.answers })).a({ class: _multipleChoice2.default.box })).a({ class: _multipleChoice2.default.main });
    };
};

/***/ }),

/***/ "./src/components/@write/a.ts":
/*!************************************!*\
  !*** ./src/components/@write/a.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.a = undefined;

var _TaggedTemplateLiteralsArgs = __webpack_require__(/*! ../utils/TaggedTemplateLiteralsArgs */ "./src/components/utils/TaggedTemplateLiteralsArgs.ts");

var _TaggedTemplateLiteralsArgs2 = _interopRequireDefault(_TaggedTemplateLiteralsArgs);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var a = exports.a = function a() {
    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return function (href) {
        var ret = new _justDom.Component('a').a({ href: href });
        if (children.length) ret.c.apply(ret, _toConsumableArray((0, _TaggedTemplateLiteralsArgs2.default)(children)));else ret.c(href);
        return ret;
    };
};

/***/ }),

/***/ "./src/components/@write/b.styl":
/*!**************************************!*\
  !*** ./src/components/@write/b.styl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./b.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/b.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/@write/b.ts":
/*!************************************!*\
  !*** ./src/components/@write/b.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b = undefined;

var _b = __webpack_require__(/*! ./b.styl */ "./src/components/@write/b.styl");

var _b2 = _interopRequireDefault(_b);

var _TaggedTemplateLiteralsArgs = __webpack_require__(/*! ../utils/TaggedTemplateLiteralsArgs */ "./src/components/utils/TaggedTemplateLiteralsArgs.ts");

var _TaggedTemplateLiteralsArgs2 = _interopRequireDefault(_TaggedTemplateLiteralsArgs);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var b = exports.b = function b() {
    var _ref;

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return (_ref = new _justDom.Component('span')).c.apply(_ref, _toConsumableArray((0, _TaggedTemplateLiteralsArgs2.default)(children))).a({ class: _b2.default.bold });
};

/***/ }),

/***/ "./src/components/@write/code.ts":
/*!***************************************!*\
  !*** ./src/components/@write/code.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.code = undefined;

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var code = exports.code = function code(content) {
    return function (lang) {
        return new _justDom.Component('code').c(content).a({ class: 'code' });
    };
};

/***/ }),

/***/ "./src/components/@write/h.styl":
/*!**************************************!*\
  !*** ./src/components/@write/h.styl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./h.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/h.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/@write/h.ts":
/*!************************************!*\
  !*** ./src/components/@write/h.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.h = undefined;

var _h = __webpack_require__(/*! ./h.styl */ "./src/components/@write/h.styl");

var _h2 = _interopRequireDefault(_h);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h = exports.h = function h() {
    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return function (level) {
        var _ref;

        if (!level) level = 1;
        if (level > 6) level = 6;
        return (_ref = new _justDom.Component('h' + level)).c.apply(_ref, children).a({ class: _h2.default.h });
    };
};

/***/ }),

/***/ "./src/components/@write/i.styl":
/*!**************************************!*\
  !*** ./src/components/@write/i.styl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./i.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/i.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/@write/i.ts":
/*!************************************!*\
  !*** ./src/components/@write/i.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.i = undefined;

var _i = __webpack_require__(/*! ./i.styl */ "./src/components/@write/i.styl");

var _i2 = _interopRequireDefault(_i);

var _TaggedTemplateLiteralsArgs = __webpack_require__(/*! ../utils/TaggedTemplateLiteralsArgs */ "./src/components/utils/TaggedTemplateLiteralsArgs.ts");

var _TaggedTemplateLiteralsArgs2 = _interopRequireDefault(_TaggedTemplateLiteralsArgs);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var i = exports.i = function i() {
    var _ref;

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return (_ref = new _justDom.Component('span')).c.apply(_ref, _toConsumableArray((0, _TaggedTemplateLiteralsArgs2.default)(children))).a({ class: _i2.default.italic });
};

/***/ }),

/***/ "./src/components/@write/img.ts":
/*!**************************************!*\
  !*** ./src/components/@write/img.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.img = undefined;

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var img = exports.img = function img(url) {
    return function (text) {
        if (!text) text = '';
        return new _justDom.Component('img').c(text).a({ src: url });
    };
};

/***/ }),

/***/ "./src/components/@write/index.ts":
/*!****************************************!*\
  !*** ./src/components/@write/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _p = __webpack_require__(/*! ./p */ "./src/components/@write/p.ts");

Object.keys(_p).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _p[key];
    }
  });
});

var _precode = __webpack_require__(/*! ./precode */ "./src/components/@write/precode.ts");

Object.keys(_precode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _precode[key];
    }
  });
});

var _ul = __webpack_require__(/*! ./ul */ "./src/components/@write/ul.ts");

Object.keys(_ul).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ul[key];
    }
  });
});

var _section = __webpack_require__(/*! ./section */ "./src/components/@write/section.ts");

Object.keys(_section).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _section[key];
    }
  });
});

var _sub = __webpack_require__(/*! ./sub */ "./src/components/@write/sub.ts");

Object.keys(_sub).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sub[key];
    }
  });
});

var _sup = __webpack_require__(/*! ./sup */ "./src/components/@write/sup.ts");

Object.keys(_sup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sup[key];
    }
  });
});

var _a = __webpack_require__(/*! ./a */ "./src/components/@write/a.ts");

Object.keys(_a).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _a[key];
    }
  });
});

var _h = __webpack_require__(/*! ./h */ "./src/components/@write/h.ts");

Object.keys(_h).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _h[key];
    }
  });
});

var _i = __webpack_require__(/*! ./i */ "./src/components/@write/i.ts");

Object.keys(_i).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _i[key];
    }
  });
});

var _img = __webpack_require__(/*! ./img */ "./src/components/@write/img.ts");

Object.keys(_img).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _img[key];
    }
  });
});

var _b = __webpack_require__(/*! ./b */ "./src/components/@write/b.ts");

Object.keys(_b).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _b[key];
    }
  });
});

var _ol = __webpack_require__(/*! ./ol */ "./src/components/@write/ol.ts");

Object.keys(_ol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ol[key];
    }
  });
});

var _code = __webpack_require__(/*! ./code */ "./src/components/@write/code.ts");

Object.keys(_code).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _code[key];
    }
  });
});

/***/ }),

/***/ "./src/components/@write/ol.ts":
/*!*************************************!*\
  !*** ./src/components/@write/ol.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ol = undefined;

var _ol_ul = __webpack_require__(/*! ./ol_ul.styl */ "./src/components/@write/ol_ul.styl");

var _ol_ul2 = _interopRequireDefault(_ol_ul);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ol = exports.ol = function ol() {
    var _ref;

    return (_ref = new _justDom.Component('ol')).c.apply(_ref, arguments).a({ class: _ol_ul2.default.ol });
};

/***/ }),

/***/ "./src/components/@write/ol_ul.styl":
/*!******************************************!*\
  !*** ./src/components/@write/ol_ul.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./ol_ul.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/ol_ul.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/@write/p.styl":
/*!**************************************!*\
  !*** ./src/components/@write/p.styl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./p.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/p.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/@write/p.ts":
/*!************************************!*\
  !*** ./src/components/@write/p.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p = undefined;

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var _p = __webpack_require__(/*! ./p.styl */ "./src/components/@write/p.styl");

var _p2 = _interopRequireDefault(_p);

var _TaggedTemplateLiteralsArgs = __webpack_require__(/*! ../utils/TaggedTemplateLiteralsArgs */ "./src/components/utils/TaggedTemplateLiteralsArgs.ts");

var _TaggedTemplateLiteralsArgs2 = _interopRequireDefault(_TaggedTemplateLiteralsArgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// ex: p`loader 的 ${b`功能`} 非常强大`
var p = exports.p = function p() {
    var _ref;

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return (_ref = new _justDom.Component('p')).c.apply(_ref, _toConsumableArray((0, _TaggedTemplateLiteralsArgs2.default)(children))).a({ class: _p2.default.p });
};

/***/ }),

/***/ "./src/components/@write/precode.ts":
/*!******************************************!*\
  !*** ./src/components/@write/precode.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.precode = undefined;

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var precode = exports.precode = function precode(content) {
    return function (lang) {
        return new _justDom.Component('pre').c(new _justDom.Component('code').c(content).a({ class: 'precode' }));
    };
};

/***/ }),

/***/ "./src/components/@write/section.styl":
/*!********************************************!*\
  !*** ./src/components/@write/section.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/stylus-loader??ref--5-2!./section.styl */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/stylus-loader/index.js?!./src/components/@write/section.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/@write/section.ts":
/*!******************************************!*\
  !*** ./src/components/@write/section.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.section = undefined;

var _section = __webpack_require__(/*! ./section.styl */ "./src/components/@write/section.styl");

var _section2 = _interopRequireDefault(_section);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var _h = __webpack_require__(/*! ./h */ "./src/components/@write/h.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var level = 0;
var section = exports.section = function section() {
    for (var _len = arguments.length, title = Array(_len), _key = 0; _key < _len; _key++) {
        title[_key] = arguments[_key];
    }

    level++;
    return function () {
        var _ref, _ref2;

        var child = title ? [_h.h.apply(undefined, title)(level)] : [];
        child.push((_ref = new _justDom.Component()).c.apply(_ref, arguments).a({ class: _section2.default.content }));
        level--;
        return (_ref2 = new _justDom.Component('section')).c.apply(_ref2, child).a({ class: _section2.default.section });
    };
};

/***/ }),

/***/ "./src/components/@write/sub.ts":
/*!**************************************!*\
  !*** ./src/components/@write/sub.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sub = undefined;

var _TaggedTemplateLiteralsArgs = __webpack_require__(/*! ../utils/TaggedTemplateLiteralsArgs */ "./src/components/utils/TaggedTemplateLiteralsArgs.ts");

var _TaggedTemplateLiteralsArgs2 = _interopRequireDefault(_TaggedTemplateLiteralsArgs);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sub = exports.sub = function sub() {
    var _ref;

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return (_ref = new _justDom.Component('sub')).c.apply(_ref, _toConsumableArray((0, _TaggedTemplateLiteralsArgs2.default)(children)));
};

/***/ }),

/***/ "./src/components/@write/sup.ts":
/*!**************************************!*\
  !*** ./src/components/@write/sup.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sup = undefined;

var _TaggedTemplateLiteralsArgs = __webpack_require__(/*! ../utils/TaggedTemplateLiteralsArgs */ "./src/components/utils/TaggedTemplateLiteralsArgs.ts");

var _TaggedTemplateLiteralsArgs2 = _interopRequireDefault(_TaggedTemplateLiteralsArgs);

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sup = exports.sup = function sup() {
    var _ref;

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
    }

    return (_ref = new _justDom.Component('sup')).c.apply(_ref, _toConsumableArray((0, _TaggedTemplateLiteralsArgs2.default)(children)));
};

/***/ }),

/***/ "./src/components/@write/ul.ts":
/*!*************************************!*\
  !*** ./src/components/@write/ul.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ul = undefined;

var _justDom = __webpack_require__(/*! just-dom */ "../justDOM/build/index.js");

var ul = exports.ul = function ul() {
    var _ref;

    return (_ref = new _justDom.Component('ul')).c.apply(_ref, arguments);
};

/***/ }),

/***/ "./src/components/utils/TaggedTemplateLiteralsArgs.ts":
/*!************************************************************!*\
  !*** ./src/components/utils/TaggedTemplateLiteralsArgs.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (args) {
    var ret = [];
    for (var i = 0, len = args.length - 1; i < len; i++) {
        ret.push(args[0][i], args[i + 1]);
    }
    ret.push(args[0][args[0].length - 1]);
    return ret;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vanVzdERPTS9idWlsZC9kZWYvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi9qdXN0RE9NL2J1aWxkL2RlZi9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2p1c3RET00vYnVpbGQvZGVmL3Zmb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL2p1c3RET00vYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2p1c3RET00vYnVpbGQvc2hvcnRjdXQvcmVhY3RpdmVfY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL2p1c3RET00vYnVpbGQvc2hvcnRjdXQvcmVhY3RpdmVfZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL2p1c3RET00vYnVpbGQvc2hvcnRjdXQvcmVhY3RpdmVfdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9AcXVlc3Rpb25uYWlyZS9tdWx0aXBsZUNob2ljZS5zdHlsIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9iLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL2guc3R5bCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvaS5zdHlsIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9vbF91bC5zdHlsIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9wLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL3NlY3Rpb24uc3R5bCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9AcGFnZS9saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0BxdWVzdGlvbm5haXJlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0BxdWVzdGlvbm5haXJlL211bHRpcGxlQ2hvaWNlLnN0eWw/M2U3MCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9AcXVlc3Rpb25uYWlyZS9tdWx0aXBsZUNob2ljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvYi5zdHlsP2FmOGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL2IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL2guc3R5bD84ZGNhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9oLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9pLnN0eWw/OWIyZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvaW1nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL29sX3VsLnN0eWw/ZTllOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvcC5zdHlsPzY2NjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL3ByZWNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL3NlY3Rpb24uc3R5bD84MjJiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9zZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0B3cml0ZS9zdWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQHdyaXRlL3N1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ad3JpdGUvdWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MudHMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwidGFnTmFtZSIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzIiwiZm4iLCJydW4iLCJ3aXRoIiwiZ2V0IiwiYXR0ciIsIngiLCJzZXRBdHRyaWJ1dGUiLCJrIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsIkNvbXBvbmVudHMiLCJ0byIsIk5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkcmVuIiwiaSIsImxlbiIsImxlbmd0aCIsImNvbnRhaW4iLCJTdGF0dXMiLCJ2IiwidmFyaWFibGUiLCJjYWxsYmFja3MiLCJvIiwiYXJncyIsInZfIiwidXBkYXRlIiwicHVzaCIsIlN0YXR1c2VzIiwiY2hpbGRyZW5fIiwiZGF0YSIsInNldCIsInZmb3IiLCJhcnJheSIsIml0ZW1fZm4iLCJrZXlfZm4iLCJiZWdpbiIsImVuZCIsImNhY2hlIiwia2V5Iiwib2xkX2xpc3QiLCJkZWZhdWx0X2tleV9mbiIsInBhcmVudE5vZGUiLCJfX2tleV9fIiwic3RhdHVzIiwiaXRlbSIsImNvbXBvbmVudCIsImVsIiwia2V5X21hcCIsIm5ld19saXN0IiwicmVtb3ZlQ2hpbGQiLCJwdHIiLCJwdHIyIiwiaW5kZXgiLCJpbmRleDIiLCJjbGVhbiIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwicmVhY3RpdmVfY2xhc3MiLCJvbGQiLCJlIiwiY2xhc3NlcyIsImNsYXNzTGlzdCIsImNscyIsInJlbW92ZSIsImFkZCIsInJlYWN0aXZlX2V2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWN0aXZlX3RleHQiLCJ0ZXh0IiwibGluayIsImhyZWYiLCJyZXQiLCJhIiwiYyIsIm9uIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImFuc3dlciIsImlubmVyIiwicmlnaHQiLCJkb25lIiwiY2xpY2tlZCIsImNsYXNzIiwic3R5bGUiLCJzZWxlY3RlZCIsIndyb25nIiwibXVsdGlwbGVDaG9pY2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJhbnN3ZXJzIiwiYnRuIiwib2wiLCJib3giLCJtYWluIiwiYiIsImJvbGQiLCJjb2RlIiwibGFuZyIsImgiLCJsZXZlbCIsIml0YWxpYyIsImltZyIsInVybCIsInNyYyIsInAiLCJwcmVjb2RlIiwic2VjdGlvbiIsInN1YiIsInN1cCIsInVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFDYUEsUyxXQUFBQSxTO0FBQ1QsdUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsWUFBSSxDQUFDQSxPQUFMLEVBQ0lBLFVBQVUsS0FBVjtBQUNKLGFBQUtDLElBQUwsR0FBWUMsU0FBU0MsYUFBVCxDQUF1QkgsT0FBdkIsQ0FBWjtBQUNIOzs7OzhCQUNJSSxDLEVBQUdDLEUsRUFBZ0I7QUFBQSxnQkFBWkMsR0FBWSx1RUFBTixJQUFNOztBQUNwQkYsY0FBRUcsSUFBRixDQUFPRixFQUFQLEVBQVcsSUFBWDtBQUNBLGdCQUFJQyxHQUFKLEVBQVM7QUFDTDtBQUNBRCxtQkFBR0QsRUFBRUksR0FBRixFQUFILEVBQVksSUFBWjtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7MEJBQ0NDLEksRUFBTTtBQUNKLGlCQUFLLElBQUlDLENBQVQsSUFBY0QsSUFBZCxFQUFvQjtBQUNoQixxQkFBS1IsSUFBTCxDQUFVVSxZQUFWLENBQXVCRCxDQUF2QixFQUEwQkQsS0FBS0MsQ0FBTCxDQUExQjtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7MkJBQ0VFLEMsRUFBR0MsSyxFQUFPO0FBQ1QsaUJBQUtaLElBQUwsQ0FBVWEsZ0JBQVYsQ0FBMkJGLENBQTNCLEVB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Qm1GLENBQXBCLHVCQUFQO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDRFEsVUFBQ25ELElBQUQsRUFBVTtBQUNyQixRQUFJaUQsTUFBTSxFQUFWO0FBQ0EsU0FBSyxJQUFJMUQsSUFBSSxDQUFSLEVBQVdDLE1BQU1RLEtBQUtQLE1BQUwsR0FBYyxDQUFwQyxFQUF1Q0YsSUFBSUMsR0FBM0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ2pEMEQsWUFBSTlDLElBQUosQ0FBU0gsS0FBSyxDQUFMLEVBQVFULENBQVIsQ0FBVCxFQUFxQlMsS0FBS1QsSUFBSSxDQUFULENBQXJCO0FBQ0g7QUFDRDBELFFBQUk5QyxJQUFKLENBQVNILEtBQUssQ0FBTCxFQUFRQSxLQUFLLENBQUwsRUFBUVAsTUFBUixHQUFpQixDQUF6QixDQUFUO0FBQ0EsV0FBT3dELEdBQVA7QUFDSCxDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL3Zmb3InO1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodGFnTmFtZSkge1xuICAgICAgICBpZiAoIXRhZ05hbWUpXG4gICAgICAgICAgICB0YWdOYW1lID0gJ2Rpdic7XG4gICAgICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgfVxuICAgIHdpdGgocywgZm4sIHJ1biA9IHRydWUpIHtcbiAgICAgICAgcy53aXRoKGZuLCB0aGlzKTtcbiAgICAgICAgaWYgKHJ1bikge1xuICAgICAgICAgICAgLy8gd2l0aCDmjILkuIrml7bvvIzmiafooYzkuIDmrKFcbiAgICAgICAgICAgIGZuKHMuZ2V0KCksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhKGF0dHIpIHtcbiAgICAgICAgZm9yIChsZXQgeCBpbiBhdHRyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW0uc2V0QXR0cmlidXRlKHgsIGF0dHJbeF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvbihrLCBldmVudCkge1xuICAgICAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihrLCBldmVudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb250YWluKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKGNoaWxkLmVsZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQ29tcG9uZW50cykge1xuICAgICAgICAgICAgY2hpbGQudG8odGhpcy5lbGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYyguLi5jaGlsZHJlbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbihjaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0YXR1cyB7XG4gICAgY29uc3RydWN0b3Iodikge1xuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdjtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgICB9XG4gICAgdXBkYXRlKHYpIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZSA9IHY7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IG8gPSB0aGlzLmNhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIG8uZm4odiwgLi4uKG8uYXJncyA/IG8uYXJncyA6IFtdKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgICB9XG4gICAgc2V0KHYpIHtcbiAgICAgICAgbGV0IHZfID0gdHlwZW9mIHYgPT09ICdmdW5jdGlvbicgPyB2KHRoaXMudmFyaWFibGUpIDogdjtcbiAgICAgICAgaWYgKHRoaXMudmFyaWFibGUgIT09IHZfKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh2Xyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXVzdF91cGRhdGUodikge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJyA/IHYodGhpcy52YXJpYWJsZSkgOiB2KTtcbiAgICB9XG4gICAgd2l0aChmbiwgLi4uYXJncykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKHsgZm4sIGFyZ3MgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN0YXR1c2VzIHtcbiAgICBjb25zdHJ1Y3RvcihvKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5fID0ge307XG4gICAgICAgIHRoaXMuZGF0YSA9IG87XG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xuICAgICAgICAgICAgaWYgKGsgIT09ICdfX2tleV9fJykge1xuICAgICAgICAgICAgICAgIGxldCBzID0gbmV3IFN0YXR1cyhvW2tdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuX1trXSA9IHM7XG4gICAgICAgICAgICAgICAgcy53aXRoKCh2KSA9PiB7IG9ba10gPSB2OyB9KTsgLy/lrZDpobnmm7TmlrDml7bvvIzlkIzmraXmr43poblcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQoKSB7XG4gICAgICAgIGxldCBvID0gdGhpcy5kYXRhO1xuICAgICAgICBmb3IgKGxldCBrIGluIG8pIHtcbiAgICAgICAgICAgIGxldCBzID0gdGhpcy5jaGlsZHJlbl9ba107XG4gICAgICAgICAgICBpZiAocylcbiAgICAgICAgICAgICAgICBzLnNldChvW2tdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbl87XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RhdHVzZXMgfSBmcm9tICcuL3N0YXR1cyc7XG5leHBvcnQgY2xhc3MgQ29tcG9uZW50cyB7XG59XG5leHBvcnQgY2xhc3MgdmZvciBleHRlbmRzIENvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKGFycmF5LCBpdGVtX2ZuLCBrZXlfZm4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iZWdpbiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdGhpcy5lbmQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5rZXkgPSAwO1xuICAgICAgICB0aGlzLm9sZF9saXN0ID0gW107XG4gICAgICAgIGlmICgha2V5X2ZuKVxuICAgICAgICAgICAga2V5X2ZuID0gdGhpcy5kZWZhdWx0X2tleV9mbjtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgICAgICB0aGlzLmtleV9mbiA9IGtleV9mbjtcbiAgICAgICAgdGhpcy5pdGVtX2ZuID0gaXRlbV9mbjtcbiAgICB9XG4gICAgZGVmYXVsdF9rZXlfZm4oKSB7XG4gICAgICAgIHRoaXMua2V5Kys7XG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcbiAgICB9XG4gICAgdG8ocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuYmVnaW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5hcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmFycmF5W2ldO1xuICAgICAgICAgICAgbGV0IGtleSA9IGRhdGEuX19rZXlfXyA9IHRoaXMua2V5X2ZuKGRhdGEpO1xuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IG5ldyBTdGF0dXNlcyhkYXRhKTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jYWNoZVtrZXldID0ge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5pdGVtX2ZuKHN0YXR1cyksXG4gICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5vbGRfbGlzdC5wdXNoKHsga2V5LCBlbDogaXRlbS5jb21wb25lbnQuZWxlbSB9KTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaXRlbS5jb21wb25lbnQuZWxlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVuZCk7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmFycmF5O1xuICAgIH1cbiAgICB3aXRoKHMsIGZuKSB7XG4gICAgICAgIHMud2l0aChmbiwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1cGRhdGUoYXJyYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyYXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBrZXlfbWFwID0ge30sIG5ld19saXN0ID0gW10sIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW07XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGFycmF5W2ldO1xuICAgICAgICAgICAgbGV0IGtleSA9IGRhdGEuX19rZXlfXztcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5jYWNoZVtrZXldO1xuICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5ID0gdGhpcy5rZXlfZm4oZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IG5ldyBTdGF0dXNlcyhkYXRhKTtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5jYWNoZVtrZXldID0ge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuaXRlbV9mbihzdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5X21hcFtrZXldID0gMTtcbiAgICAgICAgICAgIG5ld19saXN0LnB1c2goeyBrZXksIGVsOiBpdGVtLmNvbXBvbmVudC5lbGVtIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vbGRfbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm9sZF9saXN0W2ldO1xuICAgICAgICAgICAgaWYgKCFrZXlfbWFwW2l0ZW0ua2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcHRyID0gdGhpcy5lbmQsIHB0cjIgPSB0aGlzLmJlZ2luLCBpbmRleCA9IGxlbiAtIDEsIGluZGV4MiA9IDAsIGNsZWFuID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8g5qOA5p+l6aaW5bC+5YWD57Sg5piv5ZCm55u45ZCM77yM57yp55+t5qOA5p+l57uEXG4gICAgICAgICAgICBmb3IgKDsgaW5kZXgyIDw9IGluZGV4Oykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdfbGlzdFtpbmRleDJdLmVsID09PSBwdHIyLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4MisrO1xuICAgICAgICAgICAgICAgICAgICBwdHIyID0gcHRyMi5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpbmRleCA+IGluZGV4MjspIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3X2xpc3RbaW5kZXhdLmVsID09PSBwdHIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIHB0ciA9IHB0ci5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNsZWFuKCk7XG4gICAgICAgIHdoaWxlIChpbmRleCA+PSBpbmRleDIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3X2xpc3RbaW5kZXhdLmVsLCBwdHIpO1xuICAgICAgICAgICAgcHRyID0gcHRyLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICBjbGVhbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2xkX2xpc3QgPSBuZXdfbGlzdDtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RlZi9zdGF0dXMnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWYvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGVmL3Zmb3InO1xuZXhwb3J0ICogZnJvbSAnLi9zaG9ydGN1dC9yZWFjdGl2ZV9ldmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Nob3J0Y3V0L3JlYWN0aXZlX2NsYXNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2hvcnRjdXQvcmVhY3RpdmVfdGV4dCc7XG4iLCJleHBvcnQgbGV0IHJlYWN0aXZlX2NsYXNzID0gKGZuKSA9PiB7XG4gICAgbGV0IG9sZDtcbiAgICByZXR1cm4gKHYsIGUpID0+IHtcbiAgICAgICAgbGV0IGNsYXNzZXMgPSBlLmVsZW0uY2xhc3NMaXN0LCBjbHMgPSBmbih2KTtcbiAgICAgICAgaWYgKGNscyAhPT0gb2xkKSB7XG4gICAgICAgICAgICBpZiAob2xkKVxuICAgICAgICAgICAgICAgIGNsYXNzZXMucmVtb3ZlKG9sZCk7XG4gICAgICAgICAgICBpZiAoY2xzKVxuICAgICAgICAgICAgICAgIGNsYXNzZXMuYWRkKGNscyk7XG4gICAgICAgICAgICBvbGQgPSBjbHM7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbiIsImV4cG9ydCBsZXQgcmVhY3RpdmVfZXZlbnQgPSAoaywgZm4pID0+IHtcbiAgICBsZXQgb2xkO1xuICAgIHJldHVybiAodiwgZSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSBmbih2KTtcbiAgICAgICAgaWYgKGV2ZW50ICE9PSBvbGQpIHtcbiAgICAgICAgICAgIGUuZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGssIG9sZCk7XG4gICAgICAgICAgICBlLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihrLCBldmVudCk7XG4gICAgICAgICAgICBvbGQgPSBldmVudDtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwiZXhwb3J0IGxldCByZWFjdGl2ZV90ZXh0ID0gKHMsIGZuKSA9PiB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmbiA/IGZuKHMuZ2V0KCkpIDogcy5nZXQoKSArICcnKTtcbiAgICBpZiAoZm4pXG4gICAgICAgIHMud2l0aCgodikgPT4gKHRleHQuZGF0YSA9IGZuKHYpKSk7XG4gICAgZWxzZVxuICAgICAgICBzLndpdGgoKHYpID0+ICh0ZXh0LmRhdGEgPSB2KSk7XG4gICAgcmV0dXJuIHRleHQ7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubXVsdGlwbGVDaG9pY2VfX2J0bl9fXzFjeF96IHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tdWx0aXBsZUNob2ljZV9fYnRuX19fMWN4X3o6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuLm11bHRpcGxlQ2hvaWNlX19tYWluX19fM3piNTggLm11bHRpcGxlQ2hvaWNlX19ib3hfX18xWjJ5dyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ubXVsdGlwbGVDaG9pY2VfX21haW5fX18zemI1OCAubXVsdGlwbGVDaG9pY2VfX2JveF9fXzFaMnl3IC5tdWx0aXBsZUNob2ljZV9fY29udGVudF9fXzJZcnJXIC5tdWx0aXBsZUNob2ljZV9faXRlbV9fXzM2dkZ4LFxcbi5tdWx0aXBsZUNob2ljZV9fbWFpbl9fXzN6YjU4IC5tdWx0aXBsZUNob2ljZV9fYm94X19fMVoyeXcgLm11bHRpcGxlQ2hvaWNlX19hbnN3ZXJzX19fM25zZzIgLm11bHRpcGxlQ2hvaWNlX19pdGVtX19fMzZ2Rngge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIG1hcmdpbjogMTBweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5tdWx0aXBsZUNob2ljZV9fbWFpbl9fXzN6YjU4IC5tdWx0aXBsZUNob2ljZV9fYm94X19fMVoyeXcgLm11bHRpcGxlQ2hvaWNlX19jb250ZW50X19fMllyclcgLm11bHRpcGxlQ2hvaWNlX19pdGVtX19fMzZ2Rng6aG92ZXIsXFxuLm11bHRpcGxlQ2hvaWNlX19tYWluX19fM3piNTggLm11bHRpcGxlQ2hvaWNlX19ib3hfX18xWjJ5dyAubXVsdGlwbGVDaG9pY2VfX2Fuc3dlcnNfX18zbnNnMiAubXVsdGlwbGVDaG9pY2VfX2l0ZW1fX18zNnZGeDpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG59XFxuLm11bHRpcGxlQ2hvaWNlX19tYWluX19fM3piNTggLm11bHRpcGxlQ2hvaWNlX19ib3hfX18xWjJ5dyAubXVsdGlwbGVDaG9pY2VfX2NvbnRlbnRfX18yWXJyVyAubXVsdGlwbGVDaG9pY2VfX2l0ZW1fX18zNnZGeDo6YWZ0ZXIsXFxuLm11bHRpcGxlQ2hvaWNlX19tYWluX19fM3piNTggLm11bHRpcGxlQ2hvaWNlX19ib3hfX18xWjJ5dyAubXVsdGlwbGVDaG9pY2VfX2Fuc3dlcnNfX18zbnNnMiAubXVsdGlwbGVDaG9pY2VfX2l0ZW1fX18zNnZGeDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDEwcHg7XFxufVxcbi5tdWx0aXBsZUNob2ljZV9fbWFpbl9fXzN6YjU4IC5tdWx0aXBsZUNob2ljZV9fYm94X19fMVoyeXcgLm11bHRpcGxlQ2hvaWNlX19jb250ZW50X19fMllyclcgLm11bHRpcGxlQ2hvaWNlX19yaWdodF9fX3Vkb2ZYLFxcbi5tdWx0aXBsZUNob2ljZV9fbWFpbl9fXzN6YjU4IC5tdWx0aXBsZUNob2ljZV9fYm94X19fMVoyeXcgLm11bHRpcGxlQ2hvaWNlX19hbnN3ZXJzX19fM25zZzIgLm11bHRpcGxlQ2hvaWNlX19yaWdodF9fX3Vkb2ZYIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbn1cXG4ubXVsdGlwbGVDaG9pY2VfX21haW5fX18zemI1OCAubXVsdGlwbGVDaG9pY2VfX2JveF9fXzFaMnl3IC5tdWx0aXBsZUNob2ljZV9fY29udGVudF9fXzJZcnJXIC5tdWx0aXBsZUNob2ljZV9fcmlnaHRfX191ZG9mWDo6YWZ0ZXIsXFxuLm11bHRpcGxlQ2hvaWNlX19tYWluX19fM3piNTggLm11bHRpcGxlQ2hvaWNlX19ib3hfX18xWjJ5dyAubXVsdGlwbGVDaG9pY2VfX2Fuc3dlcnNfX18zbnNnMiAubXVsdGlwbGVDaG9pY2VfX3JpZ2h0X19fdWRvZlg6OmFmdGVyLFxcbi5tdWx0aXBsZUNob2ljZV9fbWFpbl9fXzN6YjU4IC5tdWx0aXBsZUNob2ljZV9fYm94X19fMVoyeXcgLm11bHRpcGxlQ2hvaWNlX19jb250ZW50X19fMllyclcgLm11bHRpcGxlQ2hvaWNlX19yaWdodF9fX3Vkb2ZYLm11bHRpcGxlQ2hvaWNlX19zZWxlY3RlZF9fX1BuRGNuOjphZnRlcixcXG4ubXVsdGlwbGVDaG9pY2VfX21haW5fX18zemI1OCAubXVsdGlwbGVDaG9pY2VfX2JveF9fXzFaMnl3IC5tdWx0aXBsZUNob2ljZV9fYW5zd2Vyc19fXzNuc2cyIC5tdWx0aXBsZUNob2ljZV9fcmlnaHRfX191ZG9mWC5tdWx0aXBsZUNob2ljZV9fc2VsZWN0ZWRfX19QbkRjbjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ3JpZ2h0JztcXG59XFxuLm11bHRpcGxlQ2hvaWNlX19tYWluX19fM3piNTggLm11bHRpcGxlQ2hvaWNlX19ib3hfX18xWjJ5dyAubXVsdGlwbGVDaG9pY2VfX2NvbnRlbnRfX18yWXJyVyAubXVsdGlwbGVDaG9pY2VfX3dyb25nX19fM3JQdWkubXVsdGlwbGVDaG9pY2VfX3NlbGVjdGVkX19fUG5EY246OmFmdGVyLFxcbi5tdWx0aXBsZUNob2ljZV9fbWFpbl9fXzN6YjU4IC5tdWx0aXBsZUNob2ljZV9fYm94X19fMVoyeXcgLm11bHRpcGxlQ2hvaWNlX19hbnN3ZXJzX19fM25zZzIgLm11bHRpcGxlQ2hvaWNlX193cm9uZ19fXzNyUHVpLm11bHRpcGxlQ2hvaWNlX19zZWxlY3RlZF9fX1BuRGNuOjphZnRlciB7XFxuICBjb250ZW50OiAnd3JvbmcnO1xcbn1cXG4ubXVsdGlwbGVDaG9pY2VfX21haW5fX18zemI1OCAubXVsdGlwbGVDaG9pY2VfX2JveF9fXzFaMnl3IC5tdWx0aXBsZUNob2ljZV9fY29udGVudF9fXzJZcnJXIC5tdWx0aXBsZUNob2ljZV9fc2VsZWN0ZWRfX19QbkRjbjo6YWZ0ZXIsXFxuLm11bHRpcGxlQ2hvaWNlX19tYWluX19fM3piNTggLm11bHRpcGxlQ2hvaWNlX19ib3hfX18xWjJ5dyAubXVsdGlwbGVDaG9pY2VfX2Fuc3dlcnNfX18zbnNnMiAubXVsdGlwbGVDaG9pY2VfX3NlbGVjdGVkX19fUG5EY246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdzZWxlY3RlZCc7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJ0blwiOiBcIm11bHRpcGxlQ2hvaWNlX19idG5fX18xY3hfelwiLFxuXHRcIm1haW5cIjogXCJtdWx0aXBsZUNob2ljZV9fbWFpbl9fXzN6YjU4XCIsXG5cdFwiYm94XCI6IFwibXVsdGlwbGVDaG9pY2VfX2JveF9fXzFaMnl3XCIsXG5cdFwiY29udGVudFwiOiBcIm11bHRpcGxlQ2hvaWNlX19jb250ZW50X19fMllycldcIixcblx0XCJpdGVtXCI6IFwibXVsdGlwbGVDaG9pY2VfX2l0ZW1fX18zNnZGeFwiLFxuXHRcImFuc3dlcnNcIjogXCJtdWx0aXBsZUNob2ljZV9fYW5zd2Vyc19fXzNuc2cyXCIsXG5cdFwicmlnaHRcIjogXCJtdWx0aXBsZUNob2ljZV9fcmlnaHRfX191ZG9mWFwiLFxuXHRcInNlbGVjdGVkXCI6IFwibXVsdGlwbGVDaG9pY2VfX3NlbGVjdGVkX19fUG5EY25cIixcblx0XCJ3cm9uZ1wiOiBcIm11bHRpcGxlQ2hvaWNlX193cm9uZ19fXzNyUHVpXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYl9fYm9sZF9fX2pNUXNUIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYl9fYm9sZF9fX2pNUXNUOjpiZWZvcmUsXFxuLmJfX2JvbGRfX19qTVFzVDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIu+8ilxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICBsZWZ0OiAtMS4yZW07XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJvbGRcIjogXCJiX19ib2xkX19fak1Rc1RcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oX19oX19fMjdQZXI6OmJlZm9yZSB7XFxuICBjb2xvcjogIzAwOTY4ODtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAwIDNweDtcXG4gIGxlZnQ6IC0xLjJlbTtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIuWui+S9k1xcXCIsIFNlcmlmO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJoXCI6IFwiaF9faF9fXzI3UGVyXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaV9faXRhbGljX19fMlYyX3Age1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpdGFsaWNcIjogXCJpX19pdGFsaWNfX18yVjJfcFwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm9sX3VsX191bF9fXzFEUjN2LFxcbi5vbF91bF9fb2xfX18xSlRXdCB7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xcbn1cXG4ub2xfdWxfX3VsX19fMURSM3YgPiAqLFxcbi5vbF91bF9fb2xfX18xSlRXdCA+ICoge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ1bFwiOiBcIm9sX3VsX191bF9fXzFEUjN2XCIsXG5cdFwib2xcIjogXCJvbF91bF9fb2xfX18xSlRXdFwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBfX3BfX18yWUVwViB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBcIjogXCJwX19wX19fMllFcFZcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWN0aW9uX19zZWN0aW9uX19fMjNfWDUge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcbi5zZWN0aW9uX19zZWN0aW9uX19fMjNfWDUgLnNlY3Rpb25fX2NvbnRlbnRfX19Ld0E4byB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNlY3Rpb25fX2hpZGVfX18yeXlkeCB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlY3Rpb25cIjogXCJzZWN0aW9uX19zZWN0aW9uX19fMjNfWDVcIixcblx0XCJjb250ZW50XCI6IFwic2VjdGlvbl9fY29udGVudF9fX0t3QThvXCIsXG5cdFwiaGlkZVwiOiBcInNlY3Rpb25fX2hpZGVfX18yeXlkeFwiXG59OyIsImltcG9ydCBUYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyBmcm9tICcuLi91dGlscy9UYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdqdXN0LWRvbSc7XG5leHBvcnQgbGV0IGxpbmsgPSAoLi4uY2hpbGRyZW4pID0+IChocmVmKSA9PiB7XG4gICAgbGV0IHJldCA9IG5ldyBDb21wb25lbnQoJ2EnKS5hKHsgaHJlZiB9KTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICByZXQuYyguLi5UYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyhjaGlsZHJlbikpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0LmMoaHJlZik7XG4gICAgcmV0dXJuIHJldC5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvd1snb3V0ZXInXS5sb2FkaW5nLnNldExvYWRpbmcoKTtcbiAgICAgICAgd2luZG93WydvdXRlciddLnJvdXRlci5wdXNoKGhyZWYpO1xuICAgIH0pO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vbXVsdGlwbGVDaG9pY2UnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9tdWx0aXBsZUNob2ljZS5zdHlsXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vbXVsdGlwbGVDaG9pY2Uuc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9tdWx0aXBsZUNob2ljZS5zdHlsXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vbXVsdGlwbGVDaG9pY2Uuc3R5bCc7XG5pbXBvcnQgeyBTdGF0dXMsIENvbXBvbmVudCwgcmVhY3RpdmVfY2xhc3MsIHJlYWN0aXZlX2V2ZW50IH0gZnJvbSAnanVzdC1kb20nO1xuaW1wb3J0IHsgc2VjdGlvbiwgb2wgfSBmcm9tICdAc3JjL2NvbXBvbmVudHMvQHdyaXRlJztcbmV4cG9ydCBsZXQgYW5zd2VyID0gKGlubmVyLCByaWdodCA9IHRydWUpID0+IChkb25lKSA9PiB7XG4gICAgbGV0IGNsaWNrZWQgPSBuZXcgU3RhdHVzKGZhbHNlKTtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudCgpXG4gICAgICAgIC5jKGlubmVyKVxuICAgICAgICAuYSh7IGNsYXNzOiBzdHlsZS5pdGVtIH0pXG4gICAgICAgIC53aXRoKGRvbmUsIHJlYWN0aXZlX2V2ZW50KCdjbGljaycsIHYgPT4gdiA/IG51bGwgOiAoKSA9PiBjbGlja2VkLnNldCh2ID0+ICF2KSkpXG4gICAgICAgIC53aXRoKGNsaWNrZWQsIHJlYWN0aXZlX2NsYXNzKHYgPT4gdiA/IHN0eWxlLnNlbGVjdGVkIDogbnVsbCkpXG4gICAgICAgIC53aXRoKGRvbmUsIHJlYWN0aXZlX2NsYXNzKHYgPT4gdiA/IChyaWdodCA/IHN0eWxlLnJpZ2h0IDogc3R5bGUud3JvbmcpIDogbnVsbCkpO1xufTtcbmV4cG9ydCBsZXQgbXVsdGlwbGVDaG9pY2UgPSAodGl0bGUsIC4uLmNvbnRlbnQpID0+ICguLi5hbnN3ZXJzKSA9PiB7XG4gICAgbGV0IGRvbmUgPSBuZXcgU3RhdHVzKGZhbHNlKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYW5zd2Vycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGFuc3dlcnNbaV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFuc3dlcnNbaV0gPSBhbnN3ZXIoYW5zd2Vyc1tpXSwgZmFsc2UpKGRvbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYW5zd2Vyc1tpXSA9IGFuc3dlcnNbaV0oZG9uZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlY3Rpb24odGl0bGUsIG5ldyBDb21wb25lbnQoJ2J1dHRvbicpXG4gICAgICAgIC5jKCcgJylcbiAgICAgICAgLmEoeyBjbGFzczogc3R5bGUuYnRuIH0pXG4gICAgICAgIC53aXRoKGRvbmUsIHJlYWN0aXZlX2V2ZW50KCdjbGljaycsIHYgPT4gdiA/IG51bGwgOiAoKSA9PiBkb25lLnNldCh0cnVlKSkpLCAnPycpKG5ldyBDb21wb25lbnQoKS5jKG5ldyBDb21wb25lbnQoKS5jKC4uLmNvbnRlbnQpLmEoeyBjbGFzczogc3R5bGUuY29udGVudCB9KSwgbmV3IENvbXBvbmVudCgpLmMob2woLi4uYW5zd2VycykpLmEoeyBjbGFzczogc3R5bGUuYW5zd2VycyB9KSkuYSh7IGNsYXNzOiBzdHlsZS5ib3ggfSkpLmEoeyBjbGFzczogc3R5bGUubWFpbiB9KTtcbn07XG4iLCJpbXBvcnQgVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MgZnJvbSAnLi4vdXRpbHMvVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnanVzdC1kb20nO1xuZXhwb3J0IGxldCBhID0gKC4uLmNoaWxkcmVuKSA9PiAoaHJlZikgPT4ge1xuICAgIGxldCByZXQgPSBuZXcgQ29tcG9uZW50KCdhJykuYSh7IGhyZWYgfSk7XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgcmV0LmMoLi4uVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MoY2hpbGRyZW4pKTtcbiAgICBlbHNlXG4gICAgICAgIHJldC5jKGhyZWYpO1xuICAgIHJldHVybiByZXQ7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9iLnN0eWxcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9iLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vYi5zdHlsXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vYi5zdHlsJztcbmltcG9ydCBUYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyBmcm9tICcuLi91dGlscy9UYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdqdXN0LWRvbSc7XG5leHBvcnQgbGV0IGIgPSAoLi4uY2hpbGRyZW4pID0+IHtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudCgnc3BhbicpLmMoLi4uVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MoY2hpbGRyZW4pKS5hKHsgY2xhc3M6IHN0eWxlLmJvbGQgfSk7XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnanVzdC1kb20nO1xuZXhwb3J0IGNvbnN0IGNvZGUgPSAoY29udGVudCkgPT4gKGxhbmcpID0+IHtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudCgnY29kZScpLmMoY29udGVudCkuYSh7IGNsYXNzOiAnY29kZScgfSk7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9oLnN0eWxcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9oLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vaC5zdHlsXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vaC5zdHlsJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2p1c3QtZG9tJztcbmV4cG9ydCBsZXQgaCA9ICguLi5jaGlsZHJlbikgPT4gKGxldmVsKSA9PiB7XG4gICAgaWYgKCFsZXZlbClcbiAgICAgICAgbGV2ZWwgPSAxO1xuICAgIGlmIChsZXZlbCA+IDYpXG4gICAgICAgIGxldmVsID0gNjtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudCgnaCcgKyBsZXZlbCkuYyguLi5jaGlsZHJlbikuYSh7IGNsYXNzOiBzdHlsZS5oIH0pO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vaS5zdHlsXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vaS5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL2kuc3R5bFwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBzdHlsZSBmcm9tICcuL2kuc3R5bCc7XG5pbXBvcnQgVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MgZnJvbSAnLi4vdXRpbHMvVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnanVzdC1kb20nO1xuZXhwb3J0IGxldCBpID0gKC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnQoJ3NwYW4nKS5jKC4uLlRhZ2dlZFRlbXBsYXRlTGl0ZXJhbHNBcmdzKGNoaWxkcmVuKSkuYSh7IGNsYXNzOiBzdHlsZS5pdGFsaWMgfSk7XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnanVzdC1kb20nO1xuZXhwb3J0IGxldCBpbWcgPSAodXJsKSA9PiAodGV4dCkgPT4ge1xuICAgIGlmICghdGV4dClcbiAgICAgICAgdGV4dCA9ICcnO1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50KCdpbWcnKS5jKHRleHQpLmEoeyBzcmM6IHVybCB9KTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3AnO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVjb2RlJztcbmV4cG9ydCAqIGZyb20gJy4vdWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3ViJztcbmV4cG9ydCAqIGZyb20gJy4vc3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYSc7XG5leHBvcnQgKiBmcm9tICcuL2gnO1xuZXhwb3J0ICogZnJvbSAnLi9pJztcbmV4cG9ydCAqIGZyb20gJy4vaW1nJztcbmV4cG9ydCAqIGZyb20gJy4vYic7XG5leHBvcnQgKiBmcm9tICcuL29sJztcbmV4cG9ydCAqIGZyb20gJy4vY29kZSc7XG4iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9vbF91bC5zdHlsJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2p1c3QtZG9tJztcbmV4cG9ydCBsZXQgb2wgPSAoLi4uY2hpbGRyZW4pID0+IHtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudCgnb2wnKS5jKC4uLmNoaWxkcmVuKS5hKHsgY2xhc3M6IHN0eWxlLm9sIH0pO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vb2xfdWwuc3R5bFwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL29sX3VsLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vb2xfdWwuc3R5bFwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vcC5zdHlsXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4vcC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL3Auc3R5bFwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2p1c3QtZG9tJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3Auc3R5bCc7XG5pbXBvcnQgVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MgZnJvbSAnLi4vdXRpbHMvVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MnO1xuLy8gZXg6IHBgbG9hZGVyIOeahCAke2Jg5Yqf6IO9YH0g6Z2e5bi45by65aSnYFxuZXhwb3J0IGxldCBwID0gKC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnQoJ3AnKS5jKC4uLlRhZ2dlZFRlbXBsYXRlTGl0ZXJhbHNBcmdzKGNoaWxkcmVuKSkuYSh7IGNsYXNzOiBzdHlsZS5wIH0pO1xufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2p1c3QtZG9tJztcbmV4cG9ydCBsZXQgcHJlY29kZSA9IChjb250ZW50KSA9PiAobGFuZykgPT4ge1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50KCdwcmUnKS5jKG5ldyBDb21wb25lbnQoJ2NvZGUnKS5jKGNvbnRlbnQpLmEoeyBjbGFzczogJ3ByZWNvZGUnIH0pKTtcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL3NlY3Rpb24uc3R5bFwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuL3NlY3Rpb24uc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi9zZWN0aW9uLnN0eWxcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zZWN0aW9uLnN0eWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnanVzdC1kb20nO1xuaW1wb3J0IHsgaCB9IGZyb20gJy4vaCc7XG5sZXQgbGV2ZWwgPSAwO1xuZXhwb3J0IGxldCBzZWN0aW9uID0gKC4uLnRpdGxlKSA9PiB7XG4gICAgbGV2ZWwrKztcbiAgICByZXR1cm4gKC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRpdGxlID8gW2goLi4udGl0bGUpKGxldmVsKV0gOiBbXTtcbiAgICAgICAgY2hpbGQucHVzaChuZXcgQ29tcG9uZW50KCkuYyguLi5jaGlsZHJlbikuYSh7IGNsYXNzOiBzdHlsZS5jb250ZW50IH0pKTtcbiAgICAgICAgbGV2ZWwtLTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnQoJ3NlY3Rpb24nKS5jKC4uLmNoaWxkKS5hKHsgY2xhc3M6IHN0eWxlLnNlY3Rpb24gfSk7XG4gICAgfTtcbn07XG4iLCJpbXBvcnQgVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MgZnJvbSAnLi4vdXRpbHMvVGFnZ2VkVGVtcGxhdGVMaXRlcmFsc0FyZ3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnanVzdC1kb20nO1xuZXhwb3J0IGxldCBzdWIgPSAoLi4uY2hpbGRyZW4pID0+IHtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudCgnc3ViJykuYyguLi5UYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyhjaGlsZHJlbikpO1xufTtcbiIsImltcG9ydCBUYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyBmcm9tICcuLi91dGlscy9UYWdnZWRUZW1wbGF0ZUxpdGVyYWxzQXJncyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdqdXN0LWRvbSc7XG5leHBvcnQgbGV0IHN1cCA9ICguLi5jaGlsZHJlbikgPT4ge1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50KCdzdXAnKS5jKC4uLlRhZ2dlZFRlbXBsYXRlTGl0ZXJhbHNBcmdzKGNoaWxkcmVuKSk7XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnanVzdC1kb20nO1xuZXhwb3J0IGxldCB1bCA9ICguLi5jaGlsZHJlbikgPT4ge1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50KCd1bCcpLmMoLi4uY2hpbGRyZW4pO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChhcmdzKSA9PiB7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aCAtIDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICByZXQucHVzaChhcmdzWzBdW2ldLCBhcmdzW2kgKyAxXSk7XG4gICAgfVxuICAgIHJldC5wdXNoKGFyZ3NbMF1bYXJnc1swXS5sZW5ndGggLSAxXSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9