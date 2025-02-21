import React from 'react';
import { IconType } from 'react-icons';
import { FaCalendar } from 'react-icons/fa6';

interface InfoHeaderProps {
  title: string;
  dateRange?: string;
  icon?: IconType;
}
const InfoHeader: React.FC<InfoHeaderProps> = ({
  title,
  dateRange,
  icon: Icon,
}) => {
  return (
    <div className='flex items-center px-2 mt-4 mb-8 justify-between h-10'>
      <h2 className='text-md font-semibold'>{title}</h2>
      <div className='flex items-center space-x-4'>
        {dateRange && (
          <div className='flex items-center bg-gray-100 p-2 rounded-lg space-x-2'>
            <FaCalendar className='text-gray-500' size={20} />
            <span className='text-gray-600'>{dateRange}</span>
          </div>
        )}

        {Icon && (
          <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center'>
            <Icon className='text-white text-lg' />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoHeader;
