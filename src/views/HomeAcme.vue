<template>
<div class="container">
    <div >
        <b-card-group deck>
            <b-card header="Produits" header-tag="header" title="Produits" @click="redirectToMenu('products')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <ul class="pl-1">
                            <li class="mb-2">{{this.$store.state.homeData.products[0].name}}</li>

                            <li>{{this.$store.state.homeData.products[1].name}}</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>{{this.$store.state.homeData.nbProducts}}</h2>
                    </div>
                </div>
            </b-card>
            <b-card header="Commandes" header-tag="header" title="Commandes" @click="redirectToMenu('commands')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <ul class="pl-1">
                            <li class="mb-2">{{this.$store.state.homeData.commands[0].command_number}}</li>

                            <li>{{this.$store.state.homeData.commands[1].command_number}}</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>{{this.$store.state.homeData.nbCommands}}</h2>
                    </div>
                </div>
            </b-card>
            <b-card header="Réceptions" header-tag="header" title="Receptions" @click="redirectToMenu('receptions')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <ul class="pl-1">
                            <li class="mb-2">{{this.$store.state.homeData.receptions[0].reception_number}}</li>

                            <li>{{this.$store.state.homeData.receptions[1].reception_number}}</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>{{this.$store.state.homeData.nbReceptions}}</h2>
                    </div>
                </div>
            </b-card>
            <b-card v-if="this.$store.state.user.role_id == 1" header="Fournisseurs" header-tag="header" title="Fournisseurs" @click="redirectToMenu('suppliers')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <ul class="pl-1">
                            <li class="mb-2">{{this.$store.state.homeData.suppliers[0].name}}</li>

                            <li>{{this.$store.state.homeData.suppliers[1].name}}</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>1337</h2>
                    </div>
                </div>
            </b-card>
            <b-card v-if="this.$store.state.user.role_id == 1" header="Catégories" header-tag="header" title="Catégories" @click="redirectToMenu('categories')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <ul class="pl-1">
                            <li class="mb-2">{{this.$store.state.homeData.categories[0].name}}</li>

                            <li>{{this.$store.state.homeData.categories[1].name}}</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>{{this.$store.state.homeData.nbCategories}}</h2>
                    </div>
                </div>
            </b-card>
            <b-card v-if="this.$store.state.user.role_id == 1" header="Utilisateurs" header-tag="header" title="Utilisateurs" @click="redirectToMenu('users')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <ul class="pl-1">
                            <li class="mb-2">{{this.$store.state.homeData.users[0].email}}</li>

                            <li>{{this.$store.state.homeData.users[1].email}}</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>{{this.$store.state.homeData.nbReceptions}}</h2>
                    </div>
                </div>
            </b-card>
        </b-card-group>
    </div>
</div>
</template>

<style scoped>
.card-deck .card {
    flex: 30%;
    cursor: pointer;
}

.card {
    margin: 5px;
}

h2 {
    text-align: center;
    font-size: 20px;
}

h4 {
    text-align: left;
    font-size: 16px;
    font-weight: bold;
}

h5 {
    font-size: 14px;
}

img {
    width: 30px;
    height: 30px;
}

li {
    font-size : 15px;
    font-style: italic;
}
</style>

<script>
export default {
    name: "HomeAcme",

    created() {
        this.$store.dispatch('getHomeData');
    },

    methods: {
        redirectToMenu: function (name) {
            this.$store.commit("setActiveMenu", name);
            this.$router.push("/menu/");
        },
    },
};
</script>
