'use client';

import { useState, useEffect } from 'react';
import TopHeader from '@/components/TopHeader';
import { PropsWithChildren } from 'react';

interface BasicLayoutProps extends PropsWithChildren {
  showTopHeader?: boolean;
}

export default function BasicLayout({ children, showTopHeader = true }: BasicLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100'
      }`}
    >
      {showTopHeader && <TopHeader isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />}
      {children}
    </div>
  );
}
