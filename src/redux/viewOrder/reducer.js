import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  data: {},
  status: 'fetching',
  errors: [],
};

const handlers = {
  [actions.setViewOrderData]: (state, { payload: { data } }) => ({
    ...state,
    data,
  }),
  [actions.resetViewedOrder]: (state) => ({ ...state, data: {} }),
  [actions.updateStatusViewOrderData]: (state, { payload: { status } }) => ({
    ...state,
    status,
  }),
};

const viewOrderReducer = handleActions(handlers, defaultState);

export default viewOrderReducer;
