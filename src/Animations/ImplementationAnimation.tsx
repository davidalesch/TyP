import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const ImplementationAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src="/implementation-animation.json"
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default ImplementationAnimation;
