import React from "react";
import Question from "../Question/Question";
import Button from "../Button/Button";

const QuestionContainer = () => {
  return (
    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
      <div className="rounded-xl bg-white shadow-xl">
        <div className="p-6 sm:p-16">
          <Question question="What often do you use crypto coins?" />

          <div className="text-center flex justify-evenly py-14">
            <Button title="Back" />
            <Button title="Next" />
          </div>

          <div className="mt-4 space-y-4 text-gray-600 text-center sm:-mb-8">
            <p className="text-xs">
              By proceeding, you agree to our{" "}
              <a className="underline">Disclaimer</a> and confirm you have read
              our <a className="underline">Privacy and Cookie Statement</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
