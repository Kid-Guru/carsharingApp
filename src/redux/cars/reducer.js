import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  data: [],
  status: 'fetching',
  errors: [],
};

const handlers = {
  [actions.setCars]: (state, { payload: { data } }) => ({
    ...state,
    data,
  }),
};

const carsReducer = handleActions(handlers, defaultState);

export default carsReducer;
