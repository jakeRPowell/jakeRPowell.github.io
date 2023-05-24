import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Background from '@/components/background/Background';
import { useEffect, useState } from 'react';

type variants = {
  pageInitial: {
    x: string;
  };
  pageAnimate: {
    x: number;
  };
  pageExit: {
    x: string;
  };
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [variants, setVariants] = useState<variants | null>(null);

  let right = '100vw';
  let left = '-100vw';

  useEffect(() => {
    setCurrentPage(pageProps.pageNumber);
  }, [pageProps.pageNumber]);

  useEffect(() => {
    const variants = {
      pageInitial: {
        x: currentPage < pageProps.pageNumber ? right : left,
      },
      pageAnimate: {
        x: 0,
      },
      pageExit: {
        x: currentPage > pageProps.pageNumber ? left : right,
      },
    };

    setVariants(variants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageProps.pageNumber]);

  if (!variants) {
    return null; // Render nothing until variants are initialized
  }

  return (
    <ThemeProvider attribute="class">
      <Background orientation={pageProps.pageNumber} />
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
            variants={variants}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}
