import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducer/index';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  return {
    ...createStore(
      appReducer,
      initialState,
      composeEnhancers(applyMiddleware(
        sagaMiddleware,
      )),
    ),
    runSaga: sagaMiddleware.run,
  };
}
