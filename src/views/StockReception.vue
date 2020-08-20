<template>
    <div class="stockReceptionContainer">
        <b-button variant="light" @click="addProduct()" id="btn-add-stock-recption"><img src="../assets/icon-plus-64.png" alt=""></b-button>
        <StockReceptionForm/>
        <div class="listStockReception"></div>
        <b-button variant="primary" id="btn-add-stock-reception">Ajouter</b-button>
    </div>
</template>


<script>
import Vue from 'vue'
import StockReceptionForm from '../components/StockReceptionForm.vue'

export default Vue.extend({
    name:'StockReception',
    components:{
        StockReceptionForm,
    },
    methods: {
        addProduct:function(){
           let container = document.querySelector('.listStockReception');
           var ComponentClass = Vue.extend(StockReceptionForm)
           var instance = new ComponentClass()
            instance.$mount() // pass nothing
            container.appendChild(instance.$el)
        }
    }
})
</script>

<style scoped>
    .form-group-container{
        display: flex;
        flex-direction: column;
    }

    #btn-add-stock-recption{
        width: 50px;
        margin-left: 35%;
    }

    #btn-add-stock-recption > img{
        width: 20px;
    }

    #btn-add-stock-reception{
        margin-left: 50%;
        margin-top: 5%;
    }
</style>