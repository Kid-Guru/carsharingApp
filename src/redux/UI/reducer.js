import { handleActions } from 'redux-actions';
import * as a from './actions';
import img1 from '../../components/MainPage/Carousel/Img/img_1.png';
import img2 from '../../components/MainPage/Carousel/Img/img_2.png';
import img3 from '../../components/MainPage/Carousel/Img/img_3.png';
import img4 from '../../components/MainPage/Carousel/Img/img_4.png';

const defaultState = {
  sidebarActive: false,
  currentLang: 0,
  availableLang: ['Рус', 'Eng'],
  cartIsVisible: false,
  viewOrderCartIsVisible: false,
  confirmModalOrderIsVisible: false,
  carouselData: [
    {
      title: 'Бесплатный парковка',
      offer: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
      imgSRC: img1,
      id: 1,
    },
    {
      title: 'Страховка',
      offer: 'Полная страховка страховка автомобиля',
      imgSRC: img2,
      id: 2,
    },
    {
      title: 'Бензин',
      offer: 'Полный бак на любой заправке города за наш счёт',
      imgSRC: img3,
      id: 3,
    },
    {
      title: 'Обслуживание',
      offer: 'Автомобиль проходит еженедельное ТО',
      imgSRC: img4,
      id: 4,
    },
  ],
};

const handlers = {
  [a.toggleMenu]: (state) => ({ ...state, sidebarActive: !state.sidebarActive }),
  [a.toggleLanguage]: (state, { payload: { currentLang } }) => ({ ...state, currentLang }),
  [a.toggleCart]: (state) => ({ ...state, cartIsVisible: !state.cartIsVisible }),
  [a.toggleViewOrderCart]: (state) => ({
    ...state,
    viewOrderCartIsVisible: !state.viewOrderCartIsVisible,
  }),
  [a.showConfirmModalOrder]: (state) => ({ ...state, confirmModalOrderIsVisible: true }),
  [a.hideConfirmModalOrder]: (state) => ({ ...state, confirmModalOrderIsVisible: false }),
};

const UIReducer = handleActions(handlers, defaultState);

export default UIReducer;
