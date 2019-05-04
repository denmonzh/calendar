import {
  combineReducers,
} from 'redux';
import reducerItems from './reducer';

const appReducer = combineReducers({
  reducerItems,
});

export default appReducer;
