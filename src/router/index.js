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
    {
        path:   '/customer-home',
        name: 'Customer',
        component: () => import('../views/Customer.vue'),
    },

    {
        path:   '/basket',
        name: 'Panier',
        component: () => import('../views/Basket.vue'),
    },

    {
        path:   '/product-details',
        name: 'ProductDetails',
        component: () => import('../views/ProductDetails.vue'),
    }
];

const router = new VueRouter({
    routes
  });
  
  export default router