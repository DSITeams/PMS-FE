import React from 'react';

interface ChartIconProps {
  w?: number;
  h?: number;
  isActive?: boolean;
}
const ChartIcon: React.FC<ChartIconProps> = ({ w = 6, h = 6, isActive }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} ${
        isActive ? 'text-[#1B55E2]' : 'text-[#ffffff]'
      }`}
    >
      <path
        d='M15.75 4.5L11.9571 8.29289C11.5666 8.68342 10.9334 8.68342 10.5429 8.29289L9.70711 7.45711C9.31658 7.06658 8.68342 7.06658 8.29289 7.45711L5.25 10.5'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.25 2.25V12.55C2.25 13.6701 2.25 14.2302 2.46799 14.658C2.65973 15.0343 2.96569 15.3403 3.34202 15.532C3.76984 15.75 4.32989 15.75 5.45 15.75H15.75'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default ChartIcon;
