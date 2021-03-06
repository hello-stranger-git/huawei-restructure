import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.css'
import '@/utils/lib-flexible/flexible.js'
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入echarts挂载全局
import * as echarts from 'echarts'
import './icons'
Vue.config.productionTip = false
Vue.use(Vant)
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
