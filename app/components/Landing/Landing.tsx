import { LandingProps, Survey } from "@/app/types/Survey.types";
import Link from "next/link";
import React from "react";

const Landing = ({ title, image }: LandingProps) => {
  return (
    <div>
      <p className="text-7xl mb-10 text-black font-bold">{title}</p>
      <Link href="survey">Take Survey</Link>
    </div>
  );
};

export default Landing;
