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


const FlexMixin = {
  propTypes: {
    className: React.PropTypes.string,
    height: React.PropTypes.string,
    style: React.PropTypes.object,
    width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
  },


  mixProps(style) {
    const divStyle = {};

    if (typeof this.props.width === 'number') {
      divStyle.flexGrow = this.props.width;
    } else if (this.props.width) {
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

    if (this.props.style) {
      return Object.assign({}, flexStyle, style, divStyle, this.props.style);
    } else {
      return Object.assign({}, flexStyle, style, divStyle);
    }
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
