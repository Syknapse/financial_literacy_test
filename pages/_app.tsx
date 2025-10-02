// pages/_app.tsx
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { QuizProvider } from "../context/QuizContext"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizProvider>
      <Head>
        <title>Financial Literacy Test</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Take the Financial Literacy Test to check your knowledge, habits, and attitudes about money. Based on OECD/INFE methodology and adapted for the EU context.'
        />
      </Head>
      <Component {...pageProps} />
    </QuizProvider>
  )
}
