'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
var React = require('react');

var flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flex: '1 0 auto',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};

function mixProps(style, props) {
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
    return Object.assign({}, flexStyle, style, divStyle, props.style);
  } else {
    return Object.assign({}, flexStyle, style, divStyle);
  }
}

var FlexColumn = (function (_React$Component) {
  function FlexColumn() {
    _classCallCheck(this, FlexColumn);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(FlexColumn, _React$Component);

  _createClass(FlexColumn, [{
    key: 'render',
    value: function render() {
      console.warn('FlexColumn is deprecated. Please use <View column> instead');
      return React.createElement(
        View,
        _extends({ column: true }, this.props),
        this.props.children
      );
    }
  }]);

  return FlexColumn;
})(React.Component);

exports.FlexColumn = FlexColumn;

var FlexRow = (function (_React$Component2) {
  function FlexRow() {
    _classCallCheck(this, FlexRow);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(FlexRow, _React$Component2);

  _createClass(FlexRow, [{
    key: 'render',
    value: function render() {
      console.warn('FlexRow is deprecated. Please use <View row> instead');
      return React.createElement(
        View,
        _extends({ row: true }, this.props),
        this.props.children
      );
    }
  }]);

  return FlexRow;
})(React.Component);

exports.FlexRow = FlexRow;

var View = (function (_React$Component3) {
  function View() {
    _classCallCheck(this, View);

    if (_React$Component3 != null) {
      _React$Component3.apply(this, arguments);
    }
  }

  _inherits(View, _React$Component3);

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var style = mixProps({}, this.props);
      if (this.props.auto) {
        style.flex = '0 0 auto';
      }
      return React.createElement(
        'div',
        _extends({}, this.props, { style: style }),
        this.props.children
      );
    }
  }]);

  return View;
})(React.Component);

exports['default'] = View;
