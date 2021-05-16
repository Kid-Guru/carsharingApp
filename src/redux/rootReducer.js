import { combineReducers } from 'redux';
import UIReducer from './UI/reducer';
import orderReducer from './order/reducer';
import citiesReducer from './cities/reducer';
import pointsReducer from './points/reducer';
import carsReducer from './cars/reducer';
import categoriesReducer from './categories/reducer';
import ratesReducer from './rates/reducer';
import statusesReducer from './statuses/reducer';
import viewOrderReducer from './viewOrder/reducer';

export default combineReducers({
  order: orderReducer,
  stateUI: UIReducer,
  cities: citiesReducer,
  points: pointsReducer,
  cars: carsReducer,
  categories: categoriesReducer,
  rates: ratesReducer,
  statuses: statusesReducer,
  viewOrder: viewOrderReducer,
});
