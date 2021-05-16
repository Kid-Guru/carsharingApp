import cn from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../../redux/UI/actions';
import s from './BurgerButton.module.scss';

const themeMap = {
  ligth: s.ligth,
  dark: s.dark,
};
const BurgerButton = ({ theme }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.stateUI.sidebarActive);
  const buttonClass = cn(s.burgerBtn, themeMap[theme], { [s.burgerBtn_active]: isMenuOpen });
  return (
    <button
      className={buttonClass}
      type="button"
      onClick={() => dispatch(toggleMenu())}
    >
      <span className={s.burgerBtn__element} />
    </button>
  );
};

BurgerButton.propTypes = {
  theme: PropTypes.oneOf(['ligth', 'dark']),
};

BurgerButton.defaultProps = {
  theme: 'ligth',
};

export default BurgerButton;
