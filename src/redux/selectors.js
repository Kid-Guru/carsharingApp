import { IMAGE_URL } from '../api/api';

const prettyPrice = (minPrice, maxPrice) => `${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()} ₽`;
const prettyTimeRent = (timestamp) => {
  const DAY_RATIO = 86400000;
  const HOUR_RATIO = 3600000;
  const MINUTE_RATIO = 60000;
  let rest = timestamp;
  const d = Math.floor(rest / DAY_RATIO);
  rest = timestamp - (d * DAY_RATIO);
  const h = Math.floor(rest / HOUR_RATIO);
  rest -= h * HOUR_RATIO;
  const m = Math.floor(rest / MINUTE_RATIO);
  const days = d !== 0 ? `${d}Д` : '';
  const hours = h !== 0 ? `${h}Ч` : '';
  const minutes = m !== 0 ? `${m}М` : '';
  return `${days} ${hours} ${minutes}`.trim();
};

export const getCities = (state) => state.order.cities.map((c) => ({ item: c.name, id: c.id }));

export const getPoints = (state) => {
  if (state.order.points.length === 0) {
    return [];
  }
  const { cityOrder } = state.order;
  return state.order.points
    .filter((p) => p.cityId.id === cityOrder.id)
    .map((p) => ({ item: p.address, id: p.id }));
};

export const getCurrentStep = (state) => {
  const currentStepIndex = state.order.steps.currentStep;
  return state.order.steps.map[currentStepIndex];
};

export const getIsNextStepAvailable = (state) => {
  const { currentStep: currentStepIndex, map } = state.order.steps;
  const isLastStep = currentStepIndex === map.length;
  if (isLastStep) return true;
  const nextStep = map[currentStepIndex + 1];
  return state.order.steps[nextStep] === 'available';
};

export const getCenterMap = (state) => {
  const { cityOrder, pointOrder } = state.order;
  if (pointOrder.isValid) {
    return `${cityOrder.value} ${pointOrder.value}`;
  }
  if (cityOrder.isValid) {
    return `${cityOrder.value}`;
  }
  return null;
};

export const getPointsMap = (state) => {
  const { cityOrder } = state.order;
  return getPoints(state).map((p) => ({ fullAdress: `${cityOrder.value} ${p.item}`, adress: p.item, id: p.id }));
};

export const getTotalLocationStepData = (state) => {
  const { cityOrder, pointOrder } = state.order;
  const isLocationStepFullfilled = (cityOrder.isValid && pointOrder.isValid) === true;
  return ({
    city: cityOrder.value,
    adress: pointOrder.value,
    isFullfilled: isLocationStepFullfilled,
  });
};

export const getTotalModelStepData = (state) => {
  const { carOrder, cars } = state.order;
  const selectedCar = cars.find((c) => c.id === carOrder.id);
  const isModelStepFullfilled = (carOrder.isValid) === true;
  return ({
    model: selectedCar?.name,
    isFullfilled: isModelStepFullfilled,
  });
};

export const getTotalTimeRentData = (state) => {
  const { dateFrom, dateTo } = state.order.paramsOrder;
  const isFullfilled = dateFrom !== null && dateTo !== null;
  if (!isFullfilled) return ({ timeRent: '', isFullfilled });
  const timeRent = dateTo.getTime() - dateFrom.getTime();
  return ({
    timeRent: prettyTimeRent(timeRent),
    isFullfilled,
  });
};

export const getTotalRateData = (state) => {
  const { rates, paramsOrder: { rate } } = state.order;
  const isFullfilled = !!rate;
  const selectedRate = rates.find((r) => r.rateTypeId.id === rate);
  return ({
    rate: selectedRate?.rateTypeId?.name,
    isFullfilled,
  });
};

export const getFullTankData = (state) => {
  const { isFullTank } = state.order.paramsOrder;
  return ({
    value: 'Да',
    isFullfilled: isFullTank,
  });
};

export const getChildChairData = (state) => {
  const { isNeedChildChair } = state.order.paramsOrder;
  return ({
    value: 'Да',
    isFullfilled: isNeedChildChair,
  });
};

export const getRightWheelData = (state) => {
  const { isRightWheel } = state.order.paramsOrder;
  return ({
    value: 'Да',
    isFullfilled: isRightWheel,
  });
};

export const getCars = (state) => {
  const getImageURL = (path) => {
    if (path.includes('base64')) {
      return path;
    }
    return `${IMAGE_URL}${path}`;
  };
  const { cars, carsCategories: { selectedCategory } } = state.order;
  return cars
    .filter((c) => c.categoryId.id === selectedCategory || selectedCategory === null)
    .map((c) => ({
      id: c.id,
      model: c.name,
      price: prettyPrice(c.priceMin, c.priceMax),
      picPath: getImageURL(c.thumbnail.path),
    }));
};

export const getPriceData = (state) => {
  const { carOrder, paramsOrder } = state.order;
  const selectedCar = state.order.cars.find((c) => c.id === carOrder.id);
  const price = {
    isShowing: false,
    text: '',
  };
  if (!carOrder.isValid) return price;
  if (carOrder.isValid && paramsOrder.rate === null) {
    price.text = prettyPrice(selectedCar?.priceMin, selectedCar?.priceMax);
    price.isShowing = true;
  }
  return price;
};

export const getAvailableColors = (state) => {
  const { id: idCar } = state.order.carOrder;
  const selectedCar = state.order.cars.find((c) => c.id === idCar);
  return selectedCar ? selectedCar.colors : [];
};

export const getRates = (state) => {
  const { rates } = state.order;
  return rates.map((r) => ({
    text: `${r.rateTypeId.name}, ${r.price}₽/${r.rateTypeId.unit}`,
    id: r.rateTypeId.id,
  }));
};

export const getExtraOptions = (state) => {
  const { isFullTank, isNeedChildChair, isRightWheel } = state.order.paramsOrder;
  return { isFullTank, isNeedChildChair, isRightWheel };
};
