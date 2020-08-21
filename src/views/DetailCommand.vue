
<template>
    <div class="detail-command-container">
        <div class="detail-command-title">
            <h2>Détails de la commande  n° : Numéro de commande</h2>
            <h3>Etat de la commande</h3>
        </div>
        <div class="detail-command-intel">
            <div class="intel-group">
                <p>Nom du store : </p>
                <p> Carrefour</p>
            </div>
            <div class="intel-group">
                <p>Date de création : </p>
                <p> 21/08/2020</p>
            </div>
            <div class="intel-group">
                <p>Date de livraison : </p>
                <p> 10/09/2020</p>
            </div>
            <table>
                <thead>
                    <th colspan="5" class="solo-title">Liste des produits commandés</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Nom du produit 1</td>
                        <td> Poids du produit</td>
                        <td>Prix du produit</td>
                        <td>Description produit</td>
                        <td>quantité commandé</td>
                    </tr>
                    <tr>
                        <td>Nom du produit  2</td>
                        <td> Poids du produit</td>
                        <td>Prix du produit</td>
                        <td>Description produit</td>
                        <td>quantité commandé</td>
                    </tr>
                    <tr>
                        <td>Nom du produit 3</td>
                        <td> Poids du produit</td>
                        <td>Prix du produit</td>
                        <td>Description produit</td>
                        <td>quantité commandé</td>
                    </tr>
                    <tr>
                        <td>Nom du produit 4</td>
                        <td> Poids du produit</td>
                        <td>Prix du produit</td>
                        <td>Description produit</td>
                        <td>quantité commandé</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>


<script>
import Vue from 'vue'
export default Vue.extend({
    name:"DetailCommand"
})
</script>

<style scoped>
    table, th, tr, td, tbody{
        border: 2px solid #000;
    }

    .intel-group{
        display: flex;
    }

    .solo-title{
        text-align: center;
    }

    .detail-command-container{
        padding: 5%;
    }

    .detail-command-intel{
        margin-top: 3%;
        margin-left: 3%;
    }

    .detail-command-title{
        display: flex;
        justify-content: space-around;
    }
</style>