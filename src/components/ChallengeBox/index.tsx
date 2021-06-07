import { useChallengesContext, useCountDownContext } from '../../hooks/useHooks';
import { 
  ChallengeActive, ChallengeButton, 
  ChallengeNotActive, Container } from './styles';
export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallengesContext();
  const { resetCountdown } = useCountDownContext();

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown();
  }
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeButton
              type="button"
              activeColor="red"
              onClick={handleChallengeFailed}
            >
              Falhei
            </ChallengeButton>
            <ChallengeButton
              activeColor="green"
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>
            Finalize um ciclo para receber um desafio
            </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
            </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}