import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  data: {},
  status: 'fetching',
  errors: [],
};

const handlers = {
  [actions.setStatusesData]: (state, { payload: { data } }) => ({
    ...state,
    data,
  }),
  [actions.updateStatusStatusesData]: (state, { payload: { status } }) => ({
    ...state,
    status,
  }),
};

const statusesReducer = handleActions(handlers, defaultState);

export default statusesReducer;
