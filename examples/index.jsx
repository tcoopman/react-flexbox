import '6to5/polyfill';
import React from 'react';

import {FlexColumn, FlexRow} from '../lib/index.jsx';


const HelloWorld = React.createClass({
  render() {
    return (
      <div>
        <FlexRow className="red" height="50px">
          <FlexColumn>Column 1</FlexColumn>
          <FlexColumn>Column 2</FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className="green" width="20%">20% Width</FlexColumn>
          <FlexColumn width="30%">30% Width</FlexColumn>
          <FlexColumn>Remaining width</FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn width="20%">20% Width</FlexColumn>
          <FlexColumn width="30%">30% Width</FlexColumn>
          <FlexColumn>Remaining width</FlexColumn>
        </FlexRow>
      </div>
    );
  }
});

React.render(<HelloWorld />, document.body);
