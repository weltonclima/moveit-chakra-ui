import { useChallengesContext } from '../../hooks/useHooks';
import { Container, Span } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallengesContext()

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <Span style={{ left: `${percentToNextLevel}%` }} >
          {currentExperience} xp
        </Span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}