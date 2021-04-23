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

export const isNextStepAvailable = (state) => {
  const { currentStep: currentStepIndex, map } = state.order.steps;
  const isLastStep = currentStepIndex === map.length;
  if (isLastStep) return true;
  const nextStep = map[currentStepIndex + 1];
  return state.order.steps[nextStep] === 'available';
};
