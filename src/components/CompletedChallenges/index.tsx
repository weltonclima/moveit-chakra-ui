import { useChallengesContext } from '../../hooks/useHooks';
import { Container } from './styles';
export function CompletedChallenges() {
  const { challengesCompleted } = useChallengesContext()
  return (
    <Container>
      <span>Desfios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}