<template>
  <div class="goods-item">
    <!--  因为数据加载有先后顺序，home的show.img记载完后没有被销毁（因为home使用了keep-alive）  -->
    <img :src="item.image || item.show.img" alt="" @load="imageLoad" @click="imageClick">

    <div class="title">{{item.title}}</div>
    <div class="bottom">
      <div class="btm-lt">{{item.price}}</div>
      <div class="btm-cr"></div>
      <div class="btm-rt">{{item.cfav}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        // 将事件发射到home
        this.$bus.$emit('imageLoad')
      },
      imageClick() {
        // this.$bus.$emit('imageClick', this.item.iid)
        if (this.$route.path.indexOf('home') > 0) {
          this.$router.push('/detail'+this.item.iid)
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 48%;
  }

  .goods-item>img{
    width: 100%;
    border-radius: 5px;
  }

  .title{
    width: 94%;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bottom{
    display: flex;
    justify-content: center;
    font-size: 14px;
  }

  .btm-lt{
    margin-right: 5px;
    color: hotpink;
  }

  .btm-cr{
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>