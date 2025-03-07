<template>
  <div class="ui-child">
    子
    <slot name="header"></slot>
    <slot>默认内容：（当父组件不传递内容时显示）</slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.ui-child {
  height: 80px;
  padding: 10px;
  background-color: antiquewhite;
  box-shadow: 0 0 10px sandybrown;
}
</style>