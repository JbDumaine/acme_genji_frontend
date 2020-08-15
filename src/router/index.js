import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path:   '/',
        name: 'HomeAcme',
        component: () => import('../views/HomeAcme.vue'),
    },
    {
        path:   '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path:   '/menu',
        name: 'Menu',
        component: () => import('../views/MenuAcme.vue'),
    },
];

const router = new VueRouter({
    routes
  });
  
  export default router