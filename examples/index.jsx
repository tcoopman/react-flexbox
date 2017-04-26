import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import HelloWorld from './HelloWorld';

const render = (Component) => {
  ReactDOM.render(
  <AppContainer>
    <Component/>
  </AppContainer>,
  document.getElementById('app'));
};

render(HelloWorld);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./HelloWorld', () => {
    render(HelloWorld)
  });
}
