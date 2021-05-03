import s from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
  const {
    htmlFor,
    name,
    text,
    checked,
    onChange,
  } = props;
  return (
    <>
      <label className={s.checkbox} htmlFor={htmlFor}>
        <input
          className={s.checkbox__input}
          id={htmlFor}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className={s.checkbox__text}>{text}</span>
      </label>
    </>
  );
};

export default CheckboxInput;
