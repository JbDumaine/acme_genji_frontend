<template>
  <div class="form-add-category-container">
    <h2>Ajout de Category</h2>
    <div class="form-group">
      <label for="name-category">Nom de la catégorie :</label>
      <input v-model="name" type="text" name="name-category" id="name-category" />
    </div>
    <div class="form-group">
      <label for="description-category">Description de la catégorie:</label>
      <textarea v-model="description" name="description-category" id="description-category"></textarea>
    </div>
    <div class="form-group">
      <label for="image-category">Choisissez une image :</label>
      <input type="file" name="image-category" size="6" id="image-category" />
    </div>
    <b-button v-on:click="addCategory" variant="primary">Valider</b-button>
  </div>
</template>



<script>
import Vue from "vue";
export default Vue.extend({
  name: "addCategory",
  data: function () {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    addCategory: function () {
      this.$store.dispatch("addCategory", this.$data);
    },
  },
});
</script>

<style scoped>
.form-add-category-container {
  margin-left: 5%;
}
</style>