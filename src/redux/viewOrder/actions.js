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

export const cancelViewedOrder = () => async (dispatch, getState) => {
  const { viewOrder, statuses } = getState();
  dispatch(updateStatusViewOrderData({ status: 'fetching' }));
  const orderBody = { ...viewOrder.data, orderStatusId: statuses.data[3] };
  const orderId = viewOrder.data.id;
  const responseOrder = await orderApi.updateOrder(orderId, orderBody);
  const order = responseOrder.data.data;
  dispatch(setViewOrderData({ data: order }));
  dispatch(updateStatusViewOrderData({ status: 'received' }));
};
