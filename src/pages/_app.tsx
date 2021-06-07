import React from 'react';
import { Provider } from 'next-auth/client';
import { GlobalStyle } from '../styles/global';
import {AppProps} from 'next/app'

export default function MyApp({ Component, pageProps }:AppProps) {

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </Provider>
  )
}