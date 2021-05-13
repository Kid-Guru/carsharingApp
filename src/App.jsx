import { Route, Switch, Redirect } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import MainPage from './components/MainPage/MainPage';
import Menu from './components/Menu/Menu';
import OrderPage from './components/OrderPage/OrderPage';
import ConfirmOrderModal from './components/ConfirmOrderModal/ConfirmOrderModal';
import StatusOrderPage from './components/StatusOrderPage/StatusOrderPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Menu />

      <Switch>
        <Route path="/main" render={() => <MainPage />} />
        <Route path="/order" render={() => <OrderPage />} />
        <Route path="/order/:id" exact render={() => <StatusOrderPage />} />
        <Route path="/" render={() => <Redirect to="/main" />} />
      </Switch>

      <ConfirmOrderModal />
    </div>
  );
}

export default App;
