import React from 'react';

interface ChevronDownIconProps {
  h?: number;
  w?: number;
  color?: string;
}
const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  h = 6,
  w = 6,
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
        d='M1 1.5L6 6.5L11 1.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronDownIcon;
