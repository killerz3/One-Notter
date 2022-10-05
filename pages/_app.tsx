import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
import {SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps:{session,...pageProps}}: any) {
  return (
    <ThemeProvider attribute='class' >
      <SessionProvider session={session}>
        
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
