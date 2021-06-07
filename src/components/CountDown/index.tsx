import { useCountDownContext } from '../../hooks/useHooks';
import { CountDownButton, 
  CountDownContainer, DivCountDown } from './styles';

export function CountDown() {
  const { minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useCountDownContext()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <CountDownContainer >
        <DivCountDown>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </DivCountDown>
        <span>:</span>
        <DivCountDown>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </DivCountDown>
      </CountDownContainer>

      {hasFinished ? (
        <CountDownButton
          isActive={false}
          disabled
        >
          Ciclo encerrado
        </CountDownButton>
      ) : (
        <>
          {isActive ? (
            <CountDownButton
              type="button"
              isActive={true}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </CountDownButton>
          ) : (
            <CountDownButton
              isActive={false}
              type="button"
              onClick={startCountdown}
            >
              Iniciar um Ciclo'
            </CountDownButton>
          )}
        </>
      )}
    </div>
  );
}