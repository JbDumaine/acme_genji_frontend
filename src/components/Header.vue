<template>
<header class="d-flex flex-raw justify-content-between align-items-center px-4 border-bottom">
    <div>
        <img src="../assets/logo.png" class ="m-3"/>
    </div>
    <div class="card d-flex flex-column align-items-center p-2 m-2">
    <img src="../assets/user.png" class="mx-5"/>
    <h4>Etienne Noroy</h4>
    <h5>etienne.noroy@corpus-solutions.fr</h5>
    <button class="btn btn-primary px-5" @click="disconnect()">Se déconnecter</button>
    </div>
</header>
</template>

<script>
export default {
    name: 'Header',
    methods : {
        disconnect: function(){
            this.$router.push("/login");
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
header{
    min-height : 60px;
    margin-bottom : 30px;
    background-color : rgb(220,220,220);
}
a {
    color: #42b983;
}
img{
    height : 90px;
    width : 90px;
}

h3 {
    margin: 40px 0 0;
}

h4{
    font-size : 18px;
    font-weight : bold;
    color : black;
}

h5{
    font-size : 12px;
    color: grey;

}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}


</style>
