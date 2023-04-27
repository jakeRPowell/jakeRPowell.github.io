import { channel } from 'diagnostics_channel';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  clickHandler: () => void;
}

const Button = ({ children, clickHandler }: ButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32"
    >
      {children}
    </button>
  );
};

export default Button;
