import { combineReducers } from 'redux';
import stateUIReducer from './stateUIReducer';
import mainReducer from './mainReducer';
import orderReducer from './orderReducer';
import citiesReducer from './cities/reducer';
import pointsReducer from './points/reducer';
import statusesReducer from './statuses/reducer';
import viewOrderReducer from './viewOrder/reducer';

export default combineReducers({
  main: mainReducer,
  order: orderReducer,
  stateUI: stateUIReducer,
  cities: citiesReducer,
  points: pointsReducer,
  statuses: statusesReducer,
  viewOrder: viewOrderReducer,
});
