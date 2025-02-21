import React from 'react';

interface QuestionIconProps {
  w?: number;
  h?: number;
  isActive?: boolean;
}
const QuestionIcon: React.FC<QuestionIconProps> = ({
  w = 6,
  h = 6,
  isActive,
}) => {
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
        d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM12 5C9.79086 5 8 6.79086 8 9H10C10 7.89543 10.8954 7 12 7H12.0943C13.1468 7 14 7.85321 14 8.90569V9.41886C14 9.93267 13.6712 10.3888 13.1838 10.5513C11.8796 10.986 11 12.2065 11 13.5811V16H13V13.5811C13 13.0673 13.3288 12.6112 13.8162 12.4487C15.1204 12.014 16 10.7935 16 9.41886V8.90569C16 6.74864 14.2514 5 12.0943 5H12Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default QuestionIcon;
