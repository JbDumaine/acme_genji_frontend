<template>
<footer class="d-flex flex-raw justify-content-between align-items-center mt-5">
        <a class="pl-3 text-secondary" @click="legalMentions()">Mentions légales et politiques de confidentialité</a>
        <h4 class="text-white">ACME-2020</h4>
        <h5 class="text-secondary pr-3">Conception - GENJY</h5>
</footer>
</template>

<script>
export default {
    name: 'Footer',
    methods:{
        legalMentions(){
            this.$router.push('/legal_mentions');
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
footer{
    min-height : 80px;
    background-color : rgb(0,0,0);
    position: relative;
    bottom: 0;
    width: 100%;
}
</style>
