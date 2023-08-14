import React from "react";

type ErrorProps = {
  text: any;
};

const Error = ({ text }: ErrorProps) => {
  console.log("error text", text);
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-3xl mb-4">Sorry! We had an error.</p>
        <p className="text-xl mb-4">Please, try again soon</p>
        <p>Error info: {text}</p>
      </div>
    </div>
  );
};

export default Error;
