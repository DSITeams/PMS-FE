import React from 'react';

interface HeaderTitleProps {
  title: string;
  subtitle: string;
}
const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col'>
      <p className='font-400 text-sm'>Pages / {title}</p>
      <h1 className='font-semibold text-3xl mt-1'>{subtitle}</h1>
    </div>
  );
};

export default HeaderTitle;
