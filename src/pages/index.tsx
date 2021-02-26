import { GetServerSideProps } from 'next'
import { ChallengeProvider } from '../contexts/ChallengeContext'
import HomePage from '../template/index'

export default function Home(props) {
  return (
    <ChallengeProvider {...props}>
      <HomePage {...props} />
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    MoveitLevel,
    MoveitCurrentExperience,
    MoveitChallengeCompleted
  } = ctx.req.cookies

  return {
    props: {
      level: Number(MoveitLevel),
      currentExperience: Number(MoveitCurrentExperience),
      challengeCompleted: Number(MoveitChallengeCompleted)
    }
  }
}
