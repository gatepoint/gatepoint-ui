import { createI18n } from 'vue-i18n'
import CN from '@/locales/cn.json'
import EN from '@/locales/en.json'

function loadLocaleMessages() {
  const messages = {
    cn: CN,
    en: EN,
  }
  return messages
}

export default createI18n({
  locale: localStorage.language || window.navigator.language.toLowerCase() || 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
