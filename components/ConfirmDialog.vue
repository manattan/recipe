<template>
    <v-dialog :value="dialog">
        <v-card>
            <v-card-title class="headline">レシピが正常に追加されました.</v-card-title>
            <v-btn @click="toHome">ホームに戻る</v-btn>
            <v-btn @click="toMypage">マイページに進む</v-btn>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props:{
        dialog:{
            type:Boolean,
            required:true
        }
    },

    methods:{
        toHome(){
            this.$emit('toHome')
        },
        toMypage(){
            this.$emit('toMypage')
        }
    }
})
</script>