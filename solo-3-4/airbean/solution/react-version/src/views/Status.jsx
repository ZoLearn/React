import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import drone from '../assets/graphics/drone.svg';
import './Status.scss';
import { useState, useEffect } from 'react';
import { emptyCart } from '../reducers/cartSlice';

import Loader from '../components/Loader/Loader';

function Status() {
  const activeOrder = useSelector((state) => {
    return state.cart.activeOrder;
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [eta, setEta] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getOrderStatus() {
      const response = await fetch(
        `https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${activeOrder.orderNr}`
      );
      const data = await response.json();

      setEta(data.eta);
    }

    if (activeOrder.orderNr) {
      setLoading(true);
      getOrderStatus();

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <main className='status'>
      {loading ? (
        <Loader />
      ) : (
        <section>
          {activeOrder.orderNr ? (
            <p className='order'>
              Ditt ordernummer är <b>#{activeOrder.orderNr}</b>.
            </p>
          ) : (
            ''
          )}
          <img src={drone} alt='Drone' />

          {!activeOrder.orderNr && !loading ? (
            <h1>Här ser du sen din kaffebeställning!</h1>
          ) : (
            <h1>Din beställning är på väg!</h1>
          )}
          {activeOrder.orderNr ? (
            <p className='eta'>
              <span className='eta__minutes'>{eta}</span> minuter
            </p>
          ) : (
            ''
          )}
          <button
            className='btn'
            onClick={() => {
              dispatch(emptyCart());
              navigate('/menu');
            }}
          >
            Ok, cool!
          </button>
        </section>
      )}
    </main>
  );
}

export default Status;
