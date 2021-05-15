import { createAction } from 'redux-actions';
import { orderApi } from '../../api/api';

export const setStatusesData = createAction('SET_STATUSES');
export const updateStatusStatusesData = createAction('UPDATE_STATUS_STATUSES_DATA');

export const requestStatuses = () => async (dispatch) => {
  dispatch(updateStatusStatusesData({ status: 'fetching' }));
  const responseStatuses = await orderApi.getStatuses();
  const statuses = responseStatuses.data.data;
  dispatch(setStatusesData({ data: statuses }));
  dispatch(updateStatusStatusesData({ status: 'received' }));
};
