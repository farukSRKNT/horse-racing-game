import { createRouter, createWebHistory } from 'vue-router'
import RaceView from '../views/race/RaceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/race',
      name: 'race',
      component: RaceView,
    },
  ],
})

export default router
