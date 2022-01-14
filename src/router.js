import { createRouter, createWebHistory } from 'vue-router'
import Index from './routes/Index.vue'
import About from './routes/About.vue'
import Song from './routes/Song.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index
    },
    {
      name: 'Song',
      path: '/songs/:id',
      component: Song
    },
    {
      name: 'About',
      path: '/about',
      component: About
    }
  ]
})

export default router
