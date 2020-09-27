<template>
    <v-container>
        <HeaderImage :src="src"/>
    </v-container>
</template>

<script>
import Vue from 'vue'
import HeaderImage from '~/components/molecutes/HeaderImage'

export default Vue.extend({
    components:{
        HeaderImage
    },

    data(){
        return {
            src: '~/assets/test.jpg'
        }
    }
})
</script>