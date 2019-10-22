import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path:'/cms/articleDetail',
      name:'',
      component:() =>import('./views/ArticleDetail.vue')
    },{
      path:'/face/index',
      name:'',
      component:() =>import('./views/FaceRecognition.vue')
    }
  ]
})
