<template>
    <div  class="detail-command-container container">

        <div class="d-flex justify-content-center mb-3">
            <b-spinner v-if="!this.$store.state.command" class="d-flex justify-content-center mb-3 largeProgress"></b-spinner>
        </div>

        <div class="detail-command-title">
            <h2>Fiche de préparation pour la commmande {{this.$store.state.command.command_number}}</h2>
        </div>
        <div class="detail-command-intel">
            <div class="intel-group">
                <p>Nom du store : {{this.$store.state.command.store.name}}</p>
            </div>
            <div class="intel-group">
                <p>Date de livraison : {{this.$store.state.command.delivery_date}}</p>
            </div>
            <h3 class="mt-5 mb-3">Liste des produits à préparer</h3>
            <div id="receptions">
                <div class="row align-items-center justify-content-between border-bottom mb-2">
                    <div class="col-2 "><b>Nom du produit</b></div>
                    <div class="col-2 "><b>Quantité du produit</b></div>
                </div>

                <div v-for="product in this.$store.state.command.products" :key="product.id">
                    <div class="reception row align-items-center justify-content-between mb-3 border-bottom">
                        <div class="col-2">
                            {{product.name}}
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
export default {
name: "FichePrepa"
}
</script>

<style scoped>
</style>