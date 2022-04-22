import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <nav>
        {/* Left section */}
        <ul className='ul-items'>
          <li className='li-items'>
            <NavLink activeClassName="active" to='/females'>Female Corgis</NavLink>
            <NavLink activeClassName="active" to='/males'>Male Corgis</NavLink>
            <NavLink activeClassName="active" to='/giftshop' className='gift-shop'>
              Gift Shop
            </NavLink>
            <NavLink activeClassName="active" to='/about'>About</NavLink>
          </li>
        </ul>

        {/* Middle logo section */}
        <div className='logo'>
          <Link to='/'>
            <img src='corgi-logo.png' alt='corgi-logo' className='corgi-logo' />
          </Link>
          <h1>Corgi Land</h1>
        </div>

        {/* Right section */}

        <div className='right'>
          {/* <div className='search'>
            <SearchIcon className='search-icon' />
            <button className='search-button'>Search</button> */}
          {/* </div> */}
          <div className='login-signup-cart'>
            <button>
              <NavLink activeClassName="active" to='/login'>Login</NavLink>
            </button>
            <button>
              <NavLink activeClassName="active" to='/signup'>Sign Up</NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
