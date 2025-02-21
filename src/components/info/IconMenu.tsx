import React from 'react';
import { IconType } from 'react-icons';

interface IconMenuProps {
  icons: IconType;
}
const IconMenu: React.FC<IconMenuProps> = ({ icons: Icon }) => {
  return (
    <div className='w-14 h-14 bg-color rounded-full flex items-center justify-center'>
      <Icon className='text-blue-primary text-xl' />
    </div>
  );
};

export default IconMenu;
