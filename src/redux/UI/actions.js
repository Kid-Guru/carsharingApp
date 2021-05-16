import { createAction } from 'redux-actions';

export const toggleMenu = createAction('TOGGLE_MENU');
export const toggleLanguage = createAction('TOGGLE_LANGUAGE');
export const toggleCart = createAction('TOGGLE_CART');
export const toggleViewOrderCart = createAction('TOGGLE_VIEW_ORDER_CART');
export const showConfirmModalOrder = createAction('SHOW_COMFIRM_MODAL');
export const hideConfirmModalOrder = createAction('HIDE_COMFIRM_MODAL');
