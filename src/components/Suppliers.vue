<template>
<div id="suppliers">

    <div class="row justify-content-between mb-5">
        <div class="my-3">
            <label class="mr-2">Filtrer par</label>
            <select class="px-1">
                <option>Nom</option>
                <option>Adresse</option>
                <option>Ville</option>
            </select>
        </div>
        <div class="m-3">
            <input class="mr-2" />
            <button class="btn btn-primary"> Rechercher</button>
        </div>
    </div>

    <div>
        <div class="row align-items-center justify-content-between border-bottom mb-2">
            <div class="col-4 p-0"><b>Nom</b></div>
            <div class="col-4 p-0"><b>Adresse</b></div>
            <div class="col-4"><b>Ville</b></div>
        </div>

        <div class="supplier row align-items-center justify-content-between mb-3 border-bottom" @click="supplierPage(1)">
            <div class="col-4 row align-items-center">
                MegaSupply
            </div>
            <div class="col-4">
                1 rue dupont
            </div>
            <div class="col-4">
                31000 Toulouse
            </div>
        </div>

        <div class="supplier row align-items-center justify-content-between mb-3 border-bottom" @click="supplierPage(2)">
            <div class="col-4 row align-items-center">
                MaxiSupplies
            </div>
            <div class="col-4">
                23 rue de la rue
            </div>
            <div class="col-4">
                32000 Gers
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Suppliers',
    methods: {
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
.supplier {
    cursor : pointer;
}
</style>
