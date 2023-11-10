// Loader.js
import React from 'react';
import logo from '../assets/logo2.png'

const Loader = () => {
  return (
    <div className="loader-container">
        <img className='logo-l' src={logo} alt="" />
      <div className="loader">
        <div className="scanner">
          <span>La Candela...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
