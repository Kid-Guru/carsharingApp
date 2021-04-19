import { combineReducers } from 'redux';
import stateUIReducer from './stateUIReducer';

export default combineReducers({
  // main: mainReducer,
  stateUI: stateUIReducer,
});
