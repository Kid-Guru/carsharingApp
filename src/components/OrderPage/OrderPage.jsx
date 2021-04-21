import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import BreadCrumds from './BreadCrumbs/BreadCrumbs';
import LocationStep from './LocationStep/LocationStep';
import ModelStep from './ModelStep/ModelStep';
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
          <Switch>
            <Route path="/order/location" render={() => <LocationStep />} />
            <Route path="/order/model" render={() => <ModelStep />} />
            <Route path="/*" render={() => <Redirect to="/order/location" />} />

          </Switch>
        </div>
        <div className="order__total order__col">Total</div>
      </div>
    </div>
  </div>
);

export default OrderPage;
