import { useState } from 'react';
import Emoji from '../emoji';
import classNames from 'classnames';
import Link from 'next/link';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-dark-color text-light-color fixed right-0 top-0 flex h-screen w-16 flex-col items-end justify-center">
      <button
        className="hover:text-light-blue focus:text-light-blue p-4 transition-colors duration-300 ease-in-out"
        onClick={toggleMenu}
      >
        <Emoji
          className={classNames('text-xl', {
            'rotate-45 transform': isOpen,
          })}
          symbol={isOpen ? '💣' : '🍔'}
        />
      </button>
      {isOpen && (
        <nav className="mt-8">
          <ul className="space-y-4">
            <li className="flex items-center">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="flex items-center">
              <Link href="/about">About</Link>
            </li>
            <li className="flex items-center">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="flex items-center">
              <Link href="/404">404!</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
