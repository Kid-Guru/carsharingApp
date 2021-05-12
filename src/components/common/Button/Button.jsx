import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = (props) => {
  const {
    text,
    onClickHandle,
    isDisabled,
    isFullWidth,
    style,
  } = props;
  const buttonClass = cn(s.button, { [s.button__fullWidth]: isFullWidth });
  return (
    <button
      className={buttonClass}
      disabled={isDisabled}
      type="button"
      onClick={onClickHandle}
      style={style}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClickHandle: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};

Button.defaultProps = {
  text: 'текст',
  onClickHandle: () => { },
  isDisabled: false,
  isFullWidth: false,
};

export default Button;
