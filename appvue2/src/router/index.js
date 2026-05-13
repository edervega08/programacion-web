import { createRouter, createWebHistory } from 'vue-router'

import VistaAlumnos from '../VistaAlumnos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'alumnos',
      component: VistaAlumnos,
    }
  ],
})

export default router