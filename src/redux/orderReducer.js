import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  steps: {
    // blocked  current  available
    location: 'available',
    model: 'blocked',
    params: 'blocked',
    total: 'blocked',
    currentStep: 0,
    map: ['location', 'model', 'params', 'total'],
  },
  cities: [],
  points: [],
  cars: [],
  rates: [],
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
    isValid: false,
  },
  paramsOrder: {
    color: 'any',
    rate: null,
    dateFrom: null,
    dateTo: null,
    isFullTank: true,
    isNeedChildChair: true,
    isRightWheel: true,
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
  [actions.resetCarsCategories]: (state) => ({
    ...state,
    carsCategories: {
      categories: [], selectedCategory: null,
    },
  }),
  [actions.setRates]: (state, { payload: { rates } }) => ({ ...state, rates }),
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
  [actions.resetOrderCar]: (state) => ({ ...state, carOrder: { id: null, valid: false } }),
  [actions.setOrderCarColor]: (state, { payload: { color } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, color },
  }),
  [actions.setOrderRate]: (state, { payload: { rate } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, rate },
  }),
  [actions.setDateFrom]: (state, { payload: { dateFrom } }) => ({ ...state, paramsOrder: { ...state.paramsOrder, dateFrom }}),
  [actions.setDateTo]: (state, { payload: { dateTo } }) => ({ ...state, paramsOrder: { ...state.paramsOrder, dateTo }}),
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
  [actions.setParamsStepStatus]: (state, { payload: { paramsStepStatus } }) => ({
    ...state,
    steps: {
      ...state.steps,
      params: paramsStepStatus,
    },
  }),
};

const orderReducer = handleActions(handlers, defaultState);

export default orderReducer;
