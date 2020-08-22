<template>
  <div class="form-add-category-container container">
    <h2>Ajout d'un utilisateur</h2>
    <div class="form-group">
      <label for="lastname-user">Nom :</label>
      <input v-model="form.firstname" type="text" name="name-user" id="name-user" />
    </div>
    <div class="form-group">
      <label for="firstname-user">Prénom:</label>
      <input v-model="form.lastname" name="firstname-use" id="firstname-use" />
    </div>
    <div class="form-group">
      <label for="email-user">Email:</label>
      <input type="email" v-model="form.email" name="email-user" id="email-user" />
    </div>
    <div class="form-group">
      <label for="password-user">Password:</label>
      <input type="password" v-model="form.password" name="password-use" id="password-use" />
    </div>
    <div class="form-group">
      <label for="user-role">Role:</label>
      <select v-model="form.role_id" name="user-role" id="user-role">
        <option v-for="role in roles" :key="role.id" :value="role.id">{{role.name}}</option>
      </select>
    </div>
    <b-button v-on:click="addUser" variant="primary">Valider</b-button>
  </div>
</template>



<script>
import Vue from "vue";
import AppConst from "../appConst.js";
export default Vue.extend({
  name: "addUser",
  data: function () {
    return {
      roles: null,
      id: null,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role_id:""
      },
    };
  },
  created: function () {
    let myInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.$store.state.requestToken}`,
      },
    };
    fetch(AppConst.API_URL + "roles", myInit)
      .then((result) => result.json())
      .then((json) => {
        this.roles = json;
      })
      .catch((error) => {
        console.error(`Une erreur s'est produite`);
        console.log(error);
      });
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