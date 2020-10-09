<template>
  <v-btn
    :color="color"
    :class="computedTextColor"
    rounded
    x-large
    v-bind="$attrs"
    @click="buttonClicked"
  >
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    textColor: {
      type: String,
      required: false,
      default: 'white'
    }
  },

  computed: {
    computedTextColor (): string {
      return this.textColor + '--text'
    }
  },
  methods: {
    buttonClicked (): void {
      this.$emit('click')
    }
  }
})
</script>