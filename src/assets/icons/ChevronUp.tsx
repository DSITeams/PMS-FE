import React from 'react';

interface ChevronUpIconProps {
  h?: number;
  w?: number;
  color?: string;
}
const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({
  w = 6,
  h = 6,
  color,
}) => {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} text-[${color}]`}
    >
      <path
        d='M11 6.5L6 1.5L1 6.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronUpIcon;
