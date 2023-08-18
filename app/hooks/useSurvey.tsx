"use client";
import { useQuery } from "@tanstack/react-query";
import { getSurveyApiURL } from "../utils/constants";

const getSurveyData = async () => {
  const res = await fetch(getSurveyApiURL);
  const surveyData = await res.json();
  // If you would like to mock an error, uncomment:
  // throw Error("No data found");
  return surveyData;
};

const useSurvey = () => {
  const { data, isFetching, isError, error } = useQuery(
    ["getSurveyData"],
    getSurveyData,
    { retry: 1 }
  );

  return { data, isFetching, isError, error };
};

export default useSurvey;
