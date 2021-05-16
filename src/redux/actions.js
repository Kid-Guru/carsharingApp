import { createAction } from 'redux-actions';
import { orderApi } from '../api/api';
import { calculateRentPrice } from '../helpers/utils';
import { setViewOrderData, updateStatusViewOrderData } from './viewOrder/actions';

export const toggleMenu = createAction('TOGGLE_MENU');
export const toggleLanguage = createAction('TOGGLE_LANGUAGE');
export const toggleCart = createAction('TOGGLE_CART');
export const toggleViewOrderCart = createAction('TOGGLE_VIEW_ORDER_CART');
export const showConfirmModalOrder = createAction('SHOW_COMFIRM_MODAL');
export const hideConfirmModalOrder = createAction('HIDE_COMFIRM_MODAL');

export const setStepOrder = createAction('SET_STEP_ORDER');

// export const setCities = createAction('SET_CITIES');
export const setPoints = createAction('SET_POINTS');
export const setCars = createAction('SET_CARS');
export const setCarsCategories = createAction('SET_CARS_CATEGORIES');
export const resetCarsCategories = createAction('RESET_SELECTED_CARS_CATEGORIES');
export const setRates = createAction('SET_RATES');
// export const setOrderData = createAction('SET_ORDER_DATA');

export const setCityOrder = createAction('SET_ORDER_CITY');
export const setPointOrder = createAction('SET_ORDER_POINT');
export const resetPointOrder = createAction('RESET_ORDER_POINT');
export const setCategoryFilter = createAction('SET_CATEGORY_FILTER');
export const setOrderCar = createAction('SET_ORDER_CAR');
export const resetOrderCar = createAction('RESET_ORDER_CAR');
export const setOrderCarColor = createAction('SET_ORDER_CAR_COLOR');
export const setOrderRate = createAction('SET_ORDER_RATE');
export const setDateFrom = createAction('SET_ORDER_DATE_FROM');
export const setDateTo = createAction('SET_ORDER_DATE_TO');
export const setIsFullTank = createAction('SET_ORDER_IS_FULL_TANK');
export const setIsNeedChildChair = createAction('SET_ORDER_IS_NEED_CHILD_CHAIR');
export const setIsRightWheel = createAction('SET_ORDER_IS_RIGHT_WHEEL');
export const setParamsOrderStatus = createAction('SET_PARAMS_STEP_ORDER_STATUS');
export const resetParamsStep = createAction('RESET_PARAMS_STEP_ORDER');

export const setCurrentStepOrder = createAction('SET_CURRENT_STEP_ORDER');
export const setModelStepStatus = createAction('SET_MODEL_STEP_STATUS');
export const setParamsStepStatus = createAction('SET_PARAMS_STEP_STATUS');
export const setTotalStepStatus = createAction('SET_TOTAL_STEP_STATUS');

