import React from "react";

interface ButtonActionProps {
  title?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

const ButtonAction: React.FC<ButtonActionProps> = ({
  title,
  onClick,
  className,
  type = "submit",
  icon,
}: ButtonActionProps) => {
  return (
    <button
      className={`py-2 w-[122px] rounded-lg text-sm font-[700] tracking-wider ${className}`}
      onClick={onClick}
      type={type}
    >
      <div className="flex flex-row justify-center gap-2">
        {icon && <span>{icon}</span>}
        {title && <span>{title}</span>}
      </div>
    </button>
  );
};

export default ButtonAction;
