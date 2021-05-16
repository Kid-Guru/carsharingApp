import { createAction } from 'redux-actions';
import { orderApi } from '../../api/api';

export const setPoints = createAction('SET_POINTS');

// Запрос всех точек
export const getPointsRequest = () => async (dispatch) => {
  const responsePoint = await orderApi.getPoint();
  const points = responsePoint.data.data;
  // Фильтруем невалидные данные
  const filtredPoints = points.filter((p) => p.cityId !== null);
  dispatch(setPoints({ data: filtredPoints }));
};
