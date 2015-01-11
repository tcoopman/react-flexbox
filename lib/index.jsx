var React = require('react');

const flexStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  flexGrow: 1,
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};


const FlexMixin = {
  mixProps(style) {
    const divStyle = Object.assign({}, flexStyle, style);

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

    return divStyle;
  }
};


export const FlexColumn = React.createClass({
  mixins: [FlexMixin],


  render() {
    let divStyle = {
      flexDirection: 'column'
    };
    const style = this.mixProps(divStyle);

    return (
      <div className={this.props.className} style={style}>{this.props.children}</div>
    );
  }
});


export const FlexRow = React.createClass({
  mixins: [FlexMixin],


  render() {
    let divStyle = {
      flexDirection: 'row'
    };
    const style = this.mixProps(divStyle);

    return (
      <div className={this.props.className} style={style}>{this.props.children}</div>
    );
  }
});
