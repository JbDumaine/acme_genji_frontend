<template>
<div class="container">
    <b-tabs content-class="mt-3" fill>
        <b-tab class="container" @click="redirectToHome()">
            <template v-slot:title>
                <img src="../assets/home.png" />
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
        <b-tab title="Fournisseurs" :active="activeTab == 'suppliers'">
            <Suppliers />
        </b-tab>
        <b-tab title="Catégories" :active="activeTab == 'categories'">
            <Categories />
        </b-tab>
        <b-tab title="Utilisateurs" :active="activeTab == 'users'">
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
    created: function () {

    },

    methods: {

        created: function () {

        },
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

img {
    width: 30px;
    height: 30px;
}
</style>
