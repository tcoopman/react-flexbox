# React-flexbox

Implementation of css flexbox in react with inline styles.
It is written in ES6 and requires an ES6 to ES5 transpiler. If there is need for
it I can add a transpiled version to the repo.

# API

## Install
```
npm install react-flexbox --save
yarn add react-flexbox
```
```js
const View = require('react-flexbox')
// or
import View from 'react-flexbox'
```

## UMD
Module exposed as `ReactFlexbox`

```
<script src="https://unpkg.com/react-flexbox/dist/react-flexbox.js"></scrip>
```
```js
const View = ReactFlexbox.default
```

## Components

### View

A flex view element that can be used instead of `FlexRow` or `FlexColumn`

This is default import.

Some simple examples:

```js
<View row>
  <View auto row>
    <View column width="100px"><View className="red">Left</View></View>
    <View column width="100px"><View className="red">Left</View></View>
  </View>
  <View row className="green">All the place in the world</View>
</View>
```

```js
<View column height="200px">
  <View column auto>
    <View className="green" height="20px">Green</View>
    <View className="red" height="20px">Red</View>
  </View>
  <View className="green">De rest</View>
</View>
```

### Props

All props are optional and can be set on both components.

#### row

boolean, sets the flexDirection to row

#### column

boolean, sets the flexDirection to column

#### auto

boolean, sets flex to '0 0 auto'

#### className

must be a string

#### height

_height_ must be a string with a valid css unit.

#### style

Will be merged the flex style. This allows you to override the style.

#### width

_width_ can be either a number `width={2}`, this acts as _flex-grow_ or a string
with a unit (for example _%_ or _px_) - it must be a valid css unit.

### FlexRow

*deprecated*

A flex row.
This is a `View` with prop `row`

### FlexColumn

*deprecated*

A flex column
This is a `View` with prop `column`


# Examples

See _examples_

To run, make sure the devDependencies are installed and run `npm run example`,
after that surf to _http://localhost:8080/webpack-dev-server/_
