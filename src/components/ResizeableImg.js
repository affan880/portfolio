import React from 'react';
import Image from 'next/image';

const ResizableImage = ({ src, height }) => {
  const style = {
    height: `${height}px`,
    width: 'auto', // Set to 100% for responsiveness
    maxWidth: '100%',
  };

  return <Image src={src} alt="Logo" width="1000" height="1000" style={style} />;
};

export default ResizableImage;
