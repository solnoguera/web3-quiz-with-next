import useConnectMetamask from "@/app/hooks/useConnectMetamask";
import React from "react";
import Button from "../Button/Button";
import { goerliChainId } from "@/app/utils/constants";

const SwitchToGoerli = () => {
  const { switchToGoerli, chainId } = useConnectMetamask();

  return (
    <div>
      {chainId && chainId !== goerliChainId ? (
        <div>
          <Button title="Switch to Goerli Net" onClickButton={switchToGoerli} />
        </div>
      ) : (
        <p>Successfully connected to Goerli Network</p>
      )}
    </div>
  );
};

export default SwitchToGoerli;
