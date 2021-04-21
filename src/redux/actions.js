import { createAction } from 'redux-actions';
import { orderApi } from '../api/api';

export const toggleMenu = createAction('TOGGLE_MENU');
export const toggleLanguage = createAction('TOGGLE_LANGUAGE');

export const setStepOrder = createAction('SET_STEP_ORDER');
export const setCities = createAction('SET_CITIES');

export const selectStepOrder = (stepNumber) => (dispatch, getState) => {
  // const steps = getState().order.steps;

  // const newStepsStatus = {

  // }

  dispatch({ currentStep: stepNumber });
};

// Запрос всех городов
export const getCitiesRequest = () => async (dispatch) => {
  const response = await orderApi.getCities();
  console.log(response);
};
