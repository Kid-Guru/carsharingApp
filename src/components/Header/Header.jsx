import BurgerButton from '../common/BurgerButton/BurgerButton';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header__btnCol">
      <BurgerButton theme="dark" />
    </div>
    <div className="header__textCol">
      <div className="header__logo">Need for drive</div>
      <div className="s.header__city city">
        <span className="city__name">Ульяновск</span>
      </div>
    </div>
  </div>
);

export default Header;
