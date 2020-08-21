<template>
  <div class="form-add-product-container container">
    <h2>Ajout d'un store</h2>
    <div class="form-group">
      <label for="name-store">Nom du magasin :</label>
      <input v-model="storeForm.name" type="text" name="name-store" id="name-store" />
    </div>
    <div class="form-group">
      <label for="adress-store">Adresse du magasin :</label>
      <textarea v-model="storeForm.address" name="adress-store" id="adress-store" rows="5" cols="33"></textarea>
    </div>
    <div class="form-group">
      <label for="city-store">Ville:</label>
      <multiselect
        v-model="city_chose"
        id="cities_select"
        track_by="id"
        label="name"
        :options="store"
        :searchable="true"
        placeholder="Entrer une ville ou un code postal"
        @search-change="getData"
      ></multiselect>
    </div>
    <b-button v-on:click="addStore" variant="primary">Valider</b-button>
  </div>
</template>

<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import AppConst from "../appConst.js";
Vue.component("multiselect", Multiselect);
export default Vue.extend({
  name: "addStore",
  components: {
    Multiselect,
  },
  data() {
    return {
      isLoading: false,
      value: null,
      store: [],
      queryData: null,
      city_chose: null,
      id_store : null,
      storeForm: {
        name: null,
        address: null,
        city_id: null,
      },
    };
  },
  created:function(){
    if (this.$store.state.store != null){
      this.id_store = this.$store.state.store.id
      this.storeForm.name = this.$store.state.store.name
      this.storeForm.address = this.$store.state.store.address
      this.storeForm.city_id = this.$store.state.store.city_id
      this.city_chose = this.$store.state.store.city
    }
    
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
            this.store = result;
            this.isLoading = false;
          })
          .catch((error) => {
            console.log(error);
            this.isLoading = false;
          });
      }
    },
    addStore: async function () {
      if(this.id_store != null){
        await this.$store.dispatch("updateStore", this.$data);
        this.$store.commit('setActiveMenu', 'stores')
        this.$store.dispatch('getStores');
        this.$router.push('/menu');
      }
      else
      {
        this.storeForm.city_id = this.city_chose.id;
        this.$store.dispatch("addStore", this.storeForm);
      }
    },
  },
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
</style>
