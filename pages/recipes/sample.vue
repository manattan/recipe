<template>
    <v-container>
        <CuisineOverview :name="name" :summary="summary"/>
        <HeaderImage :src="src"/>
        <v-container>
            <v-row>
            <v-col class="wrapper" cols="8">
                <Recipe :ingredients="ingredients" :instructions="instructions"/>
            </v-col>
            <v-col class="wrapper" cols="4">
                <TimeCard :time="timeInfo"/>
            </v-col>
            </v-row>
        </v-container>
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
            ingredients:[{title:'Graham Cracker Crust',item:['1 and 1/2 cups(150g) graham cracker crumbs','5 Tablespoons(70g) unsalted butter, melted','1/4 cup(50g) granulated sugar']},{title:'Chesecake',item:['four 8-ounce blocks(904g)full-fat cream cheese,softened to room temperature','1 cup(200g) granurated sugar']}],
            instructions:[{value:'fidoshidhfshd'},{value:'sgggggggggggygsgush'},{value:'dihohuasguGhodfjfj'},{value:'saigahoShdoohdudh'},],
            timeInfo:[
                '12 servings','45 minutes', '1 hour', '7.75 hours'
            ]
        }
    }
})
</script>

<style scoped>
.wrapper{
    float: left;
}
/* .recipe{
    width:
} */
</style>