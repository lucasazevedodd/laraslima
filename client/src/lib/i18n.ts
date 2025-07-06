import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslations from '../locales/pt.json';
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

const resources = {
  pt: {
    translation: ptTranslations,
  },
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
