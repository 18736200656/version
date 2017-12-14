// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSource from 'vue-resource'
import'../static/rem'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

Vue.use(VueSource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
