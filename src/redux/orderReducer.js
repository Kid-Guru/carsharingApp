import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  // blank  filling  fullfiled
  steps: {
    status: {
      location: 'fullfiled',
      model: 'filling',
      extra: 'blank',
      total: 'blank',
    },
    currentStep: 0,
    map: ['location', 'model', 'extra', 'total'],
  },
  location: {
    cityOrder: null,
    pointOrder: null,
  },
  cities: [],
  points: [],
  cityOrder: null,
  pointOrder: null,
};

const handlers = {
  [actions.setCities]: (state, { payload: { cities } }) => ({ ...state, cities }),
  [actions.setPoints]: (state, { payload: { points } }) => ({ ...state, points }),
  // [actions.orderLocationStep]: (state) => ({ ...state, step: { name: 'LOCATION', number: 1 } }),
  // [actions.orderModelStep]: (state) => ({ ...state, step: { name: 'MODEL', number: 2 } }),
  // [actions.orderExtraStep]: (state) => ({ ...state, step: { name: 'EXTRA', number: 3 } }),
  // [actions.orderTotalStep]: (state) => ({ ...state, step: { name: 'TOTAL', number: 4 } }),
};

const orderReducer = handleActions(handlers, defaultState);

export default orderReducer;
