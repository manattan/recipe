<template>
    <v-toolbar　class="elevation-0 head"> 
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Recipippi</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-toolbar-title v-if="url!='/create'" class="toCreate" @click="toCreate">レシピを追加</v-toolbar-title>
        <v-toolbar-title v-if="this.$store.state.user.userUid">Hello, {{user.userName}}</v-toolbar-title>
        <button v-else elevation="0" @click="login">
            <v-toolbar-title>ログイン</v-toolbar-title>
        </button>
    </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { addUserData } from '~/utils/firestore'
import * as commonTypes from '~/types/common'

export default Vue.extend({
    name:'Header',

    data () {
       return {
           url: '',
           user: {} as commonTypes.User
       }
    },

    async created () {
        this.user = await this.$store.getters.getUser
    },

    mounted () {
        this.url = this.$route.path
        console.log(this.url)
    },

    methods:{
        async login () {
            console.log('Login')
            const user = await this.$store.dispatch('login')
            this.user = user
            await addUserData(user)
        },

        toCreate () {
            this.$router.push('/create')
        }
    }
})
</script>

<style>
.toCreate{
    margin-right:10px
}

.head{
    max-height:56px
}
</style>