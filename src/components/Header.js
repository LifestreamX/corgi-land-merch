import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='header'>
      <nav>
        {/* Left section */}
        <ul className='ul-items'>
          <li className='li-items' id={showLinks ? 'hidden' : ''}>
            <NavLink
              activeClassName='active'
              to='/females'
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              Female Corgis
            </NavLink>
            <NavLink
              activeClassName='active'
              to='/males'
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              Male Corgis
            </NavLink>
            <NavLink
              activeClassName='active'
              to='/giftshop'
              className='gift-shop'
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              Gift Shop
            </NavLink>

            <NavLink
              activeClassName='active'
              to='/about'
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Hamburger menu for mobile button */}
        <div className='mobile-button-wrapper'>
          <button
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            {showLinks ? (
              <CloseIcon className='burger' />
            ) : (
              <MenuIcon className='burger' />
            )}
          </button>
        </div>

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
              <NavLink activeClassName='active' to='/login'>
                Login
              </NavLink>
            </button>
            <button>
              <NavLink activeClassName='active' to='/signup'>
                Sign Up
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
