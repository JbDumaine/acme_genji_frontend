<template>
    <div class="form-add-product-container">
        <form action="">
        <h2>Ajout de produit</h2>
        <div class="form-group">
            <label for="name-product">Nom du produit : </label>
            <input type="text" name="name-product" id="name-product">
        </div>
        <div class="form-group">
            <label for="supplier-product">Nom du fournisseur : </label>
            <select name="supplier-product" id="supplier-product">
                <option value="">Choisissez un fournisseur</option>
                <option value="">Nom du fournisseur 1</option>
                <option value="">Nom du fournisseur 2</option>
                <option value="">Nom du fournisseur 3</option>
                <option value="">Nom du fournisseur 4</option>
                <option value="">Nom du fournisseur 5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="category-product">Catégorie du produit : </label>
            <select name="category-product" id="category-product">
                <option value="">Choisissez une catégorie</option>
                <option value="">Nom de catégorie 1</option>
                <option value="">Nom de catégorie 2</option>
                <option value="">Nom de catégorie 3</option>
                <option value="">Nom de catégorie 4</option>
                <option value="">Nom de catégorie 5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="price-product">Prix du produit : </label>
            <input type="number" step="0.01" name="price-product" id="price-product">
        </div>
        <div class="form-group">
            <label for="weight-product">Poids du produit : </label>
            <input type="number" step="0.01" name="weight-product" id="weight-product">
        </div>
        <div class="form-group">
            <label for="image-product">Choisissez une image : </label>
            <input type="file" name="image-product" size="6" multiple="multiple" id="image-product">
        </div>
    </form>
    </div>
</template>



<script>
import Vue from 'vue'
export default Vue.extend({
    name: "addProduct"
})
</script>

<style scoped>
    .form-add-product-container{
        margin-left: 5%;
    }
</style>