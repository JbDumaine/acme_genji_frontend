<template>
    <div class="detail-stock-reception-container">
        <table>
            <thead>
                <tr>
                    <th colspan="3" class="solo-title">Réception n°Numéro stock réception</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fournisseur</td>
                    <td colspan="3">Carrefour</td>
                </tr>
                <tr>
                    <td>Date de réception</td>
                    <td colspan="3">21/08/2020</td>
                </tr>
                <tr>
                    <th colspan="3" class="solo-title">Produits</th>
                </tr>
                <tr>
                    <td>Produit 1</td>
                    <td>Quantité</td>
                    <td>Poids</td>
                </tr>
                <tr>
                    <td>Produit 2</td>
                    <td>Quantité</td>
                    <td>Poids</td>
                </tr>
                <tr>
                    <td>Produit 3</td>
                    <td>Quantité</td>
                    <td>Poids</td>
                </tr>
                <tr>
                    <td>Produit 4</td>
                    <td>Quantité</td>
                    <td>Poids</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script>
import Vue from 'vue'
export default Vue.extend({
    name: 'DetailStockReception'
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