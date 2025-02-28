import React from 'react';

interface SideMenuProps {
  children: React.ReactNode;
}
const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
  return (
    <div className='flex flex-col p-4 bg-white rounded-xl w-70 gap-5'>
      {children}
    </div>
  );
};

export default SideMenu;
