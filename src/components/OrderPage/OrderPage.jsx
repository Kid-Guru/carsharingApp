import Header from '../Header/Header';
import BreadCrumds from './BreadCrumbs/BreadCrumbs';
import LocationStep from './LocationStep/LocationStep';
import './OrderPage.scss';

const OrderPage = () => (
  <div className="page">
    <div className="container container-header">
      <Header />
    </div>
    <BreadCrumds />
    <div className="container container-order">
      <div className="order">
        <div className="order__step order__col">
          <LocationStep />
        </div>
        <div className="order__total order__col"></div>
      </div>
    </div>
  </div>
);

export default OrderPage;
