<template>
    <v-toolbar >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Recipippi</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <button elevation="0">
            <v-toolbar-title>Hello, manattan.</v-toolbar-title>
        </button>
    </v-toolbar>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name:'Header'
})
</script>