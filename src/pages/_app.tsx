import { Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { type AppType } from 'next/app';
import Head from 'next/head';
import AuroraHostsLogo from '~/assets/aurorahosts.png';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import { api } from '~/utils/api';
import { theme } from '../theme';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Head>
          <title>Duelistats</title>
          <meta
            name="description"
            content="Duelistats is a website that provides statistics for the game Duelists of Eden, based off of Stats of Eden by Reese"
          />
          <link rel="icon" href="/icon.ico" />
        </Head>
        <Header />
        <main>
          <Container my="md">
            <div style={{ position: 'fixed', bottom: '10px', left: '10px', zIndex: 1 }}>
              <a href="https://aurorahosts.com" target="_blank" rel="noopener noreferrer">
                <img src={AuroraHostsLogo.src} alt="AuroraHosts Logo" style={{ height: 32 }} />
              </a>
            </div>
            <Component {...pageProps} />
          </Container>
        </main>
        <Footer />
        <ProgressBar
          height="3px"
          color="light-dark(var(--mantine-primary-color-9), var(--mantine-primary-color-3))"
          options={{ showSpinner: true }}
          shallowRouting
        />
      </MantineProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
