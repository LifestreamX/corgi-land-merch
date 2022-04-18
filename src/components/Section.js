import React from 'react';
import '../styles/Section.scss';

const Section = () => {
  return (
    <div className='main-section'>
      <div className='content'>
        <h1>Be Cozy, with style</h1>
        <button>Discover</button>
      </div>

      <div className="bottom-text">
            <p>20% off of all Corgi hair products</p>
      </div>
    </div>
  );
};

export default Section;
