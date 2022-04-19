import React, { useState } from 'react';
import '../styles/Carousel.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Data } from './Data';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = Data.length;

  return (
    <div className='carousel-wrapper'>
      <div className='arrows'>
        <ArrowBackIosIcon
          className='left-arrow'
          onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
        />
        <ArrowForwardIosIcon
          className='right-arrow'
          onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
        />
      </div>

      {Data.map((slide, index) => {
        return (
          <div className={index === current ? 'carousel active' : 'carousel'}>
            {index === current && (
              <div className='data-item'>
                {/* <div className='texts'> */}
                {/* <p className='title'>{slide.title}</p> */}
                {/* <p>{slide.text}</p> */}
                {/* </div> */}
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
