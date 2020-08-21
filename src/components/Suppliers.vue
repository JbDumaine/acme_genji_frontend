<template>
<div id="suppliers">
    <a @click="add()" class="d-flex justify-content-end m-3">
        <font-awesome-icon icon="plus-circle"/>
      </a>
    <div class="row align-items-center justify-content-between border-bottom mb-2">
        <div class="col-4"><b>Nom</b></div>
        <div class="col-4"><b>Adresse</b></div>
        <div class="col-4"><b>Ville</b></div>
    </div>

    <div v-for="supplier in this.$store.state.suppliers" :key="supplier.id">
        <div class="supplier row align-items-center justify-content-between mb-3 border-bottom" @click="supplierPage(supplier.id)">
            <div class="col-4">
                {{supplier.name}}
            </div>
            <div class="col-4">
                {{supplier.address}}
            </div>
            <div class="col-4">
                {{supplier.city.name}}
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Suppliers',
    created: function () {
        this.$store.dispatch('getSuppliers');
    },
    methods: {
        supplierPage: function(id) {
            this.$router.push(`/detail-supplier/${id}`);
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
