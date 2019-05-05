// @flow
import React, {
  Fragment,
  useEffect,
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
  getCurrentDateMonth,
  getCurrentDaysRows,
  getWeeksDays,
} from 'web-selectors';
import {
  Header,
  Controller,
  Calendar,
} from 'web-components';
import {
  initializeCalendar,
  nextMonth,
  prevMonth,
} from 'web-actions';

setConfig({
  pureSFC: true,
  logLevel: 'no-errors-please',
  onComponentCreate: type => (
    String(type).indexOf('useState') > 0
        || String(type).indexOf('useEffect') > 0
  ) && cold(type),
});

const mapState = state => ({
  current: getCurrentDateMonth(state),
  pending: state.dateReducer.pending,
  ...getCurrentDaysRows(state),
  ...getWeeksDays(state),
});

const App = () => {
  const dispatch = useDispatch();

  const state = useMappedState(mapState);

  console.log(state);

  const handleNextMonth = () => {
    dispatch(nextMonth());
  };

  const handlePrevMonth = () => (
    dispatch(prevMonth())
  );

  useEffect(() => {
    dispatch(initializeCalendar());
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Controller
        current={state.current}
        pending={state.pending}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <Calendar
        days={state.days}
        week={state.week}
        current={state.current}
      />
    </Fragment>
  );
};

export default hot(module)(App);
