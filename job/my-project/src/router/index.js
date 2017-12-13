import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Detail from '@/components/detail'
import navBar from '@/components/navBar'
import List from '@/components/list'
import More from '@/components/more'


Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path:'/navBar',
      name:'navBar',
      components:navBar,
      children:[
        {
          path:'list',
          name:'List',
          components:List
        }, 
        {
          path:'more',
          name:'More',
          components:More
        },
      ]
    },
  ]
})
