import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Racas from '@/pages/racas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/racas',
      name: 'Racas',
      component: Racas
    }
  ]
})
