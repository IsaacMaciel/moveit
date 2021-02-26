import * as S from './styles'

import { useChallenge } from '../../contexts/ChallengeContext'
import { useCountDown } from '../../contexts/CountDownContext'

const ChallengeBox = () => {
  const { activeChallange, resetChallenge, completeChallenge } = useChallenge()
  const { stopCountDown } = useCountDown()

  const handleChallengeSucceeded = () => {
    completeChallenge()
    stopCountDown()
  }

  const handleChallengeFailed = () => {
    stopCountDown()
    resetChallenge()
  }

  return (
    <S.Container>
      {activeChallange ? (
        <S.Active>
          <header>Ganhe {activeChallange.amount} xp</header>

          <main>
            <img src={`icons/${activeChallange.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallange.description}</p>
          </main>

          <S.Footer>
            <S.Failure onClick={handleChallengeFailed}>Falhei</S.Failure>
            <S.Succeeded onClick={handleChallengeSucceeded}>
              Completei
            </S.Succeeded>
          </S.Footer>
        </S.Active>
      ) : (
        <S.NotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </S.NotActive>
      )}
    </S.Container>
  )
}

export default ChallengeBox
