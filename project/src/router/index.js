import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login/login.vue'
import home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({

  routes: [
    { path: '/', redirect: '/home' }, // ‘/’ 重新定向到/home中
    { path: '/login', name: 'name', component: login }, // 登录路由
    { path: '/home', name: 'home', component: home }
  ]
})
