<template>
    <div class="container">
        <h1>Catégorie</h1>
        <div class="card-wrapper">
            
             <b-card
                header="featured"
                tag="article"
            >
                <div class="img-product">
                    
                </div>
                <div class="btn-quantity">
                    <b-button variant="light" class="btn-add"><img src="../assets/icon-plus-64.png" alt=""></b-button>
                    <b-card-text> 20 items restants </b-card-text>
                </div>
                
            </b-card>
            <b-card
                header="featured"
                tag="article"
            >
                <div class="img-product">
                    
                </div>
                <div class="btn-quantity">
                    <b-button variant="light" class="btn-add"><img src="../assets/icon-plus-64.png" alt=""></b-button>
                    <b-card-text> 20 items restants </b-card-text>
                </div>
                
            </b-card>
            <b-card header="featured" tag="article">
                <div class="img-product">
                </div>
                <div class="btn-quantity">
                    <b-button variant="light" class="btn-add"><img src="../assets/icon-plus-64.png" alt=""></b-button>
                    <b-card-text> 20 items restants </b-card-text>
                </div>
            </b-card>
            <b-card
                header="featured"
                tag="article"
            >
                <div class="img-product">
                    
                </div>
                <div class="btn-quantity">
                    <b-button variant="light" class="btn-add"><img src="../assets/icon-plus-64.png" alt=""></b-button>
                    <b-card-text> 20 items restants </b-card-text>
                </div>
                
            </b-card>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
//import HeaderCustomer from './components/HeaderCustomer.vue'

export default Vue.extend({
    name:"HomeCustomer"
})
</script>

<style> 

    .card-wrapper > .card{
        width: 22%;
        height: 450px;
    }

    .btn-quantity{
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 10px;
        width: 90%;
    }

    .container > h1{
        width: 20%;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
        padding: 5px;
    }

    .img-product{
        height: 85%;
        background: url(../assets/bureau_product.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .img-product > img{
        max-width: 100%;
    }

    .btn-add > img{
        width:20px;
        height:20px
    }

    .card-wrapper{
        display: flex;
        justify-content: space-around;
    }

    .card-header{
        font-size: 2em;
    }
    
    .btn-quantity > p{
        display: flex;
        align-items: center;
    }
</style>
