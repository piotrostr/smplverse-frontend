import './index.css'
import type { AppProps } from 'next/app'
import { theme } from '../theme'
import { useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import { InitializeColorMode } from 'theme-ui'
import { WaitingContext } from '../contexts'

export const App = ({ Component, pageProps }: AppProps) => {
  const [isWaiting, setIsWaiting] = useState(false)
  return (
    <>
      <WaitingContext.Provider value={{ isWaiting, setIsWaiting }}>
        <InitializeColorMode />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </WaitingContext.Provider>
    </>
  )
}
