import React, { useState } from 'react';
import { FaArrowRightFromBracket, FaLock, FaMoon } from 'react-icons/fa6';
import { openModal } from '../../stores/slice/modalSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/store';

interface HeaderProfileProps {
  profilePict: string;
  name: string;
  position: string;
  changePassword: () => void;
  logout: () => void;
}
const HeaderProfile: React.FC<HeaderProfileProps> = ({
  profilePict,
  name,
  position,
  changePassword,
  logout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className='flex justify-center items-center'>
      <FaMoon className='text-black mr-8 w-6 h-6' onClick={() => dispatch(openModal())} />
      <div className='relative'>
        <div
          className='flex items-center cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={profilePict}
            alt='profile'
            className='w-13 h-13 rounded-full object-cover border border-gray-300'
          />
        </div>

        {isOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-2'>
            <p className='px-4 text-gray-700 font-semibold'>{name}</p>
            <span className='px-4 py-2 font-light text-xs'>{position}</span>
            <hr className='mt-2' />
            <div className='flex items-center ml-4'>
              <FaLock className='text-black' />
              <button
                className='w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
                onClick={changePassword}
              >
                Edit Password
              </button>
            </div>
            <div className='flex items-center ml-4'>
              <FaArrowRightFromBracket className='text-red-500' />
              <button
                className='w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100'
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderProfile;
