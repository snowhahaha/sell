import Vue from 'vue'
import Router from 'vue-router'
import Goods from 'components/Goods'
import Ratings from 'components/Ratings'
import Sellers from 'components/Sellers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/sellers',
      name: 'Sellers',
      component: Sellers
    }
  ]
})
