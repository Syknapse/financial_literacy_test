import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useQuiz } from '../../context/QuizContext'
import { Header } from '../../components/Header'
import { QuestionCard } from '../../components/QuestionCard'
import Link from 'next/link'

export default function QPage() {
  const router = useRouter()
  const { q } = router.query
  const idx = Array.isArray(q) ? parseInt(q[0]) : (q ? parseInt(q as string) : NaN)

  const { questions, answers, goto } = useQuiz()
  const total = questions.length

  useEffect(() => {
    if (!isFinite(idx)) return
    const i = Math.max(1, Math.min(total, idx))
    goto(i - 1)
  }, [idx, total, goto])

  if (!questions || questions.length === 0) return null

  const currentIndex = Math.max(0, Math.min(total - 1, isFinite(idx) ? idx - 1 : 0))
  const question = questions[currentIndex]

  const answered = answers[question.id]

  const handleNext = () => {
    if (currentIndex + 1 >= total) {
      router.push('/results')
    } else {
      router.push(`/quiz/${currentIndex + 2}`)
    }
  }

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      router.push(`/quiz/${currentIndex}`)
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <QuestionCard q={question} />

        <div className="flex justify-between mt-6">
          <button onClick={handlePrev} className="px-4 py-2 rounded border bg-white">Back</button>

          <div>
            {!answered ? (
              <button disabled className="px-4 py-2 rounded bg-gray-200 text-gray-500">Select an answer</button>
            ) : (
              <button onClick={handleNext} className="px-4 py-2 rounded" style={{background: 'var(--primary)', color: 'white'}}>Next</button>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
