import { createAction } from 'redux-actions';
import { orderApi } from '../api/api';
import getCoord from '../api/geocode';

export const toggleMenu = createAction('TOGGLE_MENU');
export const toggleLanguage = createAction('TOGGLE_LANGUAGE');

export const setStepOrder = createAction('SET_STEP_ORDER');

export const setCities = createAction('SET_CITIES');
export const setCitiesCoods = createAction('SET_CITIES_COORDS');
export const setPoints = createAction('SET_POINTS');
export const setCars = createAction('SET_CARS');

export const setCityOrder = createAction('SET_ORDER_CITY');
export const setPointOrder = createAction('SET_ORDER_POINT');
export const resetPointOrder = createAction('RESET_ORDER_POINT');

export const setCurrentStepOrder = createAction('SET_CURRENT_STEP_ORDER');
export const setModelStepStatus = createAction('SET_MODEL_STEP_STATUS');

// // Запрос координат городов
// export const getCitiesCoordsRequest = (cities) => async (dispatch) => {
//   const requests = cities.map((city) => getCoord(city.name));
//   Promise.all(requests)
//     .then((responses) => responses.map(response => {
//       return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse();
//     }))
//     .then((coords) => {
//       const citiesCoords = {};
//       coords.forEach((coord, index) => citiesCoords[cities[index].id] = coord);
//       return citiesCoords;
//     })
//     .then((coordsCities) => dispatch(setCitiesCoods({ coordsCities })));
// };

// Запрос всех городов
export const getCitiesRequest = () => async (dispatch) => {
  const responseCity = await orderApi.getCity();

  const cities = responseCity.data.data;

  // dispatch(getCitiesCoordsRequest(cities));
  dispatch(setCities({ cities }));
};
// Запрос всех точек
export const getPointsRequest = () => async (dispatch) => {
  const responsePoint = await orderApi.getPoint();

  const points = responsePoint.data.data;
  const filtredPoints = points.filter((p) => p.cityId !== null);
  dispatch(setPoints({ points: filtredPoints }));
};
// Запрос всех машин
export const getCarsRequest = () => async (dispatch) => {
  const responseCars = await orderApi.getCars();
  const cars = responseCars.data.data;
  dispatch(setCars({ cars }));
};

export const handleCityOrderField = (newCityOrderValue) => (dispatch, getState) => {
  const { cities } = getState().order;
  const findCity = cities.find((c) => c.name.toLowerCase() === newCityOrderValue.toLowerCase());
  const isValid = !!findCity;
  const id = findCity ? findCity.id : null;

  const cityOrder = {
    value: newCityOrderValue,
    id,
    isValid,
  };
  dispatch(setCityOrder({ cityOrder }));
  dispatch(resetPointOrder());
};

export const handlePointOrderField = (newPointOrderValue) => (dispatch, getState) => {
  const { points } = getState().order;
  const findPoint = points
    .find((c) => c.address.toLowerCase() === newPointOrderValue.toLowerCase());
  const isValid = !!findPoint;
  const id = findPoint ? findPoint.id : null;

  const pointOrder = {
    value: newPointOrderValue,
    id,
    isValid,
  };
  dispatch(setPointOrder({ pointOrder }));
  dispatch(handleModelStepStatus({ pointOrder }));
};

export const handleModelStepStatus = () => (dispatch, getState) => {
  const { cityOrder, pointOrder } = getState().order;
  if (cityOrder.isValid && pointOrder.isValid) {
    dispatch(setModelStepStatus({ modelStepStatus: 'available' }));
  } else {
    dispatch(setModelStepStatus({ modelStepStatus: 'blocked' }));
  }
};

export const handleCurrentStepOrder = (newStepOrder) => (dispatch, getState) => {
  const { steps } = getState().order;
  const nameNewStep = steps.map[newStepOrder];
  const isNewStepAvailable = steps[nameNewStep] === 'available';
  if (isNewStepAvailable) {
    dispatch(setCurrentStepOrder({ currentStep: newStepOrder }));
  }
};
