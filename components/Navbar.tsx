import React from 'react';
import NavItem from './NavItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="inline-flex float-left gap-4">
        <NavItem title="HOME" address="/" Icon={AiFillHome} />
        <NavItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <li className="list-none">
          <ThemeToggle />
        </li>
        <li className="list-none">
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 rounded-lg py-1 px-2">
                IMDb
              </span>
              <span className="text-xl hidden sm:inline justify-between">
                Clone
              </span>
            </h2>
          </Link>
        </li>
      </div>
    </nav>
  );
}
