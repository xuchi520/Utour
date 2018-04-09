import Vue from 'vue'
import Router from 'vue-router'
import Home from '../js/home/index'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '*',
          redirect:'/'//配置404
      },
  ]
})
