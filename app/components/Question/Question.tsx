import React from "react";
import Option from "../Option/Option";
import { QuestionProps } from "@/app/types/Survey.types";

const Question = ({ text, options }: QuestionProps) => {
  //const [answer, setAnswer] = useState<string>();

  const onClickOption = (answer: string) => {
    console.log({ answer });
    //setAnswer(answer);
  };
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">{text}</h2>
      </div>
      <div className="mt-16 grid space-y-4">
        {options?.map((option) => (
          <Option text={option.text} onClickOption={onClickOption} />
        ))}
      </div>
    </div>
  );
};

export default Question;
