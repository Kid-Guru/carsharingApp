import { handleActions } from 'redux-actions';
import * as a from './actions';

const defaultState = {
  sidebarActive: false,
};

const handlers = {
  [a.toggleMenu]: (state) => ({ ...state, sidebarActive: !state.sidebarActive }),
};

const stateUIReducer = handleActions(handlers, defaultState);

export default stateUIReducer;
