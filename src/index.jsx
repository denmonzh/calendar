// @flow
import '@babel/polyfill';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  StoreContext,
} from 'redux-react-hook';
import type {
  ComponentType,
} from 'react';
import {
  render as reactRender,
} from 'react-dom';
import store from './store';
import App from './containers/AppContainer';

const rootEl: HTMLElement = window.document.getElementById('root');

const render: Function = (Component: ComponentType<*>) => (
  reactRender(
    <StoreContext.Provider value={store}>
      <Component />
    </StoreContext.Provider>,
    rootEl,
  )
);

render(App);
