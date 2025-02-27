import React from 'react';

interface BarChartIconProps {
  w?: number;
  h?: number;
  color?: string;
}

const BarChartIcon: React.FC<BarChartIconProps> = ({ w = 6, h = 6, color }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} text-[${color}]`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM16 8C16.5523 8 17 8.44772 17 9V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V9C15 8.44772 15.4477 8 16 8ZM9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11V17C7 17.5523 7.44772 18 8 18C8.55229 18 9 17.5523 9 17V11ZM13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default BarChartIcon;
