import { connect } from 'react-redux';
import Button from '../../common/Button/Button';
import * as actions from '../../../redux/actions';
import {
  getTotalLocationStepData,
  getIsNextStepAvailable,
  getTotalModelStepData,
  getPriceData,
  getTotalTimeRentData,
  getTotalRateData,
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
  price: getPriceData(state),
});

const actionCreators = ({
  setNewStepOrder: actions.handleCurrentStepOrder,
});

export default connect(mapStateToProps, actionCreators)(Total);
