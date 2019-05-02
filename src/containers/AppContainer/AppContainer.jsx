// @flow
import React, {
  Fragment,
} from 'react';
import {
  hot,
  setConfig,
  cold,
} from 'react-hot-loader';
import {
  GlobalStyle,
} from 'web-styled';

setConfig({
  pureSFC: true,
  logLevel: 'no-errors-please',
  onComponentCreate: type => (
    String(type).indexOf('useState') > 0
        || String(type).indexOf('useEffect') > 0
  ) && cold(type),
});

const App = () => (
  <Fragment>
    <GlobalStyle />
  </Fragment>
);

export default hot(module)(App);
