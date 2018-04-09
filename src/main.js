import Vue from 'vue'
import App from './App'
import router from './router'
import './css/reset.less'
Vue.config.productionTip = false
import './css/font/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
