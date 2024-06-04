
import React from 'react';

interface LeafIconProps {
  width?: string;
}

const HeardIcon: React.FC<LeafIconProps> = ({ width }) => {
  const style = {
    width: width || '100px', // Если width не указан, то устанавливаем значение по умолчанию '100px'
  };

  return (
    <svg
      viewBox="0 0 419.6 419.6"
      preserveAspectRatio="xMidYMid meet"
      style={style}
    >
      <circle cx="209.8" cy="209.8" r="209.8" fill="gray" />
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="white"
        transform="translate(95.0, 105.0) scale(10)"
      />
    </svg>
  );
};

export default HeardIcon;