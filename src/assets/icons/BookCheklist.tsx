import React from "react";

interface BookIconProps {
  w?: number;
  h?: number;
  color?: string;
}
const BookChecklist: React.FC<BookIconProps> = ({ w = 5, h = 5, color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${w} h-${h}`}
    >
      <path
        d="M16.6666 10V13.5C16.6666 15.3856 16.6666 16.3284 16.0808 16.9142C15.495 17.5 14.5522 17.5 12.6666 17.5H5.41658C4.26599 17.5 3.33325 16.5673 3.33325 15.4167V15.4167C3.33325 14.2661 4.26599 13.3333 5.41659 13.3333H12.6666C14.5522 13.3333 15.495 13.3333 16.0808 12.7475C16.6666 12.1618 16.6666 11.219 16.6666 9.33333V6.5C16.6666 4.61438 16.6666 3.67157 16.0808 3.08579C15.495 2.5 14.5522 2.5 12.6666 2.5H7.33325C5.44763 2.5 4.50482 2.5 3.91904 3.08579C3.33325 3.67157 3.33325 4.61438 3.33325 6.5V15.4167"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M7.5 8.33341L8.45956 9.29297C8.85008 9.6835 9.48325 9.6835 9.87377 9.29297L12.5 6.66675"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BookChecklist;
