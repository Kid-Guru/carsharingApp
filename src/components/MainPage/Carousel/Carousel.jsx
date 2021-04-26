import { useState } from 'react';
import { useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import cn from 'classnames';
import { ReactComponent as ArrowLeft } from '../../../assets/sliderArrow_left.svg';
import { ReactComponent as ArrowRigth } from '../../../assets/sliderArrow_rigth.svg';
import s from './Carousel.module.scss';

const renderSlides = (dataArray) => dataArray.map((dataItem) => (
  <div key={dataItem.id} className={`${s.carousel__slide} ${s.slide}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${dataItem.imgSRC})` }}>
    <div className={s.slide__wrapper}>
      <h2 className={s.slide__title}>{dataItem.title}</h2>
      <p className={s.slide__offer}>{dataItem.offer}</p>
      <button className={s.slide__btnDetails} type="button">Подробнее</button>
    </div>
  </div>
));

let currentSlide = 1;

const Carousel = () => {
  const dataSlides = useSelector((state) => state.main.carouselData);
  const [offset, setOffset] = useState(0);

  const nextSlideMap = {
    left: (curentSlide) => (curentSlide === 1 ? dataSlides.length : curentSlide - 1),
    rigth: (curentSlide) => (curentSlide === dataSlides.length ? 1 : curentSlide + 1),
  };

  const handleArrowClick = (direction) => () => {
    const nextSlide = nextSlideMap[direction](currentSlide);
    const newOffset = (nextSlide - 1) * -100;
    currentSlide = nextSlide;
    setOffset(newOffset);
  };

  // eslint-disable-next-line arrow-body-style
  const getDotsClass = (i, activeSlide) => {
    return cn(s.dots__item, { [s.dots__item_active]: i + 1 === activeSlide });
  };

  return (
    <div className={s.container}>
      <div className={s.carousel}>
        <div className={s.carousel__track} style={{ transform: `translateX(${offset}%)` }}>
          {renderSlides(dataSlides)}
        </div>
      </div>
      <button type="button" className={`${s.arrow} ${s.arrow__left}`} onClick={handleArrowClick('left')}>
        <ArrowLeft />
      </button>
      <button type="button" className={`${s.arrow} ${s.arrow__rigth}`} onClick={handleArrowClick('rigth')}>
        <ArrowRigth />
      </button>
      <div className={s.dots}>
        {dataSlides.map((d, i) => (
          <div key={uniqueId()} className={getDotsClass(i, currentSlide)} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
