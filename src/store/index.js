import Vue from 'vue'
import Vuex from 'vuex'
import AppConst from '../appConst.js'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        // The menu actived in HomeMenu.
        activeMenu: '',

        // The connected user.
        user: null,

        // The request token for use API
        requestToken: '',

        //Bool
        invalidCredential: false,

        //Data :
        commands: null,
        suppliers: null,
        products: null,
        stores: null,
        categories: null,
        receptions: null,
    },

    mutations: {

        setActiveMenu(state, id) {
            state.activeMenu = id;
        },
        setEmail(state, term) {
            state.email = term;
        },
        setPassword(state, term) {
            state.password = term;
        },
        setRequestToken(state, term) {
            state.requestToken = term;
        },
        setInvalidCredential(state, term) {
            state.invalidCredential = term;
        },
        setUser(state, term) {
            state.user = term;
        },

        // Getter/Setter pour les différentes vues
        setCommands(state, term){
            state.commands = term;
        },
        setProductsByCategories(state, term) {
            state.products = term;
        },
        setProductsBySuppliers(state, term) {
            state.products = term;
        },
        setSuppliers(state, term) {
            state.suppliers = term;
        },
        setCategories(state, term) {
            state.categories = term;
        },
        setStores(state, term) {
            state.stores = term;
        },
        setReceptions(state, term) {
            state.receptions = term;
        }
    },

    actions: {

        authenticate(context, {
            email,
            password
        }) {
            let myInit = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            };
            fetch(AppConst.API_URL + AppConst.API_URI_LOGIN, myInit)
                .then(result => result.json())
                .then((json) => {
                    if (json.message === 'Invalid Credentials') {
                        return context.commit('setInvalidCredential', true)
                    }
                    context.commit('setUser', json.user)
                    context.commit('setRequestToken', json.access_token)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite sur le authenticate.`);
                    console.log(error);
                });

        },

        getCommands(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "commands", myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setCommands', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        getProductsByCategories(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "products/group/category", myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setProductsByCategories', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        getProductsBySuppliers(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "products/group/supplier", myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setProductsBySuppliers', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        getReceptions(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "stock_receptions", myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setReceptions', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        getSuppliers(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "suppliers", myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setSuppliers', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        getStores(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "stores", myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setStores', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getCategories(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "categories", myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setCategories', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
    }
});