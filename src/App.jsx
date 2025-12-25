import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const INITIAL_FEEDBACK = {
  good: 0,
  neutral: 0,
  bad: 0,
}

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback')
    if (savedFeedback !== null) {
      try {
        const parsedFeedback = JSON.parse(savedFeedback)
        if (typeof parsedFeedback === 'object' && parsedFeedback !== null) {
          return parsedFeedback
        }
      } catch (error) {
        console.error('Error parsing saved feedback from localStorage:', error)
        return INITIAL_FEEDBACK
      }
    }
    return INITIAL_FEEDBACK
  })

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }))
  }

  const resetFeedback = () => {
    setFeedback(INITIAL_FEEDBACK)
  }

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback))
  }, [feedback])

  const totalFeedback = feedback.good + feedback.bad + feedback.neutral
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0

  return (
    <>
      <Description />
      <Options
        options={feedback}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  )
}

export default App
