<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length != 0">
    <div>
      <div class="top">
        <div class="l-t"></div>
        <div class="hr"></div>
      </div>
      <div class="center">
        {{detailInfo.desc}}
      </div>
      <div class="btm">
        <div class="hr"></div>
        <div class="r-b"></div>
      </div>
    </div>

    <div v-for="item in detailInfo.detailImage" :key="item.id" class="images">
      {{item.key}}
      <img v-for="i in item.list" :key="i.id" :src="i" alt="" @load="imageLoad">
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .detail-info{
    margin: 20px 5px;
  }

  .l-t, .r-b{
    width: 5px;
    height: 5px;
    background-color: #000;
  }

  .hr{
    width: 35%;
    height: 1px;
    background-color: #000000;
  }

  .top{
    display: flex;
    align-items: center;
  }

  .btm{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
  }

  .center{
    margin: 10px 5px;
  }

  .images img{
    width: 100%;
  }
</style>