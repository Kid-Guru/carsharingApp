import BurgerButton from '../common/BurgerButton/BurgerButton';
import LanguageButton from '../common/LanguageButton/LanguageButton';
import './SideBar.scss';

const SideBar = () => (
  <aside className="sideBar">
    <div>
      <BurgerButton theme="ligth" />
    </div>
    <div>
      <LanguageButton />
    </div>
  </aside>
);

export default SideBar;
