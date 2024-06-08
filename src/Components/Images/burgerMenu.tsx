import React from 'react';
interface IconProps {
    width?: number;
    height?: number;
    className?: string;
  }
const BurgerMenu: React.FC<IconProps> = ({ width = 512, height = 512, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className}
    >
      <g>
        <path
          d="M0 102.4c0-14.138 11.462-25.6 25.6-25.6h460.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H25.6C11.462 128 0 116.537 0 102.4zm486.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H25.6C11.462 384 0 395.462 0 409.6c0 14.137 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
          fill="white"
          opacity="1"
          data-original="#000000"
          className=""
        ></path>
      </g>
    </svg>
  );
};

export default BurgerMenu;