import React from 'react';
interface LeafIconProps {
  width?: string;
}
const NewIcon: React.FC<LeafIconProps> = ({ width }) => {
  const style = {
    width: width || '100px', // Если width не указан, то устанавливаем значение по умолчанию '100px'
  };
  return (
<svg  viewBox="0 0 419.6 419.6" preserveAspectRatio="xMidYMid meet"
      style={{ fill: '#ffffff', ...style }}><g fill="white">
<circle cx="209.8" cy="209.8" r="209.8" fill="gray" />
<path d="M60.1 83.8c2 0 3.6.2 4.8.7 1.3.5 2.3 1.2 3.1 2.1.8.9 1.4 2.1 1.7 3.6.4 1.5.5 3.4.5 5.8v19.4c0 1.3.2 2.4.5 3.1.3.8.8 1.3 1.4 1.6.7.3 1.6.5 2.7.5v1.5c-4.8-.2-7.9-.3-9.5-.3-1.5 0-4.6.1-9.4.3v-1.5c1 0 1.8-.2 2.3-.5.6-.3 1-.8 1.2-1.6.2-.8.4-1.8.4-3.1V92.9c0-2-.3-3.5-1-4.5-.6-1-1.8-1.5-3.5-1.5-1.3 0-2.5.4-3.6 1.1-1.1.7-2 1.7-2.6 3-.6 1.3-.9 2.7-.9 4.2v20c0 1.3.1 2.4.4 3.1.3.8.7 1.3 1.2 1.6.6.3 1.3.5 2.3.5v1.5c-4.4-.2-7.4-.3-8.9-.3s-4.8.1-9.9.3v-1.5c1.1 0 2.1-.2 2.7-.5.7-.3 1.1-.8 1.4-1.6.3-.8.4-1.8.4-3.1V92.6c0-2.2-.3-3.8-1-4.8s-1.9-1.5-3.6-1.5v-1.5c1.5.1 3 .2 4.5.2 4.2 0 7.7-.3 10.5-1v6.5c2.3-4.5 6.2-6.7 11.9-6.7zM89.4 103.1c0 3.2.4 5.8 1.3 7.9.9 2.1 2 3.6 3.5 4.6 1.4 1 2.9 1.5 4.6 1.5 4 0 7.1-1.9 9.5-5.8l1.3.4c-.6 2-1.6 3.8-2.8 5.5-1.3 1.7-2.9 3.1-4.9 4.1-2 1.1-4.2 1.6-6.7 1.6-3.3 0-6.2-.7-8.7-2.1-2.5-1.4-4.4-3.5-5.8-6.4-1.4-2.9-2.1-6.4-2.1-10.7 0-4.4.8-8 2.3-11 1.5-3 3.6-5.2 6.2-6.7s5.7-2.3 9.2-2.3c9 0 13.5 5.3 13.5 16H89.5c-.1.7-.1 1.9-.1 3.4zM99.5 89c-.8-2.5-2.1-3.7-3.8-3.7-1.7 0-3.1 1.1-4.3 3.2-1.1 2.1-1.8 5.4-2.1 9.9h11.3c.1-3.8-.3-6.9-1.1-9.4zM162.6 85c2.4 0 4.2-.1 5.5-.2v1.4c-1 .3-1.9.9-2.7 1.8-.8.9-1.5 2.4-2.1 4.4l-9.6 29.7c-.8-.1-1.6-.1-2.4-.1-.8 0-1.5 0-2.3.1l-9.8-26.7-8 26.7c-.7-.1-1.5-.1-2.3-.1-.8 0-1.5 0-2.4.1l-11.4-31.8c-.9-2.7-2.3-4-4.1-4v-1.5c3.1.3 6.5.4 10.2.4 2.4 0 5.5-.1 9.4-.4v1.5c-1.1 0-1.9 0-2.5.1-.6.1-1.1.3-1.5.6-.4.3-.5.8-.5 1.4 0 .5.1 1.1.4 1.9l6.5 20.4 7.8-26h5.2l9.3 27.5 4.6-14.4c.7-2.1 1-3.9 1-5.5 0-3.7-1.9-5.7-5.7-6v-1.4c2.3 0 4.7.1 7.4.1z" transform="translate(-38, -40) scale(2.50)"></path></g></svg>
 );
};

export default NewIcon;