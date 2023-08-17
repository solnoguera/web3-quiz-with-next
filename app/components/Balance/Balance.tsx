import useSurveyContract from "@/app/hooks/useSurveyContract";
import React from "react";

const Balance = () => {
  const { balance, submitSurvey } = useSurveyContract();
  return <div>Balance $QUIZ: {balance}</div>;
};

export default Balance;
