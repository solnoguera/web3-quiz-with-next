import { LandingProps } from "../../types/survey.types";
import React from "react";
import Link from "next/link";
import useConnectMetamask from "../../hooks/useConnectMetamask";
import SwitchToGoerli from "../SwitchToGoerli/SwitchToGoerli";
import { goerliChainId } from "../../utils/constants";
import Balance from "../Balance/Balance";

const Landing = ({ title, image }: LandingProps) => {
  const { address, chainId } = useConnectMetamask();

  return (
    <div className="container md:flex sm:block">
      <div className="">
        <p className="text-7xl mb-10 text-black font-bold">{title}</p>
        <SwitchToGoerli />
        {address && chainId === goerliChainId && (
          <>
            <Balance />
            <div className="my-10 text-black">
              <div className="text-xl mb-3">
                <p>
                  You have your wallet connected and the network is looking
                  good!
                </p>
                <p className="font-bold mt-12 text-3xl">
                  Are you ready to take the Survey?
                </p>
              </div>
              <Link href="survey" className="underline text-xl">
                Take Survey
              </Link>
            </div>
          </>
        )}
      </div>
      <div>
        <img src="https://www.quizdom.com/img/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;
