import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import TotalList from '../../common/TotalList/TotalList';
import { priceOrderSelector, orderListRowsSelector, getOrderData } from '../../../redux/selectors';
import { cancelViewedOrder } from '../../../redux/viewOrder/actions';

const ButtonProps = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getOrderData);
  if (status === 'cancelled') return null;
  return (
    <Button
      text="Отменить"
      isFullWidth
      red
      onClickHandle={() => dispatch(cancelViewedOrder())}
    />
  );
};

const Total = () => {
  const totalRowsData = useSelector(orderListRowsSelector);
  const price = useSelector(priceOrderSelector);

  return (
    <TotalList rowsData={totalRowsData} price={price} button={<ButtonProps />} />
  );
};

export default Total;
