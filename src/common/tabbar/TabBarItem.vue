<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon_active"></slot></div>
    <div :class="{active: isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        // home   home
        // home   category
        // home   cart
        // 比较字符串匹配
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path !== this.path) {
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
  }

  .tab-bar-item img{
    width: 24px;
    margin-top: 3px;
  }

  .active{
    color: #ff8198;
  }
</style>