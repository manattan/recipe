<template>
    <v-container >
        <v-row justify="center">
            <img src="~/assets/test.jpg" class="img"/>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name:'HeaderImage',
})

</script>

<style>
.img{
    text-align:center
}
</style>