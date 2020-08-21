<template>
<div id="stores">
    <a @click="add()" class="d-flex justify-content-end m-3">
        <font-awesome-icon icon="plus-circle"/>
      </a>
    <div class="row align-items-center justify-content-between border-bottom mb-2">
        <div class="col-4"><b>Nom</b></div>
        <div class="col-4"><b>Adresse</b></div>
        <div class="col-4"><b>Ville</b></div>
    </div>

    <div v-for="store in this.$store.state.stores" :key="store.id">
        <div class="supplier row align-items-center justify-content-between mb-3 border-bottom" @click="storeDetails(store.id)">
            <div class="col-4">
                {{store.name}}
            </div>
            <div class="col-4">
                {{store.address}}
            </div>
            <div class="col-4">
                {{store.city.name}}
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Stores',
    created: function () {
        this.$store.dispatch('getStores');
    },
    methods: {
        storeDetails: function(id) {
            this.$router.push(`/store/${id}`);
        }
    }
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
.supplier {
    cursor : pointer;
}
</style>
