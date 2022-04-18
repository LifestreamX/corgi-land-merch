import React from 'react';
import '../styles/CreamSection.scss';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const CreamSection = () => {
  return (
    <section className='section-wrapper'>
      <div className='top-section'>
        <h1>Corgi Gifts delivered easy!</h1>
      </div>

      <div className='bottom-section'>
        <div className='cart'>
          <div className='gift'>
            <CardGiftcardIcon className='gift-icons' />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='cart'>
          <div className='gift'>
            <AirplanemodeActiveIcon className='gift-icons' />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='cart'>
          <div className='gift'>
            <DirectionsBusIcon className='gift-icons' />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='cart'>
          <div className='gift'>
            <RocketLaunchIcon className='gift-icons' />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  );
};

export default CreamSection;
