import { handleActions } from 'redux-actions';
import img1 from '../components/MainPage/Carousel/Img/img_1.png';
import img2 from '../components/MainPage/Carousel/Img/img_2.png';
import img3 from '../components/MainPage/Carousel/Img/img_3.png';
import img4 from '../components/MainPage/Carousel/Img/img_4.png';

const defaultState = {
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

const mainReduser = handleActions({}, defaultState);

export default mainReduser;
