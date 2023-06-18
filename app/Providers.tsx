'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { useEffect } from 'react';

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  useEffect(() => {
    function handleContextMenu(e: any) {
      e.preventDefault(); // prevents the default right-click menu from appearing
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById('main-body');
    rootElement?.addEventListener('contextmenu', handleContextMenu);
    // remove the event listener when the component is unmounted

    return () => {
      rootElement?.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 light:text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
