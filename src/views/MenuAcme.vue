<template>
<div class="container">
    <b-tabs content-class="mt-3" fill>
        <b-tab title="Général" class="container">
            <General />
        </b-tab>
        <b-tab title="Produits" class="container">
            <Products />
        </b-tab>
        <b-tab title="Commandes">
            <Commands />
        </b-tab>
        <b-tab title="Réceptions">
            <Receptions />
        </b-tab>
        <b-tab title="Fournisseurs">
            <Suppliers />
        </b-tab>
        <b-tab title="Catégories">
            <Categories />
        </b-tab>
        <b-tab title="Utilisateurs">
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
    states :{

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
    created: function(){

    },

    methods: {
        productPage: function (id) {
            this.$router.push(`/product/${id}`)
        }
    }
}
</script>

<style scoped>

</style>
