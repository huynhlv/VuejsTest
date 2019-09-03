<template>
  <v-app id="app">
    <b-nav class="fs-12 my-auto nav-left">
      <b-nav-item-dropdown
        :text="$t('common.select_lang')"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item class="fs-12" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
          {{entry.title}}
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
    <router-view />
  </v-app>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import i18n from './lang/i18n'
export default {
  name: 'App',
  components: {
    SidebarMenu
  },
  data() {
    return {
      languages: [
        { language: 'en', title: 'English' },
        { language: 'ja', title: '日本語' }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
        this.$router.go()
        i18n.locale = locale
        localStorage.setItem('lang', locale)
    }
  }
}
</script>

<style lang="scss" src="./assets/style.scss"></style>
