import bagIcon from '../../assets/graphics/bag.svg';
import './CartIcon.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Cart from '../Cart/Cart';

function CartIcon() {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });
  const [showCart, setShowCart] = useState(false);

  return (
    <aside className='carticon'>
      <aside className='badge'>{cartItems.length}</aside>
      <img src={bagIcon} alt='cart' onClick={() => setShowCart(!showCart)} />
      {showCart ? <Cart /> : ''}
    </aside>
  );
}

export default CartIcon;
