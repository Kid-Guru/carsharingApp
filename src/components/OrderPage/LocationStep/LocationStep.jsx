/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getCitiesRequest } from '../../../redux/cities/actions';
import { handleCityOrderField, handlePointOrderField } from '../../../redux/order/actions';
import { getPointsRequest } from '../../../redux/points/actions';
import {
  getCenterMap, getCities, getPoints, getPointsMap,
} from '../../../redux/selectors';
import './LocationStep.scss';
import LocationStepMap from './LocationStepMap';

const LocationStep = () => {
  const dispatch = useDispatch();
  const updateCityField = (value) => dispatch(handleCityOrderField(value));
  const updatePointField = (value) => dispatch(handlePointOrderField(value));

  const cities = useSelector(getCities);
  const points = useSelector(getPoints);
  const cityOrder = useSelector((state) => state.order.cityOrder);
  const pointOrder = useSelector((state) => state.order.pointOrder);
  const centerMap = useSelector(getCenterMap);
  const pointsMap = useSelector(getPointsMap);

  useEffect(() => {
    dispatch(getCitiesRequest());
    dispatch(getPointsRequest());
  }, [dispatch]);

  const onChangeCityHandle = (value) => updateCityField(value);
  const onChangePointHandle = (value) => updatePointField(value);

  const optionsCity = cities.map((c) => ({ value: c.item, label: c.item }));
  const optionsPoints = points.map((p) => ({ value: p.item, label: p.item }));
  return (
    <div className="locationStep">
      <div className="locationStep__form form">
        <div className="locationField">
          <label className="locationField__label" htmlFor="cityOrder">
            <span className="locationField__label-text">Город</span>
            <Select
              classNamePrefix="locationField__input"
              inputId="cityOrder"
              placeholder="Начните вводить город"
              isClearable="true"
              value={cityOrder.value === '' ? null : ({ value: cityOrder.value, label: cityOrder.value })}
              onChange={(input) => onChangeCityHandle(input === null ? '' : input.value)}
              options={optionsCity}
              noOptionsMessage={() => 'Нет вариантов'}
            />
          </label>
        </div>

        <div className="locationField">
          <label className="locationField__label" htmlFor="orderPoint">
            <span className="locationField__label-text">Пункт выдачи</span>
            <Select
              classNamePrefix="locationField__input"
              inputId="orderPoint"
              placeholder="Начните вводить пункт"
              isClearable="true"
              value={pointOrder.value === '' ? null : ({ value: pointOrder.value, label: pointOrder.value })}
              onChange={(input) => onChangePointHandle(input === null ? '' : input.value)}
              options={optionsPoints}
              noOptionsMessage={() => 'Нет вариантов'}
            />
          </label>
        </div>
      </div>
      <div className="locationStep__map">
        <LocationStepMap center={centerMap} points={pointsMap} selectPoint={updatePointField} />
      </div>
    </div>
  );
};

export default (LocationStep);
