<template>
    <div class="detail-stock-reception-container">
        <table>
            <thead>
                <tr>
                    <th colspan="3" class="solo-title">Réception {{this.$store.state.reception.reception_number}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fournisseur</td>
                    <td colspan="3">{{this.$store.state.reception.supplier.name}}</td>
                </tr>
                <tr>
                    <td>Date de réception</td>
                    <td colspan="3">{{this.$store.state.reception.reception_date}}</td>
                </tr>

                <tr>
                    <th colspan="3" class="solo-title">Produits</th>
                </tr>

                <tr v-for="product in this.$store.state.reception.products" :key="product.id">
                    <td>{{product.name}}</td>
                    <td>{{product.pivot.product_quantity}}</td>
                    <td>{{product.unit_weight}}</td>
                </tr>
            </tbody>
        </table>
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
        margin-left: 40%;
    }

    table, th, tr, td, tbody{
        border: 2px solid #000;
    }

    .solo-title{
        text-align: center;
        background-color: #ECECEC;
    }

</style>