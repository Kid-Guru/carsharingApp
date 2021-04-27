import { useEffect } from 'react';
import { connect } from 'react-redux';
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

  const onChangeCityHandle = (e) => updateCityField(e.target.value);
  const onChangePointHandle = (e) => updatePointField(e.target.value);
  const clearCityField = () => updateCityField('');
  const clearPointField = () => updatePointField('');
  return (
    <div className="locationStep">
      <div className="locationStep__form form">
        <div className="field">
          <label className="label" htmlFor="city">
            <span className="label-text">Город</span>
            <input
              className="input"
              type="text"
              id="city"
              placeholder="Начните вводить город"
              list="cityList"
              autoComplete="off"
              name="city"
              value={cityOrder.value}
              onChange={onChangeCityHandle}
            />
          </label>
          <datalist className="datalist" id="cityList">
            {cities.map((i) => <option key={i.id} value={i.item} aria-label={i.item} />)}
          </datalist>
          {cityOrder.value ? (
            <button className="clearBtn" type="button" onClick={clearCityField}>✖</button>
          ) : null}
        </div>

        <div className="field">
          <label className="label" htmlFor="point">
            <span className="label-text">Пункт выдачи</span>
            <input
              className="input"
              type="text"
              id="point"
              placeholder="Начните вводить пункт"
              list="pointList"
              autoComplete="off"
              name="point"
              value={pointOrder.value}
              onChange={onChangePointHandle}
            />
          </label>
          <datalist className="datalist" id="pointList">
            {// 2
              pointOrder.value.length >= 0
              && points.map((i) => <option key={i.id} value={i.item} aria-label={i.item} />)
            }
          </datalist>
          {pointOrder.value ? (
            <button className="clearBtn" type="button" onClick={clearPointField}>✖</button>
          ) : null}
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
