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
        <h1>Corgi Land Experience Made Easy!</h1>
      </div>

      <div className='bottom-section'>
        <div className='cart'>
          <div className='gift'>
            <CardGiftcardIcon className='gift-icons' />
          </div>
          <p>We have GiftCards!</p>
        </div>
        <div className='cart'>
          <div className='gift'>
            <AirplanemodeActiveIcon className='gift-icons' />
          </div>
          <p>We have same day shipping!</p>
        </div>
        <div className='cart'>
          <div className='gift'>
            <DirectionsBusIcon className='gift-icons' />
          </div>
          <p>
            We have shuttle busses to take you directly to our front entrance!
          </p>
        </div>
        <div className='cart'>
          <div className='gift'>
            <RocketLaunchIcon className='gift-icons' />
          </div>
          <p>We also do delivery by rocketship!</p>
        </div>
      </div>
    </section>
  );
};

export default CreamSection;
