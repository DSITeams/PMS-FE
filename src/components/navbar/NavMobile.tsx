import { useEffect, useState } from "react";
import {
  FaArrowRightFromBracket,
  FaLock,
} from "react-icons/fa6";
import NavbarItem from "./NavbarItem";

interface ModalProps {
  modalOpen?: () => void;
  className?: string;
  name: string;
  position: string;
  changePassword: () => void;
  logout: () => void;
}
const NavMobile: React.FC<ModalProps> = ({
  modalOpen,
  className,
  name,
  position,
  changePassword,
  logout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNav, setOpenNav] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navDropDown = () => {
    setOpenNav(!isOpenNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <>
      <nav className={`bg-white shadow-sm ${className}`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 items-center">
              <button
                type="button"
                className="relative mt-2 inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-indigo-50 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={navDropDown}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="/src/assets/icons/logo.png"
                  alt="Your Company"
                />
              </div>
              {/* <div className="hidden sm:ml-6 sm:block">
              </div> */}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                onClick={modalOpen}
                className="relative rounded-full p-1 text-gray-600 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative cursor-pointer flex rounded-full text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-2">
                    <p className="px-4 text-gray-700 font-semibold">{name}</p>
                    <span className="px-4 py-2 font-light text-xs">
                      {position}
                    </span>
                    <hr className="mt-2" />
                    <div className="flex items-center ml-4">
                      <FaLock className="text-black" />
                      <button
                        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={changePassword}
                      >
                        Edit Password
                      </button>
                    </div>
                    <div className="flex items-center ml-4">
                      <FaArrowRightFromBracket className="text-red-500" />
                      <button
                        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {isOpenNav && (
          <div
            className={`sm:block md:block lg:hidden xl:hidden absolute bg-white w-full ${
              isOpenNav ? 'open' : ''
            }`}
            id="mobile-menu"
          >
            <NavbarItem onClose={closeNav} />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavMobile;
