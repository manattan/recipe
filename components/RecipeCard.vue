<template>
    <section>
        <v-card max-width="300" class="card">
            <v-img :src="url" />
        </v-card>
    </section>
</template>

<script lang="ts">
import Vue,{PropType} from 'vue'
import * as commonTypes from '~/types/common'
import firebase from '~/plugins/firebase'

export default Vue.extend({
    props:{
        url:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true
        },
        summary:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        updateTimestamp:{
            type:Object,
            required:true
        },
        id:{
            type:String,
            required:true,
        },
    }
})
</script>

<style scoped>
.card{
    border-radius: 20px;
}
</style>