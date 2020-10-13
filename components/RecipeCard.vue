<template>
    <v-card width="400" class="card">
        <v-img :src="url" @click="changeExt"  class="slide-down" data-slide="slide-1"/>
        <v-card v-if="isExt" width="400" height="100" class="slide-1">
            <v-card-title>{{title}}</v-card-title>
            <section class="detail">
                <v-card-text>作成者: {{userName}}</v-card-text>
            </section>
            <section class="detail">
                <v-card-text>detail</v-card-text>
            </section>
        </v-card>
    </v-card>
</template>

<script lang="ts">
import Vue,{PropType} from 'vue'
import * as commonTypes from '~/types/common'
import {timestampToDate}from '~/utils/firestore.ts'
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
    },

    data(){
        return {
            isExt: false
        }
    },

    computed:{
        updatedTimestamp(){
            return timestampToDate(this.updateTimestamp)
        }
    },

    methods:{
        changeExt(){
            if(this.isExt){
                this.isExt= false
            }else{
                this.isExt=true
            }
        }
    }
})
</script>

<style scoped>
.card{
    border-radius: 20px;
    
}
.detail{
    float:left;
    margin-top:-20px
}
</style>