<template>
<div id="stores">
    <a @click="add()" class="d-flex justify-content-end m-3">
      <font-awesome-icon icon="plus-circle" />
    </a>
    <div class="row align-items-center justify-content-between border-bottom mb-2">
      <div class="col-3">
        <b>Nom</b>
      </div>
      <div class="col-4">
        <b>Email</b>
      </div>
      <div class="col-3">
        <b>Role</b>
      </div>
    </div>

    <div v-for="user in this.$store.state.users" :key="user.id">
      <div
        class="supplier row align-items-center justify-content-between mb-3 border-bottom"
      >
        <div class="col-3">{{user.first_name}} {{user.last_name}}</div>
        <div class="col-4">{{user.email}}</div>
        <div class="col-3">{{user.role.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Users',
    created: function () {
    this.$store.dispatch("getUsers");
  },
  methods: {
    edit: function (user) {
      this.$store.commit("setUser", user);
      this.$router.push("/add-user");
    },
    add: function () {
      this.$store.commit("setUser", null);
      this.$router.push("/add-user");
    },
  },
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
</style>
