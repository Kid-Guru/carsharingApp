import { useDispatch, useSelector } from 'react-redux';
import FloatBtn from '../../common/FloatBtn/FloatBtn';
import { ReactComponent as NextIcon } from '../../../assets/next-arrow.svg';
import { getOrderData } from '../../../redux/selectors';
import { cancelViewedOrder } from '../../../redux/viewOrder/actions';

const CancelOrderBtn = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getOrderData);
  if (status === 'cancelled') return null;

  return (
    <FloatBtn
      text="Отменить"
      onClickHandle={() => dispatch(cancelViewedOrder())}
      red
    >
      <NextIcon />
    </FloatBtn>
  );
};

export default CancelOrderBtn;
