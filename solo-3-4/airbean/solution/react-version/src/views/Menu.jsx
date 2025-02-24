import { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem/MenuItem';
import './Menu.scss';

import NavIcon from '../components/NavIcon/NavIcon';
import CartIcon from '../components/CartIcon/CartIcon';

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getMenu() {
      const response = await fetch(
        'https://airbean-9pcyw.ondigitalocean.app/api/beans/'
      );
      const data = await response.json();

      setMenu(data.menu);
    }

    getMenu();
  }, []);

  const menuItems = menu.map((item) => {
    return <MenuItem menuItem={item} key={item.id} />;
  });

  return (
    <main className='menu'>
      <CartIcon />
      <NavIcon />
      <h1>Meny</h1>
      {menuItems}
    </main>
  );
}

export default Menu;
