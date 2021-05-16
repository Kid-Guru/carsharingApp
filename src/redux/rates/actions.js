import { createAction } from 'redux-actions';
import { orderApi } from '../../api/api';

export const setRates = createAction('SET_RATES');

// Запрос тарифов
export const getRates = () => async (dispatch) => {
  const responseRates = await orderApi.getRates();
  const rates = responseRates.data.data;
  dispatch(setRates({ data: rates }));
};
