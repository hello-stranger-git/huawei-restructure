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
        redirect: '/flow/enterStore',
        component: () => import('@/views/flow'),
        children: [
          // 当日进店
          {
            path: '/flow/enterStore',
            name: 'FlowEnterStore',
            component: () => import('@/views/flow/enterStore')
          },
          // 客流走势
          {
            path: '/flow/flowtrend',
            name: 'FlowFlowtrend',
            component: () => import('@/views/flow/flowtrend')
          },
          // 客群特征
          {
            path: '/flow/customerfeature',
            name: 'FlowCustomerFeature',
            component: () => import('@/views/flow/customerfeature')
          },
          // 客流与客单价
          {
            path: '/flow/flowprice',
            name: 'FlowFlowPrice',
            component: () => import('@/views/flow/flowprice')
          },
          // 店外客流
          {
            path: '/flow/outflow',
            name: 'FlowOutFlow',
            component: () => import('@/views/flow/outflow')
          },
          // 热力图
          {
            path: '/flow/hotmap',
            name: 'FlowHotMap',
            component: () => import('@/views/flow/hotmap')
          }
        ]
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
  },
  // 点检
  {
    path: '/check/ck',
    name: 'CK',
    component: () => import('@/views/check/ck')
  },
  // 考评
  {
    path: '/check/kp',
    name: 'KP',
    component: () => import('@/views/check/kp')
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
