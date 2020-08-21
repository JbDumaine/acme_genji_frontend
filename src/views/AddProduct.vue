<template>
  <div class="form-add-product-container container">
    <h2>Ajout de produit</h2>
    <div class="form-group">
      <label for="name-product">Nom du produit :</label>
      <input v-model="product.name" type="text" name="name-product" id="name-product" />
    </div>
    <div class="form-group">
      <label for="description-product">Description du produit :</label>
      <input
        v-model="product.description"
        type="text"
        name="description-product"
        id="description-product"
      />
    </div>
    <div class="form-group">
      <label for="supplier-product">Nom du fournisseur :</label>
      <select v-model="product.supplier_id" name="supplier-product" id="supplier-product">
        <option
          v-for="supplier in suppliers"
          :key="supplier.id"
          :value="supplier.id"
        >{{supplier.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="category-product">Catégorie du produit :</label>
      <select v-model="product.category_id" name="category-product" id="category-product">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >{{category.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="price-product">Prix du produit :</label>
      <input
        v-model="product.unit_price"
        type="number"
        step="0.01"
        name="price-product"
        id="price-product"
      />
    </div>
    <div class="form-group">
      <label for="weight-product">Poids du produit :</label>
      <input
        v-model="product.unit_weight"
        type="number"
        step="0.01"
        name="weight-product"
        id="weight-product"
      />
    </div>
    <div class="form-group">
      <label for="image-product">Choisissez une image :</label>
      <input type="file" name="image-product" size="6" multiple="multiple" id="image-product" />
    </div>
    <b-button v-on:click="addProduct" variant="primary">Valider</b-button>
  </div>
</template>



<script>
import Vue from "vue";
export default Vue.extend({
  name: "addProduct",
  data() {
    return {
      categories: this.$store.state.categories,
      suppliers: this.$store.state.suppliers,
      product_id : null,
      product: {
          name: null,
          description: null,
          supplier_id: null,
          category_id: null,
          unit_price: null,
          unit_weight: null,
          stock_quantity: 0,
        
      },
    };
  },
  created(){
    if(this.$store.state.product != null){
      this.id = this.$store.state.product.product_id;
      this.product.name = this.$store.state.product.name;
      this.product.description = this.$store.state.product.description;
      this.product.supplier_id = this.$store.state.product.supplier_id;
      this.product.category_id = this.$store.state.product.category_id;
      this.product.unit_price = this.$store.state.product.unit_price;
      this.product.unit_weight = this.$store.state.product.unit_weight;
      this.product.stock_quantity = this.$store.state.product.stock_quantity;
    }
  },
  methods: {
    addProduct: async function () {
      if (this.id != null)
      {
        await this.$store.dispatch("updateProduct", this.$data);
        this.$store.commit('setActiveMenu', 'products')
        this.$store.dispatch('getProductsByCategories');
        this.$router.push('/menu');
      }
      else
      {
        this.$store.dispatch("addProduct", this.$data.product);
      }
      
    },
  },
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
</style>