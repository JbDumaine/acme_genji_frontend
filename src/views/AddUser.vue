<template>
  <div class="form-add-category-container">
    <h2>Ajout d'un utilisateur</h2>
    <div class="form-group">
      <label for="lastname-user">Nom :</label>
      <input v-model="form.firstname" type="text" name="name-user" id="name-user" />
    </div>
    <div class="form-group">
      <label for="firstname-user">Prénom:</label>
      <input v-model="form.lastname" name="firstname-use" id="firstname-use"/>
    </div>
    <div class="form-group">
      <label for="email-user">Email:</label>
      <input type="email" v-model="form.email" name="email-user" id="email-user"/>
    </div>
    <div class="form-group">
      <label for="password-user">Password:</label>
      <input type="password" v-model="form.password" name="password-use" id="password-use"/>
    </div>
    <b-button v-on:click="addUser" variant="primary">Valider</b-button>
  </div>
</template>



<script>
import Vue from "vue";
export default Vue.extend({
  name: "addUser",
  data: function () {
    return {
      id: null,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    addUser: async function () {
      this.$store.dispatch("addUser", this.$data.form);
    },
  },
});
</script>

<style scoped>
.form-add-category-container {
  margin-left: 5%;
}
</style>