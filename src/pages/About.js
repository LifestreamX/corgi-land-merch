import React from 'react';
import '../styles/About.scss';

const About = () => {
  return (
    <div className='about-wrapper'>
      {/* Top section on what we do */}
      <div className='top-section-about'>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          accusantium tenetur recusandae esse quas ipsa, ab provident omnis
          consectetur sunt! Corporis dolorum a assumenda magnam! Rerum odit
          voluptas nemo enim.
        </p>
      </div>

      {/* Bottom section showing team */}
      <div className='bottom-section-about'>
        <h2 className='our-team'>Our Team</h2>

        <div className='member-cards'>
          <div className='member-card'>
            {/* Card 1 */}
            <img src='corgi-female-1.jpg' alt='' />
            <div className='info-container'>
              <h1>Willow</h1>
              <h2>co-founder</h2>
            </div>
          </div>
          {/* Card 2 */}
          <div className='member-card' id='wollie'>
            <img src='./corgi-male-2.jpg' alt='' />
            <div className='info-container'>
              <h1>Wollie</h1>
              <h2>co-founder</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
