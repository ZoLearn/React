import { useNavigate } from 'react-router-dom';
import './Navigation.scss';
import { useDispatch } from 'react-redux';
import { showNav } from '../../reducers/cartSlice';

import NavIcon from '../NavIcon/NavIcon';

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className='main-nav'>
      <NavIcon />
      <a
        href='#'
        onClick={() => {
          dispatch(showNav());
          navigate('/menu');
        }}
      >
        Meny
      </a>
      <div className='spacer'></div>
      <a
        href='#'
        onClick={() => {
          dispatch(showNav());
          navigate('/about');
        }}
      >
        Vårt Kaffe
      </a>
      <div className='spacer'></div>
      <a
        href='#'
        onClick={() => {
          dispatch(showNav());
          navigate('/status');
        }}
      >
        Orderstatus
      </a>
    </nav>
  );
}

export default Navigation;
