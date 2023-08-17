"use client";
import React from "react";
import Question from "../Question/Question";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import usePagination from "@/app/hooks/usePagination";
import useSurvey from "@/app/hooks/useSurvey";
import useAnswers from "@/app/hooks/useAnswers";

const QuestionContainer = () => {
  const { data, isFetching, isError } = useSurvey();
  const { page, onNextPage } = usePagination(data?.questions?.length ?? 0);
  const isLastQuestion = page + 1 === data?.questions.length;
  const goToOverview = () => (window.location.href = "/overview");
  return (
    <>
      {!isFetching && !isError && (
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-14">
              <Question
                text={data?.questions[page]?.text}
                options={data?.questions[page]?.options}
                lifetimeSeconds={data?.questions[page]?.lifetimeSeconds}
                page={page}
                onTimeout={isLastQuestion ? goToOverview : onNextPage}
              />

              <div className="text-center flex justify-evenly py-14">
                <Button
                  title={isLastQuestion ? "Finish" : "Next"}
                  onClickButton={isLastQuestion ? goToOverview : onNextPage}
                />
              </div>

              <div className="mt-4 space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  By proceeding, you agree to our{" "}
                  <a className="underline">Disclaimer</a> and confirm you have
                  read our{" "}
                  <a className="underline">Privacy and Cookie Statement</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isFetching && <Loader />}
      {isError && !isFetching && <Error />}
    </>
  );
};

export default QuestionContainer;
