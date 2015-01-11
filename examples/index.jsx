import '6to5/polyfill';
import React from 'react';

import {FlexColumn, FlexRow} from '../lib/index.jsx';


const HelloWorld = React.createClass({
  render() {
    return (
      <FlexRow>
        <FlexColumn>Column 1</FlexColumn>
        <FlexColumn>Column 2</FlexColumn>
      </FlexRow>
    );
  }
});

React.renderComponent(<HelloWorld />, document.body);
