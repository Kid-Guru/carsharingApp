import { createAction } from 'redux-actions';
import { orderApi } from '../../api/api';

export const setViewOrderData = createAction('SET_VIEW_ORDER_DATA');
export const updateStatusViewOrderData = createAction('UPDATE_STATUS_VIEW_ORDER_DATA');

export const requestOrder = (id) => async (dispatch) => {
  dispatch(updateStatusViewOrderData({ status: 'fetching' }));
  const responseOrder = await orderApi.getOrder(id);
  const order = responseOrder.data.data;
  dispatch(setViewOrderData({ data: order }));
  dispatch(updateStatusViewOrderData({ status: 'received' }));
};
