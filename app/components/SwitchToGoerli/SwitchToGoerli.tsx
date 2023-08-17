import useConnectMetamask from "../../hooks/useConnectMetamask";
import React from "react";
import Button from "../Button/Button";
import { goerliChainId } from "../../utils/constants";

const SwitchToGoerli = () => {
  const { switchToGoerli, chainId } = useConnectMetamask();

  return (
    <div>
      {chainId && chainId !== goerliChainId ? (
        <div className="block">
          <p className="ml-2 mb-4">
            We need to you connect to Goerli Ethereum.
          </p>
          <Button title="Switch to Goerli Net" onClickButton={switchToGoerli} />
        </div>
      ) : (
        <p>Connected to Goerli Network</p>
      )}
    </div>
  );
};

export default SwitchToGoerli;
