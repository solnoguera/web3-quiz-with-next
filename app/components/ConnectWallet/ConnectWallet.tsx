import React from "react";
import Button from "../Button/Button";
import useConnectMetamask from "@/app/hooks/useConnectMetamask";
import Link from "next/link";

const ConnectWallet = () => {
  const { connectWallet, address } = useConnectMetamask();
  console.log({ address });
  return (
    <div className="flex justify-start my-6">
      {address === "" ? (
        <Button title="Connect Metamask" onClickButton={connectWallet} />
      ) : (
        <div className="block">
          <p className="text-2xl text-green-600 mb-4">
            Successfullly connected!
          </p>
          <Link href="survey" className="underline text-xl">
            Take Survey
          </Link>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
