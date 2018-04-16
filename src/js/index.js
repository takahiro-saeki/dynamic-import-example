import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./App/index.jsx', () => {
    const NextRootContainer = require('./App/index.jsx').default;
    render(
      <NextRootContainer />,
      document.getElementById('app')
    )
  });
}