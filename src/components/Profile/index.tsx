import { useSession } from 'next-auth/client';
import { useChallengesContext } from '../../hooks/useHooks';
import { Container } from './styles';


export function Profile() {
  const { level } = useChallengesContext();
  const [session] = useSession()

  return (
    <Container>
      <img src={session.user.image} alt={session.user.name} />
      <div>
        <strong>{session.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}