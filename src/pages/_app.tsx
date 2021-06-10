import React from 'react';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContext';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <ChallengesProvider>
          <CountDownProvider>
            <Component {...pageProps} />
          </CountDownProvider>
        </ChallengesProvider>
      </Provider>
    </ChakraProvider>
  )
}