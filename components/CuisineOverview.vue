<template>
    <v-container>
        <div class="title">
            <h1><font face="Times New Roman">{{name}}</font></h1>
        </div>
        <div class="summary">
            <p><i>{{summary}}</i></p>
        </div>
    </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props:{
        name:{
            type: String,
            required:true
        },
        summary: {
            type:String,
            required:false
        }
    }
})

</script>

<style>
h1{
    font-size: 54px;
}
.summary{
    padding-top:20px;
    padding-left:20px;
    width:600px
}
p{
    color:#bbb
}
</style>