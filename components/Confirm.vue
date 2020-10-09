<template>
    <v-container>
        <v-row><h1>name: {{name}}</h1></v-row>
        <v-row><h1>summary: {{summary}}</h1></v-row>
        <v-row v-for="(ingredient,i) in ingredients" :key="i">
            <h1>title: {{ingredient.title}}</h1>
            <v-row v-for="(con,i) in ingredient.item" :key="i">
                <v-col>{{i+1}}: {{con.value}}</v-col>
            </v-row>
        </v-row>
        <v-row v-for="(instruction,i) in instructions" :key="i">
            <h2>{{i+1}}: {{instruction.value}}</h2>
        </v-row>
        <v-row><h1>timeInfomation</h1></v-row>
        <v-row>YIELDS: {{timeInfo[0]}}</v-row>
        <v-row>PREP TIME: {{timeInfo[1]}}</v-row>
        <v-row>COOK TIME: {{timeInfo[2]}}</v-row>
        <v-row>TOTAL TIME: {{timeInfo[3]}}</v-row>
    </v-container>
</template>

<script lang="ts">
import Vue,{PropType} from 'vue'
import * as commonTypes from "~/types/common.ts"

export default Vue.extend({
    props: {
        recipe:{
            type:Object as PropType<commonTypes.recipe>,
            required:true
        }
    },

    data(){
        return {
            name: this.recipe.name,
            summary: this.recipe.summary,
            ingredients: this.recipe.ingredients,
            instructions: this.recipe.instructions,
            timeInfo: this.recipe.timeInfo
        }
    },
})
</script>