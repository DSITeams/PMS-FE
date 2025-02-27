import InfoHeader from '../info/InfoHeader';

interface CardDashboardProps {
  title: string;
  useDate?: boolean;
  isRangePicker?: boolean;
  icon?: React.ReactNode;
  content: React.ReactNode;
}
const CardDashboard: React.FC<CardDashboardProps> = ({
  title,
  useDate,
  isRangePicker,
  icon,
  content,
}) => {
  return (
    <div className='w-full mb-3'>
      <div className='rounded-lg overflow-visible bg-white p-5'>
        <div className='flex mb-5'>
          <InfoHeader
            title={title}
            useDate={useDate}
            isRangePicker={isRangePicker}
            icon={icon}
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default CardDashboard;
