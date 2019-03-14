import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link className='navbar-brand' to='/'>
        React Reading List
      </Link>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to='/'>
            Search  
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/saved'>
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  
  );
}

export default Navbar;
