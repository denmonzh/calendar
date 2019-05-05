import {
  combineReducers,
} from 'redux';
import dateReducer from './dateReducer';

const appReducer = combineReducers({
  dateReducer,
});

export default appReducer;
