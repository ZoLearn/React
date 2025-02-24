import { useEffect, useState } from 'react';
import navIcon from '../../assets/graphics/navicon.svg';
import closeIcon from '../../assets/graphics/close.svg';
import '../MenuItem/MenuItem';
import { useDispatch } from 'react-redux';
import { showNav } from '../../reducers/cartSlice';
import './NavIcon.scss';

function NavIcon() {
  const dispatch = useDispatch();

  return (
    <nav
      className='navicon'
      onClick={() => {
        dispatch(showNav());
      }}
    >
      <img src={navIcon} alt='navicon' />
    </nav>
  );
}

export default NavIcon;
