<template>
    <v-container>

    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAllRecipeData } from '~/utils/firestore'

export default Vue.extend({
    data(){
        return {
            allRecipe:[] as firebase.firestore.DocumentData & {id: string }[]
        }
    },

    async created(){
        this.allRecipe= await getAllRecipeData()
        
    }
})
</script>
