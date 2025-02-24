// FormSearch.tsx
import React, { useState } from 'react';
import SearchIcon from '../assets/icons/Search';

interface FormSearchProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const FormSearch: React.FC<FormSearchProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className='flex px-2 py-1 items-center border border-gray-400 rounded-lg my-3'>
      <SearchIcon w={7} h={7} />
      <input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className='w-full p-2 border-none focus:outline-none'
      />
    </div>
  );
};

export default FormSearch;
