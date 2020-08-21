<template>
<div id="flux" class="flux-list container d-flex justify-content-center">
    <div id="receptions" class="ml-3">
        <h2>Réceptions</h2>
        <div class="row align-items-center justify-content-between border-bottom mb-3">
            <div class="col-4"><b>Numéro de réception</b></div>
            <div class="col-4"><b>Date de réception</b></div>
            <div class="col-4"><b>Fournisseur</b></div>
        </div>

        <div v-for="reception in this.$store.state.fluxHistory.Receptions" :key="reception.id">
            <div class="row align-items-center justify-content-between mb-3 border-bottom" @click="commandPage(command.id)">
                <div class="col-4">
                    {{reception.reception_number}}
                </div>
                <div class="col-4">
                    {{reception.supplier.name}}
                </div>
                <div class="col-4">
                    {{reception.reception_date}}
                </div>
            </div>
        </div>
    </div>

    <div id="commands" class="ml-3">
        <h2>Commandes livrés</h2>
        <div class="row align-items-center justify-content-between border-bottom mb-3">
            <div class="col-4"><b>Numéro</b></div>
            <div class="col-4"><b>Store</b></div>
            <div class="col-4"><b>Date de livraison</b></div>
        </div>

        <div v-for="command in this.$store.state.fluxHistory.Commands" :key="command.id">
            <div class="row align-items-center justify-content-between mb-3 border-bottom" @click="commandPage(command.id)">
                <div class="col-4">
                    {{command.command_number}}
                </div>
                <div class="col-4">
                    {{command.store.name}}
                </div>
                <div class="col-4">
                    {{command.delivery_date}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Flux',
    created: function() {
        this.$store.dispatch('getFluxHistory');
    }
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
.flux-list {
    flex-direction: column;
}
</style>
