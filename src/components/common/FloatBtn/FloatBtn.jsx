import cn from 'classnames';
import s from './FloatBtn.module.scss';

const FloatBtn = (props) => {
  const {
    isDisabled,
    onClickHandle,
    text = '',
    children,
  } = props;
  const buttonClass = cn(s.button, { [s.button__extended]: text !== '' });
  return (
    <button
      className={buttonClass}
      disabled={isDisabled}
      type="button"
      onClick={onClickHandle}
    >
      <span className={s.button__label}>
        {children}
        {text}
      </span>
    </button>
  );
};

export default FloatBtn;
