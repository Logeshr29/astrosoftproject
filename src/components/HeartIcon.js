import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ThinHeartIcon = ({ size, color }) => {
  const iconStyle = {
    fontSize: size || '1rem', // Customize the size (you can use any valid CSS size value)
    color: color || 'black', // Customize the color (you can use any valid CSS color value)
  };

  return <FaHeart style={iconStyle} />;
};

export default ThinHeartIcon;
