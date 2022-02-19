import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { pt, en, es } from './locales';


i18n
.use(LanguageDetector)
.init({
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format(value, format) {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },

  debug: true,

  lng: 'pt',

  resources: {
    pt: {
      common: pt['pt-BR'],
    },
    en: {
      common: en.en,
    },
    es: {
      common: es.es,
    },
  },

  fallbackLng: 'pt-BR',

  ns: ['common'],

  defaultNS: 'common',  

  react: {
    defaultTransParent: 'div',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
  },


    })
//   .changeLanguage('en', (err, t) => {
//     if (err) return console.log('something went wrong loading', err);
//   });

export default i18n;