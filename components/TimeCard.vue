<template>
    <v-container class="box">
        <v-list>

        </v-list>
    </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props:{
        timeInfo:Object,
        required:true
    },

    data () {
        return {
            headers: [
                {
                    icon: 'mdi-silverware-variant',
                    name: 'YIELDS',
                },
                {
                    icon: 'mdi-clock-time-four-outline',
                    name: 'PREP TIME',
                },
                {
                    icon: 'mdi-clock-time-four-outline',
                    name: 'COOK TIME',
                },
                {
                    icon: 'mdi-clock-time-four-outline',
                    name: 'TOTAL TIME',
                },
            ]
        }
    }
})
</script>

<style scoped>
.box{
    border:solid 1px #111
}
</style>