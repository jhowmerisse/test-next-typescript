import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalSyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalSyle />
    </ThemeProvider>
  );
};

export default MyApp;
