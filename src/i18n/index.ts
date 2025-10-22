import { createI18n } from 'vue-i18n'
import pl from './locales/pl'
import en from './locales/en'

// Get saved locale from localStorage or use 'pl' as default
const savedLocale = localStorage.getItem('locale') || 'pl'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    pl,
    en
  }
})

export default i18n
