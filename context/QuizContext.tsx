import React, { createContext, useContext, useEffect, useState } from "react"
import QUESTIONS, { Question } from "../lib/questions"
import { loadJSON, saveJSON, clearKey } from "../utils/storage"

type AnswerRecord = {
  [questionId: number]: {
    choice: number
    correct: boolean
  }
}

type QuizContextType = {
  questions: Question[]
  answers: AnswerRecord
  currentIndex: number
  goto: (index: number) => void
  answerQuestion: (id: number, choice: number) => void
  correctCount: number
  incorrectCount: number
  restart: () => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questions] = useState<Question[]>(QUESTIONS)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<AnswerRecord>({})

  useEffect(() => {
    const saved = loadJSON("flt-answers")
    if (saved) setAnswers(saved)
  }, [])

  useEffect(() => {
    saveJSON("flt-answers", answers)
  }, [answers])

  const goto = (index: number) => {
    const i = Math.max(0, Math.min(questions.length - 1, index))
    setCurrentIndex(i)
  }

  const answerQuestion = (id: number, choice: number) => {
    // lock answer if already present
    if (answers[id]) return
    const q = questions.find((x) => x.id === id)
    if (!q) return
    const correct = q.correct.includes(choice)
    const next = { ...answers, [id]: { choice, correct } }
    setAnswers(next)
  }

  const restart = () => {
    setAnswers({})
    clearKey("flt-answers")
    setCurrentIndex(0)
  }

  const correctCount = Object.values(answers).filter((a) => a.correct).length
  const incorrectCount = Object.values(answers).filter((a) => !a.correct).length

  return (
    <QuizContext.Provider
      value={{ questions, answers, currentIndex, goto, answerQuestion, correctCount, incorrectCount, restart }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => {
  const ctx = useContext(QuizContext)
  if (!ctx) throw new Error("useQuiz must be used inside QuizProvider")
  return ctx
}
