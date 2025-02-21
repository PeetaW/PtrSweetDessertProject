import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Story1Detail from '@/views/Story1Detail.vue'
import Story2Detail from '@/views/Story2Detail.vue'
import Story3Detail from '@/views/Story3Detail.vue'
import Story4Detail from '@/views/Story4Detail.vue'
import Story5Detail from '@/views/Story5Detail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductList.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../components/StoryFrontPage.vue')
  },
  {
    path: '/story-1',
    name: 'story-1',
    component: () => import(/* webpackChunkName: "story" */ '../views/StoryBlog.vue')
  },
  {
    path: '/story/story-1',
    name: 'story-1',
    component: Story1Detail
  },
  {
    path: '/story/story-2',
    name: 'story-2',
    component: Story2Detail
  },
  {
    path: '/story/story-3',
    name: 'story-3',
    component: Story3Detail
  },
  {
    path: '/story/story-4',
    name: '/story-4',
    component: Story4Detail
  },
  {
    path: '/story/story-5',
    name: '/story-5',
    component: Story5Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // 返回儲存的滾動位置 (當使用瀏覽器返回/前進時適用)
    } else {
      return { top: 0, behavior: 'smooth' } // 頁面跳轉後滾動到頂部，並添加平滑滾動效果
    }
  }
})

export default router
