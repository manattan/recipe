<template>
  <v-app id="app">
    <Header />
    <nuxt />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components:{
    Header
  }
}

</script>
