import React from 'react';

const ResizableImage = ({ src, height }) => {
  const style = {
    height: `${height}px`,
    width: 'auto',
    maxWidth: '100%',
  };

  return <img src={src} alt="Logo" style={style} />;
};

export default ResizableImage;
