import 'react-i18next';
import { translations } from './translations';

// Extract all translation keys
type TranslationKeys = keyof typeof translations;

// Create a type for the translation namespace
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        [K in TranslationKeys]: string;
      };
    };
  }
}

// Export the translation keys type for use in components
export type { TranslationKeys };
