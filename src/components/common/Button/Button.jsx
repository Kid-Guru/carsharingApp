import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ text }) => (
  <button className={s.button} type="button">{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'текст',
};

export default Button;
