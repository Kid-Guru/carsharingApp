import s from './SideMenu.module.scss';

const SideMenu = () => (
  <aside className={`${s.sideMenu} ${s.active}`}>
    <button className={s.burgerBtn} type="button">
      <span className={`${s.burgerBtn_element} ${s.burgerBtn_rotate}`} />
      <span className={s.burgerBtn_element} />
      <span className={`${s.burgerBtn_element} ${s.burgerBtn_rotate}`} />
    </button>
    <button className={s.sideMenu__languageBtn} type="button">Eng</button>
    {/* <Menu /> */}
  </aside>
);

export default SideMenu;
