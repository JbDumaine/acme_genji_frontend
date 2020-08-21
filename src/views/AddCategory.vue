<template>
  <div class="form-add-category-container">
    <h2>Ajout de Category</h2>
    <div class="form-group">
      <label for="name-category">Nom de la catégorie :</label>
      <input v-model="form.name" type="text" name="name-category" id="name-category" />
    </div>
    <div class="form-group">
      <label for="description-category">Description de la catégorie:</label>
      <textarea v-model="form.description" name="description-category" id="description-category"></textarea>
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
      id:null,
      form:{
      name: "",
      description: "",
      }
    };
  },
  created: function(){
    if(this.$store.state.category != null)
    {
      this.id = this.$store.state.category.id;
      this.form.name = this.$store.state.category.name;
    this.form.description = this.$store.state.category.description;
    }
    
  },
  methods: {
    addCategory: async function () {
      if (this.id != null)
      {
        await this.$store.dispatch("updateCategory", this.$data);
        this.$store.commit('setActiveMenu', 'categories')
        this.$store.dispatch('getCategories');
        this.$router.push('/menu');
      }
      else
      {
        this.$store.dispatch("addCategory", this.$data.form);
      }
      
    },
  },
});
</script>

<style scoped>
.form-add-category-container {
  margin-left: 5%;
}
</style>