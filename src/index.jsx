// @flow
import '@babel/polyfill';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './containers/AppContainer';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
