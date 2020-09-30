<template>
    <v-container class="box">
        <img src="~/assets/chesecake.jpg" class="img"/>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name:'HeaderImage',
})

</script>

<style scoped>
.box{
    width:100%
}
.img{
    width:100%;
    max-height:500px;
    text-align:center;
    border-radius:10px
}
</style>