import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },{
      path: '/service',
      name: 'service',
      component: () => import('./views/Service.vue')
    },{
      path: '/case',
      name: 'case',
      component: () => import('./views/Case.vue')
    },{
      path: '/show',
      name: 'show',
      component: () => import('./views/Show.vue')
    },{
      path: '/active',
      name: 'active',
      component: () => import('./views/Active.vue')
    },{
      path: '/resume',
      name: 'resume',
      component: () => import('./views/Resume.vue')
    },{
      path: '/message',
      name: 'message',
      component: () => import('./views/Message.vue')
    },{
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
