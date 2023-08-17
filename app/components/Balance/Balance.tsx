import useSurveyContract from "@/app/hooks/useSurveyContract";
import React from "react";

const Balance = () => {
  const { balance } = useSurveyContract();
  return <p className="my-6 font-black text-black">Balance $QUIZ: {balance}</p>;
};

export default Balance;