// // Запрос всех городов
// export const getCitiesRequest = () => async (dispatch) => {
//   const responseCity = await orderApi.getCity();
//   const cities = responseCity.data.data;
//   dispatch(setCities({ cities }));
// };
// Запрос всех точек
export const getPointsRequest = () => async (dispatch) => {
  const responsePoint = await orderApi.getPoint();
  const points = responsePoint.data.data;
  // Фильтруем невалидные данные
  const filtredPoints = points.filter((p) => p.cityId !== null);
  dispatch(setPoints({ points: filtredPoints }));
};
// Запрос всех машин
export const getCarsRequest = () => async (dispatch) => {
  const responseCars = await orderApi.getCars();
  const cars = responseCars.data.data;
  dispatch(setCars({ cars }));
};
// Запрос всех категорий машин
export const getCategoriesRequest = () => async (dispatch) => {
  const responseCategories = await orderApi.getCategories();
  const categories = responseCategories.data.data;
  dispatch(setCarsCategories({ categories }));
};
// Запрос тарифов
export const getRates = () => async (dispatch) => {
  const responseRates = await orderApi.getRates();
  const rates = responseRates.data.data;
  dispatch(setRates({ rates }));
};
// Обновляем статус шага выбора модели
export const handleModelStepStatus = () => (dispatch, getState) => {
  const { cityOrder, pointOrder } = getState().order;
  if (cityOrder.isValid && pointOrder.isValid) {
    dispatch(setModelStepStatus({ modelStepStatus: 'available' }));
  } else {
    dispatch(resetOrderCar());
    dispatch(resetCarsCategories());
    dispatch(setModelStepStatus({ modelStepStatus: 'blocked' }));
  }
};
// Обновляем статус шага параметров заказа
export const handleParamsStepStatus = () => (dispatch, getState) => {
  const { carOrder } = getState().order;
  if (carOrder.isValid) {
    dispatch(setParamsStepStatus({ paramsStepStatus: 'available' }));
  } else {
    dispatch(resetParamsStep());
    dispatch(setParamsStepStatus({ paramsStepStatus: 'blocked' }));
  }
};
// Обновляем статус шага итога заказа
export const handleTotalStepStatus = () => (dispatch, getState) => {
  const { paramsOrder } = getState().order;
  if (paramsOrder.isValid) {
    dispatch(setTotalStepStatus({ totalStepStatus: 'available' }));
  } else {
    dispatch(setTotalStepStatus({ totalStepStatus: 'blocked' }));
  }
};
// Обновляем статусы шагов заказа
export const updateAllStepsStatus = () => (dispatch) => {
  dispatch(handleModelStepStatus());
  dispatch(handleParamsStepStatus());
  dispatch(handleTotalStepStatus());
};
// Обрабатываем value поля Город
export const handleCityOrderField = (newCityOrderValue) => (dispatch, getState) => {
  const { data: cities } = getState().cities;
  const findCity = cities.find((c) => c.name.toLowerCase() === newCityOrderValue.toLowerCase());
  const isValid = !!findCity;
  const id = findCity ? findCity.id : null;

  const cityOrder = {
    value: newCityOrderValue,
    id,
    isValid,
  };
  dispatch(setCityOrder({ cityOrder }));
  dispatch(resetPointOrder());
  dispatch(updateAllStepsStatus());
};
// Обрабатываем value поля Пункт выдачи
export const handlePointOrderField = (newPointOrderValue) => (dispatch, getState) => {
  const { points } = getState().order;
  const findPoint = points
    .find((c) => c.address.toLowerCase() === newPointOrderValue.toLowerCase());
  const isValid = !!findPoint;
  const id = findPoint ? findPoint.id : null;

  const pointOrder = {
    value: newPointOrderValue,
    id,
    isValid,
  };
  dispatch(setPointOrder({ pointOrder }));
  dispatch(updateAllStepsStatus());
};
// Обрабатываем выбор модели машины
export const handleModelOrder = (id) => (dispatch) => {
  dispatch(setOrderCar({ id }));
  dispatch(resetParamsStep());
  dispatch(updateAllStepsStatus());
};
export const updateValidParamsOrderStatus = () => (dispatch, getState) => {
  const { paramsOrder } = getState().order;
  let isValid = false;
  if (paramsOrder.dateFrom !== null
    && paramsOrder.dateTo !== null
    && paramsOrder.rate !== null) {
    isValid = true;
  }
  dispatch(setParamsOrderStatus({ isValid }));
};
// Обрабатываем выбор тарифа
export const handleRateOrder = (id) => (dispatch) => {
  dispatch(setOrderRate({ rate: id }));
  dispatch(updateValidParamsOrderStatus());
  dispatch(updateAllStepsStatus());
};
// Обрабатываем поле даты начала оренды
export const handleDateFromOrder = (dateFrom) => (dispatch) => {
  dispatch(setDateFrom({ dateFrom }));
  dispatch(updateValidParamsOrderStatus());
  dispatch(updateAllStepsStatus());
};
// Обрабатываем поле даты конца оренды
export const handleDateToOrder = (dateTo) => (dispatch) => {
  dispatch(setDateTo({ dateTo }));
  dispatch(updateValidParamsOrderStatus());
  dispatch(updateAllStepsStatus());
};
// Обрабатываем изменение текущего шага заказа
export const handleCurrentStepOrder = (newStepOrder) => (dispatch, getState) => {
  const { steps } = getState().order;
  const nameNewStep = steps.map[newStepOrder];
  const isNewStepAvailable = steps[nameNewStep] === 'available';
  if (isNewStepAvailable) {
    dispatch(setCurrentStepOrder({ currentStep: newStepOrder }));
  }
};

export const resetAllOrderSteps = () => async (dispatch) => {
  dispatch(setCurrentStepOrder({ currentStep: 0 }));
  dispatch(setTotalStepStatus({ totalStepStatus: 'blocked' }));
  dispatch(resetParamsStep());
  dispatch(setParamsStepStatus({ paramsStepStatus: 'blocked' }));
  dispatch(resetOrderCar());
  dispatch(resetCarsCategories());
  dispatch(setModelStepStatus({ modelStepStatus: 'blocked' }));
  dispatch(resetPointOrder());
};

export const sendOrder = () => async (dispatch, getState) => {
  const state = getState();
  const {
    cityOrder, pointOrder, carOrder, paramsOrder, rates,
  } = state.order;
  const selectedRate = rates.find((r) => r.id === paramsOrder.rate);
  const timeRent = paramsOrder.dateTo.getTime() - paramsOrder.dateFrom.getTime();
  const extraOptions = {
    isFullTank: paramsOrder.isFullTank,
    isNeedChildChair: paramsOrder.isNeedChildChair,
    isRightWheel: paramsOrder.isRightWheel,
  };
  const rentPrice = calculateRentPrice(selectedRate, timeRent, extraOptions);
  const statusNewOrder = state.statuses.data[2];
  const orderBody = {
    orderStatusId: statusNewOrder,
    cityId: cityOrder.id,
    pointId: pointOrder.id,
    carId: carOrder.id,
    color: paramsOrder.color,
    dateFrom: paramsOrder.dateFrom.getTime(),
    dateTo: paramsOrder.dateTo.getTime(),
    rateId: paramsOrder.rate,
    price: rentPrice,
    isFullTank: paramsOrder.isFullTank,
    isNeedChildChair: paramsOrder.isNeedChildChair,
    isRightWheel: paramsOrder.isRightWheel,
  };
  // const responseOrder = await orderApi.getStatuses();
  const responseOrder = await orderApi.postOrder(orderBody);
  const order = responseOrder.data.data;
  dispatch(setViewOrderData({ data: order }));
  dispatch(updateStatusViewOrderData({ status: 'received' }));
  dispatch(hideConfirmModalOrder());
  dispatch(resetAllOrderSteps());
};

// export const requestOrder = (id) => async (dispatch) => {
//   const responseOrder = await orderApi.getOrder(id);
//   const order = responseOrder.data.data;
//   dispatch(setOrderData({ orderData: order }));
// };
