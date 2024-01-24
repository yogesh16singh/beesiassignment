import React from 'react';
import imageSrc from '../images/1.png';
import './Logo.css'
const Logo1 = () => {
  return (
    <div className='container'>
      <img className="AddFriend1" style={{ width: 50, height: 50 }} src={imageSrc} alt="Logo" />
    </div>
  );
}

export default Logo1;
