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
        path:   '/product',
        name: 'Products',
        component: () => import('../views/Products.vue'),
    },
    {
        path:   '/insc',
        name: 'Inscription',
        component: () => import('../views/Inscription.vue'),
    },
];

const router = new VueRouter({
    routes
  });
  
  export default router