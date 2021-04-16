import s from './BurgerButton.module.scss';

const themeMap = {
  ligth: s.ligth,
  dark: s.dark,
};
// ${s.burgerBtn_active}
const BurgerButton = ({ theme = 'ligth' }) => (
  <button className={`${s.burgerBtn} ${themeMap[theme]}`} type="button">
    <span className={s.burgerBtn__element} />
  </button>
);

export default BurgerButton;
