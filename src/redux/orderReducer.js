import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  steps: {
    // blocked  current  available
    location: 'available',
    model: 'blocked',
    extra: 'blocked',
    total: 'blocked',
    currentStep: 0,
    map: ['location', 'model', 'extra', 'total'],
  },
  cities: [],
  points: [],
  cars: [],
  carsCategories: {
    categories: [],
    selectedCategory: null,
  },
  cityOrder: {
    value: '',
    id: null,
    isValid: false,
  },
  pointOrder: {
    value: '',
    id: null,
    isValid: false,
  },
  carOrder: {
    id: null,
    valid: false,
  },
};

const handlers = {
  [actions.setCities]: (state, { payload: { cities } }) => ({ ...state, cities }),
  [actions.setPoints]: (state, { payload: { points } }) => ({ ...state, points }),
  [actions.setCars]: (state, { payload: { cars } }) => ({ ...state, cars }),
  [actions.setCarsCategories]: (state, { payload: { categories } }) => ({
    ...state,
    carsCategories: { ...state.carsCategories, categories },
  }),
  [actions.setCityOrder]: (state, { payload: { cityOrder } }) => ({ ...state, cityOrder }),
  [actions.setPointOrder]: (state, { payload: { pointOrder } }) => ({ ...state, pointOrder }),
  [actions.resetPointOrder]: (state) => ({ ...state, pointOrder: { value: '', id: null, isValid: false } }),
  [actions.setCategoryFilter]: (state, { payload: { selectedCategory } }) => ({
    ...state,
    carsCategories: { ...state.carsCategories, selectedCategory },
  }),
  [actions.setOrderCar]: (state, { payload: { id } }) => ({
    ...state,
    carOrder: { id, isValid: true },
  }),
  [actions.setCurrentStepOrder]: (state, { payload: { currentStep } }) => ({
    ...state,
    steps: {
      ...state.steps,
      currentStep,
    },
  }),
  [actions.setModelStepStatus]: (state, { payload: { modelStepStatus } }) => ({
    ...state,
    steps: {
      ...state.steps,
      model: modelStepStatus,
    },
  }),
  // [actions.orderLocationStep]: (state) => ({ ...state, step: { name: 'LOCATION', number: 1 } }),
  // [actions.orderModelStep]: (state) => ({ ...state, step: { name: 'MODEL', number: 2 } }),
  // [actions.orderExtraStep]: (state) => ({ ...state, step: { name: 'EXTRA', number: 3 } }),
  // [actions.orderTotalStep]: (state) => ({ ...state, step: { name: 'TOTAL', number: 4 } }),
};

const orderReducer = handleActions(handlers, defaultState);

export default orderReducer;
