//"use client";

import React from "react";
import Option from "../Option/Option";

type QuestionProps = {
  question: string;
};

const Question = ({ question }: QuestionProps) => {
  //const [answer, setAnswer] = useState<string>();

  const onClickOption = (answer: string) => {
    console.log({ answer });
    //setAnswer(answer);
  };
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">{question}</h2>
      </div>
      <div className="mt-16 grid space-y-4">
        <Option title="Option A" onClickOption={onClickOption} />
        <Option title="Option B" onClickOption={onClickOption} />
        <Option title="Option C" onClickOption={onClickOption} />
        <Option title="Option D" onClickOption={onClickOption} />
      </div>
    </div>
  );
};

export default Question;
