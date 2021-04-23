import SideMenu from './components/SideBar/SideBar';
import MainPage from './components/MainPage/MainPage';
import Menu from './components/Menu/Menu';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <MainPage />
      <Menu />
    </div>
  );
}

export default App;
