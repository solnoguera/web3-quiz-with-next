import React from "react";
import Option from "../Option/Option";
import { QuestionProps } from "../../types/survey.types";
import useCountdown from "../../hooks/useCountdown";
import useAnswers from "../../hooks/useAnswers";

const Question = ({
  text,
  options,
  lifetimeSeconds,
  page,
  onTimeout,
}: QuestionProps) => {
  const { countdown } = useCountdown(page, lifetimeSeconds, onTimeout);
  const { setAnswer } = useAnswers();

  const onClickOption = (answer: string, key: number) => {
    setAnswer(page, answer, key);
  };
  return (
    <div>
      <div className="flex justify-end">
        <p className=" text-black">
          Time left:
          <span
            className={` font-bold ml-2  ${
              countdown <= 5 ? "text-red-600" : ""
            }`}
          >
            {countdown}
          </span>
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">{text}</h2>
      </div>
      <div className="mt-16 grid space-y-4">
        {options?.map((option, index) => (
          <Option
            text={option.text}
            onClickOption={onClickOption}
            idx={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
