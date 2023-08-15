import React, { useState } from "react";

const useConnectMetamask = () => {
  const [address, setAddress] = useState<string>("");
  const requestAccount = async () => {
    if (typeof window?.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
      } catch (error) {}
    }
  };
  const connectWallet = async () => {
    if (window?.ethereum) {
      console.log("Metamask Detected");
      await requestAccount();

      //const provider =
    } else {
      console.log("Metamask NOT Detected");
      alert("Please install Metamask extension.");
    }
  };

  return { connectWallet, address };
};

export default useConnectMetamask;
