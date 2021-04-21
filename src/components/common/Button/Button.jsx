import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ text, onClickHandle }) => (
  <button className={s.button} type="button" onClick={onClickHandle}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClickHandle: PropTypes.func,
};

Button.defaultProps = {
  text: 'текст',
  onClickHandle: () => {},
};

export default Button;
