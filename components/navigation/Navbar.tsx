import Page from '@/interfaces/page';
import { getAllPages, getAllPosts } from '@/lib/api';
import Link from 'next/link';
import React from 'react';
import BurgerMenu from './Burger';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Menu from '@/interfaces/menu';
import MenuItem from '@/interfaces/menuItem';

function Navbar({ menuItems }: Menu) {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <>
      <ul className="align-centre flex flex-1 gap-5">
        <li>
          <Link href="/">
            <h1 className="mb-0 text-2xl font-bold">Jacob Powell</h1>
          </Link>
        </li>
        {menuItems.map((item) => (
          <li key={item.name} className="flex hidden items-center  md:flex">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
