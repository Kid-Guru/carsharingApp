import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  steps: {
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
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    isValid: false,
  },
  orderData: {},
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
  [actions.setOrderData]: (state, { payload: { orderData } }) => ({ ...state, orderData }),
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
  [actions.setDateFrom]: (state, { payload: { dateFrom } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, dateFrom },
  }),
  [actions.setDateTo]: (state, { payload: { dateTo } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, dateTo },
  }),
  [actions.setIsFullTank]: (state, { payload: { isFullTank } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, isFullTank },
  }),
  [actions.setIsNeedChildChair]: (state, { payload: { isNeedChildChair } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, isNeedChildChair },
  }),
  [actions.setIsRightWheel]: (state, { payload: { isRightWheel } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, isRightWheel },
  }),
  [actions.setParamsOrderStatus]: (state, { payload: { isValid } }) => ({
    ...state,
    paramsOrder: { ...state.paramsOrder, isValid },
  }),
  [actions.resetParamsStep]: (state) => ({
    ...state,
    paramsOrder: {
      ...state.paramsOrder,
      color: 'any',
      rate: null,
      dateFrom: null,
      dateTo: null,
      isFullTank: false,
      isNeedChildChair: false,
      isRightWheel: false,
      isValid: false,
    },
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
  [actions.setParamsStepStatus]: (state, { payload: { paramsStepStatus } }) => ({
    ...state,
    steps: {
      ...state.steps,
      params: paramsStepStatus,
    },
  }),
  [actions.setTotalStepStatus]: (state, { payload: { totalStepStatus } }) => ({
    ...state,
    steps: {
      ...state.steps,
      total: totalStepStatus,
    },
  }),
};

const orderReducer = handleActions(handlers, defaultState);

export default orderReducer;
