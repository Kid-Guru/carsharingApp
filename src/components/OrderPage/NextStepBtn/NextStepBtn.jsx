import { useDispatch, useSelector } from 'react-redux';
import { handleCurrentStepOrder } from '../../../redux/order/actions';
import { getIsFinalStep, getIsNextStepAvailable } from '../../../redux/selectors';
import { showConfirmModalOrder } from '../../../redux/UI/actions';
import FloatBtn from '../../common/FloatBtn/FloatBtn';

const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];
const NextStepBtn = () => {
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
    <FloatBtn
      text={BUTTON_TEXT[currentStepOrder]}
      isDisabled={!(isNextStepAvailable || isFinalStep)}
      onClickHandle={handleClickNewStep}
    />
  );
};

export default NextStepBtn;
