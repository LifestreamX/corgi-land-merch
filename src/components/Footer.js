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
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <span>
              <FacebookIcon
                className='social-icons'
                style={{ color: '#4267B2' }}
              />
            </span>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <span>
              <InstagramIcon
                className='social-icons social-ig'
                style={{ color: 'black' }}
              />
            </span>
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
            <span>
              <TwitterIcon
                className='social-icons'
                style={{ color: '#1DA1F2' }}
              />
            </span>
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <span>
              <YouTubeIcon className='social-icons' style={{ color: 'red' }} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
