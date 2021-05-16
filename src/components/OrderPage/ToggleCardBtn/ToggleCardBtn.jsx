import { useDispatch } from 'react-redux';
import FloatBtn from '../../common/FloatBtn/FloatBtn';
import { ReactComponent as CartIcon } from '../../../assets/shopping-cart.svg';
import { toggleCart } from '../../../redux/UI/actions';

const ToggleCardBtn = () => {
  const dispatch = useDispatch();
  return (
    <FloatBtn onClickHandle={() => dispatch(toggleCart())}>
      <CartIcon />
    </FloatBtn>
  );
};

export default ToggleCardBtn;
