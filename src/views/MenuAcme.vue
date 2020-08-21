<template>
<div class="container">
    <b-tabs content-class="mt-3" fill>
        <b-tab class="container" @click="redirectToHome()">
            <template v-slot:title>
                <font-awesome-icon icon="home" />
            </template>
        </b-tab>
        <b-tab title="Général" :active="activeTab == '' || activeTab == 'general'">
            <General />
        </b-tab>
        <b-tab title="Produits" :active="activeTab == 'products'">
            <Products />
        </b-tab>
        <b-tab title="Commandes" :active="activeTab == 'commands'">
            <Commands />
        </b-tab>
        <b-tab title="Réceptions" :active="activeTab == 'receptions'">
            <Receptions />
        </b-tab>
        <b-tab v-if="this.$store.state.user.role_id == 1" title="Fournisseurs" :active="activeTab == 'suppliers'">
            <Suppliers />
        </b-tab>
        <b-tab v-if="this.$store.state.user.role_id == 1" title="Magasins" :active="activeTab == 'stores'">
            <Stores />
        </b-tab>
        <b-tab v-if="this.$store.state.user.role_id == 1" title="Catégories" :active="activeTab == 'categories'">
            <Categories />
        </b-tab>
        <b-tab v-if="this.$store.state.user.role_id == 1" title="Utilisateurs" :active="activeTab == 'users'">
            <Users />
        </b-tab>
    </b-tabs>
</div>
</template>

<script>
import Categories from '../components/Categories.vue';
import Commands from '../components/Commands.vue';
import General from '../components/General.vue';
import Receptions from '../components/Receptions.vue';
import Products from '../components/Products.vue';
import Suppliers from '../components/Suppliers.vue';
import Users from '../components/Users.vue';
export default {

    name: 'Menu',
    states: {

    },

    components: {
        Categories,
        Commands,
        General,
        Receptions,
        Products,
        Suppliers,
        Users
    },
    methods: {
        redirectToHome: function () {
            this.$router.push('/');
        }
    },
    computed:{
        activeTab (){
            return this.$store.state.activeMenu;
        }
    }
}
</script>

<style scoped>

.fa-home {
    width: 30px;
    height: 30px;
    color: black;
}
</style>
