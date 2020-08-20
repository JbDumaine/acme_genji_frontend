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
            state.invalidCredential = term
        },

        setUser(state, term) {
            state.user = term
        },

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
    }
});