import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/Index.vue'
import Products from './components/Products.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/products', name: 'Products', component: Products },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
