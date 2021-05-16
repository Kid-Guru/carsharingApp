import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  data: [],
  status: 'fetching',
  errors: [],
};

const handlers = {
  [actions.setRates]: (state, { payload: { data } }) => ({
    ...state,
    data,
  }),
};

const ratesReducer = handleActions(handlers, defaultState);

export default ratesReducer;
