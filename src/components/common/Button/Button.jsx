import s from './Button.module.scss';

const Button = ({ text = 'Кнопка' }) => (
  <button className={s.button} type="button">{text}</button>
);

export default Button;
