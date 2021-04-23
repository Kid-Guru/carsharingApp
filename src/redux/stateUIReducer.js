import { handleActions } from 'redux-actions';
import * as a from './actions';

const defaultState = {
  sidebarActive: false,
  currentLang: 0,
  availableLang: ['Рус', 'Eng'],
};

const handlers = {
  [a.toggleMenu]: (state) => ({ ...state, sidebarActive: !state.sidebarActive }),
  [a.toggleLanguage]: (state, { payload: { currentLang } }) => ({ ...state, currentLang }),
};

const stateUIReducer = handleActions(handlers, defaultState);

export default stateUIReducer;
