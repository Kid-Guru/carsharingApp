import { useDispatch } from 'react-redux';
import FloatBtn from '../../common/FloatBtn/FloatBtn';
import { ReactComponent as CartIcon } from '../../../assets/shopping-cart.svg';
import { toggleViewOrderCart } from '../../../redux/UI/actions';

const ToggleCardBtn = () => {
  const dispatch = useDispatch();
  return (
    <FloatBtn onClickHandle={() => dispatch(toggleViewOrderCart())}>
      <CartIcon />
    </FloatBtn>
  );
};

export default ToggleCardBtn;
