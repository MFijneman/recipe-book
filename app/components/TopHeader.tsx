'use client';

import { useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

interface TopHeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function TopHeader({ isDarkMode, onToggleDarkMode }: TopHeaderProps) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { t, language, changeLanguage } = useTranslation();

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'nl', name: t('language.dutch'), flag: '🇳🇱' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-stone-200/50 dark:border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-stone-600 to-stone-700 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">{t('app.title')}</span>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl bg-stone-100/50 dark:bg-gray-700/50 hover:bg-stone-200/50 dark:hover:bg-gray-600/50 transition-all duration-300 border border-stone-200/50 dark:border-gray-600/50"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-stone-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-stone-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-2 p-2 rounded-xl bg-stone-100/50 dark:bg-gray-700/50 hover:bg-stone-200/50 dark:hover:bg-gray-600/50 transition-all duration-300 border border-stone-200/50 dark:border-gray-600/50"
                aria-label="Change language"
              >
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="text-sm font-medium text-stone-700 dark:text-gray-300 hidden sm:block">
                  {currentLanguage.code.toUpperCase()}
                </span>
                <svg
                  className="w-4 h-4 text-stone-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-stone-200/50 dark:border-gray-700/50 shadow-xl z-50">
                  <div className="py-2">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code as 'en' | 'nl');
                          setShowLanguageMenu(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-stone-100/50 dark:hover:bg-gray-700/50 transition-colors duration-200 ${
                          language === lang.code
                            ? 'bg-stone-100/50 dark:bg-gray-700/50 text-stone-800 dark:text-stone-100'
                            : 'text-stone-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                        {language === lang.code && (
                          <svg
                            className="w-4 h-4 ml-auto text-stone-600 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
