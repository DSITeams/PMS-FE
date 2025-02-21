import React from 'react';

interface WalletIconProps {
  w?: number;
  h?: number;
  isActive?: boolean;
}
const WalletIcon: React.FC<WalletIconProps> = ({ w = 6, h = 6, isActive }) => {
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
        d='M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H18C18.93 21 19.395 21 19.7765 20.8978C20.8117 20.6204 21.6204 19.8117 21.8978 18.7765C22 18.395 22 17.93 22 17H16C14.3431 17 13 15.6569 13 14C13 12.3431 14.3431 11 16 11H22V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H7Z'
        fill='currentColor'
      />
      <path
        d='M17 14H16'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default WalletIcon;
