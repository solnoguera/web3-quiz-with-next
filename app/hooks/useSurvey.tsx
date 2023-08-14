"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import surveyData from "../utils/survey.json";

const getSurveyData = () => {
  return { surveyData };
};

const useSurvey = () => {
  const surveyQuery = useQuery(["getSurveyData"], getSurveyData);
  const [page, setPage] = useState(0);
  //const [error, setError] = useState(0);
  //console.log(surveyData);

  const onNextPage = () => {
    const questionLength = surveyData.questions.length;
    if (page + 1 < questionLength) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const onBackPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return { surveyQuery, page, onNextPage, onBackPage };
};

export default useSurvey;
