import * as S from './styles'

type CompletedChallengesProps = {
  completedChallenges: number
}

const CompletedChallenges = ({
  completedChallenges
}: CompletedChallengesProps) => (
  <S.Container>
    <span>Desafios completos</span>
    <span>{completedChallenges}</span>
  </S.Container>
)

export default CompletedChallenges
