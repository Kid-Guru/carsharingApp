/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { getAvailableColors, getExtraOptions, getRatesSelector } from '../../../redux/selectors';
import { getRates } from '../../../redux/rates/actions';
import * as actions from '../../../redux/actions';
import 'react-datepicker/dist/react-datepicker.css';
import './ParamsStep.scss';
import RadioInput from '../../common/RadioInput/RadioInput';
import CheckboxInput from '../../common/CheckboxInput/CheckboxInput';

registerLocale('ru', ru);

const ParamsStep = () => {
  const dispatch = useDispatch();
  const selectColor = (color) => dispatch(actions.setOrderCarColor(color));
  const selectRate = (rate) => dispatch(actions.handleRateOrder(rate));
  const selectDateFrom = (dateFrom) => dispatch(actions.handleDateFromOrder(dateFrom));
  const selectDateTo = (dateTo) => dispatch(actions.handleDateToOrder(dateTo));
  const selectIsFullTank = (isFullTank) => dispatch(actions.setIsFullTank(isFullTank));
  const selectIsNeedChildChair = (isNeedChair) => {
    dispatch(actions.setIsNeedChildChair(isNeedChair));
  };
  const selectIsRightWheel = (isRigthWheel) => dispatch(actions.setIsRightWheel(isRigthWheel));

  const colors = useSelector(getAvailableColors);
  const rates = useSelector(getRatesSelector);
  const selectedColor = useSelector((state) => state.order.paramsOrder.color);
  const selectedRate = useSelector((state) => state.order.paramsOrder.rate);
  const dateFrom = useSelector((state) => state.order.paramsOrder.dateFrom);
  const dateTo = useSelector((state) => state.order.paramsOrder.dateTo);
  const extraOptions = useSelector(getExtraOptions);

  useEffect(() => {
    const getRatesRequest = () => dispatch(getRates());
    getRatesRequest();
  }, [dispatch]);

  const filterTimeFrom = (time) => {
    const selectedDate = new Date(time);
    if (dateTo === null) {
      return selectedDate.getTime() > Date.now();
    }
    return dateTo.getTime() > selectedDate.getTime() && selectedDate.getTime() > Date.now();
  };
  const filterTimeTo = (time) => {
    const selectedDate = new Date(time);
    if (dateFrom === null) return true;
    return dateFrom.getTime() < selectedDate.getTime();
  };

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
                onChange={(date) => selectDateFrom(date)}
                minDate={new Date()}
                maxDate={dateTo}
                filterTime={filterTimeFrom}
                showTimeSelect
                isClearable
                dateFormat="dd.MM.yyyy HH:mm "
                onFocus={(e) => { e.target.readOnly = true; }}
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
                onChange={(date) => selectDateTo(date)}
                minDate={dateFrom}
                filterTime={filterTimeTo}
                showTimeSelect
                isClearable
                dateFormat="dd.MM.yyyy HH:mm "
                onFocus={(e) => { e.target.readOnly = true; }}
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
              onChange={() => selectRate(r.id)}
            />
          ))}
        </div>
      </div>
      <div className="paramsStep__group group">
        <div className="group__title">Доп услуги</div>
        <div className="group__inputs verticalInputs">
          <CheckboxInput
            htmlFor="isFullTank"
            text="Полный бак, 500р"
            checked={extraOptions.isFullTank}
            onChange={() => selectIsFullTank({ isFullTank: !extraOptions.isFullTank })}
          />
          <CheckboxInput
            htmlFor="isNeedChildChair"
            text="Детское кресло, 200р"
            checked={extraOptions.isNeedChildChair}
            onChange={() => selectIsNeedChildChair({
              isNeedChildChair: !extraOptions.isNeedChildChair,
            })}
          />
          <CheckboxInput
            htmlFor="isRightWheel"
            text="Правый руль, 1600р"
            checked={extraOptions.isRightWheel}
            onChange={() => selectIsRightWheel({ isRightWheel: !extraOptions.isRightWheel })}
          />
        </div>
      </div>
    </div>
  );
};

export default (ParamsStep);
