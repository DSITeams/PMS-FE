import { ReactNode } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { SidebarProvider } from './SidebarContext';
import FormSearch from '../FormSearch';
import { useSidebarContext } from '../../hooks/useSidebarContext ';

interface SidebarProps {
  children?: ReactNode;
  onSearch: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ children, onSearch }) => {
  const { expanded, setExpanded } = useSidebarContext();

  return (
    <aside className='scrollbar-hide hidden lg:block xl:block'>
      <nav className='h-full flex flex-col bg-white shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center mb-4'>
          <img
            src='/src/assets/icons/logo.png'
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? 'w-12' : 'w-0'
            }`}
            alt='Logo'
          />
          <button
            onClick={() => setExpanded(!expanded)}
            className='p-1.5 rounded-lg bg-white hover:bg-white'
          >
            {expanded ? <FaXmark /> : <FaBars className='w-6 h-6' />}
          </button>
        </div>

        {expanded && (
          <div className='mx-4'>
            <FormSearch placeholder='Search...' onSearch={onSearch} />
          </div>
        )}

        <div className='flex-1 px-3 overflow-y-auto scrollbar-hide sidebar-container'>
          <ul className='h-full'>{children}</ul>
        </div>
      </nav>
    </aside>
  );
};

const SidebarWithProvider: React.FC<SidebarProps> = ({
  children,
  onSearch,
}) => {
  return (
    <SidebarProvider>
      <Sidebar onSearch={onSearch}>{children}</Sidebar>
    </SidebarProvider>
  );
};

export default SidebarWithProvider;
