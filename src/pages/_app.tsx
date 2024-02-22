import { useEffect, useState } from "react";
import mixpanel from "mixpanel-browser";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "global/globalstyles";
import { darkTheme, lightTheme, ThemeVariant } from "global/styledTheme";

import { usePageLoadTracking } from "hooks";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [theme] = useState(ThemeVariant.DARK);

  usePageLoadTracking();

  useEffect(() => {
    mixpanel.init("TOKEN");
  }, []);

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        theme={theme === ThemeVariant.LIGHT ? lightTheme : darkTheme}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
