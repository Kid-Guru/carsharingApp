/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { connect } from 'react-redux';
import ru from 'date-fns/locale/ru';
import { getAvailableColors, getRates } from '../../../redux/selectors';
import * as actions from '../../../redux/actions';
import 'react-datepicker/dist/react-datepicker.css';
import './ParamsStep.scss';
import RadioInput from '../../common/RadioInput/RadioInput';
import CheckboxInput from '../../common/CheckboxInput/CheckboxInput';

registerLocale('ru', ru);

const ParamsStep = (props) => {
  const {
    colors,
    rates,
    selectedColor,
    selectedRate,
    dateFrom,
    dateTo,
    selectColor,
    selectRate,
    selectDateFrom,
    selectDateTo,
    getRatesRequest,
  } = props;

  useEffect(() => {
    getRatesRequest();
  }, [getRatesRequest]);

  return (
    <div className="paramsStep">
      <div className="paramsStep__group group">
        <div className="group__title">Цвет</div>
        <div className="group__inputs">
          <RadioInput
            name="color car"
            htmlFor="any"
            text="Любой"
            checked={selectedColor === 'any'}
            onChange={() => selectColor({ color: 'any' })}
          />
          {colors.map((c) => (
            <RadioInput
              key={c}
              name="color car"
              htmlFor={c}
              text={c}
              checked={selectedColor === c}
              onChange={() => selectColor({ color: c })}
            />
          ))}
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
                selected={dateFrom}
                onChange={(date) => selectDateFrom({ dateFrom: date })}
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
                clearButtonClassName="dateField__clear"
                placeholderText="Введите дату и время"
                locale="ru"
                selected={dateTo}
                onChange={(date) => selectDateTo({ dateTo: date })}
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
          {rates.map((r) => (
            <RadioInput
              key={r.id}
              name="rateSelect"
              htmlFor={r.text}
              text={r.text}
              checked={selectedRate === r.id}
              onChange={() => selectRate({ rate: r.id })}
            />
          ))}
        </div>
      </div>
      <div className="paramsStep__group group">
        <div className="group__title">Доп услуги</div>
        <div className="group__inputs verticalInputs">
          <CheckboxInput
            htmlFor="fullTank"
            text="Полный бак, 500р"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
          <CheckboxInput
            htmlFor="babyChair"
            text="Детское кресло, 200р"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
          <CheckboxInput
            htmlFor="rigthHandDrive"
            text="Правый руль, 1600р"
          // checked={selectedCategory === null}
          // onChange={() => selectCategory({ selectedCategory: null })}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  colors: getAvailableColors(state),
  rates: getRates(state),
  selectedColor: state.order.paramsOrder.color,
  selectedRate: state.order.paramsOrder.rate,
  dateFrom: state.order.paramsOrder.dateFrom,
  dateTo: state.order.paramsOrder.dateTo,
});

const actionCreators = ({
  getRatesRequest: actions.getRates,
  selectColor: actions.setOrderCarColor,
  selectRate: actions.setOrderRate,
  selectDateFrom: actions.setDateFrom,
  selectDateTo: actions.setDateTo,
});

export default connect(mapStateToProps, actionCreators)(ParamsStep);
