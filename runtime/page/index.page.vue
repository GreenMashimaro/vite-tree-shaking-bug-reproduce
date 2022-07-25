<template>
  <div>page</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getName } from '@greenmashimaro/utils'

export default defineComponent({
  setup() {
    return {
      name: getName()
    }
  }
})
</script>