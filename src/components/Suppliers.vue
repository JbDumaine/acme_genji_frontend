<template>
<div id="suppliers">
    <div class="row align-items-center justify-content-between border-bottom mb-2">
        <div class="col-4"><b>Nom</b></div>
        <div class="col-4"><b>Adresse</b></div>
        <div class="col-4"><b>Ville</b></div>
    </div>

    <div v-for="supplier in suppliers" :key="supplier.id">
        <div class="supplier row align-items-center justify-content-between mb-3 border-bottom" @click="supplierPage(supplier.id)">
            <div class="col-4">
                {{supplier.name}}
            </div>
            <div class="col-4">
                {{supplier.address}}
            </div>
            <div class="col-4">
                {{supplier.city}}
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Suppliers',
    data: function() {
        return {
            suppliers: [
                {id:0, name:"Mega Fourniture", address:"12 rue des lilas", city:"Toulouse"},
                {id:1, name:"Fournitout", address:"14 rue sylvain durif", city:"Mauvezin"}
            ]
        }
    },
    methods: {
        supplierPage: function(id) {
            this.$router.push(`/supplier/${id}`);
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
