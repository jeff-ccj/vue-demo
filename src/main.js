// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入mint-ui
import Mint from 'mint-ui'
Vue.use(Mint)
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//引入axios
import axios from 'axios'
Vue.prototype.$ajax = axios
//store
import store from './store/store'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
