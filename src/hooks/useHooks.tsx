import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountDownContext } from "../contexts/CountDownContext";

export function useChallengesContext(){
  const context = useContext(ChallengesContext)
  return context;
}

export function useCountDownContext(){
  const context = useContext(CountDownContext)
  return context;
}