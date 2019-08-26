import Vue from 'vue'
import VueI18n from 'vue-i18n'
import jaMessage from './ja.json'
import enMessage from './en.json'

Vue.use(VueI18n)

const messages = {
  en: enMessage,
  ja: jaMessage,
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en',
  messages,
  fallbackLocale: localStorage.getItem('lang') || 'en',
})

export default i18n