import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Lazy-loaded when the route is visited.
    {
      path: '/',
      name: 'List Characters',
      component: () => import(/* webpackChunkName: "list-characters" */ './views/ListCharacters.vue')
    }
  ]
})
