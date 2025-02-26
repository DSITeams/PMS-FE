import { FaChevronDown, FaChevronRight } from 'react-icons/fa6';
import React from 'react';
import { useSidebarContext } from '../../hooks/useSidebarContext ';

interface SidebarItemProps {
  icon?: React.ReactElement<{ isActive: boolean }>;
  text: string;
  active?: boolean;
  alert?: boolean;
  subMenu?: Omit<SidebarItemProps, 'icon'>[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  alert = false,
  subMenu,
}) => {
  const {
    expanded,
    activeItem,
    setActiveItem,
    setExpanded,
    openSubMenu,
    setOpenSubMenu,
  } = useSidebarContext();

  if (!useSidebarContext) {
    throw new Error('SidebarItem must be used within a SidebarProvider');
  }

  const isSubMenuActive = subMenu?.some(
    (subItem) => subItem.text === activeItem
  );

  const isActive = activeItem === text || isSubMenuActive;

  const handleItemClick = () => {
    if (subMenu) {
      if (!expanded) {
        setExpanded(true);
      }
      if (openSubMenu === text) {
        setOpenSubMenu(null);
      } else {
        setOpenSubMenu(text);
      }
    } else {
      setExpanded(true);
      setActiveItem(text);
    }
  };

  const isOpen = openSubMenu === text;

  return (
    <li className='flex flex-col relative justify-center'>
      <div
        onClick={handleItemClick}
        className={`
          flex items-center justify-between px-1 py-2 my-2
          font-medium rounded-md cursor-pointer
          transition-colors group whitespace-nowrap
          ${
            isActive
              ? 'bg-indigo-200 text-blue-primary'
              : 'hover:bg-indigo-50 text-gray-400'
          }
        `}
      >
        <div className='flex items-center justify-center w-full'>
          {icon && (
            <>
              <span className={`${!isActive && 'font-light'}`}>
                {React.isValidElement(icon)
                  ? React.cloneElement(icon, { isActive })
                  : icon}
              </span>
              <span
                className={`overflow-hidden ${expanded ? 'w-54 ml-3' : 'w-0'}`}
              >
                {text}
              </span>
            </>
          )}
          {!icon && (
            <span
              className={`overflow-hidden transition-all ${
                expanded ? 'w-54' : 'w-0'
              } ${!isActive && 'font-light'}`}
            >
              {text}
            </span>
          )}
        </div>

        {subMenu && expanded && (
          <span className='transition-all'>
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </span>
        )}

        {!subMenu && expanded && <span className='w-4'></span>}

        {alert && (
          <div className='absolute right-2 w-2 h-2 rounded bg-primary' />
        )}

        {!expanded && (
          <div
            className={`
      absolute left-full top-1/2 -translate-y-1/2
      rounded-md px-2 py-1 ml-6 bg-indigo-100 text-blue-primary
      text-sm font-light whitespace-nowrap w-auto max-w-xs
      invisible opacity-0 -translate-x-3 transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      z-50
    `}
          >
            <span>{text}</span>
          </div>
        )}
      </div>

      {subMenu && expanded && (
        <ul
          className={`ml-11 border-l border-gray-200 overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {subMenu.map((subItem, index) => (
            <li
              key={index}
              className={`py-2 px-3 cursor-pointer transition-colors rounded-md ${
                activeItem === subItem.text
                  ? 'bg-indigo-300 text-blue-primary font-medium'
                  : 'hover:bg-indigo-100 text-gray-400 font-light'
              }`}
              onClick={() => setActiveItem(subItem.text)}
            >
              {subItem.text}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;