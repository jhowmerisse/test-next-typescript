import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import GlobalSyle from '../styles/global';
import theme from '../styles/theme';
import apolloClient from '../services/apollo';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalSyle />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
