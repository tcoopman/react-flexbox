var React = require('react');

const flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flexGrow: 1,
  justifyContent: 'space-between',
  alignContent: 'stretch',
  alignItems: 'stretch'
};


class FlexColumn {
  render() {
    let divStyle = {
      flexDirection: 'column'
    };

    if (this.props.width) {
      divStyle.flexBasis = 'auto';
      divStyle.flexGrow = 0;
      divStyle.flexShrink = 0;
      divStyle.width = this.props.width;
    }

    if (this.props.height) {
      divStyle.flexBasis = 'auto';
      divStyle.flexGrow = 0;
      divStyle.flexShrink = 0;
      divStyle.height = this.props.height;
    }

    const style = Object.assign({}, flexStyle, divStyle);

    return (
      <div style={style}>{this.props.children}</div>
    );
  }
}
// Unfortunatly we need to do this.
FlexColumn.prototype.displayName = 'FlexColumn';


class FlexRow {
  render() {
    let divStyle = {
      flexDirection: 'row'
    };

    if (this.props.height) {
      divStyle.flexBasis = 'auto';
      divStyle.flexGrow = 0;
      divStyle.flexShrink = 0;
      divStyle.height = this.props.height;
    }

    const style = Object.assign({}, flexStyle, divStyle);

    return (
      <div style={style}>{this.props.children}</div>
    );
  }
}
// Unfortunatly we need to do this.
FlexRow.prototype.displayName = 'FlexRow';


export var FlexColumn = React.createClass(FlexColumn.prototype);
export var FlexRow = React.createClass(FlexRow.prototype);
