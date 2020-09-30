<template>
    <v-container>
        <h1>Ingredients</h1>
        <div v-for="(item, i) in items" :key="i">
            <h2><i>{{item.title}}</i></h2>
            <div v-for="(tmp, i) in item.item" :key="i" class="materials">
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-checkbox-blank-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="material">
                            <v-list-item-subtitle class="tmp">{{tmp}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
        </div>
    </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: {
        items: {
            type: Array,
            required: true,
        }
    }
})
</script>

<style>
h1{
    margin-top:-12px
}
h2{
    font-size:20px;
    margin-top:20px
}
/* .materials{
    border:1px solid black
} */
.material {
    margin-left: -10px;
}

.tmp{
    font-size: 18px;
    /* font-family: 'Trebuchet MS'; */
    font-family: 'Sourse Sans Pro';
}
</style>