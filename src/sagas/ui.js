// @flow
import * as eff from 'redux-saga/effects';
import {
  actionTypes, nextMonth,
  pendingApp, prevMonth,
} from 'web-actions';



export default function* UI() {
  function* initializeCalendar() {
    yield eff.put({
      type: actionTypes.SET_INITIALIZE_CALENDAR,
      currentDate: new Date(),
      currentMonth: new Date(),
    });

    yield eff.put(pendingApp);
  }

  function* incrementMonth() {
    yield eff.put(pendingApp);
    yield eff.put({
      type: actionTypes.SET_NEXT_MONTH,
    });
    yield eff.put(pendingApp);
  }

  function* decrementMonth() {
    yield eff.put(pendingApp);
    yield eff.put({
      type: actionTypes.SET_PREV_MONTH,
    });
    yield eff.put(pendingApp);
  }

  yield eff.takeEvery(actionTypes.NEXT_MONTH, incrementMonth);
  yield eff.takeEvery(actionTypes.PREV_MONTH, decrementMonth);
  yield eff.takeEvery(actionTypes.INITIALIZE_CALENDAR, initializeCalendar);
}
