<template>
<div id="receptions">
    <div class="row align-items-center justify-content-between border-bottom mb-2">
        <div class="col-4 "><b>Numéro de réception</b></div>
        <div class="col-4 "><b>Date de réception</b></div>
        <div class="col-4 "><b>Fournisseur</b></div>
    </div>

    <ul>
        <li v-for="reception in receptions" :key="reception.id">
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
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Receptions',
    data: function() {
        return {
            receptions: [
                {id:1, reception_number: "0001", reception_date:"01/01/2020", supplier_id: 1},
                {id:2, reception_number: "0002", reception_date:"02/02/2020", supplier_id: 2}
            ]
        };
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
