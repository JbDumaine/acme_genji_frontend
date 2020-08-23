<template>
    <div  class="detail-store-container">

        <div class="d-flex justify-content-center mb-3">
            <b-spinner v-if="!this.$store.state.store" class="d-flex justify-content-center mb-3 largeProgress"></b-spinner>
        </div>

        <div class="detail-store-title pl-4">
            <h2>{{this.$store.state.store.name}}</h2>
            <p>Adresse du fournisseur : </p>
            <p>
                {{this.$store.state.store.address}}
                <br>
                {{this.$store.state.store.city.name}}
            </p>
        </div>
        <div class="detail-store-intel pl-5">
            <h3 class="my-3">Détails des commandes</h3>
            <div id="suppliers">
                <div class="row align-items-center justify-content-between border-bottom mb-2">
                    <div class="col-2 "><b>Numéro de commande</b></div>
                    <div class="col-2 "><b>Date de création</b></div>
                    <div class="col-2 "><b>Date de réception</b></div>
                </div>

                <div v-for="command in this.$store.state.store.commands" :key="command.id">
                    <div class="reception row align-items-center justify-content-between mb-3 border-bottom">
                        <div class="col-2">
                            {{command.command_number}}
                        </div>
                        <div class="col-2">
                            {{command.created_at}}
                        </div>
                        <div class="col-2">
                            {{command.delivery_date}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name: "detail-store",
    data: function() {
        return {
            store: this.$store.state
        }
    },
    created() {
        this.$store.dispatch(`getStore`,this.$route.params.storeId);
    }
})
</script>

<style scoped>
    .detail-store-intel{
        align-items: center;
    }

    .detail-store-intel > h4{
        margin-right: 25px;
    }

    .detail-store-table {
        margin-left: 10%;
    }

    table, th, tr, td, tbody{
        border: 2px solid #000;
    }

    .solo-title {
        text-align: center;
        background-color: #ECECEC;
    }
</style>