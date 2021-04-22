import { createAction } from 'redux-actions';
import { orderApi } from '../api/api';

export const toggleMenu = createAction('TOGGLE_MENU');
export const toggleLanguage = createAction('TOGGLE_LANGUAGE');

export const setStepOrder = createAction('SET_STEP_ORDER');

export const setCities = createAction('SET_CITIES');
export const setPoints = createAction('SET_POINTS');

export const selectStepOrder = (stepNumber) => (dispatch, getState) => {
  // const steps = getState().order.steps;

  // const newStepsStatus = {

  // }

  dispatch({ currentStep: stepNumber });
};

// Запрос всех городов
export const getCitiesRequest = () => async (dispatch) => {
  const responseCity = await orderApi.getCity();

  const cities = responseCity.data.data;

  dispatch(setCities({ cities }));
};

//Запрос всех точек
export const getPointsRequest = () => async (dispatch) => {
  const responsePoint = await orderApi.getPoint();

  const points = responsePoint.data.data;

  dispatch(setPoints({ points }));
};
