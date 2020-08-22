<template>
    <div v-if="this.$store.state.product" class="product_details_container">
        <div class="d-flex justify-content-center mb-3">
            <b-spinner v-if="!this.$store.state.product" class="d-flex justify-content-center mb-3 largeProgress"></b-spinner>
        </div>

        <h1>DETAILS PRODUIT:</h1>
        <h3>{{this.$store.state.product.name}}</h3>
        <div class="details_category_supplier">
            <h5>Catégorie : {{this.$store.state.product.category.name}}</h5>
            <h5>Fournisseur : {{this.$store.state.product.supplier.name}}</h5>
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
                    <h5>Prix à l'unité : {{this.$store.state.product.unit_price}}€</h5>
                    <h5>Poids à l'unité : {{this.$store.state.product.unit_weight}}kg</h5>
                </div>
                <h3>Description du produit</h3>
                <span>
                    {{this.$store.state.product.description}}
                </span>
                <h5 class="detail_product_quantity">Quantité de produit : {{this.$store.state.product.stock_quantity}}</h5>
            </div>
        </div>
    </div>
    
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name:'ProductDetails',
    data: function() {
        return {
            product: this.$store.state
        }
    },
    created: function() {
        this.$store.dispatch(`getProduct`,this.$route.params.productId);
    }
})
</script>

<style scoped>
    .details_content_wrapper{
        display: flex;
    }

    .details_category_supplier{
        width: 20%;
        display: flex;
        flex-direction: column;
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
        flex-direction: column;
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