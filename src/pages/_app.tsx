import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { ChallengeProvider } from '../contexts/ChallengeContext'
import { CountDownProvider } from '../contexts/CountDownContext'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
