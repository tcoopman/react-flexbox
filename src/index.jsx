var React = require('react');

const flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flex: '1 0 auto',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};

function mixProps(style, props) {
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
    return Object.assign({}, flexStyle, style, divStyle, props.style);
  } else {
    return Object.assign({}, flexStyle, style, divStyle);
  }
}

export default class View extends React.Component {
  render() {
    const style = mixProps({}, this.props);
    if (this.props.auto) {
      style.flex = '0 0 auto';
    }
    return <div {...this.props} style={style}>{this.props.children}</div>;
  }
}
