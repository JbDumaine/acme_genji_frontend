<template>
    <div  class="detail-command-container">

        <div class="d-flex justify-content-center mb-3">
            <b-spinner v-if="!this.$store.state.command" class="d-flex justify-content-center mb-3 largeProgress"></b-spinner>
        </div>

        <div class="detail-command-title">
            <h2>Détails de la commande {{this.$store.state.command.command_number}}</h2>
            <h3>Etat de la commande : {{this.$store.state.command.state.name}}</h3>
        </div>
        <div class="detail-command-intel">
            <div class="intel-group">
                <p>Nom du store : </p>
                <p> {{this.$store.state.command.store.name}}</p>
            </div>
            <div class="intel-group">
                <p>Date de création : </p>
                <p> {{this.$store.state.command.created_at}}</p>
            </div>
            <div class="intel-group">
                <p>Date de livraison : </p>
                <p> {{this.$store.state.command.delivery_date}}</p>
            </div>
            <table>
                <thead>
                    <th colspan="5" class="solo-title">Liste des produits commandés</th>
                </thead>
                <tbody>
                    <tr v-for="product in this.$store.state.command.products" :key="product.id">
                        <td>{{product.name}}</td>
                        <td>{{product.unit_weight}}</td>
                        <td>{{product.unit_price}}</td>
                        <td>{{product.description}}</td>
                        <td>{{product.pivot.product_quantity}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name:"DetailCommand",
    data: function() {
        return {
            command: this.$store.state
        }
    },
    created() {
        this.$store.dispatch(`getCommand`,this.$route.params.commandId);
    }
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