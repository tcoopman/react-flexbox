import 'babel/polyfill';
import React from 'react';

import {FlexColumn, FlexRow} from '../src/index.jsx';
import View from '../src/index.jsx';

const HelloWorld = React.createClass({
  render() {
    return (
      <View column className="border" height="70vh">
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
        <View row>
          <View column>Twice the size of the others, the width is set without a unit.</View>
          <View column width="100px" className="red">100px</View>
          <View column>other 1</View>
          <View row auto>
            <View column width="50px" className="green">50px</View>
            <View column width="50px" className="green">50px</View>
          </View>
        </View>
        <View row>
          <View auto row>
            <View column width="100px"><View className="red">Left</View></View>
            <View column width="100px"><View className="red">Left</View></View>
          </View>
          <View row className="green">All the place in the world</View>
        </View>
        <View column height="200px">
          <View column auto>
            <View className="green" height="20px">Green</View>
            <View className="red" height="20px">Red</View>
          </View>
          <View className="green">De rest</View>
        </View>
      </View>
    );
  }
});

React.render(<HelloWorld />, document.body);
