import { useQuiz } from "../context/QuizContext"
import { Header } from "../components/Header"
import { useRouter } from "next/router"

export default function Results() {
  const { questions, answers, restart } = useQuiz()
  const router = useRouter()
  const total = questions.length
  const correct = Object.values(answers).filter((x) => x.correct).length
  const score = correct
  const pct = Math.round((score / total) * 100)

  let band = {
    title: "Needs Improvement",
    desc: "You have limited financial literacy. Many key concepts (like inflation, interest, and risk) are unclear, and your behaviours/attitudes may not support financial resilience. Consider starting with basic resources: EU consumer finance guides, budgeting tools, and trusted national financial education programmes.",
  }
  if (score >= 24)
    band = {
      title: "Excellent Literacy",
      desc: "You demonstrate very high financial literacy. You not only manage money well but also think about long-term goals, sustainability, and digital security. This puts you among the most financially literate adults. Keep updating your knowledge, as financial products and risks evolve quickly.",
    }
  else if (score >= 21)
    band = {
      title: "Strong Literacy",
      desc: "You show good understanding across knowledge, behaviour, and attitudes. You are financially resilient, prepared for emergencies, and capable of making informed choices. Your awareness of EU consumer rights and digital security helps protect you from risks.",
    }
  else if (score >= 16)
    band = {
      title: "Adequate Literacy",
      desc: "You have a solid grasp of financial basics and show responsible behaviour. You likely budget, save, and avoid common traps. Still, some attitudes or advanced knowledge (like diversification or sustainable finance) could be improved. You’re in line with the OECD minimum target score.",
    }
  else if (score >= 11)
    band = {
      title: "Basic Literacy",
      desc: "You understand some fundamentals, but gaps remain in areas like compound interest, planning, or attitudes towards saving. You may handle day-to-day finances but are at risk in more complex situations. Strengthening knowledge on savings, insurance, and digital finance will make you more secure.",
    }

  return (
    <>
      <Header />
      <main className='max-w-3xl mx-auto px-4 py-8'>
        <section className='bg-white rounded-xl p-6 shadow'>
          <h2 className='text-2xl font-semibold mb-2'>Your Results</h2>
          <div className='mb-4 small-muted'>
            Score: {score} / {total} ({pct}%)
          </div>
          <div className='p-4 rounded bg-gray-50 border'>
            <h3 className='text-lg font-medium'>{band.title}</h3>
            <p className='mt-2 small-muted'>{band.desc}</p>
          </div>

          <div className='mt-6'>
            <button
              onClick={() => {
                restart()
                router.push("/")
              }}
              className='px-4 py-2 rounded'
              style={{ background: "var(--primary)", color: "white" }}
            >
              Retake test
            </button>
          </div>
        </section>

        <section className='mt-6'>
          <h3 className='font-medium mb-2'>Learning resources</h3>
          <p className='small-muted mb-4'>Explore these resources to deepen your financial literacy.</p>

          <div className='space-y-6'>
            <div>
              <h4 className='font-medium mb-2'>Video: Financial Literacy in the EU</h4>
              <video controls width='100%' className='rounded-lg shadow'>
                <source src='/resources/video_summary.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <h4 className='font-medium mb-2'>
                Podcast: SOS - El Bajo Nivel de Cultura Financiera en Europa y las 3 Claves para tu Futuro
              </h4>
              <audio controls className='w-full'>
                <source src='/resources/podcast_castellano.mp4' type='audio/mp4' />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </section>
        <section className='mt-8 text-sm small-muted'>
          <h3 className='font-medium mb-2'>Please note</h3>
          <p>
            All quiz materials, including the example video and podcast, were generated with the help of artificial
            intelligence. The content is inspired by and based on official references: the{" "}
            <a
              href='https://finance.ec.europa.eu/consumer-finance-and-payments/financial-literacy_en'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              EU Financial Literacy page
            </a>{" "}
            and the{" "}
            <a
              href='https://www.oecd.org/en/publications/2020/06/oecd-infe-2020-international-survey-of-adult-financial-literacy_bbad9b27.html'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              OECD/INFE International Survey of Adult Financial Literacy
            </a>
            .
          </p>
        </section>
      </main>
    </>
  )
}
