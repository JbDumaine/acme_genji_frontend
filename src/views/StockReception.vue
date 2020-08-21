<template>
  <div class="stockReceptionContainer container">
    <div class="form-group-container">
      <h2>Ajout d'une réception</h2>
      <div class="form-group">
        <label for="form-reception-number">Numéro de réception :</label>
        <input
          v-model="form.reception_number"
          type="text"
          name="form-reception-number"
          id="form-reception-number"
        />
      </div>
      <div class="form-group">
        <label for="form-product-date-reception">Date de réception :</label>
        <input
          v-model="form.reception_date"
          type="date"
          name="form-product-date-reception"
          id="form-product-date-reception"
        />
      </div>
      <div class="form-group">
        <label for="supplier-product">Nom du fournisseur :</label>
        <select v-model="form.supplier_id" name="supplier-product" id="supplier-product">
          <option
            v-for="supplier in suppliers"
            :key="supplier.id"
            :value="supplier.id"
          >{{supplier.name}}</option>
        </select>
      </div>
    </div>
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
        <input
          v-model="product_quantity"
          type="number"
          step="0.01"
          name="price-product"
          id="price-product"
        />
        <b-button @click="addProduct" variant="success" id="btn-add-stock-reception">Ajouter Produit</b-button>
      </div>
    </div>
    <div id="products_table">
      <b-table striped hover :items="form.products"></b-table>
    </div>
    <b-button @click="addStockReception" variant="primary" id="btn-add-stock-reception">Valider</b-button>
  </div>
</template>


<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import AppConst from "../appConst.js";
Vue.component("multiselect", Multiselect);
export default Vue.extend({
  name: "StockReception",
  components: {
    Multiselect,
  },
  data: function () {
    return {
      suppliers: this.$store.state.suppliers,
      form: {
        reception_number: null,
        reception_date: null,
        supplier_id: null,
        products: [],
      },
      products_options: [],
      product_chose: null,
      product_quantity: null,
    };
  },

  methods: {
    addProduct: function () {
      this.form.products.push({"product_id": this.product_chose.id,"name": this.product_chose.name, "product_quantity":this.product_quantity});
    },
    getData(query) {
      this.isLoading = true;
      if (query.length > 0) {
        this.queryData = JSON.parse(JSON.stringify(query));
        fetch(AppConst.API_URL + `products/search/${escape(query)}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$store.state.requestToken}`,
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
    addStockReception(){
        this.$store.dispatch("addStockReception", this.form);
    }
  },
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.form-group-container {
  display: flex;
  flex-direction: column;
}

#btn-add-stock-recption {
  width: 50px;
  margin-left: 35%;
}

#btn-add-stock-recption > img {
  width: 20px;
  height: auto;
}

#btn-add-stock-reception {
  margin-left: 50%;
  margin-top: 5%;
}
</style>