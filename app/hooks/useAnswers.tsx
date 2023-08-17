import React, { useState } from "react";

const useAnswers = () => {
  const [answers, setAnswers] = useState<Map<number, string>>(new Map());
  const setAnswer = (index: number, answer: string) => {
    const newArray = answers.set(index, answer);
    setAnswers(newArray);
    localStorage.setItem(index.toString(), answer);
  };
  const getAnswer = (index: number) => {
    return answers.get(index);
  };
  console.log(answers);
  return { setAnswer, getAnswer, answers };
};

export default useAnswers;
