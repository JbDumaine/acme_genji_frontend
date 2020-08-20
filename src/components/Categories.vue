<template>
<div id="categories">
    <div class="row justify-content-between mb-5">
        <div class="my-3">
            <label class="mr-2">Filtrer par</label>
            <select class="px-1">
                <option>Nom</option>
                <option>Description</option>
            </select>
        </div>
        <div class="m-3">
            <input class="mr-2" />
            <button class="btn btn-primary"> Rechercher</button>
        </div>
    </div>

    <div>
        <div class="row align-items-center justify-content-between border-bottom mb-2">
            <div class="col-6 p-0"><b>Nom</b></div>
            <div class="col-6 p-0"><b>Description</b></div>
        </div>

        <div class="categorie row align-items-center justify-content-between mb-3 border-bottom" @click="categoriePage(1)">
            <div class="col-6 row align-items-center">
                Crayon
            </div>
            <div class="col-6">
                Bout de bois
            </div>
        </div>

        <div class="categorie row align-items-center justify-content-between mb-3 border-bottom" @click="categoriePage(2)">
            <div class="col-6 row align-items-center">
                Papier
            </div>
            <div class="col-6">
                Feuille blanche
            </div>
        </div>
    </div>

</div>

</template>

<script>
export default {
    name: 'Categories',
    methods : {
        categoriePage: function(id) {
            this.$router.push(`/categorie/${id}`);
        }
    }
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
.categorie {
    cursor : pointer;
}

</style>
