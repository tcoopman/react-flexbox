var React = require('react');

let flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flexGrow: 1,
  justifyContent: 'space-between',
  alignContent: 'stretch',
  alignItems: 'stretch'
};


export const FlexColumn = React.createClass(class {
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

    let style = Object.assign(flexStyle, divStyle);

    return (
      <div style={style}>{this.props.children}</div>
    );
  }
}.prototype);


export const FlexRow = React.createClass(class {
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

    let style = Object.assign(flexStyle, divStyle);

    return (
      <div style={style}>{this.props.children}</div>
    );
  }
}.prototype);
