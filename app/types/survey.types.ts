export type ButtonProps = {
  title: string;
  disabled?: boolean;
  onClickButton: () => void;
};

export type ErrorProps = {
  text: any;
};

export type OptionProps = {
  text: string;
  onClickOption: (answer: string) => void;
};

export type Option = {
  text: string;
};

export type QuestionProps = {
  text?: string;
  options?: Option[];
  lifetimeSeconds?: number;
  page: number;
  onTimeout: () => void;
};

export type Question = {
  lifetimeSeconds: number;
  options: Option[];
  text: string;
};

export type Survey = {
  title: string;
  questions: Question[];
};

export type LandingProps = {
  title: string;
  image: string;
};
