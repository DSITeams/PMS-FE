import React from 'react';

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

const Button = ({
  title,
  onClick,
  className,
  type = 'submit',
  icon,
}: ButtonProps) => {
  return (
    <button
      className={`flex flex-row space-x-2 rounded-xl p-3 w-full items-center justify-center shadow-md text-white ${className}`}
      onClick={onClick}
      type={type}
    >
      {/* <div className='flex flex-row items-center justify-center '>
        {icon ? (
          <span className='flex flex-row'>
            {icon} {title}
          </span>
        ) : (
          title
        )}
      </div> */}
      {icon && <span>{icon}</span>}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
