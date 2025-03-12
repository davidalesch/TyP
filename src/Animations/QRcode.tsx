import React, { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const QRcode: FC = () => {
  return (
    <Player
      autoplay
      loop
      src="/QRcode.json"
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default QRcode;