'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flex: '1 0 auto',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};

var mixProps = function mixProps(style, props) {
  var divStyle = {};

  if (props.row) {
    divStyle.flexDirection = 'row';
  } else if (props.column) {
    divStyle.flexDirection = 'column';
  }

  if (typeof props.width === 'number') {
    divStyle.flexGrow = props.width;
  } else if (props.width) {
    divStyle.flexBasis = 'auto';
    divStyle.flexGrow = 0;
    divStyle.flexShrink = 0;
    divStyle.width = props.width;
  }

  if (props.height) {
    divStyle.flexBasis = 'auto';
    divStyle.flexGrow = 0;
    divStyle.flexShrink = 0;
    divStyle.height = props.height;
  }

  if (props.style) {
    return _extends({}, flexStyle, style, divStyle, props.style);
  } else {
    return _extends({}, flexStyle, style, divStyle);
  }
};

var View = (function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    _get(Object.getPrototypeOf(View.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var style = mixProps({}, this.props);
      if (this.props.auto) {
        style.flex = '0 0 auto';
      }

      // strip props that are invalid to set on a div.
      // (prevents https://fb.me/react-unknown-prop)
      var _props = this.props;
      var row = _props.row;
      var column = _props.column;
      var auto = _props.auto;

      var divProps = _objectWithoutProperties(_props, ['row', 'column', 'auto']);

      return _react2['default'].createElement(
        'div',
        _extends({}, divProps, { style: style }),
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      row: _react.PropTypes.bool,
      column: _react.PropTypes.bool,
      auto: _react.PropTypes.bool,
      className: _react.PropTypes.string,
      height: _react.PropTypes.string,
      style: _react.PropTypes.object,
      width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
    },
    enumerable: true
  }]);

  return View;
})(_react.Component);

exports['default'] = View;
module.exports = exports['default'];
