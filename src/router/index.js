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
        path:   '/product-details/:productId',
        name: 'ProductDetails',
        component: () => import('../views/ProductDetails.vue'),
    },

    {
        path:   '/stock-reception',
        name: 'StockReception',
        component: () => import('../views/StockReception.vue'),
    },

    {
        path:   '/add-product',
        name: 'addProduct',
        component: () => import('../views/AddProduct.vue'),
    },

    {
        path:   '/add-store',
        name: 'addStore',
        component: () => import('../views/AddStore.vue'),
    },

    {
        path:   '/update-store',
        name: 'updateStore',
        component: () => import('../views/UpdateStore.vue'),
    },

    {
        path:   '/add-supplier',
        name: 'addSupplier',
        component: () => import('../views/AddSupplier.vue'),
    },

    {
        path:   '/update-supplier',
        name: 'updateSupplier',
        component: () => import('../views/UpdateSupplier.vue'),
    },

    {
        path:   '/add-category',
        name: 'addCategory',
        component: () => import('../views/AddCategory.vue'),
    },
    
    {
        path:   '/update-stock-reception',
        name: 'UpdateStockReception',
        component: () => import('../views/UpdateStockReception.vue'),
    },

    {
        path:   '/detail-command',
        name: 'DetailCommand',
        component: () => import('../views/DetailCommand.vue'),
    }
];

const router = new VueRouter({
    routes
  });
  
  export default router