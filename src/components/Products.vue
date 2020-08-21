<template>
<div>
    <div class="row justify-content-between mb-5">
        <div class="my-3">
            <label class="mr-2">Grouper par</label>
            <select class="px-1" v-model="selected" @change="changeSelector()">
                <option>Catégorie</option>
                <option>Fournisseur</option>
            </select>
        </div>
        <div class="m-3">
            <input class="mr-2" />
            <button class="btn btn-primary"> Rechercher</button>
        </div>
    </div>

    <div class="d-flex justify-content-center mb-3">
        <b-spinner v-if="!this.$store.state.products" class="d-flex justify-content-center mb-3 largeProgress"></b-spinner>
    </div>

    <div v-for="item in this.$store.state.products" :key="item.id">
        <h2>{{ item.name }}</h2>
        <div class="row align-items-center justify-content-between border-bottom mb-2">
            <div class="col-4"><b>Nom</b></div>
            <div class="col-4 p-0"><b>Prix</b></div>
            <div class="col-4"><b>Quantité</b></div>
        </div>
        <div v-for="product in item.products" :key="product.id">
            <div class="product row align-items-center justify-content-between mb-3 border-bottom" @click="productPage(2)">
                <div class="col-4 row align-items-center">
                    <img src="../assets/image_not_found.png" class="mr-2" />
                    <h5>{{ product.name }}</h5>
                </div>
                <div class="col-4">
                    {{ product.unit_price }}€
                </div>
                <div class="col-4">
                    {{ product.stock_quantity }} pcs
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Products',
    data: function() {
        return {
            selected:'Catégorie',
        }
    },
    created: function() {
        this.$store.dispatch('getProductsByCategories');
    },
    methods : {
        productPage: function (id) {
            this.$router.push(`/product-details/${id}`);
        },
        changeSelector: function() {
            this.$store.state.products = null;
            if (this.selected == "Fournisseur") {
                this.$store.dispatch('getProductsBySuppliers');
            } else {
                this.$store.dispatch('getProductsByCategories');
            }
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
.largeProgress {
    width: 3rem; 
    height: 3rem;
}
</style>