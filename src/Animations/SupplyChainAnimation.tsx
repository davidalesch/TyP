// SupplyChainAnimation.tsx
import React, { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const SupplyChainAnimation: FC = () => {
  return (
    <Player
      autoplay
      loop
      src="/supply-chain-animation.json"
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default SupplyChainAnimation;
