<template>
    <section>
        <div v-for="(ingredient, i) in ingredients" :key="i">
            <v-card>
                <v-card-title>{{ingredient.title}}</v-card-title>
                <v-card-text>{{ingredient.item}}</v-card-text>
            </v-card>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    props:{
        ingredients:{
            type:Array,
            required:true
        },
        instructions:{
            type:Array,
            required:true
        }
    }
})
</script>