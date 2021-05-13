import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import * as actions from '../../../redux/actions';
import {
  getIsNextStepAvailable,
  getIsFinalStep,
  getPriceTotalData,
  getTotalRowsData,
} from '../../../redux/selectors';
import './Total.scss';

const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];
const TOTAL_ROW_TEXT = ['Пункт выдачи', 'Модель', 'Длительность аренды', 'Тариф', 'Полный бак', 'Детское кресло', 'Правый руль'];

const Total = () => {
  const currentStepOrder = useSelector((state) => state.order.steps.currentStep);
  const isNextStepAvailable = useSelector((state) => getIsNextStepAvailable(state));
  const isFinalStep = useSelector((state) => getIsFinalStep(state));
  const totalRowsData = useSelector((state) => getTotalRowsData(state));
  const price = useSelector((state) => getPriceTotalData(state));

  const dispatch = useDispatch();
  const handleClickNewStep = () => {
    if (!isFinalStep) {
      dispatch(actions.handleCurrentStepOrder(currentStepOrder + 1));
    } else {
      dispatch(actions.showConfirmModalOrder());
    }
  };

  return (
    <div className="total">
      <h4 className="total__title">Ваш заказ</h4>
      <div className="total__order">

        {totalRowsData.map((d, i) => {
          if (!d.isFullfilled) return null;
          return (
            <p className="total__item">
              <span className="total__item-title">{TOTAL_ROW_TEXT[i]}</span>
              <span className="total__item-dots" />
              <span className="total__item-value_container">
                {d.value.map((v) => <span className="total__item-value">{v}</span>)}
              </span>
            </p>
          );
        })}

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
        isDisabled={!(isNextStepAvailable || isFinalStep)}
        onClickHandle={handleClickNewStep}
      />
    </div>
  );
};

export default (Total);
