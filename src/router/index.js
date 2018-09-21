import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import '@/assets/css/common.css' /*引入公共样式*/
import Header from '@/components/header'
import Nav from '@/components/nav'
import Swiper from '@/components/swiper'
import Hydraulic from '@/components/hydraulic'
import Standard from '@/components/standard'
import Footer from '@/components/footer'
import SideNavigation from '@/components/sideNavigation'
import Classification from '@/components/classification'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/header',
        name: 'Header',
        component: Header
    }, 
    {
        path: '/nav',
        name: 'Nav',
        component: Nav
    },
    {
        path:'/swiper',
        name:'Swiper',
        component:Swiper
    },
    {
        path: '/hydraulic',
        name: 'Hydraulic',
        component: Hydraulic
    }, 
    {
        path: '/standard',
        name: 'Standard',
        component: Standard
    },
    {
        path: '/footer',
        name: 'Footer',
        component: Footer
    },
    {
        path: '/sideNavigation',
        name: 'SideNavigation',
        component: SideNavigation
    },
    {
        path: '/classification',
        name: 'Classification',
        component: Classification
    }

  ]
})
