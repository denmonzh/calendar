import configureStore from './configureStore';
import rootSaga from '../sagas/index';

const initialState = {};
const store = configureStore(initialState);

store.runSaga(rootSaga);

export default store;
