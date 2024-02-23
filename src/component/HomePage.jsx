import React from 'react';
import { mainBackground } from '../utils/constants';

const HomePage = () => {
  const divStyle = {
    backgroundImage: `url(${mainBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Add this line for a fixed background
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={divStyle}>
      HomePage
    </div>
  );
};

export default HomePage;
