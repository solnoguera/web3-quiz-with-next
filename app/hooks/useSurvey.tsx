"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import surveyData from "../utils/survey.json";

const getSurveyData = async () => {
  const res = await fetch("https://api.sandapi.com/user_6jx7ey/getSurvey");
  console.log("🚀 ~ file: useSurvey.tsx:8 ~ getSurveyData ~ res:", res);
  const surveyData = await res.json();
  console.log(
    "🚀 ~ file: useSurvey.tsx:10 ~ getSurveyData ~ surveyData:",
    surveyData
  );
  // If you would like to mock an error, uncomment:
  // throw Error("No data found");
  return { surveyData };
};

const useSurvey = () => {
  const surveyQuery = useQuery(["getSurveyData"], getSurveyData, { retry: 1 });
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
