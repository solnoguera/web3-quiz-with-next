import { ButtonProps } from "../../types/survey.types";
import React from "react";

const Button = ({ title, onClickButton, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`group relative h-12 w-48 overflow-hidden rounded-2xl text-lg font-bold text-white ${
        disabled ? "bg-gray-500" : "bg-black"
      }`}
      onClick={() => onClickButton()}
      disabled={disabled}
    >
      {title}
      {!disabled && (
        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      )}
    </button>
  );
};

export default Button;
