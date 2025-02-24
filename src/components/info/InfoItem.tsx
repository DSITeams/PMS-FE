import IconMenu from './IconMenu';
import { IconType } from 'react-icons';

interface InfoItemProps {
  title: string;
  value: string;
  icons: IconType;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value, icons: Icon }) => {
  return (
    <div className='flex p-2 items-center gap-7'>
      <IconMenu icons={Icon} />
      <div className='flex flex-col'>
        <span className='text-sm text-gray-400 mb-1'>{title}</span>
        <span className='text-xl font-semibold'>{value}</span>
      </div>
    </div>
  );
};

export default InfoItem;
