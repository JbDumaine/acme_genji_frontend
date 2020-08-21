<template>
    <div>
        <div class="detail-store-intel">
            <h2>{{this.$store.state.store.name}}</h2>
            <span>{{this.$store.state.store.address}} {{this.$store.state.store.city.name}}</span>
        </div>
        <div class="detail-store-table">
            <h4>Détails des commandes</h4>
            <table>
                <thead>
                    <th colspan="2">Réception de stock</th>
                </thead>
                <tbody>
                    <div v-for="command in this.$store.state.store.commands" :key="command.id">
                        <tr>
                            <td class="solo-title" colspan="2">Commande {{command.command_number}}</td>
                        </tr>
                        <tr>
                            <td>Date de création</td>
                            <td>{{command.created_at}}</td>
                        </tr>
                        <tr>
                            <td>Date de réception</td>
                            <td>{{command.delivery_date}}</td>
                        </tr>
                    </div>
                </tbody>
            </table>
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
        margin-left: 40%;
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