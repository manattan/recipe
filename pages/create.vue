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
                            動画のアップロード
                        </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1" ref="summary">
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
                                <text-input-with-validate v-model="instruction.k" label="調理法" rules="required"/>
                            </div>                            
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <text-input-with-validate v-model="recipe.timeInfo[0]" label="何人前ですか?" rules="required"/>
                            <text-input-with-validate v-model="recipe.timeInfo[1]" label="準備時間(分)" rules="required"/>
                            <text-input-with-validate v-model="recipe.timeInfo[2]" label="調理時間(分)" rules="required"/>
                            <text-input-with-validate v-model="recipe.timeInfo[3]" label="総時間" rules="required"/>
                            </v-stepper-content>
                        <v-stepper-content step="5">
                            <span>写真をアップロードしてください.</span>
                            <v-file-input v-model="picFile" accept="image/*" label="写真をアップロードしてください" prepend-icon="mdi-picture" />
                        </v-stepper-content>
                    </v-stepper-items>
                    <stepper-controller :current-step="currentStep" class="mt-16" @clickForwardButton="clickForwardButton" @clickBackButton="clickBackButton" :disabled="inValid"/>
                </v-stepper>
            </form>
        </ValidationObserver>
        <ConfirmDialog :dialog="dialog" @toHome="toHome" @toMypage="toMypage"/>
        </main>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import 'firebase/storage'
import { extend, ValidationObserver } from 'vee-validate'
import { is, required } from 'vee-validate/dist/rules'
import TextInputWithValidate from '~/components/TextInputWithValidate.vue'
// import Confirm from '~/components/Confirm.vue'
import ConfirmDialog from '~/components/ConfirmDialog.vue'
import * as commonTypes from '~/types/common'
import { addRecipeData, getAllRecipeData } from '~/utils/firestore'
import firebase from '~/plugins/firebase'

extend('required', {
    ...required,
    message: '空欄です'
})

export default Vue.extend({
    name: 'create',

    components: {
        ValidationObserver,
        TextInputWithValidate,
        // Confirm,
        ConfirmDialog
    },

    data () {
        return {
            dialog: false,
            currentStep: 1,
            isLoading: false,
            picFile:null,
            picId: '',
            isUploaded:true,
            recipe: {
                name: '',
                summary: '',
                ingredients: [{title:'',item:['']}],
                instructions: [{value:""}],
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
                        if(confirm("この内容でアップロードしますか?")){
                            const obse:any = this.$refs.observer
                            const isValid = await obse.validate()
                            if(isValid){
                                this.save(this.picFile)
                            } else {
                                alert('空欄がありますね')
                            }
                            break
                        }
                }
                this.isLoading = false
        },

        clickBackButton () {
            this.goBack()
        },

        upload(file:any){

        },

        async save (file: any){
            if(file){
                try{
                    console.log("saveしようとしています")
                    await addRecipeData(this.$store.getters.getUser,this.recipe)
                    console.log("saveされた")
                    const res = await getAllRecipeData()
                    for (const tmp of res) {
                        if(this.recipe.name =tmp.recipe.name){
                            this.picId = tmp.Id
                        }
                    }
                } catch(e){
                    console.error("carcherror : "+e.code)
                }
                try{
                    const storage = firebase.storage()
                    const storageRef =  await storage.ref('Recipes')
                    await storageRef.child(`${this.picId}.jpg`).put(file)
                    this.dialog  = true
                }catch(e){
                    console.error("carcherror : "+e.code)
                }
            } else {
                alert('画像をアップロードしてください。。')
            }
        },

        toHome(){
            this.dialog = false
            this.$router.push('/')
        },

        toMypage() {
            this.dialog = false
            this.$router.push('/mypage')
        }
    }
})
</script>