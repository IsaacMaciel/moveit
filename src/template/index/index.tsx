import CompletedChallenges from '../../components/CompletedChallenges'
import Countdown from '../../components/Countdown'
import ExperienceBar from '../../components/ExperienceBar/ExperienceBar'
import Profile from '../../components/Profile/Profile'
import * as S from './styles'

import Head from 'next/head'

import ChallengeBox from '../../components/ChallengeBox'

import {
  ChallengeProvider,
  useChallenge
} from '../../contexts/ChallengeContext'
import { CountDownProvider } from '../../contexts/CountDownContext'

export type IndexProps = {
  level: number
  currentExperience: number
  challengeCompleted: number
}

const Index = ({ ...cookie }: IndexProps) => {
  const {
    currentExperience,
    experienceToNextLevel,
    challengeCompleted,
    level
  } = useChallenge()

  return (
    <S.Container>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar
        currentExperience={currentExperience}
        experienceToNextLevel={experienceToNextLevel}
      />

      <CountDownProvider>
        <S.Section>
          <div>
            <Profile level={level} />
            <CompletedChallenges completedChallenges={challengeCompleted} />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </S.Section>
      </CountDownProvider>
    </S.Container>
  )
}

export default Index
