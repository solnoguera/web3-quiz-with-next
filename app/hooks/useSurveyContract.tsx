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
      contractInstance.current = contract;
      getBalanceFromSmartContract(contract);
    }
  }, [address]);

  const getBalanceFromSmartContract = async () => {
    contractInstance.current.methods
      ?.balanceOf(address)
      .call()
      .then((res: any) => {
        const balance = Number(res);
        setBalance(balance);
      })
      .catch((err: any) => {
        console.log(err);
        return;
      });
  };
  const submitSurvey = async (surveyId: number, answerIds: number[]) => {
    contractInstance.current.methods
      .submit(surveyId, answerIds)
      .send({ from: address })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
        return;
      });
  };

  return { balance, submitSurvey };
};

export default useSurveyContract;
