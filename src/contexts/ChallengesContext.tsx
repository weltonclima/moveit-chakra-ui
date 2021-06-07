import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json';
import { LevelUpModal } from "../components/LevelUpModal/index";
import { api } from "../services/api";
import { getSession } from "next-auth/client";

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface Data {
  id: number;
  name: string;
  avatar_url: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface User {
  ref: {
    id: string;
  },
  data: Data;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState<number>(1);
  const [currentExperience, setCurrentExperience] = useState<number>(0);
  const [challengesCompleted, setClallengesCompleted] = useState<number>(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    async function getUser() {
      const session = await getSession();
      if (!session) {
        return
      }
      const { data: user } = await api.get<Data>('/user');
      setLevel(user.level);
      setCurrentExperience(user.currentExperience);
      setClallengesCompleted(user.challengesCompleted);
    }
    getUser()
  }, [])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('./Notification.mp3').play();

    /*if (Notification.permission === 'granted') {
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount}`
      })
    }*/
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  async function completeChallenge() {
    if (!activeChallenge)
      return;

    const session = await getSession();
    if (!session) {
      return
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;
    let finallevel = level;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      finallevel += 1;
      setLevel(finallevel);
      setIsLevelUpModalOpen(true);
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    let finalchallengesCompleted = challengesCompleted + 1;
    setClallengesCompleted(finalchallengesCompleted);

    const body = {
      data: {
        level: finallevel,
        currentExperience: finalExperience,
        challengesCompleted: finalchallengesCompleted
      }
    }

    const response = await api.put<User>('/user', body)

  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}