import React from 'react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import sun from '@/public/images/sun.svg';
import moon from '@/public/images/moon.svg';
import Image from 'next/image';

interface ButtonProps {
  children?: React.ReactNode;
  clickHandler: () => void;
}

const ThemeButton = ({ children, clickHandler }: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={clickHandler}
      className={classNames(
        'text-white relative h-[40px] w-[40px] overflow-hidden rounded-full text-2xl  md:w-[80px] md:text-4xl'
      )}
    >
      <div
        className={classNames(
          'absolute left-0 top-0 h-[160px] w-full bg-gradient-to-b from-blue to-gray-dark transition-all',
          {
            '-top-[120px]': theme === 'light',
          }
        )}
      ></div>
      <div
        className={classNames(
          ' absolute top-1/2 h-[30px] w-[30px] -translate-y-1/2 rounded-full transition-all',
          {
            'md:translate-x-[2.5rem]': theme === 'light',
          }
        )}
      >
        <Image
          src={sun}
          alt="lightmode"
          className={classNames(
            'absolute left-[5px] top-1/2 h-[1.25rem] -translate-y-1/2 transition-all',
            {
              'opacity-0': theme === 'light',
            }
          )}
        />
        <Image
          src={moon}
          alt="darkmode"
          className={classNames(
            'absolute top-1/2 h-[1.25rem] -translate-y-1/2 opacity-0 transition-all',
            {
              'opacity-100': theme === 'light',
            }
          )}
        />
      </div>
    </button>
  );
};

export default ThemeButton;
