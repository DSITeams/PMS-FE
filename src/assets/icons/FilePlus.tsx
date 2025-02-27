import React from 'react';

interface FilePlusIconProps {
  color?: string;
  w?: number;
  h?: number;
}
const FilePlusIcon: React.FC<FilePlusIconProps> = ({ color, w = 6, h = 6 }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} text-[${color}]`}
    >
      <path
        d='M11.6668 1.66669H5.00016C4.55814 1.66669 4.13421 1.84228 3.82165 2.15484C3.50909 2.4674 3.3335 2.89133 3.3335 3.33335V16.6667C3.3335 17.1087 3.50909 17.5326 3.82165 17.8452C4.13421 18.1578 4.55814 18.3334 5.00016 18.3334H15.0002C15.4422 18.3334 15.8661 18.1578 16.1787 17.8452C16.4912 17.5326 16.6668 17.1087 16.6668 16.6667V6.66669L11.6668 1.66669Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6665 1.66669V6.66669H16.6665'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 15V10'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 12.5H12.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default FilePlusIcon;
