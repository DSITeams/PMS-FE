import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarIcon from '../assets/icons/Calendar';
import { Value } from 'react-calendar/src/shared/types.js';
import { formatDate } from '../utils';

interface FormInputGroupDate {
    label: string;
    id: string;
    placeholder: string;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    required?: boolean;
}

const FormInputGroupDate: React.FC<FormInputGroupDate> = ({
    label,
    id,
    placeholder,
    className,
    value,
    onChange,
}) => {
    const [showCalendar, setShowCalendar] = useState(false);

    const handleDateChange = (selectedDate: Value) => {
        if (selectedDate instanceof Date) {
            const day = selectedDate.getDate().toString().padStart(2, '0');
            const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
            const year = selectedDate.getFullYear();
            const formattedDate = `${year}-${month}-${day}`;
            
            if (onChange) {
                onChange(formattedDate);
            }
        }
        setShowCalendar(false);
    };

    return (
        <div className={`w-full ${className}`}>
            <label htmlFor={id} className="block text-sm font-weight-400 text-black">{label}</label>
            <div className="relative mt-3">
                <div
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={showCalendar ? 'true' : 'false'}
                    className="block w-full text-black rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-600 focus:border-2 outline-none placeholder-gray-400 cursor-pointer"
                    onClick={() => setShowCalendar(!showCalendar)}
                    aria-label={placeholder}
                    tabIndex={0}
                >
                    <span>{formatDate(value ? new Date(value) : new Date()) || placeholder}</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowCalendar(!showCalendar)}>
                    <CalendarIcon h={5} />
                </div>
                {showCalendar && (
                    <div className="absolute top-full left-0 mt-2 z-10 bg-white shadow-lg rounded-lg p-2">
                        <Calendar
                            locale='en-EN'
                            className='react-calendar' 
                            onChange={handleDateChange} 
                            value={value ? new Date(value) : new Date()} 
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormInputGroupDate;
