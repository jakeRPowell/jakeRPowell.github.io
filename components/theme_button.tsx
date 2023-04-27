import React from 'react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import sun from '@/public/images/sun.svg';
import moon from '@/public/images/moon.svg';
import Image from 'next/image';
import Emoji from './emoji';

interface ButtonProps {
  children?: React.ReactNode;
}

const ThemeButton = ({ children }: ButtonProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  console.log(currentTheme);

  return (
    <button
      onClick={toggleTheme}
      className={classNames(
        'text-white relative h-[36px] w-[36px] overflow-hidden rounded-full text-2xl  md:w-[60px] md:text-4xl'
      )}
    >
      <div
        className={classNames(
          'absolute left-0 top-0 h-[160px] w-full bg-gradient-to-b from-blue-light to-gray-dark transition-all',
          {
            '-translate-y-[120px]': currentTheme === 'light',
          }
        )}
      ></div>
      <div
        className={classNames(
          'absolute top-1/2 h-[30px] w-[30px] -translate-y-1/2 rounded-full transition-all',
          {
            'md:translate-x-[1.25rem]': currentTheme === 'light',
          }
        )}
      >
        <Emoji
          className={classNames(
            'absolute left-[5px] h-[1.25rem] text-xl transition-all',
            {
              'opacity-0': currentTheme === 'light',
            }
          )}
          symbol="☀️"
        />

        <Emoji
          className={classNames(
            'absolute h-[1.25rem] text-xl opacity-0 transition-all',
            {
              'left-[8px] opacity-100 md:left-[12px]': currentTheme === 'light',
            }
          )}
          symbol="🌛"
        />
      </div>
    </button>
  );
};

export default ThemeButton;
