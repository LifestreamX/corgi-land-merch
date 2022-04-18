import React, { useState } from 'react';
import '../styles/Carousel.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Data } from './Data';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = Data.length;

  return (
    <div className='carousel-wrapper'>
      <div className='arrows'>
        <ArrowBackIcon
          className='left-arrow'
          onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
        />
        <ArrowForwardIcon
          className='right-arrow'
          onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
        />
      </div>

      {Data.map((slide, index) => {
        return (
          <div className={index === current ? 'carousel active' : 'carousel'}>
            {index === current && (
              <div className='data-item'>
                <div className='texts'>
                  <p className='title'>{slide.title}</p>
                  <p>{slide.text}</p>
                </div>
                <img src={slide.image} alt='' />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
