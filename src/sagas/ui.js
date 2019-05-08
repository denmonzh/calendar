// @flow
import * as eff from 'redux-saga/effects';
import {
  actionTypes,
  pendingApp,
} from 'web-actions';
import {
  initialNote,
} from 'web-utils/initialNote';

export default function* UI() {
  function* initializeCalendar() {
    yield eff.put({
      type: actionTypes.SET_INITIALIZE_CALENDAR,
      currentDate: new Date(),
      currentMonth: new Date(),
      note: initialNote,
    });

    yield eff.put(pendingApp);
  }

  function* incrementMonth() {
    yield eff.put({
      type: actionTypes.SET_NEXT_MONTH,
    });
  }

  function* decrementMonth() {
    yield eff.put({
      type: actionTypes.SET_PREV_MONTH,
    });
  }

  function* selectedDate({ payload }) {
    yield eff.put({
      type: actionTypes.SET_SELECTED_DATE,
      payload,
    });
  }

  function* switchModalOpen() {
    yield eff.put({
      type: actionTypes.SET_MODAL_IS_OPEN,
    });
  }


  yield eff.takeEvery(actionTypes.MODAL_IS_OPEN, switchModalOpen);
  yield eff.takeEvery(actionTypes.SELECTED_DATE, selectedDate);
  yield eff.takeEvery(actionTypes.NEXT_MONTH, incrementMonth);
  yield eff.takeEvery(actionTypes.PREV_MONTH, decrementMonth);
  yield eff.takeEvery(actionTypes.INITIALIZE_CALENDAR, initializeCalendar);
}
