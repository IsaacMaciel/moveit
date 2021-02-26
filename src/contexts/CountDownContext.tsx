import { createContext, useContext, useState, useEffect } from 'react'
import { useChallenge } from '../contexts/ChallengeContext'

type CountDownPropsData = {
  time: number
  isActive: boolean
  hasFinished: boolean
  minutes: number
  seconds: number
  startCountDown: () => void
  stopCountDown: () => void
}

type CountDownProviderProps = {
  children: React.ReactNode
}

let countdownTimeout: NodeJS.Timeout

const CountDownContext = createContext({} as CountDownPropsData)

export const CountDownProvider = ({ children }: CountDownProviderProps) => {
  const { startNewChallenge } = useChallenge()

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountDown = () => setIsActive(true)

  const stopCountDown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountDownContext.Provider
      value={{
        time,
        isActive,
        hasFinished,
        minutes,
        seconds,
        startCountDown,
        stopCountDown
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}

export const useCountDown = () => {
  const data = useContext(CountDownContext)
  return data
}
