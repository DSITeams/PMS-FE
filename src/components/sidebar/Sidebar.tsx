import { useState, ReactNode } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { SidebarContext } from './SidebarContext';

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-white shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center mb-4'>
          <img
            src='/src/assets/icons/logo.png'
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? 'w-10' : 'w-0'
            }`}
            alt='Logo'
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className='p-1.5 rounded-lg bg-white hover:bg-white'
          >
            {expanded ? <FaXmark /> : <FaBars className='w-6 h-6' />}
          </button>
        </div>

        <SidebarContext.Provider
          value={{ expanded, activeItem, setActiveItem }}
        >
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export default Sidebar;
