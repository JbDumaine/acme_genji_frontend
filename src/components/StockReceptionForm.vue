<template>
    <form action="">
        <div class="form-group-container">
            <h2>Nom du fournisseur</h2>
            <div class="form-group">
                <label for="form-reception-number">Numéro de réception : </label>
                <input type="text" name="form-reception-number" id="form-reception-number">
            </div>
             <div class="form-group">
                <label for="form-product-date-reception">Date de réception : </label>
                <input type="date" name="form-product-date-reception" id="form-product-date-reception">
            </div>
            <div class="form-group">
                <label for="form-product-name">Nom du produit : </label>
                <select name="form-product-name" id="form-product-name">
                    <option value="">Choisissez</option>
                    <option value="">Nom de produit 1</option>
                    <option value="">Nom de produit 2</option>
                    <option value="">Nom de produit 3</option>
                    <option value="">Nom de produit 4</option>              
                </select>
            </div>
            <div class="form-group">
                <label for="form-product-quantity">Quantité : </label>
                <select name="form-product-quantity" id="form-product-quantity">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                </select>
            </div>
           
            
        </div>
    </form>
</template>



<script>
import Vue from 'vue'
export default Vue.extend({
    name: 'StockReceptionForm',
})
</script>

<style scoped>
    .form-group-container{
        display: flex;
        flex-direction: column;
        padding: 20px 35px;
        border-bottom: 2px solid #000;
    }

    #btn-add-stock-recption{
        width: 50px;
        margin-left: 35%;
    }

    #btn-add-stock-recption > img{
        width: 20px;
    }
</style>