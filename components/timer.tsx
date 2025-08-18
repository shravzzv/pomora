'use client'

import { useEffect, useState } from 'react'

interface TimerProps {
  time: number // in seconds
}

export default function Timer({ time }: TimerProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(time)

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null

    if (isRunning && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isRunning, timeRemaining])

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsRunning(false)
    }
  }, [timeRemaining])

  useEffect(() => {
    setTimeRemaining(time)
  }, [time])

  const hours = String(Math.floor(timeRemaining / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((timeRemaining % 3600) / 60)).padStart(
    2,
    '0'
  )
  const seconds = String(timeRemaining % 60).padStart(2, '0')

  const formattedTime =
    hours !== '00' ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`

  const startButtonLabel = (() => {
    if (isRunning) return 'Pause'
    if (timeRemaining === 0) return 'Restart'
    if (timeRemaining === time) return 'Start'
    return 'Resume'
  })()

  const handleStartClick = () => {
    if (timeRemaining === 0) {
      setTimeRemaining(time)
      setIsRunning(true)
    } else {
      setIsRunning((prev) => !prev)
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeRemaining(time)
  }

  return (
    <div>
      <h1>{formattedTime}</h1>

      <section>
        <button onClick={handleStartClick}>{startButtonLabel}</button>
        <button onClick={handleReset} disabled={timeRemaining === time}>
          Reset
        </button>
      </section>
    </div>
  )
}
