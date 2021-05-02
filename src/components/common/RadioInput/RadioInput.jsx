import s from './RadioInput.module.scss';

const RadioInput = (props) => {
  const {
    htmlFor,
    name,
    text,
    checked,
    onChange,
  } = props;
  return (
    <>
      <label className={s.radioInput} htmlFor={htmlFor}>
        <input
          className={s.radioInput__input}
          id={htmlFor}
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className={s.radioInput__text}>{text}</span>
      </label>
    </>
  );
};

export default RadioInput;
