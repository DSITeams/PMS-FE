import React from "react";

interface BookIconProps {
  w?: number;
  h?: number;
  color?: string;
}
const KeyIcon: React.FC<BookIconProps> = ({ w = 5, h = 5, color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${w} h-${h}`}
    >
      <circle
        cx="7.49984"
        cy="11.6666"
        r="3.33333"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M10 9.16667L12.9167 6.25M14.1667 5L12.9167 6.25M12.9167 6.25L15 8.33333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default KeyIcon;
