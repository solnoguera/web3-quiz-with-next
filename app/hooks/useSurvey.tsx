"use client";
import { useQuery } from "@tanstack/react-query";

const getSurveyData = async () => {
  const res = await fetch("https://api.sandapi.com/user_6jx7ey/getSurvey");
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
