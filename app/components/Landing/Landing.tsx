import { LandingProps, Survey } from "@/app/types/Survey.types";
import React from "react";
import ConnectWallet from "../ConnectWallet/ConnectWallet";

const Landing = ({ title, image }: LandingProps) => {
  return (
    <div>
      <p className="text-7xl mb-10 text-black font-bold">{title}</p>
      <ConnectWallet />
    </div>
  );
};

export default Landing;
