import { useState } from 'react';
import s from './Carousel.module.scss';
import img1 from './Img/img_1.png';
import img2 from './Img/img_2.png';
import img3 from './Img/img_3.png';
import img4 from './Img/img_4.png';

const slides = [img1, img2, img3, img4];

let currentSlide = 1;

const nextSlideMap = {
  left: (curentSlide) => (curentSlide === 1 ? slides.length : curentSlide - 1),
  rigth: (curentSlide) => (curentSlide === slides.length ? 1 : curentSlide + 1),
};

const carouselSlides = slides.map((img) => (
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

const Carousel = () => {
  const [offset, setOffset] = useState(0);

  const handleArrowClick = (direction) => () => {
    const nextSlide = nextSlideMap[direction](currentSlide);
    console.log(nextSlide);
    const newOffset = (nextSlide - 1) * -100;
    currentSlide = nextSlide;
    setOffset(newOffset);
  };

  return (
    <div className={s.container}>
      <div className={s.carousel}>
        <div className={s.carousel__track} style={{ transform: `translateX(${offset}%)` }}>
          {carouselSlides}
        </div>
      </div>
      <button type="button" className={`${s.arrow} ${s.arrow__left}`} onClick={handleArrowClick('left')}>
        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L1 10L9 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button type="button" className={`${s.arrow} ${s.arrow__rigth}`} onClick={handleArrowClick('rigth')}>
        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 10L1 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
