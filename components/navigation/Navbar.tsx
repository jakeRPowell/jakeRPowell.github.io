import Page from '@/interfaces/page';
import { getAllPages, getAllPosts } from '@/lib/api';
import Link from 'next/link';
import React from 'react';
import BurgerMenu from './Burger';

function Navbar() {
  return (
    <>
      <ul className="align-centre flex flex-1 gap-5">
        <li>
          <Link href="/">
            <h1 className="mb-0 text-2xl font-bold">Jacob Powell</h1>
          </Link>
        </li>

        <li className="flex hidden items-center md:block">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="flex hidden items-center md:block">
          <Link href="/about">About</Link>
        </li>
        <li className="flex hidden items-center md:block">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="flex hidden items-center md:block">
          <Link href="/404">404!</Link>
        </li>
      </ul>

      <BurgerMenu />
    </>
  );
}

export default Navbar;
