import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/index.vue"
import Layout from "@/views/Layout/index.vue"
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        }
      ]
    }
  ],
  //路由行为配置项
  scrollBehavior() {
    //返回顶部
    return { left: 0, top: 0 }
  }
})

export default router
