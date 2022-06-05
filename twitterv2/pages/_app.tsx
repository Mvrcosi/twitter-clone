import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }: any) {
  return (
    <SessionProvider session={session}>
  <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp


// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     // `session` comes from `getServerSideProps` or `getInitialProps`.
//     // Avoids flickering/session loading on first load.
//     <SessionProvider session={session} refetchInterval={5 * 60}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )