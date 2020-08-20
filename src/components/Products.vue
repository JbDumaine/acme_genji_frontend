<template>
<div>
    <div class="row justify-content-between mb-5">
        <div class="my-3">
            <label class="mr-2">Grouper par</label>
            <select class="px-1" v-model="selected">
                <option>Fournisseur</option>
                <option>Catégorie</option>
            </select>
        </div>
        <div class="m-3">
            <input class="mr-2" />
            <button class="btn btn-primary"> Rechercher</button>
        </div>
    </div>


    <ul id="suppliers">
        <li v-for="item in items" :key="item.id">
            <h1>{{ item.name }}</h1>
            <ul id="products">
                <div class="row align-items-center justify-content-between border-bottom mb-2">
                    <div class="col-4"><b>Nom</b></div>
                    <div class="col-4 p-0"><b>Prix</b></div>
                    <div class="col-4"><b>Quantité</b></div>
                </div>
                <li v-for="product in item.products" :key="product.id">
                    <div class="product row align-items-center justify-content-between mb-3 border-bottom" @click="productPage(2)">
                        <div class="col-4 row align-items-center">
                            <img src="../assets/image_not_found.png" class="mr-2" />
                            <h5>{{ product.name }}</h5>
                        </div>
                        <div class="col-4">
                            {{ product.price }}€
                        </div>
                        <div class="col-4">
                            {{ product.quantity }} pcs
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    </ul>

</div>
</template>

<script>
export default {
    name: 'Products',
    data: function() {
        return {
            selected:'Fournisseur',
            items: [
                {id:1, name:"Darty", products: [
                    {id:1, name:"Crayon à papier", price:"1", quantity:"10"},
                    {id:2, name:"Stylo bleu", price:"2", quantity:"20"}
                ]},
                {id:2, name:"Super U", products: [
                    {id:1, name:"Quatres-couleurs", price:"100", quantity:"1"},
                    {id:2, name:"Compas", price:"50", quantity:"500"}
                ]}
            ],
        }
    },
    methods : {
        productPage: function (id) {
            this.$router.push(`/product/${id}`);
        },
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