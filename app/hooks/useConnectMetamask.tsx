import React, { useState, useEffect } from "react";
import goerliNet from "../utils/goerli.json";

const useConnectMetamask = () => {
  const [address, setAddress] = useState<string>("");
  const [chainId, setChainId] = useState<string>();

  useEffect(() => {
    if (window?.ethereum) {
      console.log("Metamask Detected");
      connectWallet();
      getChainId();
      window?.ethereum?.on("chainChanged", getChainId);
    } else {
      console.log("Metamask NOT Detected");
      alert("Please install Metamask extension.");
    }
    return () => {
      window?.ethereum?.removeListener("chainChanged", getChainId);
    };
  }, []);

  const connectWallet = async () => {
    if (typeof window?.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setAddress(accounts[0]);
        return account;
      } catch (error) {
        console.log(error, "Error!");
      }
    }
  };

  const getChainId = async () => {
    try {
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      console.log({ chainId });
      setChainId(chainId);
      return chainId;
    } catch (error) {
      console.log(error, "Error!");
    }
  };

  const changeNetwork = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...goerliNet,
            },
          ],
        });
      }
    } catch (error) {
      console.log(error, "Error!");
    }
  };

  const switchToGoerli = async () => {
    const chainId = await getChainId();
    if (chainId !== goerliNet.chainId) {
      changeNetwork();
    }
  };

  return { connectWallet, switchToGoerli, address, chainId };
};

export default useConnectMetamask;