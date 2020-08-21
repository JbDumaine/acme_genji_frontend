<template>
    <div class="detail-store-container">
        <h2>Nom du Magasin</h2>
        <div class="detail-store-intel">
            <h4>Adresse du Magasin :</h4>
            <span>65 rue des développeurs Web, </span>
            <span>Ville</span>
        </div>
        <div class="detail-store-table">
            <h4>Tableau des réceptions de stock</h4>
            <table>
                <thead>
                    <th colspan="2">Réception de stock</th>
                </thead>
                <tbody>
                    <tr>
                       <td class="solo-title" colspan="2">N° de commande: 9494NFKER</td>
                    </tr>
                    <tr>
                        <td>Date de création</td>
                        <td>17/08/2020</td>
                    </tr>
                    <tr>
                        <td>Date de réception</td>
                        <td>21/08/2020</td>
                    </tr>
                    <tr>
                       <td class="solo-title" colspan="2">N° de commande: 9494NFKER</td>
                    </tr>
                    <tr>
                        <td>Date de création</td>
                        <td>10/08/2020</td>
                    </tr>
                    <tr>
                        <td>Date de réception</td>
                        <td>12/08/2020</td>
                    </tr>
                    <tr>
                       <td class="solo-title" colspan="2">N° de commande: 9494NFKER</td>
                    </tr>
                    <tr>
                        <td>Date de création</td>
                        <td>27/07/2020</td>
                    </tr>
                    <tr>
                        <td>Date de réception</td>
                        <td>02/08/2020</td>
                    </tr>
                    <tr>
                       <td class="solo-title" colspan="2">N° de commande: 9494NFKER</td>
                    </tr>
                    <tr>
                        <td>Date de création</td>
                        <td>11/08/2020</td>
                    </tr>
                    <tr>
                        <td>Date de réception</td>
                        <td>15/08/2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<script>
import Vue from 'vue'
export default Vue.extend({
    name: "detail-store"
})
</script>

<style scoped>

    .detail-store-container{
        margin-left: 40%;
    }

    .detail-store-intel{
        display: flex;
        align-items: center;
    }

    .detail-store-intel > h4{
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