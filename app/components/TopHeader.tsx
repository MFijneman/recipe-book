'use client';

import { ReactNode, useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

interface TopHeaderProps {
  actions?: ReactNode;
}

export default function TopHeader({ actions }: TopHeaderProps) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { t, language, changeLanguage } = useTranslation();

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'nl', name: t('language.dutch'), flag: '🇳🇱' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <nav className="mx-auto flex max-w-[1160px] items-center gap-4 p-4">
      {/* Logo/Brand */}
      <div className="mr-auto flex items-center gap-2.5 font-heading text-xl">
        <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-[50%_50%_50%_14px] bg-accent">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cream"
          >
            <path d="M2 12h20" />
            <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
            <path d="m4 8 16-4" />
            <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
          </svg>
        </span>
        {t('app.title')}
      </div>

      {actions}

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 transition-colors hover:bg-sand-300"
          aria-label="Change language"
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden text-sm font-semibold sm:block">{currentLanguage.code.toUpperCase()}</span>
          <svg className="h-4 w-4 text-ink/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Language Dropdown */}
        {showLanguageMenu && (
          <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-[24px] bg-surface shadow-lift">
            <div className="py-2">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code as 'en' | 'nl');
                    setShowLanguageMenu(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left transition-colors hover:bg-ink/5 ${
                    language === lang.code ? 'bg-ink/5' : ''
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-semibold">{lang.name}</span>
                  {language === lang.code && (
                    <svg
                      className="ml-auto h-4 w-4 text-accent-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
