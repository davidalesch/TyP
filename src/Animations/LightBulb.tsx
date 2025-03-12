
import React, { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LightBulb: FC = () => {
  return (
    <Player
      autoplay
      loop
      src="/lightbulb.json"
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default LightBulb;