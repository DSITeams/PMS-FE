interface InfoItemProps {
  title: string;
  value: string;
  icons: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value, icons }) => {
  return (
    <div className='flex p-2 items-center gap-7'>
      <div className='w-12 h-12 bg-color rounded-3xl flex items-center justify-center'>
        {icons}
      </div>
      <div className='flex flex-col'>
        <span className='text-sm text-gray-400 mb-1'>{title}</span>
        <span className='text-xl font-semibold'>{value}</span>
      </div>
    </div>
  );
};

export default InfoItem;
