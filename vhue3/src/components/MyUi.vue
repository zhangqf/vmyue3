<template>
  <div>
    <input v-model="m">{{ m }}
  </div>
</template>

<script setup lang="ts">
const m = defineModel()
</script>

<style lang="scss" scoped>

</style>