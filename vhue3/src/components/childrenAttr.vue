<template>
  <div>
    <slot :text="greetingsMessage"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const greetingsMessage = ref('作用于插槽')
</script>

<style scoped>

</style>