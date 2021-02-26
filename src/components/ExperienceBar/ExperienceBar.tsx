import * as S from './styles'

export type ExperienceBarProps = {
  currentExperience: number
  experienceToNextLevel: number
}

const ExperienceBar = ({
  currentExperience = 0,
  experienceToNextLevel
}: ExperienceBarProps) => {
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <S.ExperienceBarContainer>
      <S.InfoExperience> 0xp</S.InfoExperience>
      <S.ProgressBar progress={percentToNextLevel}>
        <div />
        <span>{currentExperience} xp</span>
      </S.ProgressBar>
      <S.InfoExperience>{experienceToNextLevel}xp</S.InfoExperience>
    </S.ExperienceBarContainer>
  )
}

export default ExperienceBar
