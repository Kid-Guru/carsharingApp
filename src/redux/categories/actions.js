import { createAction } from 'redux-actions';
import { orderApi } from '../../api/api';

export const setCarsCategories = createAction('SET_CARS_CATEGORIES');

// Запрос всех категорий машин
export const getCategoriesRequest = () => async (dispatch) => {
  const responseCategories = await orderApi.getCategories();
  const categories = responseCategories.data.data;
  dispatch(setCarsCategories({ data: categories }));
};
