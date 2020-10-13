<template>
    <v-container>
        <v-row>
            <v-col v-for="(recipe,i) in allRecipe" :key="i" md="4">
                <RecipeCard
                    :url="recipe.url"
                    :title="recipe.name"
                    :summary="recipe.summary"
                    :updateTimestamp="recipe.updateTimestamp"
                    :userName="recipe.userName"
                    :id="recipe.id"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import RecipeCard from '~/components/RecipeCard.vue'
import { getAllRecipeData } from '~/utils/firestore'
import firebase from '~/plugins/firebase'
import { storage } from 'firebase'

export default Vue.extend({
    components:{
        RecipeCard
    },
    data(){
        return {
            allRecipe:[] as firebase.firestore.DocumentData & {id: string }[]
        }
    },

    async created(){
        const res= await getAllRecipeData()
        for (const tmp of res){
            console.log("storageに接続開始")
            var storageRef = firebase.storage().ref()
            const url=await storageRef.child(`Recipes/${tmp.id}.jpg`).getDownloadURL()
            this.allRecipe.push(Object.assign(tmp,{url:url}))
            console.log(this.allRecipe)
            console.log("urlをassign")

        }
    }
})
</script>
