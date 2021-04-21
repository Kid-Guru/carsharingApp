import s from './InputFiled.module.scss';

const InputField = ({ id, labelText, placeholder, autocompleteData }) => (
  <div className={s.field}>
    <label className={s.label} htmlFor={id}>{labelText}</label>

    <input className={s.input}
      type="text" id={id}
      placeholder={placeholder}
      list={`${id}list`}
      autoComplete="off" />

    <datalist className={s.datalist} id={`${id}list`}>
      {autocompleteData.map(t => <option key={t} value={t} />)}
    </datalist>
    <button className={s.clearBtn} type="button">✖</button>
  </div>
);

export default InputField;
