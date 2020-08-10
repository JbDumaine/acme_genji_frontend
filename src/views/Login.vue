<template>
<div id="login" class="container d-flex justify-content-center">

    <div class="card bg-ligth w-50">
        <div id="header" class="card-header bg-primary mb-4">
        </div>
        <div class="d-flex justify-content-center">
            <img src="../assets/image_not_found.png"/>
        </div>
        <b-form-group id="fieldset-1" label="Identifiant" label-for="identifier" class="m-3">
            <b-form-input id="identifier" v-model="name" :state="state" trim></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Mot de passe" label-for="wordPass" class="m-3">
            <b-form-input id="wordPass" v-model="name" :state="state" trim></b-form-input>
            <a href="#">Mot de passe oublié ?</a>
        </b-form-group>
        <button type="button" class=" btn btn-primary m-3">S'inscrire</button>
        <div class="d-flex flex-column mb-3">
        <p class="text-center text-dark mb-0">Vous n'êtes pas encore membre ?</p>
        <a class="text-center text-dark" href="#">Rejoignez-nous</a>
        </div>
        
    </div>
</div>
</template>

<style>
#header {
    height: 30px;
}

a{
    font-size : 12px;
}
a.text-center{
    font-size : 16px;
}
label{
    font-weight : bold;
}
img{
    width : 90px;
    height : 90px
}

/*
<div class="row bottom m-0">
        <div class="offset-4 col-4 mt-5">
            <div class="px-5">
                <h3 class="mt-5 mb-4 text-center text-white">S'identifier</h3>
                <div class="form-group">
                    <input type="text" class="col-8 form-control m-auto" placeholder="Utilisateur" v-model="username">
                </div>
                <div class="form-group">
                    <input type="password" class="col-8 form-control m-auto" placeholder="Mot de passe" v-model="password" @keyup.enter="connection()">
                </div>
                <div class="form-group">
                    <button class="form-control col-8 m-auto" @click="connection()">Se connecter</button>
                </div>
                <p class="text-danger text-center mb-5">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
*/
</style>
