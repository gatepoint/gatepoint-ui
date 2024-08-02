import { createI18n } from 'vue-i18n'
import EN from '@/locales/en.json'
import ZH from '@/locales/zh.json'

function loadLocaleMessages() {
  const messages = {
    en: EN,
    zh: ZH,
  }
  return messages
}

export default createI18n({
  locale: localStorage.language || window.navigator.language.toLowerCase() || 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
