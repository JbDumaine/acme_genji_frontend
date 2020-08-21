<template>
    <div class="container">
        <h1>PANIER</h1>
        <b-button variant="light" @click="addProduct()" id="btn-add-stock-recption"><img src="../assets/icon-plus-64.png" alt=""></b-button>
        <div class="product_container">
            <div class="img_product_container">
                <img src="../assets/supplies.jpg" alt="image_bureau">
            </div>
            <div class="product_intel">
                <h2>Nom Produit</h2>
                <div class="btn_quantity_trash">
                    <select name="product_quantity" class="select_product_quantity">
                        <option value="">Quantité</option>
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
                    <b-button href="#" variant="light" class="btn-trash"><img src="../assets/icon-trash-26.png" alt=""></b-button>
                </div>
            </div>
        </div>
        <div class="list-cart-item"></div>
        <b-button variant="primary" id="btn-add-cart">Ajouter</b-button>
    </div>
</template>


<script>
import Vue from 'vue'
import StockReceptionForm from '../components/StockReceptionForm.vue'

export default Vue.extend({
    name: 'Cart',
    /*components:{
        StockReceptionForm,
    },*/
    methods: {
        addProduct:function(){
           let container = document.querySelector('.list-cart-item');
           var ComponentClass = Vue.extend(StockReceptionForm)
           var instance = new ComponentClass()
            instance.$mount() // pass nothing
            container.appendChild(instance.$el)
        }
    }
})
</script>

<style scoped>
    .product_container{
        display: flex;
        border-bottom: 2px solid #000;
        padding: 15px 0px;
    }

    .product_intel{
        margin-left: 30px;
        width: 15%;
    }

    #btn-add-cart{
        margin: 2% 50%;
    }

    .product_intel > h2{
        font-size: 1.5rem;
    }

    .img_product_container{
        max-width: 15%;
    }

    .img_product_container > img{
        width: 100%;
    }

    .btn_quantity_trash{
        display: flex;
        justify-content: space-around;
    }
</style>