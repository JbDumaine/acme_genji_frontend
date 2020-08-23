<template>
    <div class="detail-stock-reception-container">
        <div class="detail-reception-title">
            <h2>Détails de la réception {{this.$store.state.reception.reception_number}}</h2>
        </div>
        <div class="detail-reception-intel">
            <div class="intel-group">
                <p>Nom du Fournisseur : </p>
                <p> {{this.$store.state.reception.supplier.name}}</p>
            </div>
            <div class="intel-group">
                <p>Date de réception : </p>
                <p>{{this.$store.state.reception.reception_date}}</p>
            </div>
            <div id="receptions">
                <div class="row align-items-center justify-content-between border-bottom mb-2">
                    <div class="col-2 "><b>Nom du produit</b></div>
                    <div class="col-2 "><b>Poids unitaire</b></div>
                    <div class="col-2 "><b>Prix unitaire</b></div>
                    <div class="col-2 "><b>Description du produit</b></div>
                    <div class="col-2 "><b>Quantité du produit</b></div>
                </div>

                <div v-for="product in this.$store.state.reception.products" :key="product.id">
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
                        <div class="col-2">
                            {{product.pivot.product_quantity}}
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
    name: 'StockReceptionDetails',
    data: function() {
        return {
            reception: this.$store.state
        }
    },
    created: function() {
        this.$store.dispatch(`getReception`,this.$route.params.receptionId);
    }
})
</script>

<style scoped>
    .detail-stock-reception-container{
        padding: 5%;
    }
    .solo-title{
        text-align: center;
        background-color: #ECECEC;
    }
    .intel-group{
        display: flex;
    }

    .detail-reception-title{
        display: flex;
        justify-content: space-around;
    }

    .detail-reception-intel{
        margin-top: 3%;
        margin-left: 3%;
    }

</style>