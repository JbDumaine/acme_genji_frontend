<template>
<div id="commands">
    <div class="row justify-content-between mb-5">
        <div class="my-3">
            <label class="mr-2">Filtrer par</label>
            <select class="px-1">
                <option>Etat</option>
                <option>Store</option>
            </select>
        </div>
        <div class="m-3">
            <input class="mr-2" />
            <button class="btn btn-primary"> Rechercher</button>
        </div>
    </div>

    <div>
        <div class="row align-items-center justify-content-between border-bottom mb-2">
            <div class="col-4 p-0"><b>Numéro</b></div>
            <div class="col-4 p-0"><b>Etat</b></div>
            <div class="col-4"><b>Store</b></div>
        </div>

        <div class="command row align-items-center justify-content-between mb-3 border-bottom" @click="commandPage(1)">
            <div class="col-4 row align-items-center">
                Commande 10
            </div>
            <div class="col-4">
                Prête
            </div>
            <div class="col-4">
                Toulouse
            </div>
        </div>

        <div class="command row align-items-center justify-content-between mb-3 border-bottom" @click="commandPage(2)">
            <div class="col-4 row align-items-center">
                Commande 1000
            </div>
            <div class="col-4">
                Cloturée
            </div>
            <div class="col-4">
                Bordeaux
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Commands',
    methods : {
        commandPage: function(id) {
            this.$router.push(`/command/${id}`);
        }
    }
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
.command {
    cursor : pointer;
}
</style>
