import React from 'react';
import '../styles/SubSection.scss';

const SubSection = () => {
  return (
    <section>
      <div className='cart-wrapper'>
        <div className='cart'>
          <img src='./corgi-male-2.jpg' alt='' />
          <p>Male Corgis</p>
          <h1>
           Lorem ipsum dolor sit amet.
          </h1>
        </div>
        <div className='cart'>
          <img src='/corgi-female-2.jpg' alt='' />
          <p>Female Corgis</p>
          <h1>
            Lorem ipsum dolor sit amet.
          </h1>
        </div>
        <div className='cart'>
          <img src='/corgi-uni-1.jpg' alt='' />
          <p>Unisex</p>
          <h1>
            Lorem ipsum dolor sit amet.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SubSection;
