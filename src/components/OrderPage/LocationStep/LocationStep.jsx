/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import {
  getCities, getCenterMap, getPoints, getPointsMap,
} from '../../../redux/selectors';
import LocationStepMap from './LocationStepMap';
import * as actions from '../../../redux/actions';
import './LocationStep.scss';

const LocationStep = (props) => {
  const {
    getCitiesRequest,
    getPointsRequest,
    cities,
    points,
    cityOrder,
    pointOrder,
    centerMap,
    pointsMap,
    updateCityField,
    updatePointField,
  } = props;

  useEffect(() => {
    getCitiesRequest();
    getPointsRequest();
  }, [getCitiesRequest, getPointsRequest]);

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

const mapStateToProps = (state) => ({
  cities: getCities(state),
  points: getPoints(state),
  cityOrder: state.order.cityOrder,
  pointOrder: state.order.pointOrder,
  centerMap: getCenterMap(state),
  pointsMap: getPointsMap(state),
});

const actionCreators = {
  getCitiesRequest: actions.getCitiesRequest,
  getPointsRequest: actions.getPointsRequest,
  updateCityField: actions.handleCityOrderField,
  updatePointField: actions.handlePointOrderField,
};

export default connect(mapStateToProps, actionCreators)(LocationStep);
