/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import './ParamsStep.scss';
import RadioInput from '../../common/RadioInput/RadioInput';
import CheckboxInput from '../../common/CheckboxInput/CheckboxInput';

registerLocale('ru', ru);

const ParamsStep = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="paramsStep">
      <div className="paramsStep__group group">
        <div className="group__title">Цвет</div>
        <div className="group__inputs">
          <RadioInput
            name="color car"
            htmlFor="any"
            text="Любой"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
          <RadioInput
            name="color car"
            htmlFor="any"
            text="Любой"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
          <RadioInput
            name="color car"
            htmlFor="any"
            text="Любой"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
        </div>
      </div>
      <div className="paramsStep__group group">
        <div className="group__title">Дата аренды</div>
        <div className="group__inputs">
          <div className="dateField">
            <label className="dateField__label" htmlFor="start time">
              <span className="dateField__label-text">C</span>
              <DatePicker
                id="start time"
                className="dateField__input"
                clearButtonClassName="dateField__clear"
                placeholderText="Введите дату и время"
                locale="ru"
                // selected={startDate}
                // onChange={date => setStartDate(date)}
                showTimeSelect
                isClearable
                dateFormat="dd.mm.yyyy hh:mm "
              />
            </label>
          </div>
          <div className="dateField">
            <label className="dateField__label" htmlFor="end time">
              <span className="dateField__label-text">По</span>
              <DatePicker
                id="end time"
                className="dateField__input"
                clearButtonClassName="dateField__clrbtn"
                placeholderText="Введите дату и время"
                locale="ru"
                // selected={startDate}
                // onChange={date => setStartDate(date)}
                showTimeSelect
                isClearable
                dateFormat="dd.mm.yyyy hh:mm "
              />
            </label>
          </div>
        </div>
      </div>
      <div className="paramsStep__group group">
        <div className="group__title">Тариф</div>
        <div className="group__inputs verticalInputs">
          <RadioInput
            name="rate select"
            htmlFor="1"
            text="Поминутно"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
          <RadioInput
            name="rate select"
            htmlFor="1"
            text="На сутки"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
        </div>
      </div>
      <div className="paramsStep__group group">
        <div className="group__title">Доп услуги</div>
        <div className="group__inputs verticalInputs">
          <CheckboxInput
            name="options"
            htmlFor="2"
            text="Любой xtr"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
          <CheckboxInput
            name="options"
            htmlFor="2"
            text="Любой xtr"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
          <CheckboxInput
            name="options"
            htmlFor="2"
            text="Любой xtr"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
        </div>
      </div>
    </div>
  );
};

export default ParamsStep;
