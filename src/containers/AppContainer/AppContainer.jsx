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
  useDispatch,
  useMappedState,
} from 'redux-react-hook';
import {
  GlobalStyle,
} from 'web-styled';
import {
  getFilterItems,
} from 'web-selectors';
import {
  Header,
  Controller,
  Calendar,
} from 'web-components';

setConfig({
  pureSFC: true,
  logLevel: 'no-errors-please',
  onComponentCreate: type => (
    String(type).indexOf('useState') > 0
        || String(type).indexOf('useEffect') > 0
  ) && cold(type),
});

const mapState = state => ({
  items: getFilterItems(state),
});

const App = () => {
  const dispatch = useDispatch();

  const { items } = useMappedState(mapState);

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Controller />
      <Calendar />
    </Fragment>
  );
};

export default hot(module)(App);
