import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import s from './MainPage.module.scss';
import Carousel from './Carousel/Carousel';

const MainPage = () => (
  <div className={s.main}>
    <section className={`${s.main__section} ${s.main__section_content}`}>
      <Header />
      <div className={s.wrapper}>
        <div className={s.hero}>
          <h1 className={`${s.hero__title} ${s.title}`}>
            <span className={s.title__black}>Каршеринг</span>
            <span className={s.title__accent}>Need for drive</span>
          </h1>
          <p className={s.hero__offer}>Поминутная аренда авто твоего города</p>
        </div>
        <div className={s.wrapper_button}>
          <Button text="Забронировать" />
        </div>
      </div>
      <Footer />
    </section>
    <section className={`${s.main__section} ${s.main__section_slider}`}>
      <Carousel />
    </section>
  </div>
);

export default MainPage;
