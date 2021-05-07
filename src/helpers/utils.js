const prettyPrice = (price) => `${price.toLocaleString()} ₽`;
const prettyPriceRange = (minPrice, maxPrice) => `${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()} ₽`;

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

const mapConversionFactor = {
  сутки: 86400000,
  '7 дней': 604800000,
  мин: 60000,
};
const costOptions = {
  fullTank: 500,
  childChair: 200,
  rightWheel: 1600,
};
const calculateRentPrice = (selectedRate, duration, options) => {
  const conversionFactor = mapConversionFactor[selectedRate.rateTypeId.unit];
  let price = selectedRate.price * (duration / conversionFactor);
  if (options.isFullTank) price += costOptions.fullTank;
  if (options.isNeedChildChair) price += costOptions.childChair;
  if (options.isRightWheel) price += costOptions.rightWheel;
  return Math.floor(price);
};

export {
  prettyPrice,
  prettyPriceRange,
  prettyTimeRent,
  calculateRentPrice,
};
