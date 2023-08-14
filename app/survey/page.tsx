"use client";
import React from "react";
import QuestionContainer from "../components/QuestionContainer/QuestionContainer";
import useSurvey from "../hooks/useSurvey";

const SurveyPage = () => {
  const { data, isFetching, isError, error } = useSurvey();
  return (
    <QuestionContainer
      data={data}
      isFetching={isFetching}
      isError={isError}
      error={error ?? undefined}
    />
  );
};

export default SurveyPage;
