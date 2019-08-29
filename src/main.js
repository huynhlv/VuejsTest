import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueLoading from 'vuejs-loading-plugin'
import VueClazyLoad from 'vue-clazy-load'
import VueSession from 'vue-session'
import VueSidebarMenu from 'vue-sidebar-menu'
import Highcharts from 'highcharts'
import HighchartsNoData from 'highcharts-no-data-to-display'
import Vuetify from 'vuetify'
import VueSwal from 'vue-swal'
import App from './App'
import i18n from './lang/i18n.js'
import { routes } from './router/routes.js'
import { store } from './store/store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(VueSwal)
Vue.use(VueClazyLoad)
Vue.use(VueSession)
Vue.use(VueSidebarMenu)
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueLoading)
HighchartsNoData(Highcharts);
Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  i18n,
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
})

export default app