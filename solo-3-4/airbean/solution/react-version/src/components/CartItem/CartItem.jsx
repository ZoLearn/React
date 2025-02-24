import arrowUp from '../../assets/graphics/arrow-up.svg';
import arrowDown from '../../assets/graphics/arrow-down.svg';
import './CartItem.scss';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../reducers/cartSlice';

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  function total() {
    return cartItem.price * cartItem.quantity;
  }

  function changeQuantity(type) {
    const data = {
      id: cartItem.id,
      type: type,
    };

    if (cartItem.quantity === 1 && type === 'decrease') {
      dispatch(removeFromCart(cartItem.id));
    } else {
      dispatch(updateQuantity(data));
    }
  }

  return (
    <article className='cart-item'>
      <h3 className='cart-item-title'>
        {cartItem.name}
        <span className='dots'></span>
      </h3>
      <p className='cart-item-desc'>{total()} kr</p>
      <aside className='item-quantity'>
        <img
          src={arrowUp}
          alt='increse'
          onClick={() => changeQuantity('increase')}
        />
        <p className='quantity'>{cartItem.quantity}</p>
        <img
          src={arrowDown}
          alt='decrese'
          onClick={() => changeQuantity('decrease')}
        />
      </aside>
    </article>
  );
}

export default CartItem;
