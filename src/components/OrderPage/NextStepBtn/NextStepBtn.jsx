import { useDispatch, useSelector } from 'react-redux';
import FloatBtn from '../../common/FloatBtn/FloatBtn';
import { showConfirmModalOrder, handleCurrentStepOrder } from '../../../redux/actions';
import { getIsNextStepAvailable, getIsFinalStep } from '../../../redux/selectors';

const BUTTON_TEXT = ['Выбрать модель', 'Дополнительно', 'Итого', 'Заказать'];
const NextStepBtn = () => {
  const dispatch = useDispatch();
  const currentStepOrder = useSelector((state) => state.order.steps.currentStep);
  const isNextStepAvailable = useSelector((state) => getIsNextStepAvailable(state));
  const isFinalStep = useSelector((state) => getIsFinalStep(state));
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
