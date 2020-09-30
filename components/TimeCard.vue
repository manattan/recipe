<template>
    <div class="box">
        ßko
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props:{
        timeInfo:Array,
        required:true
    }
})
</script>

<style scoped>
.box{
    border:solid 1px #111
}
</style>