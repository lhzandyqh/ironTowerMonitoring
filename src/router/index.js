import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import homeIndex from '../components/homeIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      component: homeIndex
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
