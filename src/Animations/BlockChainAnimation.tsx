import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const BlockchainAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src="/blockchain-animation.json"
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default BlockchainAnimation;
