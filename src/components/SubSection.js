import React from 'react';
import '../styles/SubSection.scss';
import { Link } from 'react-router-dom';

const SubSection = () => {
  return (
    <section>
      <div className='cart-wrapper'>
        <Link to='/males'>
          <div className='cart'>
            <img src='./corgi-male-2.jpg' alt='' />
            <div className='text-wrapper'>
              <h1>Shop for male corgis</h1>
            </div>
          </div>
        </Link>
        <Link to='/females'>
          <div className='cart'>
            <img src='/corgi-female-2.jpg' alt='' />
            <div className='text-wrapper'>
              <h1>Shop for female Corgis</h1>
            </div>
          </div>
        </Link>
        <Link to='/unisex'>
          <div className='cart'>
            <img src='/corgi-uni-1.jpg' alt='' />
            <div className='text-wrapper'>
              <h1>Unisex</h1>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SubSection;
