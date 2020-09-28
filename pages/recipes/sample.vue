<template>
    <v-container>
        <CuisineOverview :name="name" :summary="summary"/>
        <HeaderImage :src="src"/>
        <div>
            <div class="wrapper" md="8">
                <Recipe :ingredients="ingredients" :instructions="instructions"/>
            </div>
            <div class="wrapper" md="4">
                <TimeCard :time="timeInfo"/>
            </div>
        </div>
    </v-container>
</template>

<script>
import Vue from 'vue'
import HeaderImage from '~/components/molecutes/HeaderImage'
import CuisineOverview from '~/components/CuisineOverview'
import Recipe from '~/components/Recipe'
import TimeCard from '~/components/TimeCard'

export default Vue.extend({
    components:{
        HeaderImage,
        CuisineOverview,
        Recipe,
        TimeCard
    },

    data(){
        return {
            src: '~/assets/test.jpg',
            name:'Classic Chesecake',
            summary: 'Look no further for a creamy ultra smooth classic chesecake recipe! Paird with a buttery graham cracker crust, no one can deny its simple decadence. For the best fluits, bake in a water bath.',
            ingredients:[{title:'Graham Cracker Crust',item:['ssssss','sssssssssss']},{title:'Chesecake',item:['ssssss','sssssssssss']}],
            instructions:['ssss','ssss','ssss','sssss','sss','ss','s','ss'],
            timeInfo:{
                yields:'12',
                prepTime:'45',
                cookTime:'60',
                totalTime:'630'
            }
        }
    }
})
</script>

<style>
.wrapper{
    float: left;
}
</style>