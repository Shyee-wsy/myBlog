// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import utils from '@/utils/utils'
import VueShowndown from 'vue-showdown'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$util = utils
Vue.use(VueShowndown, {
  flavor: 'github',
  options: {
    emoji: false,
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
