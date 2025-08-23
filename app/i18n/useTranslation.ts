import { useTranslation as useI18nTranslation } from 'react-i18next';

export function useTranslation() {
  const { t, i18n } = useI18nTranslation();

  const changeLanguage = (language: 'en' | 'nl') => {
    return i18n.changeLanguage(language);
  };

  return {
    t,
    language: i18n.language as 'en' | 'nl',
    changeLanguage,
    isReady: i18n.isInitialized,
  };
}
