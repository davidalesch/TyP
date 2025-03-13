import React, { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Hands: FC = () => {
  return (
    <Player
      autoplay
      loop
      src="/hands.json"
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default Hands;