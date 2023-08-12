import React from 'react'
import { AppProps } from 'next/app'
import { I18nProvider } from '@/locales'
import en from '../locales/en'
import './globals.css'
import { ThemeProvider } from '@/components/themeProvider'
import { Barriecito, Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const barriecito = Barriecito({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-barriecito',
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main
      className={`${roboto_mono.variable} ${barriecito.variable} ${inter.variable} font-sans`}
    >
      <I18nProvider
        locale={pageProps.locale}
        fallback={<p>Loading initial locale client-side</p>}
        fallbackLocale={en}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nProvider>
    </main>
  )
}

export default App
