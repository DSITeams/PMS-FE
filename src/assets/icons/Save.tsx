import React from 'react';

interface SaveIconProps {
  color?: string;
  w?: number;
  h?: number;
}
const SaveIcon: React.FC<SaveIconProps> = ({ color, w = 6, h = 6 }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`w-${w} h-${h} text-[${color}]`}
    >
      <path
        d='M14.5556 16.25H2.69444C2.24505 16.25 1.81406 16.0715 1.49629 15.7537C1.17852 15.4359 1 15.0049 1 14.5556V2.69444C1 2.24505 1.17852 1.81406 1.49629 1.49629C1.81406 1.17852 2.24505 1 2.69444 1H12.0139L16.25 5.23611V14.5556C16.25 15.0049 16.0715 15.4359 15.7537 15.7537C15.4359 16.0715 15.0049 16.25 14.5556 16.25Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.7252 16.2501V9.47229H4.25293V16.2501'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.06641 1V5.23611H11.8442'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SaveIcon;
