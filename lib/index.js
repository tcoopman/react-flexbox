"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require("react");

var flexStyle = {
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "nowrap",
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 0,
  justifyContent: "space-between",
  alignContent: "space-between",
  alignItems: "stretch"
};

var FlexMixin = {
  propTypes: {
    className: React.PropTypes.string,
    height: React.PropTypes.string,
    style: React.PropTypes.object,
    width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  },

  mixProps: function mixProps(style) {
    var divStyle = {};

    if (typeof this.props.width === "number") {
      divStyle.flexGrow = this.props.width;
    } else if (this.props.width) {
      divStyle.flexBasis = "auto";
      divStyle.flexGrow = 0;
      divStyle.flexShrink = 0;
      divStyle.width = this.props.width;
    }

    if (this.props.height) {
      divStyle.flexBasis = "auto";
      divStyle.flexGrow = 0;
      divStyle.flexShrink = 0;
      divStyle.height = this.props.height;
    }

    if (this.props.style) {
      return Object.assign({}, flexStyle, style, divStyle, this.props.style);
    } else {
      return Object.assign({}, flexStyle, style, divStyle);
    }
  }
};

var FlexColumn = React.createClass({
  displayName: "FlexColumn",

  mixins: [FlexMixin],

  render: function render() {
    var divStyle = {
      flexDirection: "column"
    };
    var style = this.mixProps(divStyle);

    return React.createElement(
      "div",
      { className: this.props.className, style: style },
      this.props.children
    );
  }
});

exports.FlexColumn = FlexColumn;
var FlexRow = React.createClass({
  displayName: "FlexRow",

  mixins: [FlexMixin],

  render: function render() {
    var divStyle = {
      flexDirection: "row"
    };
    var style = this.mixProps(divStyle);

    return React.createElement(
      "div",
      { className: this.props.className, style: style },
      this.props.children
    );
  }
});
exports.FlexRow = FlexRow;
