import { useDispatch, useSelector } from 'react-redux';
import FloatBtn from '../../common/FloatBtn/FloatBtn';
import { ReactComponent as NextIcon } from '../../../assets/next-arrow.svg';
import { showConfirmModalOrder, handleCurrentStepOrder } from '../../../redux/actions';
import { getIsNextStepAvailable, getIsFinalStep } from '../../../redux/selectors';

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
      text="Далее"
      isDisabled={!(isNextStepAvailable || isFinalStep)}
      onClickHandle={handleClickNewStep}
    >
      <NextIcon />
    </FloatBtn>
  );
};

export default NextStepBtn;
