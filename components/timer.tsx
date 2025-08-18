'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, PlayCircle, RotateCcw, Square } from 'lucide-react'

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

  const startButtonIcon = (() => {
    if (isRunning) return <Pause />
    if (timeRemaining === 0) return <RotateCcw />
    if (timeRemaining === time) return <Play />
    return <PlayCircle />
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
    <div className='flex flex-col items-center justify-center p-6 rounded-2xl shadow-md'>
      <h1 className='text-6xl font-bold tracking-wide mb-6'>{formattedTime}</h1>

      <section className='flex gap-4'>
        <Button onClick={handleStartClick}>
          {startButtonIcon}
          {startButtonLabel}
        </Button>

        <Button
          onClick={handleReset}
          disabled={timeRemaining === time}
          variant='secondary'
        >
          <Square />
          Reset
        </Button>
      </section>
    </div>
  )
}
