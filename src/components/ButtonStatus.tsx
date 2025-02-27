import React from 'react';
import MarkIcon from '../assets/icons/Mark';

interface ButtonStatusProps {
  title: string;
  color?: string;
  isActive?: boolean;
  onClick?: () => void;
}
const ButtonStatus: React.FC<ButtonStatusProps> = ({
  title,
  color,
  isActive = false,
}) => {
  return (
    <button
      className={`relative flex flex-row rounded-xl p-3 w-full items-center justify-center bg-transparent ${
        isActive ? 'border-2' : 'border-1'
      } `}
      style={{
        color: isActive ? color : '#636364',
        borderColor: isActive ? color : '#636364',
        fontWeight: isActive ? 'semibold' : 'extralight',
      }}
    >
      {isActive && (
        <div className='absolute top-2 left-2 bg-white'>
          <MarkIcon color={color} w={4} h={4} />
        </div>
      )}
      {title}
    </button>
  );
};

export default ButtonStatus;
