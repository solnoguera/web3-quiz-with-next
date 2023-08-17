import React, { useState } from "react";

const useAnswers = () => {
  const [answers, setAnswers] = useState<Map<number, string>>(new Map());
  const setAnswer = (index: number, answer: string, optId: number) => {
    const newArray = answers.set(index, answer);
    setAnswers(newArray);
    console.log(`${optId}.${answer}`);
    localStorage.setItem(index.toString(), `${optId}.${answer}`);
  };
  const getAnswer = (index: number) => {
    return answers.get(index);
  };
  return { setAnswer, getAnswer, answers };
};

export default useAnswers;
