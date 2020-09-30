<template>
    <v-container>
        <h1>Instructions</h1>
        <div v-for="(item, i) in items" :key="i" class="materials">
            <div class="wrapper square">
                <p>{{i + 1}}</p>
            </div>
            <div>
                <p>  {{item}}</p>
            </div>
        </div>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        items:{
            type:Array,
            required:true
        }
    }
})
</script>

<style scoped>
.wrapper{
    float: left;
}

.materials{
    margin:30px 0
}

.square{
    background-color:orange;
    border-radius: 5px;
    width:30px;
    height:30px;
    text-align:center;
    margin-left:10px
}
</style>