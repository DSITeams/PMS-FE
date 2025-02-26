import React from 'react';

interface InIconProps {
  w?: number;
  h?: number;
  isActive?: boolean;
}
const InIcon: React.FC<InIconProps> = ({ w = 6, h = 6, isActive }) => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} ${
        isActive ? 'text-[#1B55E2]' : 'text-gray-400'
      }`}
    >
      <path
        d='M3.625 9.875V16.375C3.625 19.2034 3.625 20.6176 4.50368 21.4963C5.38236 22.375 6.79657 22.375 9.625 22.375H16.375C19.2034 22.375 20.6176 22.375 21.4963 21.4963C22.375 20.6176 22.375 19.2034 22.375 16.375V9.625C22.375 6.79657 22.375 5.38236 21.4963 4.50368C20.6176 3.625 19.2034 3.625 16.375 3.625H9.875'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
      />
      <path
        d='M16.125 16.125V17.375H17.375V16.125H16.125ZM8.67555 6.90778C8.18739 6.41963 7.39594 6.41963 6.90778 6.90778C6.41963 7.39594 6.41963 8.18739 6.90778 8.67555L8.67555 6.90778ZM14.875 8.83333V16.125H17.375V8.83333H14.875ZM16.125 14.875H8.83333V17.375H16.125V14.875ZM17.0089 15.2411L8.67555 6.90778L6.90778 8.67555L15.2411 17.0089L17.0089 15.2411Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default InIcon;
