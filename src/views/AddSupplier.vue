<template>
  <div class="form-add-product-container">
    <form action="">
      <h2>Ajout d'un store</h2>
      <div class="form-group">
        <label for="name-supplier">Nom du Fournisseur : </label>
        <input type="text" name="name-supplier" id="name-supplier">
      </div>
      <div class="form-group">
        <label for="adress-supplier">Adresse du fournisseur : </label>
        <textarea name="adress-supplier" id="adress-supplier" rows="5" cols="33"></textarea>
      </div>
      <div class="form-group">
        <label for="city-supplier">Ville: </label>
        <select name="city-supplier" id="city-supplier">
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
  name: "addSupplier"
})
</script>

<style scoped>
.form-add-product-container{
  margin-left: 5%;
}
</style>