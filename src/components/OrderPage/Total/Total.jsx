import { useDispatch, useSelector } from 'react-redux';
import { handleCurrentStepOrder } from '../../../redux/order/actions';
import {
  getIsFinalStep,
  getIsNextStepAvailable,
  getPriceTotalData,
  getTotalRowsData,
} from '../../../redux/selectors';
import { showConfirmModalOrder } from '../../../redux/UI/actions';
import Button from '../../common/Button/Button';
import TotalList from '../../common/TotalList/TotalList';

const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];
const ButtonNext = () => {
  const dispatch = useDispatch();
  const currentStepOrder = useSelector((state) => state.order.steps.currentStep);
  const isNextStepAvailable = useSelector(getIsNextStepAvailable);
  const isFinalStep = useSelector(getIsFinalStep);
  const handleClickNewStep = () => {
    if (!isFinalStep) {
      dispatch(handleCurrentStepOrder(currentStepOrder + 1));
    } else {
      dispatch(showConfirmModalOrder());
    }
  };

  return (
    <Button
      text={BUTTON_TEXT[currentStepOrder]}
      isFullWidth
      isDisabled={!(isNextStepAvailable || isFinalStep)}
      onClickHandle={handleClickNewStep}
    />
  );
};

const Total = () => {
  const totalRowsData = useSelector(getTotalRowsData);
  const price = useSelector(getPriceTotalData);

  return (
    <TotalList rowsData={totalRowsData} price={price} button={<ButtonNext />} />
  );
};

export default Total;
