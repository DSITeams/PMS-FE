import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  onClick,
  className,
  type = 'submit',
}: ButtonProps) => {
  return (
    <button
      className={`rounded-xl p-4 w-full mt-6 shadow-md bg-gradient-to-r from-blue-900 to-blue-600 text-white ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
