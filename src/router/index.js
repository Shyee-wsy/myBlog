import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
// import blog from '@/components/AppMain/blog'
// import social from '@/components/AppMain/social'
// import about from '@/components/AppMain/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/user/blog/main',
      component: Layout
      // children: {
      //   path: 'main',
      //   component: blog,
      // }
    // },
    // {
    //   path: '/user/social',
    //   component: Layout,
    //   children: {
    //     path: 'main',
    //     component: social
    //   }
    // },
    // {
    //   path: '/user/about',
    //   component: Layout,
    //   children: {
    //     path: 'main',
    //     component: about
    //   }
    }
  ]
})

// const RouterMap = [
//   {
//     path: '/',
//     redirect: '/user/blog/main',
//     component: Layout,
//     meta: {
//       title: '博客'
//     },
//     children: {
//       path: 'main',
//       component: blog,
//     }
//   },
//   {
//     path: '/user/social',
//     component: Layout,
//     children: {
//       path: 'main',
//       component: social
//     }
//   },
//   {
//     path: '/user/about',
//     component: Layout,
//     children: {
//       path: 'main',
//       component: about
//     }
//   }
// ]

