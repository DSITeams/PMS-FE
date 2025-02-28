import React from "react";

interface BedIconProps {
  w?: number;
  h?: number;
  color?: string;
}

const BedIcon: React.FC<BedIconProps> = ({ w = 6, h = 6, color }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${w} h-${h}`}
    >
      <g clipPath="url(#clip0_388_1200)">
        <path
          opacity="0.3"
          d="M21.7499 13H5.08325V16.125H21.7499V13Z"
          fill={color}
        />
        <path
          d="M21.75 10.9166V7.79165C21.75 6.64581 20.8125 5.70831 19.6667 5.70831H7.16667C6.02083 5.70831 5.08333 6.64581 5.08333 7.79165V10.9166C3.9375 10.9166 3 11.8541 3 13V18.2083H4.38542L5.08333 20.2916H6.125L6.82292 18.2083H20.0208L20.7083 20.2916H21.75L22.4479 18.2083H23.8333V13C23.8333 11.8541 22.8958 10.9166 21.75 10.9166ZM14.4583 7.79165H19.6667V10.9166H14.4583V7.79165ZM7.16667 7.79165H12.375V10.9166H7.16667V7.79165ZM21.75 16.125H5.08333V13H21.75V16.125Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_388_1200">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0.916748 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BedIcon;
