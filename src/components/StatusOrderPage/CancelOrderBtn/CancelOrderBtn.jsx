import { useDispatch, useSelector } from 'react-redux';
import FloatBtn from '../../common/FloatBtn/FloatBtn';
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
    />
  );
};

export default CancelOrderBtn;
