import React, { useState, useEffect } from "react";

interface ModalAlertProps {
  isOpenModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalAlert: React.FC<ModalAlertProps> = ({
  isOpenModal,
  onClose,
  children,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpenModal) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpenModal]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-60 transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(31, 41, 55, 0.5)" }}
    >
      <div
        className={`bg-white rounded-lg shadow-lg max-w-lg w-[2000px] p-6 transform transition-all duration-300 ${
          isOpenModal ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Header Modal */}
        <div className="flex justify-between items-center"></div>

        <div className="mt-2 flex justify-center">{children}</div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            className="cursor-pointer inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="cursor-pointer w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:w-auto"
            onClick={onClose}
          >
            Deactivate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
