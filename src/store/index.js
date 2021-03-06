import Vue from "vue";
import Vuex from "vuex";
import AppConst from "../appConst.js";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // The menu actived in HomeMenu.
        activeMenu: "",

        // The connected user.
        user: null,

        // The request token for use API
        requestToken: "",

        //Bool
        invalidCredential: false,

        userLogged: false,

        //Data :
        commands: null,
        suppliers: null,
        products: null,
        stores: null,
        categories: null,
        receptions: null,
        homeData: null,
        fluxHistory: null,
        users: null,

        command: null,
        supplier: null,
        product: null,
        store: null,
        category: null,
        reception: null,
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
        setUserLogged(state, term) {
            state.userLogged = term;
        },

        // Getter/Setter pour les différentes vues
        setCommands(state, term) {
            state.commands = term;
        },
        setCommand(state, term) {
            state.command = term;
        },

        setProductsByCategories(state, term) {
            state.products = term;
        },
        setProductsBySuppliers(state, term) {
            state.products = term;
        },
        setProduct(state, term) {
            state.product = term;
        },

        setSuppliers(state, term) {
            state.suppliers = term;
        },
        setSupplier(state, term) {
            state.supplier = term;
        },

        setCategories(state, term) {
            state.categories = term;
        },
        setCategory(state, term) {
            state.category = term;
        },

        setFluxHistory(state, term) {
            state.fluxHistory = term;
        },

        setStores(state, term) {
            state.stores = term;
        },
        setStore(state, term) {
            state.store = term;
        },

        setReceptions(state, term) {
            state.receptions = term;
        },
        setReception(state, term) {
            state.reception = term;
        },

        setHomeData(state, term) {
            state.homeData = term;
        },

        setUsers(state, term) {
            state.users = term;
        },
    },

    actions: {
        async authenticate(context, { email, password }) {
            let myInit = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            };
            await fetch(AppConst.API_URL + AppConst.API_URI_LOGIN, myInit)
                .then((result) => result.json())
                .then((json) => {
                    if (json.message === "Invalid Credentials") {
                        return context.commit("setInvalidCredential", true);
                    }

                    context.commit("setUser", json.user);
                    context.commit("setRequestToken", json.access_token);
                    localStorage.setItem("access_token", json.access_token);
                    localStorage.setItem("user", JSON.stringify(json.user));
                    context.commit("setUserLogged", true);
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
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "commands", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setCommands", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        getCommand(context, commandId) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                }
            };
            fetch(AppConst.API_URL + "commands/" + commandId, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setCommand', json)
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
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "products/group/category", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setProductsByCategories", json);
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
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "products/group/supplier", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setProductsBySuppliers", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getProduct(context, productId) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "products/" + productId, myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setProduct", json);
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
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "stock_receptions", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setReceptions", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getReception(context, receptionId) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                }
            };
            fetch(AppConst.API_URL + "stock_receptions/" + receptionId, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setReception', json)
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
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "suppliers", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setSuppliers", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getSupplier(context, supplierId) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                }
            };
            fetch(AppConst.API_URL + "suppliers/" + supplierId, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setSupplier', json)
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
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "stores", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setStores", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getStore(context, storeId) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                }
            };
            fetch(AppConst.API_URL + "stores/" + storeId, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setStore', json)
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
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "categories", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setCategories", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getCategory(context, categoryId) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                }
            };
            fetch(AppConst.API_URL + "categories/" + categoryId, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setCategory', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getFluxHistory(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "historics_flux", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setFluxHistory", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        getUsers(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + "users", myInit)
                .then((result) => result.json())
                .then((json) => {
                    context.commit("setUsers", json);
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        updateCategory(context, data) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
                body: JSON.stringify({
                    name: data.form.name,
                    description: data.form.description,
                }),
                method: "PUT",
            };
            fetch(AppConst.API_URL + "categories/" + data.id, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setCategory', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        updateProduct(context, data) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
                body: JSON.stringify(data.product),
                method: "PUT",
            };
            fetch(AppConst.API_URL + "products/" + data.id, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setProduct', json)
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        updateStore(context, data) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
                body: JSON.stringify(data.storeForm),
                method: "PUT",
            };
            fetch(AppConst.API_URL + "stores/" + data.id_store, myInit)
                .then(result => result.json())
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        updateSupplier(context, data) {
            console.log(data.supplierForm)
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
                body: JSON.stringify(data.supplierForm),
                method: "PUT",
            };
            fetch(AppConst.API_URL + "suppliers/" + data.id_supplier, myInit)
                .then(result => result.json())
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        getHomeData(context) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${context.state.requestToken}`,
                },
            };
            fetch(AppConst.API_URL + AppConst.API_URI_HOME, myInit)
                .then(result => result.json())
                .then((json) => {
                    context.commit('setHomeData', json)
                });
        },

        addCategory(context, data) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
                method: "POST",
                body: JSON.stringify({
                    name: data.name,
                    description: data.description,
                }),
            };
            fetch(AppConst.API_URL + "categories", myInit)
                .then((result) => result.json())
                .then((json) => {
                    console.log(json);
                    router.push("Menu");
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        addProduct(context, data) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
                method: "POST",
                body: JSON.stringify(data),
            };
            fetch(AppConst.API_URL + "products", myInit)
                .then((result) => result.json())
                .then((json) => {
                    console.log(json);
                    router.push("Menu");
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },

        addStore(context, data) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
                method: "POST",
                body: JSON.stringify(data),
            };
            fetch(AppConst.API_URL + "stores", myInit)
                .then((result) => result.json())
                .then((json) => {
                    console.log(json);
                    router.push("Menu");
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        addSupplier(context, data) {
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
                method: "POST",
                body: JSON.stringify(data),
            };
            fetch(AppConst.API_URL + "suppliers", myInit)
                .then((result) => result.json())
                .then((json) => {
                    console.log(json);
                    router.push("Menu");
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        addUser(context, data) {
            let details = {
                'first_name': data.firstname,
                'last_name': data.lastname,
                'email': data.email,
                'password': data.password,
                'password_confirmation': data.password,
                'role_id': data.role_id
            };
            let formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            let myInit = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    Authorization: `Bearer ${context.state.requestToken}`,
                    "Access-Control-Allow-Origin": "*"
                },
                method: "POST",
                body: formBody,
            };
            fetch(AppConst.API_URL + "register", myInit)
                .then((result) => result.json())
                .then((json) => {
                    console.log(json);
                    router.push("/menu");
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        addStockReception(context, data) {
            delete data.products.name;
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
                method: "POST",
                body: JSON.stringify(data),
            };
            fetch(AppConst.API_URL + "stock_receptions", myInit)
                .then((result) => result.json())
                .then((json) => {
                    console.log(json);
                    router.push("Menu");
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
        addCommand(context, data) {
            console.log(data.products)
            let myInit = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${context.state.requestToken}`,
                },
                method: "POST",
                body: JSON.stringify(data),
            };
            fetch(AppConst.API_URL + "commands", myInit)
                .then((result) => result.json())
                .then((json) => {
                    console.log(json);
                    router.push("customer-home");
                })
                .catch((error) => {
                    console.error(`Une erreur s'est produite`);
                    console.log(error);
                });
        },
    },
});

