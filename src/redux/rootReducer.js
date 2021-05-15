import { combineReducers } from 'redux';
import stateUIReducer from './stateUIReducer';
import mainReducer from './mainReducer';
import orderReducer from './orderReducer';
import statusesReducer from './statuses/reducer';
import viewOrderReducer from './viewOrder/reducer';

export default combineReducers({
  main: mainReducer,
  order: orderReducer,
  stateUI: stateUIReducer,
  statuses: statusesReducer,
  viewOrder: viewOrderReducer,
});
