import React from "react";

interface RefreshIconProps {
  w?: number;
  h?: number;
  color?: string;
}
const RefreshIcon: React.FC<RefreshIconProps> = ({ w = 5, h = 5, color }) => {
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
        d="M11.6668 12.5L8.3335 15.8333L11.6668 19.1667"
        stroke="#2B7EFE"
        strokeWidth="2"
      />
      <path
        d="M4.94835 12.9167C4.30629 11.8047 4.04912 10.5118 4.21673 9.23868C4.38434 7.96555 4.96737 6.7833 5.87537 5.87529C6.78338 4.96728 7.96563 4.38426 9.23876 4.21665C10.5119 4.04904 11.8048 4.30621 12.9168 4.94827C14.0289 5.59032 14.898 6.58139 15.3895 7.76776C15.8809 8.95413 15.9671 10.2695 15.6347 11.5099C15.3024 12.7502 14.57 13.8463 13.5513 14.628C12.5325 15.4097 11.2843 15.8334 10.0002 15.8334"
        stroke="#2B7EFE"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RefreshIcon;
