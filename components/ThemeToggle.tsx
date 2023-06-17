'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { IoMdMoon } from 'react-icons/io';
import { MdLightMode } from 'react-icons/md';

type Props = {};

export default function ThemeToggle({}: Props) {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [bTheme, setbTheme] = useState(
    typeof window === 'undefined' ? systemTheme : localStorage.getItem('theme')
  );

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    setMounted(true), [];
  });
  useEffect(() => {
    localStorage.setItem('theme', theme as string);
    setbTheme(theme as string);
  }, [theme]);

  return (
    <>
      <button className="z-[100] flex items-center" onClick={() => handleClick()}>
        {mounted &&
          (theme === 'dark' || bTheme === 'dark' ? (
            <MdLightMode className="text-2xl hover:text-yellow-400" />
          ) : (
            <IoMdMoon className="text-2xl hover:text-blue-800" />
          ))}
      </button>
    </>
  );
}
