import { Route, Switch, Redirect } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import MainPage from './components/MainPage/MainPage';
import Menu from './components/Menu/Menu';
import OrderPage from './components/OrderPage/OrderPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Menu />

      <Switch>
        <Route path="/main" render={() => <MainPage />} />
        <Route path="/order" render={() => <OrderPage />} />
        <Route path="/" render={() => <Redirect to="/main" />} />
      </Switch>

    </div>
  );
}

export default App;
