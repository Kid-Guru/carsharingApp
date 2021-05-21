import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import BreadCrumds from './BreadCrumbs/BreadCrumbs';
import LocationStep from './LocationStep/LocationStep';
import ModelStep from './ModelStep/ModelStep';
import ParamsStep from './ParamsStep/ParamsStep';
import TotalStep from './TotalStep/TotalStep';
import Total from './Total/Total';
import './OrderPage.scss';
import ToggleCardBtn from './ToggleCardBtn/ToggleCardBtn';
import NextStepBtn from './NextStepBtn/NextStepBtn';

const OrderPage = () => {
  const currentStep = useSelector((state) => state.order.steps.currentStep);
  const isCartVisible = useSelector((state) => state.stateUI.cartIsVisible);

  return (
    <div className="page">
      <div className="container container-header">
        <Header />
      </div>
      <div className="line">
        <div className="container line__container">
          <BreadCrumds />
        </div>
      </div>
      <div className="container container-order">
        <div className="order">
          <div className="order__step order__col">
            {currentStep === 0 ? <LocationStep /> : null}
            {currentStep === 1 ? <ModelStep /> : null}
            {currentStep === 2 ? <ParamsStep /> : null}
            {currentStep === 3 ? <TotalStep /> : null}
          </div>
          <div className="order__delimetr order__col">
            <div className="order__delimetr_border" />
          </div>
          <div className={`order__total order__col ${isCartVisible ? 'order__total_active' : ''}`}>
            <Total />
          </div>
          <div className="order__mobileBtn">
            <ToggleCardBtn />
            <NextStepBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
