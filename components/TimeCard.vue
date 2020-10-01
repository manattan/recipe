<template>
    <v-container class="box">
        <v-card class="card">
        <div v-for="(header, i) in headers" :key="i">
            <v-list class="list">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>{{header.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="content">
                        <v-list-item-subtitle class="subtitle">{{header.name}}</v-list-item-subtitle>
                        <v-list-item-title>{{time[i]}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </div>
        </v-card>
    </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props:{
        time:Array,
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
    /* border:1px solid #111; */
    margin-right:50px;
}
.card{
    border-radius:15px;
}
.list{
    /* border:1px solid #111; */
    margin:-5px 5px 5px 5px;
}
.content{
    /* border:1px solid #111; */
    margin-left:-15px
}
.subtitle{
    font-size:70%
}
</style>