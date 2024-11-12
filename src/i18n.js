import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_translation from './locales/en/translations.json'
import ru_translation from './locales/ru/translations.json'
import hy_translation from './locales/hy/translations.json'
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: en_translation
            },
            ru: {
                translation: ru_translation
            },
            hy: {
                translation: hy_translation
            }
        },
        fallbackLng: "en",
        detection: {
            caches: ['cookie']
        }
    });
export default i18next;