import React, { useState } from "react";

const useAnswers = () => {
  const [answers, setAnswers] = useState<Map<number, string>>(new Map());
  const setAnswer = (index: number, answer: string) => {
    const newArray = answers.set(index, answer);
    setAnswers(newArray);
  };

  const getAnswer = (index: number) => {
    return answers.get(index);
  };
  return { setAnswer, getAnswer };
};

export default useAnswers;
