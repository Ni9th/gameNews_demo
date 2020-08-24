import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)
Router.prototype.animate = 0

export default new Router({
  routes: routes
})
