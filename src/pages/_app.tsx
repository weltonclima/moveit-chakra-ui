import React from 'react';
import { Provider } from 'next-auth/client';
import { GlobalStyle } from '../styles/global';
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContext';
import { SidebarDrawerProviver } from '../contexts/SidebarDrawerContext';


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <ChallengesProvider>
          <CountDownProvider>
            <SidebarDrawerProviver>
              <Component {...pageProps} />
            </SidebarDrawerProviver>
          </CountDownProvider>
        </ChallengesProvider>
      </Provider>
    </ChakraProvider>
  )
}