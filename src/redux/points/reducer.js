import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  data: [],
  status: 'fetching',
  errors: [],
};

const handlers = {
  [actions.setPoints]: (state, { payload: { data } }) => ({
    ...state,
    data,
  }),
};

const pointsReducer = handleActions(handlers, defaultState);

export default pointsReducer;
