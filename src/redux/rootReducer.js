import { combineReducers } from 'redux';
import stateUIReducer from './stateUIReducer';
import mainReducer from './mainReducer';

export default combineReducers({
  main: mainReducer,
  stateUI: stateUIReducer,
});
