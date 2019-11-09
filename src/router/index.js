import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info  from '../views/info/info.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: {name: 'home'}  // 路由重定向
  // },
  {
    path: '/Ranking',
    redirect: {name: 'malerank'}  // 路由重定向
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/classification',
    name:'classification',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/classification.vue')
    
  },
  {
    path:'/Ranking',
    name:'Ranking',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Ranking.vue'),
    children:[
      {
        path:"malerank",
        name:'malerank',
        component: () => import(/* webpackChunkName: "about" */ '../views/rank/malerank.vue')
      },
      {
        path:"femalerank",
        name:'femalerank',
        component: () => import(/* webpackChunkName: "about" */ '../views/rank/femalerank.vue')
      },
      {
        path:"epubrank",
        name:'epubrank',
        component: () => import(/* webpackChunkName: "about" */ '../views/rank/epubrank.vue')
      }
    ]
  },
  {
    path:'/calssification/info',
    name:'info',
    props:true,
    component:Info
  },
  {
    path:'/calssification/info/detail',
    name:'detail',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/detail.vue')
  },
  {
    path:'/calssification/info/detail/chapters',
    name:'chapters',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/chapters.vue')
  },
  {
    path:'/calssification/info/detail/searchlist',
    name:'searchlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/searchlist.vue')
  },
  {
    path:'/calssification/info/detail/novelinfo',
    name:'novelinfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/novelinfo.vue')
  },
  {
    path:'/mybook',
    name:'mybook',
    component: () => import(/* webpackChunkName: "about" */ '../views/mybook/mybook.vue')
  },
  // {
  //   path:'/mybookwhite',
  //   name:'mybookwhite',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/mybook/mybookwhite.vue')
  // },
 
]

const router = new VueRouter({
  routes
})

export default router
