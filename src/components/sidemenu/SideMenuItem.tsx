import React from 'react';

interface SideMenuItemProps {
  icon: (color: string) => React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}
const SideMenuItem: React.FC<SideMenuItemProps> = ({
  icon,
  title,
  isActive = false,
  onClick,
}) => {
  const iconColor = isActive ? '#2f2f2f' : '#868A92';
  return (
    <div
      className={`flex flex-row space-x-5 items-center p-2 rounded-md cursor-pointer transition ${
        isActive
          ? 'bg-color text-[#2f2f2f]'
          : 'hover:bg-gray-100 text-[#868A92]'
      }`}
      onClick={onClick}
    >
      {icon(iconColor)}
      <span>{title}</span>
    </div>
  );
};

export default SideMenuItem;
