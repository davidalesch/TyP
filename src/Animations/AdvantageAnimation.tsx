import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const AdvantageAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src="/advantage-animation.json"
      style={{ height: '200px', width: '200px' }}
    />
  );
};

export default AdvantageAnimation;
