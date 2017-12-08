import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Detail from '@/components/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path:'/',
      name:'Index',
      components:Index
    },
     {
      path:'/detail/:id',
      name:'Detail',
      components:Detail
    },
  ]
})
