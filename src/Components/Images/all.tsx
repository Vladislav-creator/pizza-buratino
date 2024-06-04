import React from 'react';

interface IconProps {
  width?: string;
}

const AllIcon: React.FC<IconProps> = ({ width }) => {
  const style = {
    width: width || '100px', // Если width не указан, то устанавливаем значение по умолчанию '100px'
  };

  return (
    <svg
      viewBox="0 0 419.6 419.6"
      preserveAspectRatio="xMidYMid meet"
      style={{ fill: '#ffffff', ...style }}
    >
      <circle cx="209.8" cy="209.8" r="209.8" fill="violet" />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="140"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
      >
        ALL
      </text>
    </svg>
  );
};

export default AllIcon;