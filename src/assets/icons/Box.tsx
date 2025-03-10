import React from 'react';

interface BoxIconProps {
  w?: number;
  h?: number;
  isActive?: boolean;
}
const BoxIcon: React.FC<BoxIconProps> = ({ w = 6, h = 6, isActive }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} ${
        isActive ? 'text-[#1B55E2]' : 'text-gray-400'
      }`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17 12H14.8C13.8059 12 13 12.8059 13 13.8V21H20.2C21.1941 21 22 20.1941 22 19.2V13.8C22 12.8059 21.1941 12 20.2 12H18V14.5C18 14.7761 17.7761 15 17.5 15C17.2239 15 17 14.7761 17 14.5V12Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 12H4.8C3.80589 12 3 12.8059 3 13.8V19.2C3 20.1941 3.80589 21 4.8 21H12V13.8C12 12.8059 11.1941 12 10.2 12H8V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V12Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 2H4.8C3.80589 2 3 2.80589 3 3.8V9.2C3 10.1941 3.80589 11 4.8 11H10.2C11.1941 11 12 10.1941 12 9.2V3.8C12 2.80589 11.1941 2 10.2 2H8V5C8 5.27614 7.77614 5.5 7.5 5.5C7.22386 5.5 7 5.27614 7 5V2Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default BoxIcon;
