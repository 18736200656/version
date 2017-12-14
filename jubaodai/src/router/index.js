import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listshow from '@/components/listshow'
import Index from '@/components/index'
import Detail from '@/components/detail'
import tabBar from '@/components/tabBar'
import Login from '@/components/login'
import Loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabBar',
      component: tabBar,
      children:[
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: 'more',
          name: 'HelloWorld',
          component: HelloWorld,
        },
        {
          path: 'list',
          name: 'Listshow',
          component: Listshow
        },
        {
          path: 'mine',
          name: 'Login',
          component: Login
        },
      ]

    },
   
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }
  ],
  scrollBehavior(to,from,savePosition){
    if(savePosition){
      return savePosition
    }else{
      if(from.meta.keepAlive){
        from.meta.savePosition = document.body.scrollTop;
      }
      return {x:0,y:to.meta.savePosition || 0}
    } 
  }
})
