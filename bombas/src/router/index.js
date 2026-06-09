import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import DispositivoEdit from '../components/edicion/DispositivoEdit.vue'
import Menu from '../views/principal/Menu.vue'
import EditarDispotitivo from '../views/principal/dispositivos/EditarDispotitivo.vue'
import ListaDispositivo from '../views/principal/dispositivos/ListaDispositivo.vue'
import ListaTarjetas from '@/views/principal/dispositivos/ListaTarjetas.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'ruta1',
      component: DispositivoEdit,
    },*/
    {
      path: '/',
      name: 'menu',
      component: Menu,
      children:[
      {
      path: '/editar',
      name: 'editarDispositivo',
      component: EditarDispotitivo
      },
      {
      path: '/lista',
      name: 'listaDispositivo',
      component: ListaDispositivo
      },
      {
      path: '/listaTarjetas',
      name: 'listaTarjetas',
      component: ListaTarjetas
      }
      
      ]
    }
  ]
})

export default router
