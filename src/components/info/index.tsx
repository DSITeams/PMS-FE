import InfoHeader from './InfoHeader';
import React from 'react';
import { IconType } from 'react-icons';

interface CardInfoProps {
  title: string;
  dateRange?: string;
  icon?: IconType;
  content: React.ReactNode;
  styles?: React.CSSProperties;
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  dateRange,
  icon: Icon,
  content,
  styles,
}) => {
  return (
    <div
      className='flex flex-col p-4 bg-white rounded-xl h-fit w-1/2'
      style={styles}
    >
      <InfoHeader title={title} dateRange={dateRange} icon={Icon} />
      {content}
    </div>
  );
};

export default CardInfo;
