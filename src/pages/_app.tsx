import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import { ChallengesProvider } from '../hooks/useChallengesContext';
import { CountDownProvider } from '../hooks/useCountDownContext';
import { theme } from '../styles/theme';

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