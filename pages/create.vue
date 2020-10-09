<template>
    <v-container>
        <main>
        <ValidationObserver ref="observer" v-slot="{ inValid }">
            <form>
                <v-stepper v-model="currentStep">
                    <v-stepper-header>
                        <v-stepper-step :complete="currentStep > 1" step="1">
                            基礎事項
                        </v-stepper-step>
                        <v-stepper-step :complete="currentStep > 2" step="2">
                            材料の追加
                        </v-stepper-step>
                        <v-stepper-step :complete="currentStep > 3" step="3">
                            調理法の追加
                        </v-stepper-step>
                        <v-stepper-step :complete="currentStep > 4" step="4">
                            要する時間の追加
                        </v-stepper-step>
                        <v-stepper-step :complete="currentStep > 5" step="5">
                            確認
                        </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <text-input-with-validate v-model="recipe.name" label="レシピ名" rules="required"/>
                            <text-input-with-validate v-model="recipe.summary" label="summary" rules="required"/>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <div v-for="(ingredient,i) in recipe.ingredients" :key="i">
                                <text-input-with-validate v-model="ingredient.title" label="材料タイトル" rules="required"/>
                                <div v-for="(item, j) in ingredient.item" :key="j">
                                    <text-input-with-validate v-model="ingredient.item[j]" label="材料" rules="required"/>
                                </div>
                            </div>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <div v-for="(instruction, k) in recipe.instructions" :key="k">
                                <text-input-with-validate v-model="instruction.value" label="調理法" rules="required"/>
                            </div>                            
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <text-input-with-validate v-model="recipe.timeInfo[0]" label="何人前ですか?" rules="required"/>
                            <text-input-with-validate v-model="recipe.timeInfo[1]" label="準備時間(分)" rules="required"/>
                            <text-input-with-validate v-model="recipe.timeInfo[2]" label="調理時間(分)" rules="required"/>
                            <text-input-with-validate v-model="recipe.timeInfo[3]" label="総時間" rules="required"/>
                            </v-stepper-content>
                        <v-stepper-content step="5">
                            <Confirm :recipe="recipe"/>
                        </v-stepper-content>
                    </v-stepper-items>
                    <stepper-controller :current-step="currentStep" class="mt-16" @clickForwardButton="clickForwardButton" @clickBackButton="clickBackButton" :disabled="inValid"/>
                </v-stepper>
            </form>
        </ValidationObserver>
        </main>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { extend, ValidationObserver } from 'vee-validate'
import { is, required } from 'vee-validate/dist/rules'
import TextInputWithValidate from '~/components/TextInputWithValidate.vue'
import Confirm from '~/components/Confirm.vue' 
import * as commonTypes from '~/types/common'

extend('required', {
    ...required,
    message: '空欄です'
})

export default Vue.extend({
    name: 'create',

    components: {
        ValidationObserver,
        TextInputWithValidate,
        Confirm
    },

    data () {
        return {
            currentStep: 1,
            isLoading: false,
            recipe: {
                name: '',
                summary: '',
                ingredients: [{title:'',item:['']}],
                instructions: [{value:''}],
                timeInfo: ['','','','']
            }
        }
    },

    methods: {
        goForward (){
            this.currentStep +=1
        },
        goBack() {
            this.currentStep -=1
        },
        async clickForwardButton () {
            console.log(this.recipe)
            if (this.isLoading) {
                return
            }
                this.isLoading = true
    
                switch (this.currentStep) {
                    case 1:
                        this.goForward()
                        break
                    case 2:
                        this.goForward()
                        break
                    case 3:
                        this.goForward()
                        break
                    case 4:
                        this.goForward()
                        break
                    case 5:
                        const obse:any = this.$refs.observer
                        const isValid = await obse.validate()
                        if(isValid){
                            this.confirm()
                        }
                        break
                }
                this.isLoading = false
        },

        clickBackButton () {
            this.goBack()
        },

        confirm(){
            return null
        }
    }
})
</script>