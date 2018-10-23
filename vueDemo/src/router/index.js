import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld/HelloWorld'
import Component01 from '../components/Component01/Component01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/component01',
      name: 'Component01',
      component: Component01
    }
  ]
})
