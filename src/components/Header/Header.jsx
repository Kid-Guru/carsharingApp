import BurgerButton from '../common/BurgerButton/BurgerButton';
import s from './Header.module.scss';

const Header = () => (
  <div className={s.header}>
    <div className={s.header__btnCol}>
      <BurgerButton theme="dark" />
    </div>
    <div className={s.header__textCol}>
      <div className={s.header__logo}>Need for drive</div>
      <div className={`${s.header__city} ${s.city}`}>
        <span className={s.city__name}>Ульяновск</span>
      </div>
    </div>

  </div>
);

export default Header;
