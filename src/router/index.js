import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

const RouterMap = [  //使用const定义变量，要先定义再使用
    {
      path: '/',
      // redirect: '/user/blog/main',
      component: Layout,
      children: [{
        path: 'main',
        component: () => import('@/components/AppMain/blog'),
      }]
    },
    {
      path: '/user/social',
      component: Layout,
      children: [{
        path: 'main',
        component: () => import('@/components/AppMain/social')
      }]
    },
    {
      path: '/user/about',
      component: Layout,
      children: [{
        path: 'main',
        component: () => import('@/components/AppMain/about')
      }]
    }
  ]

export default new Router({
  routes: RouterMap
})
