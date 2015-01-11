# React-flexbox

Implementation of css flexbox in react with inline styles.
It is written in ES6 and requires an ES6 to ES5 transpiler. If there is need for
it I can add a transpiled version to the repo.

# API

## Components

### FlexRow

A flex row

### FlexColumn

A flex column

## Props

All props are optional and can be set on both components.

### className

must be a string

### height

_height_ must be a string with a valid css unit.

### style

Will be merged the flex style. This allows you to override the style.

### width

_width_ can be either a number `width={2}`, this acts as _flex-grow_ or a string
with a unit (for example _%_ or _px_) - it must be a valid css unit.

# Examples

See _examples_

To run, make sure the devDependencies are installed and run `npm run example`,
after that surf to _http://localhost:8080/webpack-dev-server/_
