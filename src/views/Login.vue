<template>
<div id="login" class="container d-flex justify-content-center">

    <div class="card bg-ligth w-50">
        <div id="header" class="card-header bg-primary mb-4">
        </div>
        <div class="d-flex justify-content-center">
            <img src="../assets/image_not_found.png" />
        </div>
        <b-form-group id="fieldset-1" label="Email" label-for="email" class="m-3">
            <b-form-input id="email" v-model="email"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Mot de passe" label-for="password" class="m-3">
            <b-form-input type="password" id="password" v-model="password" @keyup.enter="connection()"></b-form-input>
            <a href="#">Mot de passe oublié ?</a>
        </b-form-group>
        <button type="button" class=" btn btn-primary m-3" @click="connection()">Se connecter</button>
        <div class="d-flex flex-column mb-3">
        </div>
        <p class="text-danger text-center mb-5">{{ errorMessage }}</p>
    </div>
</div>
</template>

<script>
    export default {
        name: "Login",
        data: function () {
            return {
                email: '',
                password: '',
                errorMessage: ''
            }
        },
        computed: {
            invalidCredential() {
                return this.$store.state.invalidCredential;
            }
        },
        watch: {
            invalidCredential: function () {
                this.errorMessage = 'Identifiant ou mot de passe incorrect.'
            }
        },
        methods: {
            connection: function () {
                this.$store.dispatch('authenticate', {
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>

<style>
#header {
    height: 30px;
}

a {
    font-size: 12px;
}

a.text-center {
    font-size: 16px;
}

label {
    font-weight: bold;
}

img {
    width: 90px;
    height: 90px
}
</style>
