import React from 'react';

interface MarkIconProps {
  w?: number;
  h?: number;
  color?: string;
}
const MarkIcon: React.FC<MarkIconProps> = ({ w = 6, h = 6, color }) => {
  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} text-[${color}]`}
    >
      <circle cx='5' cy='5' r='5' fill='currentColor' />
      <path
        d='M3 5L4.20853 6.81279C4.2679 6.90185 4.39877 6.90185 4.45814 6.81279L7 3'
        stroke='white'
      />
    </svg>
  );
};

export default MarkIcon;
