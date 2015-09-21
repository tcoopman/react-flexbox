import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {FlexColumn, FlexRow} from '../src/index.jsx';
import View from '../src/index.jsx';

class HelloWorld extends React.Component {
  render() {
    return (
      <View column className="border" height="70vh">
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
          <View className="green">All the rest</View>
        </View>
      </View>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
