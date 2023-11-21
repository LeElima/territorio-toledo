import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Territorio from '../views/Territorios.vue';
import Controle from '../views/ControleTerritorio.vue';
import Sobre from '../views/Sobre.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: '/Territorios',
    name: 'Territorios',
    component: Territorio,
    meta:{
      title:'Territorios'
    }
  },
  {
    path: '/Controle',
    name: 'Controle',
    component: Controle,
    meta:{
      title:'Controle'
    }
  },
  {
    path: '/Sobre',
    name: 'Sobre',
    component: Sobre,
    meta:{
      title:'Sobre'
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta?.title} | PaginaBlog`;
  next();
})

export default router;
