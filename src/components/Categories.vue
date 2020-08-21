<template>
<div id="categories">
    <div class="row align-items-center justify-content-between border-bottom mb-2">
        <div class="col-4 p-0"><b>Nom</b></div>
        <div class="col-8"><b>Description</b></div>
    </div>

    <div v-for="category in this.$store.state.categories" :key="category.id">
        <div class="row align-items-center justify-content-between mb-3 border-bottom">
            <div class="col-4">
                {{category.name}}
            </div>
            <div class="col-8">
                {{category.description}}
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'Categories',
    created: function () {
        this.$store.dispatch('getCategories');
    },
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
</style>
