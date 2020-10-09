<template>
  <v-card>
    <v-footer
      fixed
      padless
      elevation="1"
      color="white"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <classic-button
          v-if="currentStep !== 1"
          text="戻る"
          outlined
          text-color="primary"
          class="mr-12"
          @click="clickBackButton"
        />
        <classic-button text="次へ" class="ml-12" @click="clickForwardButton" />
      </v-col>
    </v-footer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import ClassicButton from '~/components/molecutes/ClassicButton.vue'
export default Vue.extend({
  name: 'StepperController',

  components: {
    ClassicButton
  },

  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },

  methods: {
    clickForwardButton () {
      this.$emit('clickForwardButton')
    },

    clickBackButton () {
      this.$emit('clickBackButton')
    }
  }
})
</script>