<template>
  <nav-bar class="nav-bar">
    <template v-slot:left class="left">
      <img src="~assets/img/common/back.svg" alt="" @click="backHome">
    </template>
    <template v-slot:center>
      <div class="center">
        <div v-for="(item, index) in title"
             :key="item.id" class="item"
             :class="{isActive: index === currentIndex}" @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    data() {
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      // 返回首页  此处监听 img ，事件向上传递给父级div
      backHome() {
        // this.$router.back()
        this.$router.go(-1)
      },
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: #fff;
  }

  .center{
    color: #000;
    display: flex;
  }

  .item{
    flex: 1;
  }

  .isActive{
    color: #ff8198;
  }
</style>