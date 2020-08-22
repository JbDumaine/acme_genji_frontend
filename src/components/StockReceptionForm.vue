<template>
  <div class="form-group-container product-stock-reception-form">
    <div class="form-group">
      <label for="form-product-name">Nom du produit :</label>
      <multiselect
        v-model="product_chose"
        id="products_select"
        track_by="id"
        label="name"
        :options="products_options"
        :searchable="true"
        placeholder="Entrer le nom d'un produit"
        @search-change="getData"
      ></multiselect>
    </div>
    <div class="form-group">
      <label for="form-product-quantity">Quantité :</label>
      <input v-model="product_quantity" type="number" step="0.01" name="price-product" id="price-product" />
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import AppConst from "../appConst.js";
Vue.component("multiselect", Multiselect);
export default Vue.extend({
  name: "StockReceptionForm",
  components: {
    Multiselect,
  },
  props: {
    token: String,
  },
  data: function () {
    return {
      products_options: [],
      product_chose: null,
      product_quantity: null,
    };
  },
  methods: {
    getData(query) {
      this.isLoading = true;
      if (query.length > 0) {
        this.queryData = JSON.parse(JSON.stringify(query));
        fetch(AppConst.API_URL + `products/search/${escape(query)}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
        })
          .then((result) => result.json())
          .then((json) => {
            this.products_options = json;
            this.isLoading = false;
          })
          .catch((error) => {
            console.log(error);
            this.isLoading = false;
          });
      }
    },
    onClickAddProduct() {
      this.$emit("clicked", "someValue");
    },
  },
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.form-group-container {
  display: flex;
  flex-direction: column;
  padding: 20px 35px;
  border-bottom: 2px solid #000;
}

#btn-add-stock-recption {
  width: 50px;
  margin-left: 35%;
}

#btn-add-stock-recption > img {
  width: 20px;
}
</style>