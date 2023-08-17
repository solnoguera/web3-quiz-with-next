import { OptionProps } from "../../types/survey.types";
import React from "react";

const Option = ({ text, onClickOption }: OptionProps) => {
  return (
    <button
      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
      hover:border-blue-400 focus:bg-blue-100 active:bg-blue-200"
      onClick={() => onClickOption(text)}
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
          {text}
        </span>
      </div>
    </button>
  );
};

export default Option;
