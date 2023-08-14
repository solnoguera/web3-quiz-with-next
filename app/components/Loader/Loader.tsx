import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <div
        className=" animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-blue-800 rounded-full "
        role="status"
        aria-label="loading"
      />
    </div>
  );
};

export default Loader;
