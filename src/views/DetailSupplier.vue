<template>
    <div  class="detail-supplier-container">

        <div class="d-flex justify-content-center mb-3">
            <b-spinner v-if="!this.$store.state.supplier" class="d-flex justify-content-center mb-3 largeProgress"></b-spinner>
        </div>

        <div class="detail-supplier-title pl-4">
            <h2>{{this.$store.state.supplier.name}}</h2>
            <p>Adresse du fournisseur : </p>
            <p>
                {{this.$store.state.supplier.address}}
                <br>
                {{this.$store.state.supplier.city.name}}
            </p>
        </div>
        <div class="detail-supplier-intel">
            <h3 class="my-3">Produits proposés</h3>
            <div id="suppliers">
                <div class="row align-items-center justify-content-between border-bottom mb-2">
                    <div class="col-2 "><b>Nom du produit</b></div>
                    <div class="col-2 "><b>Poids unitaire</b></div>
                    <div class="col-2 "><b>Prix unitaire</b></div>
                    <div class="col-2 "><b>Description du produit</b></div>
                </div>

                <div v-for="product in this.$store.state.supplier.products" :key="product.id">
                    <div class="reception row align-items-center justify-content-between mb-3 border-bottom">
                        <div class="col-2">
                            {{product.name}}
                        </div>
                        <div class="col-2">
                            {{product.unit_weight}}
                        </div>
                        <div class="col-2">
                            {{product.unit_price}}
                        </div>
                        <div class="col-2">
                            {{product.description}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import Vue from 'vue'
export default Vue.extend({
    name:'detail-supplier',
    created() {
        this.$store.dispatch(`getSupplier`,this.$route.params.supplierId);
        console.log(this.$store.state);
    }
})
</script>

<style scoped>

    .detail-supplier-intel{
        display: flex;
        align-items: center;
    }

    .detail-supplier-table{
        align-items: start;
    }

    .detail-supplier-intel > h4{
        margin-right: 25px;
    }
</style>