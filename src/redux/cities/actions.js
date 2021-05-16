import { createAction } from 'redux-actions';
import { orderApi } from '../../api/api';

export const setCities = createAction('SET_CITIES');

// Запрос всех городов
export const getCitiesRequest = () => async (dispatch) => {
  const responseCity = await orderApi.getCity();
  const cities = responseCity.data.data;
  dispatch(setCities({ data: cities }));
};
