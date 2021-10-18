import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pessoa',
    name: 'Pessoa',
    component: () => import('../views/Pessoas.vue')
  },
  {
    path: '/pessoa/novo',
    name: 'PessoaNovo',
    component: () => import('../views/FormPessoa.vue')
  }, 
  {
    path: '/pessoa/:id',
    name: 'PessoaForm',
    component: () => import('../views/FormPessoa.vue'),
    children: [
      {
        path: '/endereco',
        component: () => import('../views/FormPessoaEndereco.vue'),
      }
    ]
  },   

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/marca',
    name: 'Marca',
    component: () => import('../views/Marcas.vue')
  },
  {
    path: '/marca/:id',
    name: 'MarcaForm',
    component: () => import('../views/FormMarca.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
