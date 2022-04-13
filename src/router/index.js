/* eslint-disable */ 
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import ProductsPage from '../views/ProductsPage.vue'
import PastOrders from '../views/PastOrders.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ProductsPage',
    name: 'productspage',
    component: ProductsPage
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  },
//   {
//     path: '/about',
//     name: 'about',
// 	component: AboutView
// 	// route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
