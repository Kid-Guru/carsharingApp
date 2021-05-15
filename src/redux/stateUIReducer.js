import { handleActions } from 'redux-actions';
import * as a from './actions';

const defaultState = {
  sidebarActive: false,
  currentLang: 0,
  availableLang: ['Рус', 'Eng'],
  cartIsVisible: false,
  viewOrderCartIsVisible: false,
  confirmModalOrderIsVisible: false,
};

const handlers = {
  [a.toggleMenu]: (state) => ({ ...state, sidebarActive: !state.sidebarActive }),
  [a.toggleLanguage]: (state, { payload: { currentLang } }) => ({ ...state, currentLang }),
  [a.toggleCart]: (state) => ({ ...state, cartIsVisible: !state.cartIsVisible }),
  [a.showConfirmModalOrder]: (state) => ({ ...state, confirmModalOrderIsVisible: true }),
  [a.hideConfirmModalOrder]: (state) => ({ ...state, confirmModalOrderIsVisible: false }),
};

const stateUIReducer = handleActions(handlers, defaultState);

export default stateUIReducer;
