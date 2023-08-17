import React from "react";
import Button from "../Button/Button";

const Error = () => {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-3xl mb-4">Sorry! We had an error.</p>
        <p className="text-xl mb-4">Please, try again soon</p>
        <Button title="Reload" onClickButton={() => window.location.reload()} />
      </div>
    </div>
  );
};

export default Error;
