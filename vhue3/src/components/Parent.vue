<template>
  <div class="ui-parent">
    父
    <children>
      <template #header>
        <p>header</p>
      </template>
      你好 我是来自父组件的内容
      <template #footer>
        <p>footer</p>
      </template>
    </children>
  </div>
</template>

<script setup lang="ts">
import children from './children.vue';

</script>

<style scoped>
.ui-parent{
  height: 160px;
  padding: 10px;
  /* border: 1px solid #ccc; */
  box-shadow: 0px 0px 10px slategray;
}
</style>