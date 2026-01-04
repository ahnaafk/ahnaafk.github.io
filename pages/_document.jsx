import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500&f[]=cabinet-grotesk@800&display=swap" rel="stylesheet"/> */}
          {/* <link href="https://api.fontshare.com/v2/css?f[]=switzer@300&f[]=gambarino@400&display=swap" rel="stylesheet"></link> */}
          <link href="https://api.fontshare.com/v2/css?f[]=switzer@100,101,200,201,300,301,400,401,500,501,600,601,700,701,800,801,900,901,1,2&f[]=gambarino@400&f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="favicon.ico" />
        </Head>
        <body> 
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
