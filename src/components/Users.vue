<template>
<div id="users" class="container d-flex justify-content-center">
    <a @click="add()" class="d-flex justify-content-end m-3">
        <font-awesome-icon icon="plus-circle"/>
      </a>

</div>
</template>

<script>
export default {
    name: 'Users'
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
</style>
