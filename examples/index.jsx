import '6to5/polyfill';
import React from 'react';

import {FlexColumn, FlexRow} from '../lib/index.jsx';


const HelloWorld = React.createClass({
  render() {
    return (
      <FlexColumn className="border" height="100vh">
        <FlexRow height="50px" style={{alignItems: 'center', alignSelf: 'center'}}>Fully centered header</FlexRow>
        <FlexRow className="red">
          <FlexColumn className="border">Column 1</FlexColumn>
          <FlexColumn>Column 2</FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className="green" width="30%">30% Width</FlexColumn>
          <FlexColumn width="60%" style={{background: 'gray'}}>60% Width</FlexColumn>
          <FlexColumn>Remaining width. This small column will wrap</FlexColumn>
        </FlexRow>
        <FlexRow height="100px" className="red">
          <FlexColumn width="50%">50% Width</FlexColumn>
          <FlexColumn width="30%">30% Width</FlexColumn>
          <FlexColumn>Remaining width</FlexColumn>
        </FlexRow>
        <FlexRow style={{alignItems: 'center'}}>
          <FlexColumn width={2}>Twice the size of the others, the width is set without a unit.</FlexColumn>
          <FlexColumn widht={1}>other 1</FlexColumn>
          <FlexColumn width={1}>other 2</FlexColumn>
        </FlexRow>
      </FlexColumn>
    );
  }
});

React.render(<HelloWorld />, document.body);
