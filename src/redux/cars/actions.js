import { createAction } from 'redux-actions';
import { orderApi } from '../../api/api';

export const setCars = createAction('SET_CARS');

// Запрос всех машин
export const getCarsRequest = () => async (dispatch) => {
  const responseCars = await orderApi.getCars();
  const cars = responseCars.data.data;
  dispatch(setCars({ data: cars }));
};
