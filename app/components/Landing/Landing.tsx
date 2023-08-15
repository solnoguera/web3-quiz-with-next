import { LandingProps } from "@/app/types/Survey.types";
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import useConnectMetamask from "@/app/hooks/useConnectMetamask";
import SwitchToGoerli from "../SwitchToGoerli/SwitchToGoerli";
import { goerliChainId } from "@/app/utils/constants";

const Landing = ({ title, image }: LandingProps) => {
  const { address, chainId } = useConnectMetamask();

  return (
    <div>
      <p className="text-7xl mb-10 text-black font-bold">{title}</p>
      <SwitchToGoerli />
      {address && chainId === goerliChainId && (
        <div className="my-10">
          <Link href="survey" className="underline text-xl">
            Take Survey
          </Link>
        </div>
      )}
    </div>
  );
};

export default Landing;
