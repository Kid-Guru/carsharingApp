import { connect } from 'react-redux';
import Button from '../../common/Button/Button';
import * as actions from '../../../redux/actions';
import { getTotalLocationStepData, getIsNextStepAvailable, getTotalModelStepData } from '../../../redux/selectors';
import './Total.scss';

const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];

const Total = (props) => {
  const {
    currentStepOrder,
    isNextStepAvailable,
    setNewStepOrder,
    locationStep,
    modelStep,
  } = props;
  return (
    <div className="total">
      <h4 className="total__title">Ваш заказ</h4>
      <div className="total__order">
        {locationStep.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Пункт выдачи</span>
            <span className="total__item-value_container">
              <span className="total__item-value">{locationStep.city}</span>
              <span className="total__item-value">{locationStep.adress}</span>
              {/* {`${}`} */}
            </span>
          </p>
        )}
        {modelStep.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Модель</span>
            <span className="total__item-value_container">
              <span className="total__item-value">{modelStep.model}</span>
              {/* {`${}`} */}
            </span>
          </p>
        )}
      </div>
      {/* <div className="total__price">
        <span className="total__price-title">Цена: </span>
        <span className="total__price-number">10 000 ₽</span>
      </div> */}
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
});

const actionCreators = ({
  setNewStepOrder: actions.handleCurrentStepOrder,
});

export default connect(mapStateToProps, actionCreators)(Total);
