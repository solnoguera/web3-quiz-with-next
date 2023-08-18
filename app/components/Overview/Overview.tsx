"use client";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import useSurvey from "../../hooks/useSurvey";
import Button from "../Button/Button";
import useSurveyContract from "../../hooks/useSurveyContract";
import { Question } from "../../types/survey.types";

const Overview = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const { data, isFetching, isError } = useSurvey();
  const { submitSurvey } = useSurveyContract();

  const handleSubmit = () => {
    const randomId: number = parseInt((Math.random() * 100).toFixed(0));
    const answersIds: number[] = [];
    for (let index = 0; index < data?.questions.length; index++) {
      const element = localStorage.getItem(`${index}`);
      const number = element?.split(".")[0];
      if (number) {
        answersIds.push(parseInt(number));
      }
    }
    console.log("survey random id", randomId);
    console.log("answersIds", answersIds);
    submitSurvey(randomId, answersIds);
    localStorage.clear();
    setTimeout(() => setShowError(true), 4000);
  };

  const handleDoItAgain = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      {!isFetching && !isError && (
        <div className="flex justify-center mx-auto max-w-3xl">
          <div className="block">
            <h1 className="text-6xl font-black text-black mb-10">Overview</h1>
            <div className="block">
              {data?.questions?.map((question: Question, index: number) => (
                <div className="bg-white my-4 py-2 px-6" key={index}>
                  <p className=" text-xl text-black font-bold">
                    {question.text}
                  </p>
                  <p>
                    {localStorage?.getItem(index.toString())?.split(".")[1] ??
                      "Not answered"}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-evenly mt-12">
              <Button title="Start Over" onClickButton={handleDoItAgain} />
              <Button title="Submit" onClickButton={handleSubmit} />
            </div>
            {showError && (
              <p className="text-red-700 mt-4">
                The EVM throws an unexpected error called
                TransactionRevertedWithoutReasonError. If your transaction
                ended, check out the console. You can find out more about this
                in the README file at the github repo. I am really so sorry!
              </p>
            )}
          </div>
        </div>
      )}
      {isFetching && <Loader />}
      {isError && !isFetching && <Error />}
    </>
  );
};

export default Overview;
