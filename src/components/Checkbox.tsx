interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title?: string;
}

const CheckBox = ({ checked, onChange, title }: CheckBoxProps) => {
  return (
    <label className='flex items-center cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className='peer hidden'
      />

      <div
        className='w-5 h-5 border-2 border-gray-500 rounded-md flex items-center justify-center 
                        peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-all duration-200 mt-4 mb-4 mr-2'
      >
        {checked && (
          <svg
            className='w-4 h-4 text-white'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 13l4 4L19 7'
            ></path>
          </svg>
        )}
      </div>

      {/* Checkbox Title */}
      {title && <span className='ml-3 text-sm text-black'>{title}</span>}
    </label>
  );
};

export default CheckBox;
