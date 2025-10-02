import React, { useEffect, useState } from "react"
import { Question } from "../lib/questions"
import { useQuiz } from "../context/QuizContext"
import clsx from "clsx"

export const QuestionCard: React.FC<{ q: Question }> = ({ q }) => {
  const { answers, answerQuestion } = useQuiz()
  const answered = answers[q.id]
  const [selected, setSelected] = useState<number | null>(answered ? answered.choice : null)

  useEffect(() => {
    setSelected(answered ? answered.choice : null)
  }, [q.id, answered])

  const handleSelect = (idx: number) => {
    if (answered) return // locked
    setSelected(idx)
    // register answer
    answerQuestion(q.id, idx)
  }

  const isCorrect = answered ? answered.correct : selected !== null ? q.correct.includes(selected) : null

  return (
    <div className='bg-white rounded-xl p-6 shadow'>
      <h2 className='text-lg font-medium mb-4'>
        {q.id}. {q.question}
      </h2>
      <div className='space-y-3'>
        {q.options.map((opt, i) => {
          const disabled = !!answered
          const chosen = selected === i
          const correctChoice = q.correct.includes(i)
          const showCorrect = answered || chosen
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={disabled}
              className={clsx(
                "w-full text-left p-3 rounded-lg border transition",
                disabled ? "cursor-not-allowed" : "hover:shadow-md",
                showCorrect && correctChoice ? "border-green-400 bg-green-50" : "",
                showCorrect && chosen && !correctChoice ? "border-red-400 bg-red-50" : "border-gray-200"
              )}
            >
              <div className='flex items-center'>
                <div
                  className='w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm font-medium'
                  style={{ background: "#eef2ff" }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
                <div>{opt}</div>
              </div>
            </button>
          )
        })}
      </div>

      <div className='mt-4'>
        {answered ? (
          <div
            className={
              answered.correct
                ? "p-3 rounded bg-green-50 border border-green-200"
                : "p-3 rounded bg-red-50 border border-red-200"
            }
          >
            <div className='font-medium'>{answered.correct ? "Correct" : "Incorrect"}</div>
            <div className='mt-1 small-muted'>{q.explanation}</div>
          </div>
        ) : selected !== null ? (
          // show instantaneous feedback for selected (before provider registers)
          <div
            className={
              q.correct.includes(selected)
                ? "p-3 rounded bg-green-50 border border-green-200"
                : "p-3 rounded bg-red-50 border border-red-200"
            }
          >
            <div className='font-medium'>{q.correct.includes(selected) ? "Correct" : "Incorrect"}</div>
            <div className='mt-1 small-muted'>{q.explanation}</div>
          </div>
        ) : (
          <div className='small-muted'>Select an answer to see an explanation.</div>
        )}
      </div>
    </div>
  )
}
