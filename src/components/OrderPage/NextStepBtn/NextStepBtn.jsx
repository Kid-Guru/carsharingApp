import { useDispatch, useSelector } from 'react-redux';
import FloatBtn from '../../common/FloatBtn/FloatBtn';
import { ReactComponent as NextIcon } from '../../../assets/next-arrow.svg';
import { handleCurrentStepOrder as setNewStepOrder } from '../../../redux/actions';
import { getIsNextStepAvailable } from '../../../redux/selectors';

const NextStepBtn = () => {
  const dispatch = useDispatch();
  const currentStepOrder = useSelector((state) => state.order.steps.currentStep);
  const isNextStepAvailable = useSelector((state) => getIsNextStepAvailable(state));
  return (
    <FloatBtn
      text="Далее"
      isDisabled={!isNextStepAvailable}
      onClickHandle={() => dispatch(setNewStepOrder(currentStepOrder + 1))}
    >
      <NextIcon />
    </FloatBtn>
  );
};

export default NextStepBtn;
