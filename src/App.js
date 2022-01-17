import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <IceCreamContainer/>
    <HooksCakeContainer/>
    </div>
    </Provider>
  )
}

export default App;
