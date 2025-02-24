import { useSelector, useDispatch } from 'react-redux';
import './Cart.scss';
import { setActiveOrder } from '../../reducers/cartSlice';
import { useNavigate } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';

function Cart() {
  const cart = useSelector((state) => {
    return state.cart.items;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let disableButton = {};

  if (cart.length === 0) {
    disableButton['disabled'] = 'disabled';
  }

  async function order() {
    const order = {
      details: {
        order: cart,
      },
    };

    const response = await fetch(
      'https://airbean-9pcyw.ondigitalocean.app/api/beans/order',
      {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    dispatch(setActiveOrder(data));
    navigate('/status');
  }

  function getTotal() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  }

  const cartItems = cart.map((item) => {
    return <CartItem cartItem={item} key={item.id} />;
  });

  return (
    <section className='cart'>
      <h2>Din beställning</h2>
      {cartItems}
      <footer className='total'>
        <h3>
          Total<span className='dots'></span>
          {getTotal()} kr
        </h3>
        <p>Inkl moms + drönarleverans</p>
      </footer>
      <button className='btn' onClick={order} {...disableButton}>
        I need coffee!
      </button>
    </section>
  );
}

export default Cart;
