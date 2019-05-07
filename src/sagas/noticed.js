// @flow
import * as eff from 'redux-saga/effects';
import {
  actionTypes,
} from 'web-actions';
import {
  selectedDate,
  noticed,
} from 'web-selectors';
import {
  randomIdGenerator,
} from 'web-utils';


export default function* Noticed() {
  function* addDateNoticed({ payload }) {
    const date = yield eff.select(selectedDate);
    const data = {
      id: randomIdGenerator(),
      complete: false,
      ...payload,
      date,
    };
    yield eff.put({
      type: actionTypes.SET_ADD_NOTICED,
      data,
    });
  }

  function* editSelectedNoticed({ payload }) {
    yield eff.put({
      type: actionTypes.SET_EDIT_NOTICED,
      payload,
    });
  }

  function* switchNoticed() {
    yield eff.put({
      type: actionTypes.SET_SWITCH_NOTICED_MODAL,
    });
  }

  function* saveChange({ payload }) {
    const currentNoticed = yield eff.select(noticed);
    const index = currentNoticed.findIndex(item => item.id === payload.id);


    if (payload.delete) {
      yield eff.put({
        type: actionTypes.SET_SAVE_CHANGE_NOTICED,
        payload: currentNoticed,
      });
    }

    if (payload.complete) {
      currentNoticed[index].complete = true;
      yield eff.put({
        type: actionTypes.SET_SAVE_CHANGE_NOTICED,
        payload: currentNoticed,
      });
    }

    if (!payload.complete && !payload.delete) {
      currentNoticed[index] = payload;
      yield eff.put({
        type: actionTypes.SET_SAVE_CHANGE_NOTICED,
        payload: currentNoticed,
      });
    }

    yield eff.put({
      type: actionTypes.SET_SELECTED_DATE,
      payload: currentNoticed[index].date,
    });
  }

  yield eff.takeEvery(actionTypes.SAVE_CHANGE_NOTICED, saveChange);
  yield eff.takeEvery(actionTypes.SWITCH_NOTICED_MODAL, switchNoticed);
  yield eff.takeEvery(actionTypes.EDIT_NOTICED, editSelectedNoticed);
  yield eff.takeEvery(actionTypes.ADD_NOTICED, addDateNoticed);
}
