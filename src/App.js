import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
    <HooksCakeContainer/>
    <NewCakeContainer/> */}
    <UserContainer/>
    </div>
    </Provider>
  )
}

export default App;
