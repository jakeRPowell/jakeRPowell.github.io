import ThemeButton from '@/components/theme_button';
import Head from 'next/head';
import React from 'react';
import { useTheme } from 'next-themes';
function Header() {
  return (
    <>
      <Head>
        <title>Jacob Powell - Software and Web</title>
        <meta name="description" content="This is my portfolio website." />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🚀</text></svg>"
        ></link>
      </Head>
      <header className="container flex pt-4">
        <h1 className="flex-auto text-5xl font-bold">Jacob Powell</h1>
        <ThemeButton></ThemeButton>
      </header>
    </>
  );
}

export default Header;
