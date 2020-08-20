<template>
<div id="receptions">
    <div class="row align-items-center justify-content-between border-bottom mb-2">
        <div class="col-4 "><b>Numéro de réception</b></div>
        <div class="col-4 "><b>Date de réception</b></div>
        <div class="col-4 "><b>Fournisseur</b></div>
    </div>

    <div v-for="reception in this.$store.state.receptions" :key="reception.id">
        <div class="reception row align-items-center justify-content-between mb-3 border-bottom" @click="receptionPage(reception.id)">
            <div class="col-4">
                {{reception.reception_number}}
            </div>
            <div class="col-4">
                {{reception.reception_date}}
            </div>
            <div class="col-4">
                {{reception.supplier_id}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Receptions',
    created: function () {
        this.$store.dispatch('getReceptions');
    },
    methods : {
        receptionPage: function(id) {
            this.$router.push(`/reception/${id}`);
        },
        supplierPage: function(id) {
            this.$router.push(`/supplier/${id}`);
        }
    }
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
.reception {
    cursor : pointer;
}
</style>
