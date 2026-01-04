import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <>
    <Head>
        <title>Ahnaaf Khan&apos;s Website</title>
        <meta name="description" content="Portfolio of Ahnaaf Khan" />
    </Head>
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
    </>
  )
}

export default Website
