import React from "react";
import Button from "../Button/Button";
import { ErrorProps } from "@/app/types/Survey.types";

const Error = ({ text }: ErrorProps) => {
  console.log("error text", text);
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-3xl mb-4">Sorry! We had an error.</p>
        <p className="text-xl mb-4">Please, try again soon</p>
        <p className="text-sm mb-4">Error info: {text}</p>
        <Button title="Reload" onClickButton={() => window.location.reload()} />
      </div>
    </div>
  );
};

export default Error;
