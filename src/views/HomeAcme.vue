<template>
<div class="container">
    <div>
        <b-card-group deck>
            <b-card header="Produits" header-tag="header" title="Produits" @click="redirectToMenu('products')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <div>
                            <img />
                            <h5>Carrefour</h5>
                        </div>
                        <div>
                            <img />
                            <h5>Lidl</h5>
                        </div>

                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>1337</h2>
                    </div>
                </div>
            </b-card>
            <b-card header="Commandes" header-tag="header" title="Commandes" @click="redirectToMenu('commands')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <div>
                            <img />
                            <h5>Carrefour</h5>
                        </div>
                        <div>
                            <img />
                            <h5>Lidl</h5>
                        </div>

                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>1337</h2>
                    </div>
                </div>
            </b-card>
            <b-card header="Réceptions" header-tag="header" title="Receptions" @click="redirectToMenu('receptions')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <div>
                            <img />
                            <h5>Carrefour</h5>
                        </div>
                        <div>
                            <img />
                            <h5>Lidl</h5>
                        </div>

                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>1337</h2>
                    </div>
                </div>
            </b-card>
            <b-card header="Fournisseurs" header-tag="header" title="Fournisseurs" @click="redirectToMenu('suppliers')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <div>
                            <img />
                            <h5>Carrefour</h5>
                        </div>
                        <div>
                            <img />
                            <h5>Lidl</h5>
                        </div>

                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>1337</h2>
                    </div>
                </div>
            </b-card>
            <b-card header="Catégories" header-tag="header" title="Catégories" @click="redirectToMenu('categories')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <div>
                            <img />
                            <h5>Carrefour</h5>
                        </div>
                        <div>
                            <img />
                            <h5>Lidl</h5>
                        </div>

                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>1337</h2>
                    </div>
                </div>
            </b-card>
            <b-card header="Utilisateurs" header-tag="header" title="Utilisateurs" @click="redirectToMenu('users')">
                <div class="row align-items-center">
                    <div class="col-8">
                        <div>
                            <img />
                            <h5>Carrefour</h5>
                        </div>
                        <div>
                            <img />
                            <h5>Lidl</h5>
                        </div>

                    </div>
                    <div class="col-4">
                        <h5 class="text-center">Total</h5>
                        <h2>1337</h2>
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
img{
    width : 30px;
    height: 30px;
}
</style>

<script>
export default {
    name: 'HomeAcme',

    methods: {
        redirectToMenu: function (name) {
            this.$store.commit('setActiveMenu',name);
            this.$router.push('/menu/')
        }
    }
}
</script>
