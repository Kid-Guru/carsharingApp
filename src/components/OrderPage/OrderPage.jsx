import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import BreadCrumds from './BreadCrumbs/BreadCrumbs';
import LocationStep from './LocationStep/LocationStep';
import ModelStep from './ModelStep/ModelStep';
import ParamsStep from './ParamsStep/ParamsStep';
import Total from './Total/Total';
import './OrderPage.scss';
import FloatBtn from '../common/FloatBtn/FloatBtn';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import { ReactComponent as NextIcon } from '../../assets/next-arrow.svg';
import { getIsNextStepAvailable } from '../../redux/selectors';
import { toggleCart, handleCurrentStepOrder as setNewStepOrder } from '../../redux/actions';

const OrderPage = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.order.steps.currentStep);
  const isNextStepAvailable = useSelector((state) => getIsNextStepAvailable(state));
  const currentStepOrder = useSelector((state) => state.order.steps.currentStep);
  const isCartVisible = useSelector((state) => state.stateUI.cartIsVisible);

  return (
    <div className="page">
      <div className="container container-header">
        <Header />
      </div>
      <BreadCrumds />
      <div className="container container-order">
        <div className="order">
          <div className="order__step order__col">
            {currentStep === 0 ? <LocationStep /> : null}
            {currentStep === 1 ? <ModelStep /> : null}
            {currentStep === 2 ? <ParamsStep /> : null}
          </div>
          <div className="order__delimetr order__col">
            <div className="order__delimetr_border" />
          </div>
          <div className={`order__total order__col ${isCartVisible ? 'order__total_active' : ''}`}>
            <Total />
          </div>
          <div className="order__mobileBtn">
            <FloatBtn
              onClickHandle={() => dispatch(toggleCart())}
            >
              <CartIcon />
            </FloatBtn>
            <FloatBtn
              text="Далее"
              isDisabled={!isNextStepAvailable}
              onClickHandle={() => dispatch(setNewStepOrder(currentStepOrder + 1))}
            >
              <NextIcon />
            </FloatBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
