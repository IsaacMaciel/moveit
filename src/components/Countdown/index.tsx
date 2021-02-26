import { useCountDown } from '../../contexts/CountDownContext'

import * as S from './styles'

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    stopCountDown,
    startCountDown
  } = useCountDown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <S.Container>
        <S.Div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.Div>
        <span>:</span>
        <S.Div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.Div>
      </S.Container>
      {hasFinished ? (
        <S.Button disabled>Ciclo encerrado</S.Button>
      ) : (
        <>
          {!isActive ? (
            <S.ButtonActive onClick={startCountDown}>
              Iniciar um ciclo
            </S.ButtonActive>
          ) : (
            <S.Button onClick={stopCountDown}>Abandonar o ciclo</S.Button>
          )}
        </>
      )}
    </>
  )
}

export default Countdown
