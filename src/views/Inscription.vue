<template>
<div id="login" class="container d-flex justify-content-center">
    <div class="card bg-ligth w-50">
        <div id="header" class="card-header bg-primary mb-4">
        </div>
        <div class="d-flex justify-content-center">
            <img src="../assets/image_not_found.png" />
        </div>
        <b-form-input v-model="text" placeholder="Adresse mail" ></b-form-input>
        <b-form-input v-model="text" placeholder="Mot de passe"></b-form-input>
        <button type="button" class=" btn btn-primary m-3">S'inscrire</button>
        <p class="text-center text-dark mb-0">Déjà membre ? <a class="text-center text-dark" href="#">Se connecter</a></p>
    </div>
</div>
</template>
