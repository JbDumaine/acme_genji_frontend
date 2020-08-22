<template>
<div id="app" class="mt-0">
    <Header v-if="this.$store.state.user != null" />
    <div class="container-fluid p-0 bottom">
        <router-view />
    </div>
    <Footer />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
    updated() {
        if (this.$store.state.userLogged == false && !localStorage.getItem('access_token')) {
            this.$router.push('/login')
        } else if (this.$store.state.userLogged == false && localStorage.getItem('access_token')&& localStorage.getItem('user')) {
            this.$store.state.requestToken = localStorage.getItem('access_token');
            let user = localStorage.getItem('user')
            this.$store.state.user = JSON.parse(user);
            this.$store.state.userLogged = true;
            if(this.$store.state.user.role_id != 3 ){
                this.$router.push('/')
                this.$store.dispatch('getHomeData');
            }
            else{
                this.$router.push('/customer-home')
            }
            
        }
    }
}
</script>

<style>
html {
    height: 100vh;
}
body {
    height: 100vh;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    min-height: 100vh;
}
</style>
