import { createContext, useState, useContext, useEffect } from 'react'

import Cookies from 'js-cookie'

import challenges from '../../challenges.json'
import LevelUpModal from '../components/LevelUpModal'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengeeContextData = {
  level: number
  currentExperience: number
  challengeCompleted: number
  experienceToNextLevel: number
  activeChallange: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  setModalIsOpen: (open: boolean) => void
}

type ChallengeProviderProps = {
  children: React.ReactNode
  level: number
  currentExperience: number
  challengeCompleted: number
}
const ChallengeContext = createContext({} as ChallengeeContextData)

export const ChallengeProvider = ({
  children,
  ...rest
}: ChallengeProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengeCompleted, setChallengeCompleted] = useState(
    rest.challengeCompleted ?? 0
  )
  const [activeChallange, setActiveChallenge] = useState(null)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(level + 1)
    setModalIsOpen(true)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio !!', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  const resetChallenge = () => setActiveChallenge(null)

  const completeChallenge = () => {
    if (!activeChallange) return

    const { amount } = activeChallange

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengeCompleted(challengeCompleted + 1)
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('MoveitLevel', String(level))
    Cookies.set('MoveitCurrentExperience', String(currentExperience))
    Cookies.set('MoveitChallengeCompleted', String(challengeCompleted))
  }, [currentExperience, level, challengeCompleted])

  return (
    <ChallengeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        experienceToNextLevel,
        challengeCompleted,
        activeChallange,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        setModalIsOpen
      }}
    >
      {children}
      <LevelUpModal
        level={level}
        setModalIsOpen={setModalIsOpen}
        isOpen={modalIsOpen}
      />
    </ChallengeContext.Provider>
  )
}

export const useChallenge = () => {
  const data = useContext(ChallengeContext)
  return data
}
