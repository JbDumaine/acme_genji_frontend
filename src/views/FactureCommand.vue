<template>
    <div  class="detail-command-container container">

        <div class="d-flex justify-content-center mb-3">
            <b-spinner v-if="!this.$store.state.command" class="d-flex justify-content-center mb-3 largeProgress"></b-spinner>
        </div>

        <div class="detail-command-title">
            <h2>Facture pour la commande {{this.$store.state.command.command_number}}</h2>
        </div>
        <div class="detail-command-intel">
            <div class="intel-group">
                <p>Nom du store : {{this.$store.state.command.store.name}}</p>
            </div>
            <div class="intel-group">
                <p>{{this.$store.state.command.store.address}}</p>
                <p>{{this.$store.state.command.store.city}}</p>
            </div>
            <div class="intel-group">
                <p>Date de commande : {{this.$store.state.command.created_at}}</p>
            </div>
            <div class="intel-group">
                <p>Date de livraison : {{this.$store.state.command.delivery_date}}</p>
            </div>
            <h3 class="mt-5 mb-3">Liste des produits de la commande</h3>
            <div id="receptions">
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
            <div class="poids-total">Poids total de la commande : {{weight}} Kg</div>
            <div class="cout-total">Coût total de la commande : {{total}} €</div>
        </div>
    </div>
</template>

<script>
import AppConst from "../appConst.js";

export default {
    name: "FactureCommand",
    data: function() {
        return {
            products: this.$store.state.command.products,
            weight: 0
        }
    },
    created :  function() {
        for (let i=0; i < this.products.length; i++) {
            this.weight += this.products[i].unit_weight * this.products[i].pivot.product_quantity;
        }
    },
    computed :{
        total: function () {
            return AppConst.KILO_PRICE * this.weight;
        }
    }
}
</script>

<style scoped>
</style>