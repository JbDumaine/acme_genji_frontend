<template>
    <div>
        <h2  class="detail-supplier-title">{{this.$store.state.supplier.name}}</h2>
        <div class="detail-supplier-intel">
            <h4>Adresse du fournisseur : </h4>
            <br>{{this.$store.state.supplier.address}}
            <br>{{this.$store.state.supplier.city.name}}
        </div>
        <div class="detail-supplier-table">
            <h4>Tableau des réceptions de stock</h4>
            <table>
                <thead>
                    <th colspan="2">Produits proposés</th>
                </thead>
                <tbody>
                    <tr v-for="product in this.$store.state.supplier.products" :key="product.id">
                        <td>{{product.name}}</td>
                        <td>{{product.unit_weight}}</td>
                        <td>{{product.unit_price}}</td>
                        <td>{{product.description}}</td>
                    </tr>
                </tbody>
            </table>
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

    .detail-supplier-title{
        margin-left: 40%;
    }

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

    table, th, tr, td, tbody{
        border: 2px solid #000;
    }

    .solo-title {
        text-align: center;
        background-color: #ECECEC;
    }
</style>