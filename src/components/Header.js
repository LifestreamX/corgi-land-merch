import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/females'>Female Corgis</Link>
            <Link to='/males'>Male Corgis</Link>
            <Link to='/unisex'>Unisex</Link>
            <Link to='/giftshop' className='gift-shop'>
              Gift Shop
            </Link>
            <Link to='/about'>About</Link>
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
              <Link to='/login'>Login</Link>
            </button>
            <button>
              <Link to='/signup'>Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
