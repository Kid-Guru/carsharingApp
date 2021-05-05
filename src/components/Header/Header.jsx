import { useSelector } from 'react-redux';
import cn from 'classnames';
import BurgerButton from '../common/BurgerButton/BurgerButton';
import './Header.scss';

const Header = () => {
  const { value, isValid } = useSelector((state) => state.order.cityOrder);
  const cityClass = cn('city', { city_isHidden: !isValid });
  return (
    <div className="header">
      <div className="header__btnCol">
        <BurgerButton theme="dark" />
      </div>
      <div className="header__textCol">
        <div className="header__logo">Need for drive</div>
        <div className={`s.header__city ${cityClass}`}>
          <span className="city__name">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
