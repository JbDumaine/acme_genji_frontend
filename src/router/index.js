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
        name: 'HomeCustomer',
        component: () => import('../views/HomeCustomer.vue'),
    },

    {
        path:   '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
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
        path:   '/stock-reception/:receptionId',
        name: 'StockReceptionDetails',
        component: () => import('../views/DetailStockReception.vue'),
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
        path:   '/add-user',
        name: 'addUser',
        component: () => import('../views/AddUser.vue'),
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
        path:   '/detail-command/:commandId',
        name: 'DetailCommand',
        component: () => import('../views/DetailCommand.vue'),
    },

    {
        path:   '/detail-supplier/:supplierId',
        name: 'DetailSupplier',
        component: () => import('../views/DetailSupplier.vue'),
    },

    {
        path:   '/detail-store/:storeId',
        name: 'DetailStore',
        component: () => import('../views/DetailStore.vue'),
    },

    {
        path:   '/fiche-prepa-command',
        name: 'FichePrepa',
        component: () => import('../views/FichePrepaCommand.vue'),
    },

    {
        path:   '/bon-livraison',
        name: 'BonLivraison',
        component: () => import('../views/BonLivraisonCommand.vue'),
    },

    {
        path:   '/facture-command',
        name: 'FactureCommand',
        component: () => import('../views/FactureCommand.vue'),
    }
];

const router = new VueRouter({
    routes
  });
  
  export default router