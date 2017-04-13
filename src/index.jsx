import React, { Component, PropTypes } from 'react';

const flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flex: '1 0 auto',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};

const mixProps = (style, props) => {
  const divStyle = {};

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
    return {...flexStyle, ...style, ...divStyle, ...props.style};
  } else {
    return {...flexStyle, ...style, ...divStyle};
  }
}

export default class View extends Component {

  static propTypes = {
    row: PropTypes.bool,
    column: PropTypes.bool,
    auto: PropTypes.bool,
    className: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  render() {
    const style = mixProps({}, this.props);
    if (this.props.auto) {
      style.flex = '0 0 auto';
    }

    // strip props that are invalid to set on a div.
    // (prevents https://fb.me/react-unknown-prop)
    let {
      row, column, auto,
      ...divProps
    } = this.props;

    return <div {...divProps} style={style}>{this.props.children}</div>;
  }
}
