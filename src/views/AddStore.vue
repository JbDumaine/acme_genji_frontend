<template>
  <div class="form-add-product-container">
    <form action="">
      <h2>Ajout d'un store</h2>
      <div class="form-group">
        <label for="name-store">Nom du magasin : </label>
        <input type="text" name="name-store" id="name-store">
      </div>
      <div class="form-group">
        <label for="adress-store">Adresse du magasin : </label>
        <textarea name="adress-store" id="adress-store" rows="5" cols="33"></textarea>
      </div>
      <div class="form-group">
        <label for="city-store">Ville: </label>
        <select name="city-store" id="city-store">
          <option value="">Choisissez une ville</option>
          <option value="">Nom de ville 1</option>
          <option value="">Nom de ville 2</option>
          <option value="">Nom de ville 3</option>
          <option value="">Nom de ville 4</option>
          <option value="">Nom de ville 5</option>
        </select>
      </div>
    </form>
  </div>
</template>



<script>
import Vue from 'vue'
export default Vue.extend({
  name: "addStore"
})
</script>

<style scoped>
.form-add-product-container{
  margin-left: 5%;
}
</style>