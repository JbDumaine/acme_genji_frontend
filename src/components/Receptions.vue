<template>
<div id="receptions">
    <div class="row justify-content-between mb-5">
        <div class="my-3">
            <label class="mr-2">Filtrer par</label>
            <select class="px-1">
                <option>Numéro de réception</option>
                <option>Date de réception</option>
                <option>Fournisseur</option>
            </select>
        </div>
        <div class="m-3">
            <input class="mr-2" />
            <button class="btn btn-primary"> Rechercher</button>
        </div>
    </div>

    <div>
        <div class="row align-items-center justify-content-between border-bottom mb-2">
            <div class="col-4 p-0"><b>Numéro de réception</b></div>
            <div class="col-4 p-0"><b>Date de réception</b></div>
            <div class="col-4 p-0"><b>Fournisseur</b></div>
        </div>

        <div class="reception row align-items-center justify-content-between mb-3 border-bottom" @click="receptionPage(1)">
            <div class="col-4 row align-items-center">
                001
            </div>
            <div class="col-4">
                20/08/2020
            </div>
            <div class="col-4">
                <a @click="supplierPage(1)">GENJY</a>
            </div>
        </div>

        <div class="reception row align-items-center justify-content-between mb-3 border-bottom" @click="receptionPage(2)">
            <div class="col-4 row align-items-center">
                002
            </div>
            <div class="col-4">
                23/08/2020
            </div>
            <div class="col-4">
                <a @click="supplierPage(2)">GENJY_ACME</a>
            </div>
        </div>
    </div>

</div>
</template>
<script>
export default {
    name: 'Receptions',
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
