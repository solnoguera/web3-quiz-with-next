import React, { useState, useEffect, useRef } from "react";
import { addressQuiz } from "../utils/constants";
import quizAbi from "../assets/quizAbi.json";
import Web3 from "web3";
import useConnectMetamask from "./useConnectMetamask";

const useSurveyContract = () => {
  const [balance, setBalance] = useState<number>();
  const contractInstance = useRef<any>();
  const { address } = useConnectMetamask();

  useEffect(() => {
    // @ts-expect-error
    if (window?.ethereum && address) {
      // @ts-expect-error
      const web3 = new Web3(window.ethereum);
      // Create a contract instance using the contract address and ABI
      const contract = new web3.eth.Contract(quizAbi, addressQuiz);
      web3.eth.defaultAccount = address;
      console.log({ contract });
      contractInstance.current = contract;
      console.log(contract.methods);
      getBalanceFromSmartContract(contract);
    }
  }, [address]);

  const getBalanceFromSmartContract = async (contract: any) => {
    try {
      console.log({ address });
      contractInstance.current.methods
        ?.balanceOf(address)
        .call()
        .then((res: any) => {
          console.log({ res });
          const balance = Number(res);
          console.log({ balance });
          setBalance(balance);
        })
        .catch((err: any) => console.log({ err }));
      console.log({ contract });
    } catch (error) {
      console.log("error", error);
    }
  };
  const submitSurvey = async (surveyId: number, answerIds: number[]) => {
    try {
      contractInstance.current.methods
        .submit(surveyId, answerIds)
        .send({ from: address })
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return { balance, submitSurvey };
};

export default useSurveyContract;
