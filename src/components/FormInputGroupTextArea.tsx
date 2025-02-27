import React from 'react';

interface FormInputGroupTextAreaProps {
    label: string;
    id: string;
    name: string;
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    cols?: number;
    rows?: number;
}

const FormInputGroupTextArea: React.FC<FormInputGroupTextAreaProps> = ({
    label,
    id,
    name,
    placeholder,
    className,
    value,
    onChange,
    required,
    cols,
    rows,
}) => {
    return (
        <div className={`w-full ${className}`}>
            <label htmlFor={id} className="block text-sm font-weight-400 text-black">{label}</label>
            <textarea 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                onChange={onChange} 
                required={required} 
                cols={cols} 
                rows={rows} 
                value={value}
                className="border border-gray-300 rounded-lg text-sm mt-3 p-3 w-full focus:border-blue-600 focus:border-2 outline-none placeholder-gray text-black"
            />
        </div>
    );
};

export default FormInputGroupTextArea;
