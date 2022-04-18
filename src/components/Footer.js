import React from 'react';
import '../styles/Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='social-media-wrapper'>
        <h1 className='title'>Social Media</h1>
        <div className='icon-wrapper'>
          <span>
            <FacebookIcon className='social-icons' />
          </span>
          <span>
            <InstagramIcon className='social-icons' />
          </span>
          <span>
            <TwitterIcon className='social-icons' />
          </span>
          <span>
            <YouTubeIcon className='social-icons' />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
