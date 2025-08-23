import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import existing translations
import { translations } from './translations';

// Convert existing translations to i18next format
const resources = {
  en: {
    translation: Object.fromEntries(Object.entries(translations).map(([key, value]) => [key, value.en])),
  },
  nl: {
    translation: Object.fromEntries(Object.entries(translations).map(([key, value]) => [key, value.nl])),
  },
};

// Don't auto-initialize, instead provide an init function
export const initI18n = () => {
  return i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      debug: process.env.NODE_ENV === 'development',

      interpolation: {
        escapeValue: false, // React already escapes values
      },

      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    });
};

export default i18n;
