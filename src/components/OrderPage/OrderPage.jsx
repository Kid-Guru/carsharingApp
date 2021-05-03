import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import BreadCrumds from './BreadCrumbs/BreadCrumbs';
import LocationStep from './LocationStep/LocationStep';
import ModelStep from './ModelStep/ModelStep';
import ParamsStep from './ParamsStep/ParamsStep';
import Total from './Total/Total';
import './OrderPage.scss';

const OrderPage = () => {
  const currentStep = useSelector((state) => state.order.steps.currentStep);
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
          <div className="order__total order__col">
            <Total />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
