import { IMAGE_URL } from '../api/api';
import {
  prettyPrice,
  prettyPriceRange,
  prettyTimeRent,
  calculateRentPrice,
} from '../helpers/utils';

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

export const getIsFinalStep = (state) => {
  const { currentStep: currentStepIndex, map } = state.order.steps;
  const lastIndex = map.length - 1;
  return currentStepIndex === lastIndex;
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

const getImageURL = (path) => {
  if (path.includes('base64')) {
    return path;
  }
  return `${IMAGE_URL}${path}`;
};

export const getCars = (state) => {
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

export const getPriceTotalData = (state) => {
  const { carOrder, paramsOrder, rates } = state.order;
  const selectedCar = state.order.cars.find((c) => c.id === carOrder.id);
  const price = {
    isShowing: false,
    text: '',
  };
  if (!carOrder.isValid) return price;
  if (paramsOrder.isValid === false) {
    price.text = prettyPriceRange(selectedCar?.priceMin, selectedCar?.priceMax);
    price.isShowing = true;
  } else {
    const selectedRate = rates.find((r) => r.rateTypeId.id === paramsOrder.rate);
    const timeRent = paramsOrder.dateTo.getTime() - paramsOrder.dateFrom.getTime();
    const extraOptions = {
      isFullTank: paramsOrder.isFullTank,
      isNeedChildChair: paramsOrder.isNeedChildChair,
      isRightWheel: paramsOrder.isRightWheel,
    };
    const rentPrice = calculateRentPrice(selectedRate, timeRent, extraOptions);
    price.text = prettyPrice(rentPrice);
    price.isShowing = true;
  }
  return price;
};

export const getSelectedCarForTotalStep = (state) => {
  const { id: idCar } = state.order.carOrder;
  const { isFullTank } = state.order.paramsOrder;
  const selectedCar = state.order.cars.find((c) => c.id === idCar);
  let carNumberPretty;
  if (selectedCar.number) {
    carNumberPretty = `${selectedCar.number[0]} ${selectedCar.number.slice(1, 4)} ${selectedCar.number.slice(4)} 73`;
  } else {
    carNumberPretty = 'K 761 HA 73';
  }
  return {
    name: selectedCar.name,
    number: carNumberPretty,
    tank: isFullTank ? 100 : selectedCar.tank,
    picPath: getImageURL(selectedCar.thumbnail.path),
  };
};

export const getAvailableFrom = (state) => {
  const { dateFrom } = state.order.paramsOrder;
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return dateFrom.toLocaleString('ru-RU', options);
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
