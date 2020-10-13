<template>
    <v-container>
        <v-row>
            <v-col v-for="(recipe,i)in allRecipe" :key="i">
                <RecipeCard :src="recipe.url" :recipe="recipe.recipe" :id="recipe.id"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAllRecipeData } from '~/utils/firestore'
import firebase from '~/plugins/firebase'
import { storage } from 'firebase'

export default Vue.extend({
    data(){
        return {
            allRecipe:[] as firebase.firestore.DocumentData & {id: string }[]
        }
    },

    async created(){
        const res= await getAllRecipeData()
        for (const tmp of res){
            var storageRef = firebase.storage().ref()
            const url=storageRef.child(`Recipes/${tmp.id}.img`).getDownloadURL()
            this.allRecipe.push(Object.assign(tmp,{url:url}))

        }

    }
})
</script>
