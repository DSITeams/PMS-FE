import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const FormInput = ({
  type,
  name,
  id,
  placeholder,
  className,
  value,
  onChange,
  required,
}: {
  type?: string;
  name: string;
  id: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className='relative mt-4 mb-4'>
      <label
        htmlFor={id}
        className={`absolute pl-2 pr-2 left-4 transition-all duration-200 ${
          isFocused || hasValue
            ? 'text-blue-primary text-s top-0 -translate-y-3 bg-color px-1 font-light'
            : 'text-gray-400 top-1/2 transform -translate-y-1/2 font-light'
        }`}
      >
        {placeholder}
      </label>

      <input
        type={inputType}
        name={name}
        id={id}
        className={`border border-gray-400 rounded-lg p-3 w-full focus:border-blue-600 focus:border-2 outline-none ${className} shadow-sm`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        value={value}
        onChange={onChange}
        required={required}
      />

      {type === 'password' && (
        <button
          type='button'
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

export default FormInput;
