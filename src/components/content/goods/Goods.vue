<template>
  <div class="goods">
    <goods-item v-for="item in list" :item="item" :key="item.id"/>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
  export default {
    name: "Goods",
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

</style>