import Link from "next/link"
import { Header } from "../components/Header"

export default function Home() {
  return (
    <>
      <Header />

      <main className='max-w-3xl mx-auto px-4 py-12'>
        <section className='bg-white rounded-xl p-8 shadow'>
          <h2 className='text-2xl font-semibold mb-4'>Test your financial literacy</h2>
          <p>Free quiz to help you check your financial knowledge, behaviour, and attitudes.</p>
          <p className='mb-3'>Based on the OECD/INFE framework and adapted for the EU financial literacy standards.</p>

          <ul className='list-disc pl-5 mb-6 space-y-2'>
            <li>
              <strong>25 quick questions</strong> to test your financial literacy
            </li>
            <li>
              <strong>Instant feedback</strong> with simple explanations
            </li>
            <li>
              <strong>Your final score</strong> shows how your knowledge compares across levels
            </li>
          </ul>

          <div className='text-center'>
            <Link
              href='/quiz/1'
              className='inline-block px-8 py-4 rounded text-white font-semibold'
              style={{ background: "var(--primary)" }}
            >
              Start the quiz
            </Link>
          </div>
        </section>

        <section className='mt-8 text-sm small-muted'>
          <h3 className='font-medium mb-2'>Please note</h3>
          <p>
            This quiz is for educational purposes only. It is not financial advice. The explanations are simplified to
            help you understand key concepts and habits that support financial well-being.
          </p>
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
