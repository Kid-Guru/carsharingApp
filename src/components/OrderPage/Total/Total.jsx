import { connect } from 'react-redux';
import Button from '../../common/Button/Button';
import * as actions from '../../../redux/actions';
import { getLocationStepData, getIsNextStepAvailable } from '../../../redux/selectors';
import './Total.scss';

const Total = (props) => {
  const {
    currentStepOrder,
    isNextStepAvailable,
    setNewStepOrder,
    locationStep,
  } = props;
  return (
    <div className="total">
      <h4 className="total__title">Ваш заказ</h4>
      <div className="total__order">
        {locationStep.isFullfilled && (
          <p className="total__item">
            <span className="total__item-title">Пункт выдачи</span>
            <span className="total__item-value">{locationStep.text}</span>
          </p>
        )}
      </div>
      <div className="total__price">
        <span className="total__price-title">Цена: </span>
        <span className="total__price-number">10 000 ₽</span>
      </div>
      <Button
        text="Слеудющий шаг"
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
  locationStep: getLocationStepData(state),
});

const actionCreators = ({
  setNewStepOrder: actions.handleCurrentStepOrder,
});

export default connect(mapStateToProps, actionCreators)(Total);
