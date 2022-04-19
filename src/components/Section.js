import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Section.scss';

const Section = () => {
  return (
    <div className='main-section'>
      <div className='content'>
        <h1>Be Cozy, with style</h1>
        <Link to='/about'>
          <button>Discover</button>
        </Link>
      </div>

      <div className='bottom-text'>
        <p>20% off of all Corgi hair products</p>
      </div>
    </div>
  );
};

export default Section;
