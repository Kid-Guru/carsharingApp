import { combineReducers } from 'redux';
import UIReducer from './UI/reducer';
import mainReducer from './mainReducer';
import orderReducer from './orderReducer';
import citiesReducer from './cities/reducer';
import pointsReducer from './points/reducer';
import carsReducer from './cars/reducer';
import ratesReducer from './rates/reducer';
import statusesReducer from './statuses/reducer';
import viewOrderReducer from './viewOrder/reducer';

export default combineReducers({
  main: mainReducer,
  order: orderReducer,
  stateUI: UIReducer,
  cities: citiesReducer,
  points: pointsReducer,
  cars: carsReducer,
  rates: ratesReducer,
  statuses: statusesReducer,
  viewOrder: viewOrderReducer,
});
