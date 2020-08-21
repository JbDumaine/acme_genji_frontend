<template>
  <div class="form-add-product-container container">
    <h2>Ajout d'un fournisseur</h2>
    <div class="form-group">
      <label for="name-supplier">Nom du fournisseur :</label>
      <input v-model="supplierForm.name" type="text" name="name-supplier" id="name-supplier" />
    </div>
    <div class="form-group">
      <label for="adress-supplier">Adresse du fournisseur :</label>
      <textarea v-model="supplierForm.address" name="adress-supplier" id="adress-supplier" rows="5" cols="33"></textarea>
    </div>
    <div class="form-group">
      <label for="city-supplier">Ville:</label>
      <multiselect
        v-model="city_chose"
        id="cities_select"
        track_by="id"
        label="name"
        :options="supplier"
        :searchable="true"
        placeholder="Entrer une ville ou un code postal"
        @search-change="getData"
      ></multiselect>
    </div>
    <b-button v-on:click="addSupplier" variant="primary">Valider</b-button>
  </div>
</template>



<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import AppConst from "../appConst.js";
Vue.component("multiselect", Multiselect);
export default Vue.extend({
  name: "addSupplier",
  components: {
    Multiselect,
  },
  data() {
    return {
      isLoading: false,
      value: null,
      supplier: [],
      queryData: null,
      city_chose: null,
      supplierForm: {
        name: null,
        address: null,
        city_id: null,
      },
    };
  },
  methods: {
    getData(query) {
      this.isLoading = true;
      if (query.length > 0) {
        this.queryData = JSON.parse(JSON.stringify(query));
        fetch(AppConst.API_URL + `cities/search/${escape(query)}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$store.state.requestToken}`,
          },
        })
          .then((result) => result.json())
          .then((json) => {
            let result = [];
            json.forEach((element) => {
              result.push(element);
            });
            console.log(result);
            this.supplier = result;
            this.isLoading = false;
          })
          .catch((error) => {
            console.log(error);
            this.isLoading = false;
          });
      }
    },
    addSupplier: function () {
      this.supplierForm.city_id = this.city_chose.id;
      this.$store.dispatch("addSupplier", this.supplierForm);
    },
  },
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
</style>
