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
            <div id="commands">
                <div class="row align-items-center justify-content-between border-bottom mb-2">
                    <div class="col-2 "><b>Nom du produit</b></div>
                    <div class="col-2 "><b>Poids unitaire</b></div>
                    <div class="col-2 "><b>Prix unitaire</b></div>
                    <div class="col-2 "><b>Description du produit</b></div>
                    <div class="col-2 "><b>Quantité du produit</b></div>
                </div>

                <div v-for="product in this.$store.state.command.products" :key="product.id">
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
            <div id="bouton" class="row justify-content-around mt-5">
                <button class="btn btn-dark col-3" @click="fiche()">Fiche préparation</button>
                <button class="btn btn-dark col-3" @click="bon()">Bon de livraison</button>
                <button class="btn btn-dark col-3" @click="facture()">Générer facture</button>
            </div>
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
        console.log(this.$route.params.commandId);
    },
    methods : {
        fiche: function() {
            this.$router.push(`/fiche-prepa-command`);
        },
        bon: function() {
            this.$router.push(`/bon-livraison`);
        },
        facture: function() {
            this.$router.push(`/facture-command`);
        }
    }
})
</script>

<style scoped>
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