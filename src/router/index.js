import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/components/Products'
import ProductPage from '@/components/ProductPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'productPage',
    component: ProductPage
  }
]

const router = new VueRouter({
  routes
})

export default router
