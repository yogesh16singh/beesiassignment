import React from 'react';
import imageSrc from '../images/2.png';
import './Logo.css'
const Logo2 = () => {
  return (
    <div className='container'>
      <img className="AddFriend1" style={{ width: 50, height: 50 }} src={imageSrc} alt="Logo" />
    </div>
  );
}

export default Logo2;
