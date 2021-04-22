import s from './InputFiled.module.scss';
import { uniqueId } from 'lodash';

const InputField = (props) => {
  const {
    id,
    labelText,
    placeholder,
    autocompleteData,
    name,
    // value,
    // onChange,
    // errors,
    // touched,
    // setCallBack,
  } = props;
  const onBlurHandle = () => {
    if (errors && errors.length === 0) {
      setCallBack(value);
    }
  };
  return (
    <div className={s.field}>
      <label className={s.label} htmlFor={id}>{labelText}</label>

      <div className={s.input__wrapper}>
        <input
          className={s.input}
          type="text"
          id={id}
          placeholder={placeholder}
          list={`${id}list`}
          autoComplete="off"
          name={name}
          // value={value}
          // onBlur={onBlurHandle}
          // onChange={onChange}
        />
        {/* {errors && touched ? <div className={s.tooltip}>{errors}</div> : null} */}
      </div>

      {/* <div className={s.tooltip}>{ errors }</div> */}

      <datalist className={s.datalist} id={`${id}list`}>
        {autocompleteData.map(i => <option key={i.id} value={i.item} />)}
      </datalist>
      <button className={s.clearBtn} type="button">✖</button>
    </div>
  )
};

export default InputField;
