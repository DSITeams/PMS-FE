import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../index.css';
import { Value } from 'react-calendar/src/shared/types.js';
import CalendarIcon from '../../assets/icons/Calendar';
import { formatDate } from '../../utils';

interface InfoHeaderProps {
  title: string;
  useDate?: boolean;
  isRangePicker?: boolean;
  icon?: React.ReactNode;
}
const InfoHeader: React.FC<InfoHeaderProps> = ({
  title,
  useDate,
  isRangePicker,
  icon,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  const calendarRef = useRef<HTMLDivElement>(null);

  const toggleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      setSelectedRange(value);
    } else {
      setSelectedDate(value);
    }
    setShowCalendar(false);
  };

  const displayDate = isRangePicker
    ? selectedRange[0] && selectedRange[1]
      ? `${formatDate(selectedRange[0])} until ${formatDate(selectedRange[1])}`
      : `${formatDate(
          new Date(new Date().setMonth(new Date().getMonth() - 1))
        )} until ${formatDate(new Date())}`
    : selectedDate
    ? formatDate(selectedDate)
    : formatDate(new Date());

  return (
    <div className='flex h-10 flex-col md:flex-row items-start md:items-center justify-between w-full space-y-2 md:space-y-0 mb-6'>
      <h2 className='text-md font-semibold mb-2 md:mb-0'>{title}</h2>
      <div className='flex flex-row items-center justify-between w-full md:w-auto space-x-2'>
        {useDate && (
          <div className='relative w-full md:w-auto' ref={calendarRef}>
            <div
              className='flex items-center bg-color px-4 py-2 rounded-lg space-x-2 cursor-pointer text-sm'
              onClick={toggleShowCalendar}
            >
              <CalendarIcon h={6} color='text-gray-400' />
              <span className='text-gray-400'>{displayDate}</span>
            </div>
            {showCalendar && (
              <div className='absolute top-full z-10 right-0 bg-white shadow-lg rounded-lg overflow-auto md:right-0 sm:right-0 mt-2'>
                <Calendar
                  locale='en-EN'
                  className='react-calendar p-2 bg-white rounded-lg shadow-md'
                  onChange={handleDateChange}
                  selectRange={isRangePicker}
                  value={isRangePicker ? selectedRange : selectedDate}
                  maxDate={new Date()}
                />
              </div>
            )}
          </div>
        )}

        {icon && (
          <div className='p-2 bg-primary rounded-lg flex items-center justify-center'>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoHeader;
