import ThemeButton from '@/components/theme_button';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function HomePage() {
  const [year, setYear] = useState('');
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear.toString());
  }, []);

  return (
    <div className="dark:bg-gray-800 bg-gray-100 min-h-screen">
      <Head>
        <title>My Portfolio Website</title>
        <meta name="description" content="This is my portfolio website." />
      </Head>
      <ThemeButton clickHandler={toggleTheme}></ThemeButton>

      <main className="container mx-auto p-4">
        <h1 className="mb-4 text-4xl font-bold">
          Welcome to My Portfolio Website - Currently under construction
        </h1>
      </main>
      <footer className="bg-gray-800 text-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {year} Jacob Powell</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
