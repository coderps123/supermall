<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    text-align: center;

    position: fixed;
    top: 0;
    z-index: 9;

    height: 44px;
    line-height: 44px;
    width: 100%;
    background-color: #ff8198;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }

  .left, .right{
    display: flex;
    align-items: center;

    width: 16%;
  }

  .left img{
    margin-left: 15px;
  }

  .center{
    flex: 1;
  }
</style>