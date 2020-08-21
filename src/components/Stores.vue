<template>
  <div id="stores">
    <a @click="add()" class="d-flex justify-content-end m-3">
      <font-awesome-icon icon="plus-circle" />
    </a>
    <div class="row align-items-center justify-content-between border-bottom mb-2" @click="storeDetails(store.id)">
      <div class="col-3">
        <b>Nom</b>
      </div>
      <div class="col-4">
        <b>Adresse</b>
      </div>
      <div class="col-3">
        <b>Ville</b>
      </div>
    </div>

    <div v-for="store in this.$store.state.stores" :key="store.id">
      <div
        class="supplier row align-items-center justify-content-between mb-3 border-bottom"
      >
        <div  @click="storeDetails(store.id)" class="col-3">{{store.name}}</div>
        <div  @click="storeDetails(store.id)" class="col-4">{{store.address}}</div>
        <div  @click="storeDetails(store.id)" class="col-3">{{store.city.name}}</div>
        <a @click="edit(store)">
          <font-awesome-icon icon="edit" />
        </a>
        <a @click="remove(store)">
          <font-awesome-icon icon="trash" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stores",
  created: function () {
    this.$store.dispatch("getStores");
  },
  methods: {
    storeDetails: function (id) {
      this.$router.push(`/detail-store/${id}`);
    },

    edit: function (store) {
        this.$store.commit("setStore", store);
        this.$router.push("/add-store");
    },

    remove: async function (store) {
        if (confirm(`Etes vous sur de vouloir supprimer ${store.name} ?`)) {
        await this.$store.dispatch("deleteStore", store.id);
        this.$store.dispatch("getStores");
      }
    },

    add: function () {
      this.$store.commit("setStore", null);
      this.$router.push("/add-store");
    },
  },
};
</script>

<style>
img {
  width: 90px;
  height: 90px;
}
.supplier {
  cursor: pointer;
}
</style>