import { useChallengesContext } from '../../hooks/useHooks';
import { Container, Overlay } from './styles';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallengesContext();
  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="./icons/close.svg" alt="Fechar Modal" />
        </button>
      </Container>
    </Overlay>
  );
}