import React from 'react';
import './homepage.styles.scss';
const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>JACKETS</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Sneaker</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MEN</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Women</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;