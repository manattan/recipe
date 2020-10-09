<template>

</template>

<script lang="ts">
import Vue,{PropType} from 'vue'
import * as commonTypes from "~/types/common.ts"

export default Vue.extend({
    props: {
        name:{
            type:String,
            required:true
        },
        summary:{
            type:String,
            required:true
        },
        ingredients:{
            type:Array as PropType<commonTypes.Ingredients[]>,
            required:true
        },
        instructions:{
            type:Array as PropType<string[]>,
            required:true
        },
        timeInfo:{
            type:Array as PropType<string[]>,
            required:true
        },
    }

})
</script>