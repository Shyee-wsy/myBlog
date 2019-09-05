import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export const RouterMap = [  //使用const定义变量，要先定义再使用
    {
      path: '/',
      redirect: '/blog/list',
      component: Layout,
      meta: {
        title: '博客列表',
        icon: 'el-icon-notebook-2'
      },
      children: [
        {
        path: '/blog/list',
        component: () => import('@/components/Blog/list'), // 直接在此处导入组件
      },
        {
          path: '/blog/newBlog',
          component: () => import('@/components/Blog/newBlog'),
        },
        {
          path: '/blog/detail/:id',
          component: () => import('@/components/Blog/detail')
        },
        {
          path: '/blog/edit/:id',
          component: () => import('@/components/Blog/edit')
        }
      ]
    },
    {
      path: '/social',
      component: Layout,
      meta: {
        title: '社交',
        icon: 'el-icon-user'
      },
      children: [{
        path: '',
        component: () => import('@/components/AppMain/social')
      }]
    },
    {
      path: '/projects',
      component: Layout,
      meta: {
        title: '开源项目',
        icon: 'el-icon-s-grid'
      },
      children: [
        {
        path: '',
        component: () => import('@/components/AppMain/projects')
      }]
    },
    {
      path: '/about',
      component: Layout,
      meta:{
        title: '关于作者',
        icon: 'el-icon-user-solid'
      },
      children: [{
        path: '',
        component: () => import('@/components/AppMain/about')
      }]
    }
  ]

const router = new Router({
  routes: RouterMap
})

export default router
