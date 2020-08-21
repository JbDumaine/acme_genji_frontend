<template>
<div id="commands">
    <a @click="add()" class="d-flex justify-content-end m-3">
        <font-awesome-icon icon="plus-circle"/>
      </a>
    <div class="row align-items-center justify-content-between border-bottom mb-3">
        <div class="col-2"><b>Numéro</b></div>
        <div class="col-2"><b>Etat</b></div>
        <div class="col-3"><b>Store</b></div>
        <div class="col-3"><b>Date de création</b></div>
        <div class="col-2"><b>Date de livraison</b></div>
    </div>

    <div v-for="command in this.$store.state.commands" :key="command.id">
        <div class="command row align-items-center justify-content-between mb-3 border-bottom" @click="commandPage(command.id)">
            <div class="col-2">
                {{command.command_number}}
            </div>
            <div class="col-2">
                {{command.state.name}}
            </div>
            <div class="col-3">
                {{command.store.name}}
            </div>
            <div class="col-3">
                {{command.created_at}}
            </div>
            <div class="col-2">
                {{command.delivery_date}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Commands',
    created: function () {
        this.$store.dispatch('getCommands');
    },
    methods : {
        commandPage: function(id) {
            this.$router.push(`/detail-command/${id}`);
        }
    }
}
</script>

<style>
img{
    width : 90px;
    height : 90px
}
.command {
    cursor : pointer;
}
</style>
