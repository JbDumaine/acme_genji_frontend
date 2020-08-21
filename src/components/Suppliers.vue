<template>
  <div id="suppliers">
    <a @click="add()" class="d-flex justify-content-end m-3">
      <font-awesome-icon icon="plus-circle" />
    </a>
    <div class="row align-items-center justify-content-between border-bottom mb-2">
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

    <div v-for="supplier in this.$store.state.suppliers" :key="supplier.id">
      <div
        class="supplier row align-items-center justify-content-between mb-3 border-bottom"
        
      >
        <div class="col-3" @click="supplierPage(supplier.id)">{{supplier.name}}</div>
        <div class="col-4" @click="supplierPage(supplier.id)">{{supplier.address}}</div>
        <div class="col-3" @click="supplierPage(supplier.id)">{{supplier.city.name}}</div>
        <a @click="edit(supplier)">
          <font-awesome-icon icon="edit" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Suppliers",
  created: function () {
    this.$store.dispatch("getSuppliers");
  },
  methods: {
    supplierPage: function (id) {
      this.$router.push(`/detail-supplier/${id}`);
    },
    edit: function (supplier) {
      this.$store.commit("setSupplier", supplier);
      this.$router.push("/add-supplier");
    },
    add: function () {
      this.$store.commit("setSupplier", null);
      this.$router.push("/add-supplier");
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
