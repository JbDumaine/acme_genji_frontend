<template>
  <div id="categories">
      <a @click="add()" class="d-flex justify-content-end m-3">
        <font-awesome-icon icon="plus-circle"/>
      </a>
    <div class="row align-items-center justify-content-between border-bottom mb-2">
      <div class="col-4 p-0">
        <b>Nom</b>
      </div>
      <div class="col-6">
        <b>Description</b>
      </div>
    </div>
    <div v-for="category in this.$store.state.categories" :key="category.id">
      <div class="row align-items-center justify-content-between mb-3 border-bottom">
        <div class="col-4">{{category.name}}</div>
        <div class="col-6">{{category.description}}</div>
        <a @click="edit(category)">
          <font-awesome-icon icon="edit" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  created: function () {
    this.$store.dispatch("getCategories");
  },
  methods: {
    edit: function (category) {
      this.$store.commit("setCategory", category);
      this.$router.push("/add-category");
    },
    add: function () {
      this.$store.commit("setCategory", null);
      this.$router.push("/add-category");
    },
  },
};
</script>

<style>
img {
  width: 90px;
  height: 90px;
}
.fa-edit,

.fa-trash,

.fa-plus-circle {
  cursor: pointer;
}
.fa-plus-circle {
  height: 30px;
  width : 30px !important;
}

a{
    min-height : 30px;
}

</style>
