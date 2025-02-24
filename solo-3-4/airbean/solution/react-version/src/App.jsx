import './App.scss';
import { useSelector } from 'react-redux';
import { AppRoutes } from './router/router';

import Navigation from './components/Navigation/Navigation';

function App() {
  const showNav = useSelector((state) => {
    return state.cart.showNav;
  });

  return <div className='App'>{showNav ? <Navigation /> : <AppRoutes />}</div>;
}

export default App;
