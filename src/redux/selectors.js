import { IMAGE_URL } from '../api/api';

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

export const getCars = (state) => {
  const prettyPrice = (minPrice, maxPrice) => `${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()} ₽`;
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
