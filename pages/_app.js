import Head from 'next/head';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {getLocale, LocaleContext} from '../infrastructure/locale';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.nightMode ? '#000011' : 'white'};
    color: ${props => props.theme.nightMode ? 'white' : 'black'};
    margin: 0;
  }
`;

const theme = {
  nightMode: new Date().getHours() > 22 || new Date().getHours() < 7
};

function MyApp({Component, pageProps}) {
  return (
    <LocaleContext.Provider value={getLocale()}>
      <Head>
        <title>Jade Piol</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </LocaleContext.Provider>
  );
}

export default MyApp;
