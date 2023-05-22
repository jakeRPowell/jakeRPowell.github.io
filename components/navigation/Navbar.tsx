import Page from '@/interfaces/page';
import { getAllPages, getAllPosts } from '@/lib/api';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <ul className="align-centre flex flex-1 gap-5">
      <li>
        <Link href="/">
          <h1 className="text-2xl font-bold">Jacob Powell</h1>
        </Link>
      </li>

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
  );
}

export default Navbar;
