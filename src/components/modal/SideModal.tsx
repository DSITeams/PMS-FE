import React, { useState, useEffect, ReactNode } from "react";

interface SideModalProps{
    width: string;
    children: ReactNode;
}

const SideModal: React.FC<SideModalProps> = ({ width, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModalSide = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpening(true);
    }, 100); 
  };

  const closeSideModal = () => {
    setIsOpening(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (isOpen && e.target.classList.contains("bg-gray-500/75")) {
        closeSideModal();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={openModalSide}
        className="px-3 py-2 bg-white shadow-md rounded-md"
      >
        Click modal side
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-10">
          {/* Background backdrop */}
          <div
            className={`fixed inset-0 bg-gray-500/40 transition-opacity duration-500 ${
              isOpening ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          ></div>

          {/* Panel Container */}
          <div className="fixed inset-0 overflow-hidden flex justify-end">
            <div
              className={`pointer-events-auto relative w-screen h-screen ${width} bg-white shadow-xl transform transition-transform duration-500 sm:duration-700 ${
                isOpening ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:ring-2 focus:ring-gray-300"
                onClick={closeSideModal}
              >
                <span className="sr-only">Close panel</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Panel Content */}
              {children}
              <div className="flex h-full flex-col py-6 px-4 sm:px-6">
                <h2 className="text-base font-semibold text-gray-900">
                  Panel title
                </h2>
                <div className="relative mt-6 flex-1 overflow-y-auto">
                  <p>Isi konten panel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideModal;
