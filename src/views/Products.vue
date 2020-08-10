<template>
<div class="container">
    <b-tabs content-class="mt-3" fill>
        <b-tab title="Produits" active class="container">
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
                    <div class="col-4 p-0">Fournisseur 1</div>
                    <div class="col-4 p-0">Prix</div>
                    <div class="col-4">Quantité</div>
                </div>

                <div class="row align-items-center justify-content-between mb-3">
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
                <div class="row align-items-center justify-content-between">
                    <div class="col-4 row align-items-center">
                        <img src="../assets/image_not_found.png" class="mr-2"/>
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
        </b-tab>
        <b-tab title="Commandes"></b-tab>
        <b-tab title="Réceptions"></b-tab>
        <b-tab title="Fournisseurs"></b-tab>
        <b-tab title="Catégories"></b-tab>
        <b-tab title="Utilisateurs"></b-tab>
    </b-tabs>
</div>
</template>

<script>

</script>

<style scoped>
img {
    width: 50px;
    height: 50px;
}
</style>
