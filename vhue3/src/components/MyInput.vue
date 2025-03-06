<template>
  <div>
    <input 
    :value="props.modelValue"
    @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>