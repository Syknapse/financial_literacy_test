import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Take the Financial Literacy Test to check your knowledge, habits, and attitudes about money. Based on OECD/INFE methodology and adapted for the EU context.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
