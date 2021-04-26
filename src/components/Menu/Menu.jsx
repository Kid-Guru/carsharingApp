/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from 'react-redux';
import cn from 'classnames';
import BurgerButton from '../common/BurgerButton/BurgerButton';
import LanguageButton from '../common/LanguageButton/LanguageButton';
import './Menu.scss';
import { ReactComponent as SVGLogoTelegram } from '../../assets/telegram_icon.svg';
import { ReactComponent as SVGLogoFacebook } from '../../assets/facebook_icon.svg';
import { ReactComponent as SVGLogoInstagram } from '../../assets/instagram_icon.svg';

const Menu = () => {
  const isMenuOpen = useSelector((state) => state.stateUI.sidebarActive);
  const menuClass = cn('menu', { menu__active: isMenuOpen });
  return (
    <div className={menuClass}>
      <div className="menu__side-col">
        <div className="burgerBtn">
          <BurgerButton theme="ligth" />
        </div>
        <div className="languageBtn"><LanguageButton /></div>
      </div>
      <div className="menu__content">
        <div className="menu__content--wrapper">
          <ul className="list">
            <li className="list__item">ПАРКОВКА</li>
            <li className="list__item">СТРАХОВКА</li>
            <li className="list__item">БЕНЗИН</li>
            <li className="list__item">ОБСЛУЖИВАНИЕ</li>
          </ul>
          <div className="social">
            <a href="#" className="social__link">
              <SVGLogoTelegram />
            </a>
            <a href="#" className="social__link">
              <SVGLogoFacebook />
            </a>
            <a href="#" className="social__link">
              <SVGLogoInstagram />
            </a>
          </div>
        </div>

      </div>
      <div className="menu__empty-col" />
    </div>
  );
};

export default Menu;
