import {
  all,
  fork,
} from 'redux-saga/effects';

import UI from './ui';

function* rootSaga() {
  yield all([
    fork(UI),
  ]);
}

export default rootSaga;
