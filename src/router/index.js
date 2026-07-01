import { createRouter, createWebHistory } from 'vue-router'

import Admin from '@/components/Admin.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Product from '@/components/Product.vue'
import Profile from '@/components/Profile.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import SellerView from '@/components/SellerView.vue'
import SignUp from '@/components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/admin',
      component: Admin
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/profile',
      component: Profile
    },
    {
      path:'/product',
      component: Product
    },
    {
      path:'/product_details',
      component: ProductDetails
    },
    {
      path:'/seller_view',
      component: SellerView
    },
    {
      path:'/sign_up',
      component: SignUp
    },
  ],
})

export default router
