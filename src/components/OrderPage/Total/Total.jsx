import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import TotalList from '../../common/TotalList/TotalList';
import * as actions from '../../../redux/actions';
import {
  getIsNextStepAvailable,
  getIsFinalStep,
  getPriceTotalData,
  getTotalRowsData,
} from '../../../redux/selectors';

const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];
const ButtonNext = () => {
  const dispatch = useDispatch();
  const currentStepOrder = useSelector((state) => state.order.steps.currentStep);
  const isNextStepAvailable = useSelector((state) => getIsNextStepAvailable(state));
  const isFinalStep = useSelector((state) => getIsFinalStep(state));
  const handleClickNewStep = () => {
    if (!isFinalStep) {
      dispatch(actions.handleCurrentStepOrder(currentStepOrder + 1));
    } else {
      dispatch(actions.showConfirmModalOrder());
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
  const totalRowsData = useSelector((state) => getTotalRowsData(state));
  const price = useSelector((state) => getPriceTotalData(state));

  return (
    <TotalList rowsData={totalRowsData} price={price} button={<ButtonNext />} />
  );
};

export default Total;
