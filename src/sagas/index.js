import {
  all,
  fork,
} from 'redux-saga/effects';

import UI from './ui';
import Noticed from './noticed';

function* rootSaga() {
  yield all([
    fork(UI),
    fork(Noticed),
  ]);
}

export default rootSaga;
