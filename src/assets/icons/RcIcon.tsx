import React from "react";

interface RcIconProps {
  w?: number;
  h?: number;
  color?: string;
}
const RcIcon: React.FC<RcIconProps> = ({ w = 5, h = 5, color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${w} h-${h}`}
    >
      <rect
        x="4.16675"
        y="3.33325"
        width="11.6667"
        height="14.1667"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M7.5 7.5H12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 10.8333H12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 14.1667H10.8333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RcIcon;
