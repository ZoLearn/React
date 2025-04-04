import addItemIcon from '../../assets/graphics/add.svg';
import './MenuItem.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducers/cartSlice';

function MenuItem({ menuItem }) {
  const dispatch = useDispatch();

  const item = { id: menuItem.id, name: menuItem.title, price: menuItem.price };

  return (
    <article className='menu-item'>
      <aside className='add-item'>
        <button onClick={() => dispatch(addToCart(item))}>
          <img src={addItemIcon} alt='add item' />
        </button>
      </aside>
      <h3 className='item-title'>
        {menuItem.title}
        <span className='dots'></span>
      </h3>
      <p className='item-desc'>{menuItem.desc}</p>
      <h3 className='item-price'>{menuItem.price} kr</h3>
    </article>
  );
}

export default MenuItem;
