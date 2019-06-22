// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 导入router并且把router挂载到vue中
import axios from 'axios' // 导入axios并且挂载在vue实例中
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入文件
import './assets/css/index.css'

Vue.prototype.$http = axios // 挂载axios
Vue.use(ElementUI) // 使用element

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
