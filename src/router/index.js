import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      // 首页
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home')
      },
      // 客流
      {
        path: '/flow',
        name: 'Flow',
        component: () => import('@/views/flow')
      },
      // 点检
      {
        path: '/check',
        name: 'Check',
        component: () => import('@/views/check')
      },
      // 应用
      {
        path: '/app',
        name: 'App',
        component: () => import('@/views/app')
      },
      // 我的
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
