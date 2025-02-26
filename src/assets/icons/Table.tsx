import React from 'react';

interface TableIconProps {
  w?: number;
  h?: number;
  isActive?: boolean;
}
const TableIcon: React.FC<TableIconProps> = ({ w = 6, h = 6, isActive }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} ${
        isActive ? 'text-[#1B55E2]' : 'text-[#ffffff]'
      }`}
    >
      <path
        d='M14 10H19V16C19 16.9428 19 17.4142 18.7071 17.7071C18.4142 18 17.9428 18 17 18H14V10Z'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M5 10H10V18H7C6.05719 18 5.58579 18 5.29289 17.7071C5 17.4142 5 16.9428 5 16V10Z'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
      />
      <rect
        x='10'
        y='10'
        width='4'
        height='8'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M5 8C5 7.05719 5 6.58579 5.29289 6.29289C5.58579 6 6.05719 6 7 6H17C17.9428 6 18.4142 6 18.7071 6.29289C19 6.58579 19 7.05719 19 8V10H5V8Z'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default TableIcon;
