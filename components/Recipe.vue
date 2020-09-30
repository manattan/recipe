<template>
    <section>
        <Ingredients :items="ingredients" />
        <Instructions :items="instructions" />
    </section>
</template>

<script>
import Vue from 'vue'
import Ingredients from '~/components/Ingredients'

export default Vue.extend({
    components: {
        Ingredients
    },

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

<style scoped>
section{
    font-family: 'Times New Roman';
}
</style>