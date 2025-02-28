import React, { useEffect, useRef, useState } from 'react';
import ChevronUpIcon from '../assets/icons/ChevronUp';
import ChevronDownIcon from '../assets/icons/ChevronDown';
import FormSearch from './FormSearch';

interface FormDropdownProps {
  title: string;
  options: string[];
  multiSelect?: boolean;
  onSelect: (selectedItems: string[]) => void;
}
const FormDropdown: React.FC<FormDropdownProps> = ({
  title,
  options,
  multiSelect,
  onSelect,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSelection = (item: string) => {
    if (multiSelect) {
      if (item === 'All') {
        if (selectedItems.includes('All')) {
          setSelectedItems([]);
        } else {
          setSelectedItems(options);
        }
      } else {
        let newSelectedItems = selectedItems.includes(item)
          ? selectedItems.filter((i) => i !== item)
          : [...selectedItems, item];

        if (newSelectedItems.length === options.length - 1) {
          newSelectedItems = [...options];
        } else {
          newSelectedItems = newSelectedItems.filter((i) => i !== 'All');
        }

        setSelectedItems(newSelectedItems);
      }
    } else {
      setSelectedItems([item]);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    onSelect(selectedItems);
  }, [selectedItems, onSelect]);

  const filteredOptions = options.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <label className='text-black font-light mb-3'>{title}</label>
      <div className='relative w-full' ref={dropdownRef}>
        <div
          className='border border-gray-400 rounded-xl px-4 py-3 flex justify-between items-center bg-white cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='text-gray-700'>
            {multiSelect ? (
              selectedItems.length > 0 ? (
                <span className='font-light'>
                  {selectedItems.length} Selected
                </span>
              ) : (
                <span className='text-gray-400 font-light'>{title}</span>
              )
            ) : selectedItems.length < 1 ? (
              <span className='text-gray-400 font-light'>{title}</span>
            ) : (
              <span className='font-light'>{selectedItems}</span>
            )}
          </span>
          <span className='text-gray-500'>
            {isOpen ? (
              <ChevronUpIcon color='#636364' h={3} w={3} />
            ) : (
              <ChevronDownIcon color='#636364' h={3} w={3} />
            )}
          </span>
        </div>

        {isOpen && (
          <div className='absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10'>
            <FormSearch
              placeholder='Search...'
              onSearch={(query) => setSearchQuery(query)}
            />
            {filteredOptions.map((item) => (
              <div
                key={item}
                className='flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100'
                onClick={() => toggleSelection(item)}
              >
                {multiSelect && (
                  <input
                    type='checkbox'
                    checked={selectedItems.includes(item)}
                    readOnly
                    className='mr-2'
                  />
                )}
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FormDropdown;
