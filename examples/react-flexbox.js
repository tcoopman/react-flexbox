(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactFlexbox"] = factory(require("React"));
	else
		root["ReactFlexbox"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_0__;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"React\"\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _objectWithoutProperties(obj, keys) {\n  var target = {};for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];\n  }return target;\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\n// import PropTypes from 'prop-types'\n\nvar flexStyle = {\n  boxSizing: 'border-box',\n  display: 'flex',\n  flexWrap: 'nowrap',\n  flex: '1 0 auto',\n  justifyContent: 'space-between',\n  alignContent: 'space-between',\n  alignItems: 'stretch'\n};\n\nvar mixProps = function mixProps(style, props) {\n  var divStyle = {};\n\n  if (props.row) {\n    divStyle.flexDirection = 'row';\n  } else if (props.column) {\n    divStyle.flexDirection = 'column';\n  }\n\n  if (typeof props.width === 'number') {\n    divStyle.flexGrow = props.width;\n  } else if (props.width) {\n    divStyle.flexBasis = 'auto';\n    divStyle.flexGrow = 0;\n    divStyle.flexShrink = 0;\n    divStyle.width = props.width;\n  }\n\n  if (props.height) {\n    divStyle.flexBasis = 'auto';\n    divStyle.flexGrow = 0;\n    divStyle.flexShrink = 0;\n    divStyle.height = props.height;\n  }\n\n  if (props.style) {\n    return _extends({}, flexStyle, style, divStyle, props.style);\n  } else {\n    return _extends({}, flexStyle, style, divStyle);\n  }\n};\n\nvar View = function (_Component) {\n  _inherits(View, _Component);\n\n  function View() {\n    _classCallCheck(this, View);\n\n    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));\n  }\n\n  _createClass(View, [{\n    key: 'render',\n\n    // static propTypes = {\n    //   row: PropTypes.bool,\n    //   column: PropTypes.bool,\n    //   auto: PropTypes.bool,\n    //   className: PropTypes.string,\n    //   height: PropTypes.string,\n    //   style: PropTypes.object,\n    //   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])\n    // }\n\n    value: function render() {\n      var style = mixProps({}, this.props);\n      if (this.props.auto) {\n        style.flex = '0 0 auto';\n      }\n\n      // strip props that are invalid to set on a div.\n      // (prevents https://fb.me/react-unknown-prop)\n\n      var _props = this.props,\n          row = _props.row,\n          column = _props.column,\n          auto = _props.auto,\n          divProps = _objectWithoutProperties(_props, ['row', 'column', 'auto']);\n\n      return _react2.default.createElement('div', _extends({}, divProps, { style: style }), this.props.children);\n    }\n  }]);\n\n  return View;\n}(_react.Component);\n\nexports.default = View;\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import PropTypes from 'prop-types'\n\nvar flexStyle = {\n  boxSizing: 'border-box',\n  display: 'flex',\n  flexWrap: 'nowrap',\n  flex: '1 0 auto',\n  justifyContent: 'space-between',\n  alignContent: 'space-between',\n  alignItems: 'stretch'\n};\n\nvar mixProps = function mixProps(style, props) {\n  var divStyle = {};\n\n  if (props.row) {\n    divStyle.flexDirection = 'row';\n  } else if (props.column) {\n    divStyle.flexDirection = 'column';\n  }\n\n  if (typeof props.width === 'number') {\n    divStyle.flexGrow = props.width;\n  } else if (props.width) {\n    divStyle.flexBasis = 'auto';\n    divStyle.flexGrow = 0;\n    divStyle.flexShrink = 0;\n    divStyle.width = props.width;\n  }\n\n  if (props.height) {\n    divStyle.flexBasis = 'auto';\n    divStyle.flexGrow = 0;\n    divStyle.flexShrink = 0;\n    divStyle.height = props.height;\n  }\n\n  if (props.style) {\n    return _extends({}, flexStyle, style, divStyle, props.style);\n  } else {\n    return _extends({}, flexStyle, style, divStyle);\n  }\n};\n\nvar View = function (_Component) {\n  _inherits(View, _Component);\n\n  function View() {\n    _classCallCheck(this, View);\n\n    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));\n  }\n\n  _createClass(View, [{\n    key: 'render',\n\n\n    // static propTypes = {\n    //   row: PropTypes.bool,\n    //   column: PropTypes.bool,\n    //   auto: PropTypes.bool,\n    //   className: PropTypes.string,\n    //   height: PropTypes.string,\n    //   style: PropTypes.object,\n    //   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])\n    // }\n\n    value: function render() {\n      var style = mixProps({}, this.props);\n      if (this.props.auto) {\n        style.flex = '0 0 auto';\n      }\n\n      // strip props that are invalid to set on a div.\n      // (prevents https://fb.me/react-unknown-prop)\n\n      var _props = this.props,\n          row = _props.row,\n          column = _props.column,\n          auto = _props.auto,\n          divProps = _objectWithoutProperties(_props, ['row', 'column', 'auto']);\n\n      return _react2.default.createElement(\n        'div',\n        _extends({}, divProps, { style: style }),\n        this.props.children\n      );\n    }\n  }]);\n\n  return View;\n}(_react.Component);\n\nexports.default = View;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.jsx\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(2);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./ ./src/index.jsx\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_./_./src/index.jsx?");

/***/ })
/******/ ]);
});