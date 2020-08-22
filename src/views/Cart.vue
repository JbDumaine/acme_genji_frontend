<template>
  <div class="container">
    <h1 class="mb-3">PANIER</h1>
    <div class="form-group-container cart-form">
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
    <b-button @click="addCommand" variant="primary" id="btn-add-stock-reception">Valider</b-button>
  </div>
</template>


<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import AppConst from "../appConst.js";
Vue.component("multiselect", Multiselect);
export default Vue.extend({
  name: "cart",
  components: {
    Multiselect,
  },
  data: function () {
    return {
      form: {
        delivery_date: null,
        command_number: this.makeid(11),
        store_id: null,
        products: [],
      },
      products_options: [],
      product_chose: null,
      product_quantity: null,
    };
  },
  created: function () {
    let myInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.$store.state.requestToken}`,
      },
    };
    fetch(AppConst.API_URL + "users/" + this.$store.state.user.id, myInit)
      .then((result) => result.json())
      .then((json) => {
          console.log(json)
        this.form.store_id = json.store.id;
      })
      .catch((error) => {
        console.error(`Une erreur s'est produite`);
        console.log(error);
      });
  },
  methods: {
    addProduct: function () {
      this.form.products.push({
        product_id: this.product_chose.id,
        name: this.product_chose.name,
        product_weight: this.product_chose.unit_weight,
        product_price: this.product_chose.unit_price + "€",
        product_quantity: this.product_quantity,
      });
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
    makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    addCommand() {
      this.$store.dispatch("addCommand", this.form);
    },
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