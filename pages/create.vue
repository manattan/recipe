<template>
    <v-container>
        <v-card class="elevation-0">
            <!-- validateする必要あり -->
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import * as commonTypes from '~/types/common'
export default Vue.extend({
    name: 'create',

    data () {
        return {
            recipe: {
                name: '',
                summary: '',
                ingredients: [] as commonTypes.Ingredients[],
                instructions: [] as string[],
                timeInfo: [] as string[]
            }
        }
    }
})
</script>