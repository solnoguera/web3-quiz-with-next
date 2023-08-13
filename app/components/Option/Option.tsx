import React from "react";

type ButtonProps = {
  title: string;
  onClickOption: (answer: string) => void;
};

const Option = ({ title, onClickOption }: ButtonProps) => {
  return (
    <button
      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
      hover:border-blue-400 focus:bg-blue-100 active:bg-blue-200"
      onClick={() => onClickOption(title)}
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
          {title}
        </span>
      </div>
    </button>
  );
};

export default Option;
