import { handleActions } from 'redux-actions';
import * as actions from './actions';

const defaultState = {
  data: [],
  status: 'fetching',
  errors: [],
};

const handlers = {
  [actions.setCarsCategories]: (state, { payload: { data } }) => ({
    ...state,
    data,
  }),
};

const categoriesReducer = handleActions(handlers, defaultState);

export default categoriesReducer;
