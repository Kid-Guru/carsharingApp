import { connect } from 'react-redux';
import Button from '../../common/Button/Button';
import * as actions from '../../../redux/actions';
import {
  getTotalLocationStepData,
  getIsNextStepAvailable,
  getTotalModelStepData,
  getPriceTotalData,
  getTotalTimeRentData,
  getTotalRateData,
  getFullTankData,
  getChildChairData,
  getRightWheelData,
} from '../../../redux/selectors';
import './Total.scss';

const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];

const Total = (props) => {
  const {
    currentStepOrder,
    isNextStepAvailable,
    setNewStepOrder,
    locationStep,
    modelStep,
    timeRent,
    rate,
    fullTank,
    childChair,
    rightWheel,
    price,
  } = props;
  return (
    <div className="total">
      <h4 className="total__title">Ваш заказ</h4>
      <div className="total__order">
        {locationStep.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Пункт выдачи</span>
            <span className="total__item-dots" />
            <span className="total__item-value_container">
              <span className="total__item-value">{locationStep.city}</span>
              <span className="total__item-value">{locationStep.adress}</span>
            </span>
          </p>
        )}
        {modelStep.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Модель</span>
            <span className="total__item-dots" />
            <span className="total__item-value_container">
              <span className="total__item-value">{modelStep.model}</span>
            </span>
          </p>
        )}
        {timeRent.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Длительность аренды</span>
            <span className="total__item-dots" />
            <span className="total__item-value_container">
              <span className="total__item-value">{timeRent.timeRent}</span>
            </span>
          </p>
        )}
        {rate.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Тариф</span>
            <span className="total__item-dots" />
            <span className="total__item-value_container">
              <span className="total__item-value">{rate.rate}</span>
            </span>
          </p>
        )}
        {fullTank.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Полный бак</span>
            <span className="total__item-dots" />
            <span className="total__item-value_container">
              <span className="total__item-value">{fullTank.value}</span>
            </span>
          </p>
        )}
        {childChair.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Детское кресло</span>
            <span className="total__item-dots" />
            <span className="total__item-value_container">
              <span className="total__item-value">{childChair.value}</span>
            </span>
          </p>
        )}
        {rightWheel.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Правый руль</span>
            <span className="total__item-dots" />
            <span className="total__item-value_container">
              <span className="total__item-value">{rightWheel.value}</span>
            </span>
          </p>
        )}
      </div>
      {price.isShowing && (
        <div className="total__price">
          <span className="total__price-title">Цена: </span>
          <span className="total__price-number">{price.text}</span>
        </div>
      )}

      <Button
        text={BUTTON_TEXT[currentStepOrder]}
        isFullWidth
        isDisabled={!isNextStepAvailable}
        onClickHandle={() => setNewStepOrder(currentStepOrder + 1)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentStepOrder: state.order.steps.currentStep,
  isNextStepAvailable: getIsNextStepAvailable(state),
  locationStep: getTotalLocationStepData(state),
  modelStep: getTotalModelStepData(state),
  timeRent: getTotalTimeRentData(state),
  rate: getTotalRateData(state),
  fullTank: getFullTankData(state),
  childChair: getChildChairData(state),
  rightWheel: getRightWheelData(state),
  price: getPriceTotalData(state),
});

const actionCreators = ({
  setNewStepOrder: actions.handleCurrentStepOrder,
});

export default connect(mapStateToProps, actionCreators)(Total);
