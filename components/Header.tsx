import React from "react"
import { useQuiz } from "../context/QuizContext"

export const Header: React.FC<{ title?: string }> = ({ title = "Financial Literacy Test" }) => {
  const { questions, currentIndex, correctCount, incorrectCount } = useQuiz()
  const total = questions.length
  const progress = Math.round(((currentIndex + 1) / total) * 100)

  return (
    <header className='w-full bg-white shadow-sm sticky top-0 z-20'>
      <div className='max-w-3xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
        <div>
          <h1 className='text-lg font-semibold text-[var(--primary)]'>{title}</h1>
          <div className='text-sm flex gap-6 small-muted'>
            <div>✔ {correctCount}</div>
            <div>✖ {incorrectCount}</div>
          </div>
        </div>

        <div className='w-full sm:w-48'>
          <div className='progress-track mb-2'>
            <div className='progress-fill' style={{ width: `${progress}%` }}></div>
          </div>
          <div className='text-sm small-muted'>
            Question {currentIndex + 1} / {total}
          </div>
        </div>
      </div>
    </header>
  )
}
