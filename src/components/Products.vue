<template>
<div>
    <div class="row justify-content-between mb-5">
        <div class="my-3">
            <label class="mr-2">Filtrer par</label>
            <select class="px-1">
                <option>Fournisseur</option>
                <option>Catégorie</option>
            </select>
        </div>
        <div class="m-3">
            <input class="mr-2" />
            <button class="btn btn-primary"> Rechercher</button>
        </div>
    </div>
    <div>

        <div class="row align-items-center justify-content-between border-bottom mb-2">
            <div class="col-4 p-0"><b>Fournisseur 1</b></div>
            <div class="col-4 p-0"><b>Prix</b></div>
            <div class="col-4"><b>Quantité</b></div>
        </div>

        <div class="product row align-items-center justify-content-between mb-3 border-bottom" @click="productPage(1)">
            <div class="col-4 row align-items-center">
                <img src="../assets/image_not_found.png" class="mr-2" />
                <h5>Produit 1</h5>
            </div>
            <div class="col-4">
                1.00 €
            </div>
            <div class="col-4">
                255 pcs
            </div>
        </div>
        <div class="product row align-items-center justify-content-between mb-3 border-bottom" @click="productPage(2)">
            <div class="col-4 row align-items-center">
                <img src="../assets/image_not_found.png" class="mr-2" />
                <h5>Produit 2</h5>
            </div>
            <div class="col-4">
                5.00 €
            </div>
            <div class="col-4">
                285 pcs
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Products',
    methods : {
        productPage: function (id) {
            this.$router.push(`/product/${id}`);
        }
    }
}
</script>

<style scoped>
img {
    width: 50px;
    height: 50px;
}
.product {
    cursor : pointer;
}
</style>