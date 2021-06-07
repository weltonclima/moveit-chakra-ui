import { createContext, ReactNode, useEffect, useState } from "react";
import { useChallengesContext } from "../hooks/useHooks";

interface CountDownContextData {
  hasFinished: boolean;
  isActive: boolean;
  minutes: number;
  seconds: number;
  resetCountdown: () => void;
  startCountdown: () => void;
}
interface CountDownProviderProps {
  children: ReactNode
}
export const CountDownContext = createContext({} as CountDownContextData)

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useChallengesContext();
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  function startCountdown() {
    setisActive(true);
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setisActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setisActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <CountDownContext.Provider
      value={{
        hasFinished,
        isActive,
        minutes,
        seconds,
        resetCountdown,
        startCountdown,
      }}
    >
      {children}
    </CountDownContext.Provider>

  );
}