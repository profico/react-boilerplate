import { combineReducers } from 'redux';
import something from './something';

const reducers = {
  something,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
