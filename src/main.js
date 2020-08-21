import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuex from 'vuex'
import VueCarousel from 'vue-carousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusCircle, faHome, faShoppingCart);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuex);
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');