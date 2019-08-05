import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import VueLoading from 'vuejs-loading-plugin'
import App from './App'
import { routes } from './routes.js'
import { store } from './store/store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClazyLoad from 'vue-clazy-load'
Vue.use(VueClazyLoad)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource);
Vue.http.options.root = 'https://sherpa-api-huynhlv.herokuapp.com/api/'
Vue.use(VueRouter)
Vue.use(VueLoading)
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
