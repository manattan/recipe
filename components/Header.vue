<template>
    <v-toolbar　class="elevation-0">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Recipippi</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <button elevation="0" @click="login">
            <v-toolbar-title>ログイン</v-toolbar-title>
        </button>
    </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'

type User = {
    userUid: string,
    userName: string
}

export default Vue.extend({
    name:'Header',

    data () {
       return {
           user: {} as User
       }
    },

    async created () {
        this.user = await this.$store.getters.getUser
    },

    methods:{
        login () {
            console.log('Login')
            this.$store.dispatch('login')
        }
    }
})
</script>