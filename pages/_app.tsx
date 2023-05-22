import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Background from '@/components/background/Background';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <Background orientation={0} />
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={Component.name}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            transition={{
              duration: 0.2,
            }}
            variants={
              {
                pageInitial: {
                  x: '100vw',
                },
                pageAnimate: {
                  x: 0,
                },
                pageExit: {
                  x: '-100vw',
                },
              } as any
            }
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}
