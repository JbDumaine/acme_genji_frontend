<template>
  <div id="categories">
    <div class="row align-items-center justify-content-between border-bottom mb-2">
      <div class="col-4 p-0">
        <b>Nom</b>
      </div>
      <div class="col-6">
        <b>Description</b>
      </div>
      <div class="col-2">
        <font-awesome-icon v-b-modal.modal-1 icon="plus-circle" />
      </div>
    </div>

    <div v-for="category in this.$store.state.categories" :key="category.id">
      <div class="row align-items-center justify-content-between mb-3 border-bottom">
        <div class="col-4">{{category.name}}</div>
        <div class="col-8">{{category.description}}</div>
      </div>
    </div>
    <b-modal ok-title="Valider" @ok="addCategory" id="modal-1" title="Ajouter une catégorie">
      <input class="col-12 mb-2" v-model="name" placeholder="Nom" />
      <input class="col-12" v-model="description" placeholder="Description" />
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data: function () {
    return {
      name: "",
      description: "",
    };
  },
  created: function () {
    this.$store.dispatch("getCategories");
  },
  methods: {
    addCategory: function () {
      this.$store.dispatch("addCategory", this.$data);
    },
  },
};
</script>

<style>
img {
  width: 90px;
  height: 90px;
}
</style>
