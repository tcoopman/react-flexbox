var React = require('react');

const flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 0,
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};

function mixProps(style, props) {
  const divStyle = {};

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

const flexPropTypes = {
  className: React.PropTypes.string,
  height: React.PropTypes.string,
  style: React.PropTypes.object,
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
}

export class FlexColumn extends React.Component {
  render() {
    const divStyle = {
      flexDirection: 'column'
    };
    const style = mixProps(divStyle, this.props);

    return (
      <div className={this.props.className} style={style}>{this.props.children}</div>
    );

  }
}
FlexColumn.proptypes = flexPropTypes;

export class FlexRow extends React.Component {
  render() {
    const divStyle = {
      flexDirection: 'row'
    };
    const style = mixProps(divStyle, this.props);

    return (
      <div className={this.props.className} style={style}>{this.props.children}</div>
    );
  }
}
FlexRow.proptypes = flexPropTypes;
