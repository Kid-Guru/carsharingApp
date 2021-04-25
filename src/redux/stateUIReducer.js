import { handleActions } from 'redux-actions';
import * as a from './actions';

const defaultState = {
  sidebarActive: false,
  currentLang: 0,
  availableLang: ['Рус', 'Eng'],
  coordsCities: {},
  coordsPoits: {},
};

const handlers = {
  [a.toggleMenu]: (state) => ({ ...state, sidebarActive: !state.sidebarActive }),
  [a.toggleLanguage]: (state, { payload: { currentLang } }) => ({ ...state, currentLang }),
  [a.setCitiesCoods]: (state, { payload: { coordsCities } }) => ({ ...state, coordsCities }),
};

const stateUIReducer = handleActions(handlers, defaultState);

export default stateUIReducer;
