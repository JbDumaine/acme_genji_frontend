<template>
<div id="commands">
    <div class="row align-items-center justify-content-between border-bottom mb-3">
        <div class="col-4"><b>Numéro</b></div>
        <div class="col-4"><b>Etat</b></div>
        <div class="col-4"><b>Store</b></div>
    </div>

    <div v-for="command in commands" :key="command.id">
        <div class="command row align-items-center justify-content-between mb-3 border-bottom" @click="commandPage(command.id)">
            <div class="col-4">
                {{command.commandNumber}}
            </div>
            <div class="col-4">
                {{command.state}}
            </div>
            <div class="col-4">
                {{command.store}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Commands',
    data: function() {
        return {
            commands: [
                {id:0, commandNumber: "0001", state: "Prête", store: "Toulouse"},
                {id:1, commandNumber: "0002", state: "Cloturée", store: "Marseille"}
            ]
        }
    },
    methods : {
        commandPage: function(id) {
            this.$router.push(`/command/${id}`);
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
