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
