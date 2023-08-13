import React from "react";

type ButtonProps = {
  title: string;
  //onClickOption: (answer: string) => void;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-black text-lg font-bold text-white">
      {title}
      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
    </button>
  );
};

export default Button;
