<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar{
    position: fixed;
    bottom: -2px;
    right: 0;
    left: 0;

    display: flex;
    text-align: center;

    height: 49px;
    background-color: #f6f6f6;
  }
</style>