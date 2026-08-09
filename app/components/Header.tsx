'use client';

import { useTranslation } from '@/i18n/useTranslation';

interface HeaderProps {
  recipeCount: number;
}

export default function Header({ recipeCount }: HeaderProps) {
  const { t } = useTranslation();
  return (
    <header className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-6 px-4 pt-9 pb-6">
      <div className="flex-[1_1_460px]">
        <h1 className="mb-4 font-heading text-[clamp(36px,5.5vw,58px)] leading-[1.05] tracking-tight">
          {t('header.title')}
        </h1>
        <p className="max-w-[560px] text-[17px] leading-relaxed text-pretty text-ink/75">{t('header.subtitle')}</p>
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-accent-100 px-4 py-1.5 text-[13px] tracking-wide text-accent-800">
            {recipeCount} {t(recipeCount === 1 ? 'recipes.found' : 'recipes.found.plural')}
          </span>
        </div>
      </div>

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="relative hidden h-[210px] min-w-[200px] flex-[0_1_240px] items-center justify-center md:flex"
      >
        <div className="h-[170px] w-[170px] rounded-full bg-sage-400"></div>
        <div
          className="absolute right-1.5 -bottom-0.5 h-[108px] w-[108px] bg-accent"
          style={{ borderRadius: '58% 42% 52% 48% / 52% 48% 56% 44%' }}
        ></div>
        <div className="absolute top-1 left-2 h-[42px] w-[42px] rounded-full bg-accent-300"></div>
      </div>
    </header>
  );
}
