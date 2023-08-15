import React, { useState, useEffect, useRef } from "react";

const useCountdown = (page: number, seconds?: number) => {
  const [countdown, setCountdown] = useState<number>(seconds ?? 0);
  const myInterval = useRef<any>();

  useEffect(() => {
    clearInterval(myInterval.current);
    setCountdown(seconds ?? 0);
    myInterval.current = setInterval(() => {
      setCountdown((count) => count - 1);
    }, 1000);
    return () => clearInterval(myInterval.current);
  }, [page, seconds]);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(myInterval.current);
    }
  }, [countdown]);

  return { countdown };
};

export default useCountdown;
