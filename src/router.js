import ListCharacters from './views/ListCharacters.vue'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'List Characters',
      component: ListCharacters
    }
  ]
})
