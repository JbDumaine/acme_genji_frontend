<template>
    <div class="product_details_container">
        <h1>DETAILS PRODUIT:</h1>
        <h3>Nom du produit</h3>
        <div class="details_category_supplier">
            <h5>Catégorie</h5>
            <h5>Fournisseur</h5>
        </div>
        <div class="details_content_wrapper">
            <div class="small_img_container">
                <img src="../assets/supplies.jpg" alt="" class="small_img_details">
                <img src="../assets/supplies.jpg" alt="" class="small_img_details">
                <img src="../assets/supplies.jpg" alt="" class="small_img_details">
                <img src="../assets/supplies.jpg" alt="" class="small_img_details">
                <img src="../assets/supplies.jpg" alt="" class="small_img_details">
            </div>
            <div class="big_img_container">
                <img src="../assets/supplies.jpg" alt="" class="big_img_details">
            </div>
            <div class="details_product_content_container">
                <div class="details_price_weight_container">
                    <h4>Prix du produit</h4>
                    <h5>Poids du produit</h5>
                </div>
                <h3>Description du produit</h3>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries</span>
                    <h5 class="detail_product_quantity">Quantité de produit</h5>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'ProductDetails'
})
</script>

<style scoped>
    .details_content_wrapper{
        display: flex;
    }

    .details_category_supplier{
        width: 20%;
        display: flex;
        justify-content: space-between;
    }

    .small_img_container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .big_img_container{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .details_price_weight_container{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15%;
    }

    .product_details_container > h1, .product_details_container > h3, .details_category_supplier{
        margin-left: 5%;
    }

    .product_details_container > h3{
        width: 20%;
        border-bottom: 2px solid #000;
    }

    .big_img_container > img {
        width: 95%;
    }

    .small_img_details{
        width: 40%;
        margin: 5% 0;
    }

    .detail_product_quantity{
        text-align: right;
        margin-top: 5%;
    }

    .details_product_content_container{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3%
    }

</style>