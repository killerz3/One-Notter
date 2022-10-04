import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' >
      <UserProvider>

      <Layout>

      <Component {...pageProps} />
      </Layout>
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
