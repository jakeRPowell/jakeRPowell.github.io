import { useState } from 'react';
import Emoji from '../emoji';
import classNames from 'classnames';
import Link from 'next/link';
import Menu from '@/interfaces/menu';

export default function BurgerMenu({ menuItems }: Menu) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button className="" onClick={toggleMenu}>
        <Emoji
          className={classNames('text-xl', {
            '': isOpen,
          })}
          symbol={isOpen ? '💣' : '🍔'}
        />
      </button>
      {isOpen && (
        <nav
          className={classNames(
            {
              '': isOpen,
            },
            ''
          )}
        >
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className="flex items-center">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
