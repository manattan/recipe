<template>
    <ValidationProvider v-slot="{errors}" :rules="rules">
        <v-text-field
            v-model="newValue"
            :error-messages="errors"
            :label="label"
            v-bind="$attrs"
        />
    </ValidationProvider>
</template>

<script>
import Vue from 'vue'
import {ValidationProvider} from 'vee-validate'

export default Vue.extend({
    name:'TextInputWithValidate',

    components:{
        ValidationProvider
    },
    props: {
        value:{
            type: String,
            required:true
        },
        label: {
            type: String,
            required:true
        },
        rules: {
            type: String,
            required: false
        },
    },

    computed : {
        newValue: {
            get(){
                return this.value
            },
            set(val) {
                if (this.value !== val) {
                this.$emit('input', val)
                }
            }
        }
    }
})
</script>