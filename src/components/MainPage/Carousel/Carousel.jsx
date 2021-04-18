import s from './Carousel.module.scss';
import img1 from './Img/img_1.png';
import img2 from './Img/img_2.png';
import img3 from './Img/img_3.png';
import img4 from './Img/img_4.png';

const offset = -0;

const carouselSlides = [img1, img2, img3, img4].map((img) => (
  <div className={`${s.carousel__slide} ${s.slide}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${img})` }}>
    <div className={s.slide__wrapper}>
      <h2 className={s.slide__title}>Бесплатная парковка</h2>
      <p className={s.slide__offer}>
        Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
      </p>
      <button className={s.slide__btnDetails} type="button">Подробнее</button>
    </div>
  </div>
));

const Carousel = () => (
  <div className={s.container}>
    <div className={s.carousel}>
      <div className={s.carousel__track} style={{ transform: `translateX(${offset}%)` }}>
        {carouselSlides}
      </div>
    </div>
    <button type="button" className={`${s.arrow} ${s.arrow__left}`}>
      <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 10L9 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <button type="button" className={`${s.arrow} ${s.arrow__rigth}`}>
      <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 10L1 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
);

export default Carousel;
